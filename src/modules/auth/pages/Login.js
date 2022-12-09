import './Login.css';
import ReactiveLogo from '../../../assets/images/reactive-music.gif';
import { useForm } from 'react-hook-form';
import { Link, useNavigate } from 'react-router-dom';
import { AuthService } from '../services/AuthService';
import Swal from 'sweetalert2';
import { useEffect } from 'react';


const Login = () => {

    const { register, handleSubmit, formState: { errors }, setValue } = useForm();
    const navigate = useNavigate();

    useEffect(() => {
        if(localStorage.getItem('rememberUser')){
            setValue('email', localStorage.getItem('rememberUser'), {shouldValidate: true});
        }
    }, [])

    const onSubmit = async (data) => {
        const response = await AuthService.login(data);

        if(response.ok){
            console.log(response);
            localStorage.setItem('token', response.token);
            //Remember user email
            data.remember?
                localStorage.setItem('rememberUser', data.email):
                localStorage.removeItem('rememberUser');
                
            navigate("/profile");
        }else{
            console.log(response);
            Swal.fire(
                'Ops!!, something went wrong!',
                `Error: ${response.msg}`,
                'error'
            )
        }     
    }

    return (
        <div className="login-wrapper">
            <div className='container'>
                <div className='row justify-content-center'>
                    <div className='col-12 col-lg-5'>
                        <form onSubmit={handleSubmit(onSubmit)} className='login-form'>
                            <div className='brand text-center'>
                                <img src={ReactiveLogo} alt='reactive-music' className='img-fluid' />
                            </div>
                            <div className="form-group">
                                <label htmlFor="email" className='text-black'>Email address</label>
                                <input {...register('email', { required: true })} type="email" className="form-control" id="email" aria-describedby="emailHelp" placeholder="Enter email" />
                                {errors.email && <span className='mt-1 d-block text-danger'>Email is required</span>}
                            </div>
                            <div className="form-group mt-3">
                                <label htmlFor="password" className='text-black'>Password</label>
                                <input {...register('password', { required: true })} type="password" className="form-control" id="password" placeholder="Password" />
                                <small id="passwordHelp" className="form-text text-muted">You'll never share your password with anyone else.</small>
                                {errors.password && <span className='mt-1 d-block text-danger'>Password is required</span>}
                            </div>
                            <div className="form-check my-3">
                                <input {...register('remember')} type="checkbox" className="form-check-input" id="rememberCheck" />
                                <label className="form-check-label text-black" htmlFor="rememberCheck">Remember me</label>
                            </div>

                            <div className='w-100 d-flex flex-column align-items-center'>
                                <button type="submit" className="btn btn-dark">Sign In</button>
                                <p className='mt-3 text-dark'>Don't have an account yet? <Link to={'/register'}>Sign Up</Link></p>
                            </div>

                        </form>

                    </div>
                </div>

            </div>
        </div>
    )
}

export default Login;