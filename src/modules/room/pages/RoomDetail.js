import { useParams } from "react-router-dom";
import SearchPage from "../../search/pages/SearchPage";
import { useEffect, useState } from "react";
import Header from "../../shared/Header";
import {PlaylistService} from '../../playlist/services/PlaylistService';

const RoomDetail = () => {

    const {uid, playlistId} = useParams();
    const [playlistData, setPlaylistData] = useState({name: '', tracks: []})


    useEffect(() => {
        fetchPlaylist();
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [playlistId]);

    const fetchPlaylist = async() => {
        const data = await PlaylistService.fetchPlaylist(playlistId);
        console.log(data);
        setPlaylistData(data);
    }

    return <>
        <Header/>

        <div className="container h-100 d-flex flex-column justify-content-center py-5 mt-3">
            <h4 className="text-center">Welcome to {playlistData.name} room</h4>
            <p className="text-center ">Search and play your favorite music here: </p>
            
            <div className="row justify-content-center mh-100 overflow-hidden">
                <div className="col-12 col-lg-6 mh-100 overflow-auto">
                    <section className="current-playlist-wrapper d-block">
                        <h6>Playlist {playlistId} content</h6>
                        { 
                            <div className="d-block">
                                {playlistData.tracks.map(({track}) => <span className="badge rounded-pill bg-secondary p-3 text-center d-block my-3" >{track.name}</span>) }
                            </div>
                            
                        }
                    </section>
                </div>
                <div className="search-container col-12 col-lg-6 mh-100 overflow-auto">
                    <SearchPage/>
                </div>
            </div>
        </div>
    </>
}

export default RoomDetail;