import AuthPage from '../modules/auth/pages/AuthPage';
import Header from '../modules/shared/Header';

const AuthSpotify = () => {
    return <>
        <Header />
        <div className="container h-100 d-flex justify-content-center align-items-center">
            <div className='row'>
                <AuthPage />
            </div>
        </div>
    </>


}

export default AuthSpotify;