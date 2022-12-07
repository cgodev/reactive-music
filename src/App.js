import { config } from "./config";
import Routing from "./routes/Routes";
import './Styles.css'

const App = () => {
    console.log(config());
    return (
        <main className="app-wrapper bg-dark">
            <Routing></Routing>
        </main>
    );
}

export default App;