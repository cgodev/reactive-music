import { useParams } from "react-router-dom";
import SearchPage from "../../search/pages/SearchPage";
import { useEffect, useState } from "react";
import Header from "../../shared/Header";
import {PlaylistService} from '../../playlist/services/PlaylistService';
import { RoomService } from "../services/RoomService";
import { RoomDetailContext } from "../context/RoomDetailContext";

const RoomDetail = () => {
    const {roomId} = useParams();

    const [roomData, setRoomData] = useState({
        name: null,
        roomId: null,
        userId: null,
        id_playlist: null,
        genres_seed: [],
        tracks: []
    });

    useEffect(() => {
        fetchRoom();
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [roomId]);

    const fetchRoom = async () => {
        const { room } = await RoomService.fetchRoom(roomId);
        // console.log("Room data", room);
        fetchPlaylist(room);
    }

    const fetchPlaylist = async (room) => {
        const data = await PlaylistService.fetchPlaylist(room);
        // console.log("Playlist data", data);
        setRoomData({
            name: room.name,
            roomId: room._id,
            userId: room.uid,
            id_playlist: room.id_playlist,
            genres_seed: room.genres_seed,
            tracks: data.tracks
        });
    }

    return <>
        <Header/>
        <RoomDetailContext.Provider value={{ roomData, fetchPlaylist }}>
            <div className="container h-100 d-flex flex-column justify-content-center py-5 mt-3">
                <div className="row">
                    <div className="col">
                        <h4 className="text-center">Welcome to {roomData.name} room</h4>
                        <div className="text-center mb-5">
                            <h5 className="mb-3">Allowed genres in this room</h5>
                            <div className="d-flex justify-content-center align-items-center flex-wrap" style={{ "gap": "10px" }}>
                                {
                                    roomData.genres_seed.map((genre, index) => 
                                        <span className="badge bg-primary" key={index}>{ genre }</span>
                                    )
                                }
                            </div>
                        </div>
                    </div>
                </div>
                <div className="row justify-content-center mh-100 overflow-hidden">
                    <div className="col-6 mh-100 overflow-auto playlist-content">
                        <section className="current-playlist-wrapper d-block">
                            {/* <h6>Playlist {roomData.id_playlist} content</h6> */}
                            { 
                                <div className="d-block">
                                    {
                                        roomData.tracks.map(({track}, index) => 
                                            <span
                                                className="badge rounded-pill bg-secondary p-3 text-center d-block my-3"
                                                key={`${track.id}-${index}`}
                                            >
                                                {track.name}
                                            </span> 
                                        )
                                    }
                                </div>
                                
                            }
                        </section>
                    </div>
                    <div className="search-container col-6 mh-100 overflow-auto">
                        <SearchPage/>
                    </div>
                </div>
            </div>
        </RoomDetailContext.Provider>
    </>
}

export default RoomDetail;