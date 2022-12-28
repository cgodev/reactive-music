// React
import { useEffect} from 'react';
import { useNavigate } from "react-router-dom";

const RedirectPage = () => {
    const navigate = useNavigate();

    useEffect(() => {
        navigate("/room-creation");
    }, []);

    return (
        <div className="container p-4">
            <h2> Redirecting...</h2>
        </div>
    );
}

export default RedirectPage;