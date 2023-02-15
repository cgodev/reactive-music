import React, { useEffect, useState } from "react";
import GenresSearch from "../../genres/components/GenresSearch";
import {useForm} from 'react-hook-form';
import moment from 'moment';
import Modal from "../../modal/Modal";
import RoomSummary from "./RoomSummary";

import { PlaylistService } from "../../playlist/services/PlaylistService";
import { UserService } from "../../user/services/userService";

import '../Room.css';

const RoomForm = () => {
    const [modalOpen, setModalOpen] = useState(false);
    const {register, handleSubmit, formState: {errors}} = useForm();
    const [genresSelection, setGenresSelection] = useState([]);
    const [qrGenerated, setQrGenerated] = useState(false);
    const [roomData, setRoomData] = useState({ error: null, body: {}, msg: "" });
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
    }

    const onSubmit = async (data) => {
        const timeStamp = moment().format('LL');
        const newRoom = {
            userId: userData.id,
            name: `${data.roomName} - ${timeStamp}`,
            genres: genresSelection
        }

        const playListResponse = await PlaylistService.createPlaylist(newRoom);
        setRoomData({
            error: Array.isArray(playListResponse.body),
            ...playListResponse    
        });
        setQrGenerated(playListResponse.body ? true : false);
        handleModal();
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
            {
                !roomData.error
                ? <RoomSummary
                    roomData={roomData}
                    genresSelection={genresSelection}
                />
                : <h2>
                    {roomData.msg}
                </h2>
            }
        </Modal>
    </section>
}

export default RoomForm;