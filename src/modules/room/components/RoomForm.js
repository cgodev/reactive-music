import GenresSearch from "../../genres/components/GenresSearch";
import {useForm} from 'react-hook-form';
import Swal from 'sweetalert2';
import moment from 'moment';
import { v4 as uuidv4 } from 'uuid';
import QRCode from "react-qr-code";

import '../Room.css';
import { useEffect, useState } from "react";

import { PlaylistService } from "../../playlist/services/PlaylistService";
import { UserService } from "../../user/services/userService";

import { Link } from "react-router-dom";
const RoomForm = () => {

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

    const fetchUserData = async() => {
        const userData = await UserService.getUserInfo();
        setUserData(userData);
        console.log(`User data ${userData}`);
    }

    const onSubmit = async (data) => {
        Swal.fire(
            'This is your room.',
            `Name: ${data.roomName} / Genres: ${genresSelection}`
        )
        const timeStamp = moment().format('LL');
        const uid = uuidv4();

        const newRoom = {
            name: `${data.roomName} - ${timeStamp} - ${uid}`
        }

        const playListResponse = await PlaylistService.createPlaylist(userData.id, newRoom);
        setRoomData(playListResponse);
        setQrGenerated(true);
        console.log(`Playlist creation: ${JSON.stringify(playListResponse)}`);
    }

    const getGenresSelection = (genresPayload) => {
        setGenresSelection(genresPayload);
        //console.log(`Updated ${genresSelection}`);
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
            <div className="qr-code d-block text-center">
                {qrGenerated && <QRCode className="mb-3" value={`https://localhost:3000/room/${userData.id}/${roomData.id}`} />}
                {qrGenerated && <Link to={`/room/${userData.id}/${roomData.id}`} className="d-block">Go to your room!!</Link>}
            </div>
        </div>
    </section>
}

export default RoomForm;