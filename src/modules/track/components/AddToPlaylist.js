import { useRef, useContext } from "react";
import { PlaylistService } from "../../playlist/services/PlaylistService";
import { RoomDetailContext } from "../../room/context/RoomDetailContext";

const AddToPlaylist = ({ trackUri }) => {
    const { roomData, fetchPlaylist } = useContext(RoomDetailContext);
    const button = useRef(null);

    const handleClick = () => {
        fetchData();
    }

    const fetchData = async () => {
        const data = await PlaylistService.addToPlaylist(trackUri, roomData);
        handleButtonText(data); 
        console.log(data);
    }

    const handleButtonText = ({ snapshot_id }) => {
        const btn = button.current;
        if(snapshot_id){
            btn.textContent = "Added";
            fetchPlaylist(roomData);
        }
        setTimeout(() => { 
            btn.textContent = "Add song";
        }, 1000);
    }

    return (
        <div className="w-100 d-flex justify-content-end align-items-center">
            <button className="btn btn-dark btn-outline-light" onClick={handleClick} ref={button}>
                {button ? "Add song" : button.current.textContent}
            </button>
        </div>
    );
}

export default AddToPlaylist;