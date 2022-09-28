import { useParams } from "react-router-dom";
import SearchPage from "../../search/pages/SearchPage";

const RoomDetail = () => {

    const {uid, playlistId} = useParams();
    return <>
        Room Work!! {uid}/{playlistId}
        <SearchPage/>
    </>
}

export default RoomDetail;