import {createRoot} from 'react-dom/client';
// import App from './components/App';
import App from "./App";

// Bootstrap CSS
import "bootstrap/dist/css/bootstrap.min.css";
// Bootstrap Bundle JS
import "bootstrap/dist/js/bootstrap.bundle.min";
// Bootstrap icons
import "bootstrap-icons/font/bootstrap-icons.css";

const container = document.querySelector('#root');
const root = createRoot(container);
root.render(<App/>);