import { Link, useNavigate } from "react-router-dom";
import Swal from "sweetalert2";

const Home = () => {

    const navigate = useNavigate();

    const openRoom = async () => {
        const { value: roomId } = await Swal.fire({
            title: 'Enter room ID',
            input: 'text',
            inputLabel: 'Room ID',
            showCancelButton: true,
            inputValidator: (value) => {
                if (!value) {
                    return 'You need to write something here!'
                }
            }
        })
        navigate(`/room/${roomId}`)
    }


    return (
        <main className="app-wrapper bg-dark">
            <div className="container h-100 d-flex justify-content-center align-items-center">
                <div className="d-block text-center">
                    <Link to="/login" className="btn btn-dark btn-outline-light d-block my-2">I want to host a party.</Link>
                    <button type="button" onClick={openRoom} className="btn btn-dark btn-outline-light d-block w-100 my-2">I want to play music.</button>
                </div>
            </div>
        </main>
    )
}

export default Home;