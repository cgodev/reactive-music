import GenresSearch from "../../genres/components/GenresSearch";
import {useForm} from 'react-hook-form';
import Swal from 'sweetalert2';
import moment from 'moment';
import { v4 as uuidv4 } from 'uuid';
import QRCode from "react-qr-code";
import Modal from "../../modal/Modal";

import '../Room.css';
import React, { useEffect, useState, useRef } from "react";

import { PlaylistService } from "../../playlist/services/PlaylistService";
import { UserService } from "../../user/services/userService";

import { Link } from "react-router-dom";
import { generateRoomUrl } from "../../helpers/ManageRoomUrl";
import Clipboard from "../../clipboard/components/Clipboard";

const RoomForm = () => {
    const [modalOpen, setModalOpen] = useState(false);
    const {register, handleSubmit, formState: {errors}} = useForm();
    const [genresSelection, setGenresSelection] = useState([]);
    const [qrGenerated, setQrGenerated] = useState(false);
    const [roomData, setRoomData] = useState({});
    const [userData, setUserData] = useState({});

    useEffect(() => {
        fetchUserData();
    }, [])

    useEffect(() => {
        localStorage.setItem('playlistId', roomData.id);
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [roomData])

    const handleModal = () => {
        setModalOpen(!modalOpen);
    }

    const fetchUserData = async() => {
        const userData = await UserService.getUserInfo();
        setUserData(userData);
        console.log(`User data ${userData}`);
    }

    const onSubmit = async (data) => {
        // Swal.fire(
        //     'This is your room.',
        //     `Name: ${data.roomName} / Genres: ${genresSelection}`
        // )
        const timeStamp = moment().format('LL');
        // const uid = uuidv4();

        const newRoom = {
            userId: userData.id,
            name: `${data.roomName} - ${timeStamp}`,
            genres: genresSelection
        }

        const playListResponse = await PlaylistService.createPlaylist(newRoom);
        setRoomData(playListResponse);
        setQrGenerated(playListResponse.body ? true : false);
        handleModal();
        console.log("Playlist creation:");
        console.log(playListResponse.body);
    }

    const getGenresSelection = (genresPayload) => {
        setGenresSelection(genresPayload);
    }

    return <section className="">
        <div className="container" >
            <h1 className="text-center mb-5">Create a room for your selectors.</h1>
            <form className="form mb-3" onSubmit={handleSubmit(onSubmit)}>
                <div className="mb-3">
                    <label htmlFor="roomName" className="form-label">Name of your room</label>
                    <input type="text" className="form-control" id="roomName" placeholder="My party" {...register("roomName", {required: true})} />
                </div>
                <GenresSearch selectionCallback={getGenresSelection}/>
                <div className="mb-3">
                    {errors.roomName && <span className="forms-messages-required">Room name is required.</span>}
                </div>
                <button type="submit" className="btn btn-dark btn-outline-light">Create Room</button>
            </form>
        </div>
        <Modal handleClose={handleModal} isOpen={modalOpen}>
            <div className="qr-code d-block text-center">
                <h2 className="display-6 mb-4">
                    { roomData.body ? "Your new room" : roomData.message }
                </h2>
                {
                    qrGenerated && 
                    <>
                        <div>
                            <p className="mb-1">{roomData.body.name}</p>
                            <p>Genres: {genresSelection.join(", ").trim()}</p>
                            <QRCode className="mb-3" value={`https://localhost:3000/room/${roomData.body._id}`}/>
                            <div className="d-flex justify-content-center align-items-center">
                                <p className="m-0 me-2">RoomId:</p>
                                <Clipboard valueToCopy={roomData.body._id}/>
                            </div>
                            <Link to={generateRoomUrl(roomData.body._id)} className="d-inline-block" >
                                Go to your room!!
                            </Link>
                        </div>
                    </>
                    
                }
            </div>
        </Modal>
    </section>
}

export default RoomForm;