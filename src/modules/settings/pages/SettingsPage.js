// React
import { useState } from "react";

// Components
import Modal from "../../modal/Modal";

const SettingsPage = ({ className }) => {
    const [modalOpen, setModalOpen] = useState(false);

    const handleSubmit = (e) => {
        e.preventDefault();
    }

    const handleModal = () => {
        setModalOpen(!modalOpen);
    }

    return (
        <>
            <button type="button" onClick={handleModal} className={className}>Settings</button>
            <Modal isOpen={modalOpen} handleClose={handleModal}>
                <h1 className="text-center display-6 mb-4">Settings</h1>
                <form onSubmit={handleSubmit} className="d-flex flex-column align-items-center justify-content-center">
                    <div className="mb-4 w-75">
                        <label htmlFor="clientKey" className="form-label text-secondary">Client key</label>
                        <input
                            type="text"
                            className="form-control"
                            id="clientKey"
                        />
                    </div>
                    <div className="mb-4 w-75">
                        <label htmlFor="clientSecretKey" className="form-label text-secondary">Client secret key</label>
                        <input
                            type="password"
                            className="form-control"
                            id="clientSecretKey"
                        />
                    </div>
                    <div className="mb-4 w-75">
                        <label htmlFor="redirectUrl" className="form-label text-secondary">Redirect url</label>
                        <input 
                            type="text"
                            readonly
                            aria-describedby="redirectUrlHelp"
                            defaultValue="http://localhost:8000/api/auth/callback"
                            className="form-control text-secondary" 
                            id="redirectUrl"
                        />
                        <div id="redirectUrlHelp" className="form-text">
                            Provide this url into spotify dashboard <i>Redirect URIs</i> field.
                        </div>
                    </div>
                    <div className='w-75 d-flex justify-content-center mb-4'>
                        <button type="submit" className="btn btn-dark w-100">Save</button>
                    </div>
                </form>
            </Modal>
        </>
    );
}

export default SettingsPage;