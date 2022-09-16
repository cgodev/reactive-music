import {createRoot} from 'react-dom/client';
// import App from './components/App';
import App from "./routes/Routes";


const container = document.querySelector('#root');
const root = createRoot(container);
root.render(<App/>);