// React
import ReactDOM from 'react-dom';
import { useEffect } from 'react';

// Styles
import './styles/Modal.css';

const Modal = ({handleModal, status}) => {
    const handleKey = (e) => {
        if(e.keyCode === 27 || e.code === "Escape"){
            handleModal();
        }
    };

    useEffect(() => {
        if(status){
            document.addEventListener("keyup", handleKey);
        } 

        return () => { 
            document.removeEventListener("keyup", handleKey); 
        }
    }, [status]);
    
    if(!status){
        return null;
    }

    return ReactDOM.createPortal(
        <div className="my-modal d-flex justify-content-center align-items-start p-5">
            <div 
                className="position-absolute top-0 end-0 mx-3 close text-white fs-1 pointer" 
                onClick={handleModal}
            >X</div>
            <div className="card mb-3" style={{ "maxWidth": "540px" }}>
                <div className="row g-0">
                    <div className="col-md-4">
                        <img src="#" className="img-fluid rounded-start" alt="#"/>
                    </div>
                    <div className="col-md-8">
                        <div className="card-body">
                            <h5 className="card-title">Card title</h5>
                            <p className="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                            <p className="card-text"><small className="text-muted">Last updated 3 mins ago</small></p>
                        </div>
                    </div>
                </div>
            </div>
        </div>,
        document.querySelector("#modal")
    )
}

export default Modal;