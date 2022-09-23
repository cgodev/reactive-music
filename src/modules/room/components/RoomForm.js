import GenresSearch from "../../genres/components/GenresSearch";
import {useForm} from 'react-hook-form';
import Swal from 'sweetalert2';
import moment from 'moment';
import { v4 as uuidv4 } from 'uuid';

import '../Room.css';
import { useState } from "react";

import { PlaylistService } from "../../playlist/services/PlaylistService";
import { UserService } from "../../user/services/userService";
const RoomForm = () => {

    const {register, handleSubmit, formState: {errors}} = useForm();
    const [genresSelection, setGenresSelection] = useState([]);

    const onSubmit = async (data) => {
        const userData = await UserService.getUserInfo();
        console.log(`User data ${userData}`);
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
        console.log(`Playlist creation: ${playListResponse}`);
    }

    const getGenresSelection = (genresPayload) => {
        setGenresSelection(genresPayload);
        //console.log(`Updated ${genresSelection}`);
    }

    return <section className="">
        <div className="container" >
            <h1>Create a room for your selectors.</h1>
            <form className="form" onSubmit={handleSubmit(onSubmit)}>
                <div className="mb-3">
                    <label htmlFor="roomName" className="form-label">Name of your room</label>
                    <input type="text" className="form-control" id="roomName" placeholder="My party" {...register("roomName", {required: true})} />
                </div>
                <GenresSearch selectionCallback={getGenresSelection}/>
                <div className="mb-3">
                    {errors.roomName && <span className="forms-messages-required">Room name is required.</span>}
                </div>
                <button type="submit" className="btn btn-primary">Create Room</button>
            </form>
        </div>
    </section>
}

export default RoomForm;