import { useEffect } from "react";
import Portal from "./Portal";
import "./Modal.css";

const Modal = ({ children, isOpen, handleClose }) => {
    const handleKey = (e) => {
        if(e.keyCode === 27 || e.code === "Escape"){
            handleClose();
        }
    };

    useEffect(() => {
        if(isOpen){
            document.addEventListener("keyup", handleKey);
        } 

        return () => {
            document.removeEventListener("keyup", handleKey); 
        }
    }, [isOpen]);
    
    if(!isOpen){
        return null;
    }

    return (
        <Portal>
            <div className="p-5 d-flex justify-content-center align-items-center my-modal">
                <div className="row w-50 position-relative">
                    <div className="col rounded bg-white p-4">
                        <button type="button" className="btn-close position-absolute top-0 end-0 m-2" aria-label="Close" onClick={handleClose}></button>
                        <div className="mt-4 text-black">
                            { children }
                        </div>
                    </div>
                </div>
            </div>
        </Portal>
    )
}

export default Modal;