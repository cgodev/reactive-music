import { config } from "./config";
import Routing from "./routes/Routes";
import './Styles.css'

const App = () => {
    return (
        <main className="app-wrapper bg-dark">
            <Routing></Routing>
        </main>
    );
}

export default App;