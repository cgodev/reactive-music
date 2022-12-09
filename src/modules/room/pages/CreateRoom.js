import RoomForm from "../components/RoomForm";
import Header from "../../shared/Header";

const CreateRoom = () => {
    return (
        <>
            <Header/>
            <div className="container h-100">
                <div className="row h-100 justify-content-center">
                    <div className="col-12 col-lg-10">
                        <RoomForm/>
                    </div>
                </div>
            </div>
        </>
    )
}

export default CreateRoom;