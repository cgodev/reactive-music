import './Login.css';
import ReactiveLogo from '../../../assets/images/reactive-music.gif';
import { useForm } from 'react-hook-form';
import { Link, useNavigate } from 'react-router-dom';
import { AuthService } from '../services/AuthService';
import { UserService } from '../../user/services/userService';
import { useState } from 'react';
import Swal from 'sweetalert2';



const Register = () => {

    const { register, handleSubmit, formState: { errors } } = useForm();
    const [passwordCheck, setPasswordCheck] = useState(true);
    const navigate = useNavigate();

    const onSubmit = async (data) => {
        console.log(data);
        if (data.password !== data.passwordConfirm) {
            setPasswordCheck(false);
            return;
        }
        const response = await UserService.createUser(data);

        if (response.ok) {
            //Redirect to be dashboard/account-setup
            Swal.fire(
                'Registration successful!',
                `Now, let's go to sign in!`,
                'success'
            ).then(() => {
                navigate("/login");
            })
            
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
                                <label htmlFor="name" className='text-black'>Username</label>
                                <input {...register('name', { required: true })} type="text" className="form-control" id="name" placeholder="Enter your username" />
                                {errors.name && <span className='mt-1 d-block text-danger'>Name is required</span>}
                            </div>
                            <div className="form-group mt-3">
                                <label htmlFor="email" className='text-black'>Email address</label>
                                <input {...register('email', { required: true })} type="email" className="form-control" id="email" placeholder="Enter email" />
                                {errors.email && <span className='mt-1 d-block text-danger'>Email is required</span>}
                            </div>
                            <div className="form-group mt-3">
                                <label htmlFor="password" className='text-black'>Password</label>
                                <input aria-describedby="passwordHelp" {...register('password', { required: true })} type="password" className="form-control" id="password" placeholder="Password" />
                                {errors.password && <span className='mt-1 d-block text-danger'>Password is required</span>}
                            </div>

                            <div className="form-group mt-3">
                                <label htmlFor="passwordConfirm" className='text-black'>Password</label>
                                <input {...register('passwordConfirm', { required: true })} type="password" className="form-control" id="passwordConfirm" placeholder="Password" />
                                {errors.passwordConfirm && <span className='mt-1 d-block text-danger'>Password confirmation is required</span>}
                            </div>


                            <div className='mt-3 w-100 d-flex flex-column align-items-center'>
                                {!passwordCheck && <span className='my-2 d-block text-danger'>Passwords Needs to be equal.</span>}
                                <button type="submit" className="btn btn-dark">Sign Up</button>
                                <p className='mt-3 text-dark'>Already have an account? <Link to={'/login'}>Sign In</Link></p>
                            </div>

                        </form>

                    </div>
                </div>

            </div>
        </div>
    )
}

export default Register;