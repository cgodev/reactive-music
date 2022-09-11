// React
import { useState } from 'react';

// Components
import Modal from './Modal';

// Styles
import "./styles/App.css"

//TODO: Playlist y buscador de canciones.
const App = () => {
    const [state, setState] = useState({
        loading: false,
        modalOpen: false,
        search: {}
    });

    const handleSubmit = (e) => {
        e.preventDefault();

        if(Object.keys(state.search).length === 0){
            alert("Debes buscar una canción");  
        } else {
            handleModal();
        }
    }

    const handleModal = () => {
        setState({
            ...state,
            modalOpen: !state.modalOpen
        });
    }

    const handleInput = (e) => {
        setState({
            ...state,
            search: {
                [e.target.name]: e.target.value
            }
        });
    }

    const handleClick = (e) => {
        e.target.blur();
    }
    
    return <>
        <div className="container p-5 vh-100">
            <div className="row">
                <div className="col">
                    <h1 className="text-primary">Reactive Music</h1>
                </div>
            </div>
            <div className="row mt-5">
                <div className="col">
                    <form 
                        className="w-100 d-flex flex-column justify-content-center align-items-center"
                        onSubmit={handleSubmit}>
                        <input
                            type="text"
                            name="track"
                            required
                            className="form-control w-50 mb-4"
                            id="inputTrack"
                            placeholder="¿Qué canción quieres escuchar?"
                            onChange={handleInput}
                        />
                        <button 
                            type="submit"
                            className="btn btn-primary fw-light"
                            onClick={handleClick}
                        >
                            Buscar
                        </button>
                    </form>
                </div>
            </div>
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320" className="position-absolute start-0 end-0 bottom-0">
                <path 
                    fill="#0099ff" 
                    fillOpacity="1" 
                    d="M0,288L0,66L55.4,64L55.4,0L110.8,0L110.8,96L166.2,96L166.2,320L221.5,320L221.5,160L276.9,160L276.9,288L332.3,288L332.3,224L387.7,224L387.7,224L443.1,224L443.1,192L498.5,192L498.5,288L553.8,288L553.8,160L609.2,160L609.2,64L664.6,64L664.6,160L720,160L720,32L775.4,32L775.4,320L830.8,320L830.8,192L886.2,192L886.2,224L941.5,224L941.5,224L996.9,224L996.9,64L1052.3,64L1052.3,128L1107.7,128L1107.7,160L1163.1,160L1163.1,32L1218.5,32L1218.5,128L1273.8,128L1273.8,256L1329.2,256L1329.2,32L1384.6,32L1384.6,96L1440,96L1440,320L1384.6,320L1384.6,320L1329.2,320L1329.2,320L1273.8,320L1273.8,320L1218.5,320L1218.5,320L1163.1,320L1163.1,320L1107.7,320L1107.7,320L1052.3,320L1052.3,320L996.9,320L996.9,320L941.5,320L941.5,320L886.2,320L886.2,320L830.8,320L830.8,320L775.4,320L775.4,320L720,320L720,320L664.6,320L664.6,320L609.2,320L609.2,320L553.8,320L553.8,320L498.5,320L498.5,320L443.1,320L443.1,320L387.7,320L387.7,320L332.3,320L332.3,320L276.9,320L276.9,320L221.5,320L221.5,320L166.2,320L166.2,320L110.8,320L110.8,320L55.4,320L55.4,320L0,320L0,320Z">
                </path>
            </svg>
        </div>
        <Modal handleModal={handleModal} status={state.modalOpen}/>
    </>
}

export default App;