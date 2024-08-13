import { useNavigate, useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { RoomService } from "../services/RoomService";
import { RoomDetailContext } from "../context/RoomDetailContext";
import React from "react";

const RoomList = () => {
    const {roomId} = useParams();
    const navigate = useNavigate();

    const [roomData, setRoomData] = useState({
        name: null,
        roomId: null,
        userId: null,
        id_playlist: null,
        genres_seed: [],
        tracks: []
    });

    useEffect(() => {
    }, [roomId]);

    

    

    return <>
        Hello there!!
    </>
}

export default RoomList;