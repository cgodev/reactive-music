import { useParams } from "react-router-dom";

const RoomDetail = () => {

    const {uid, playlistId} = useParams();
    return <>Room Work!! {uid}/{playlistId}</>
}

export default RoomDetail;