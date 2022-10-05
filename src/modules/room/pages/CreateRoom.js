import RoomForm from "../components/RoomForm";
import Header from "../../shared/Header";

const CreateRoom = () => {
    return (
        <>
            <Header/>
            <div className="container h-100 d-flex justify-content-center align-items-center">
                <div className="row justify-content-center">
                    <div className="col-12 col-lg-10">
                        <RoomForm/>
                    </div>
                </div>
            </div>
        </>
    )
}

export default CreateRoom;