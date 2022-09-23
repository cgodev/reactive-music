import { PlaylistService } from "../../playlist/services/PlaylistService";

const addToPlaylist = ({ trackUri }) => {
    const handleClick = () => {
        fetchData();
    }

    const fetchData = async () => {
        const token = localStorage.getItem("token");
        const data = await PlaylistService.addToPlaylist(token, trackUri);
        console.log(data);
    } 

    return (
        <div className="w-100 d-flex justify-content-end align-items-center">
            <button className="btn btn-primary" onClick={handleClick}>Agregar a la playlist</button>
        </div>
    );
}

export default addToPlaylist;