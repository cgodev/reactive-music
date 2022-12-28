// React
import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import Swal from "sweetalert2";

// Components
import { UserService } from "../../user/services/userService";

const SettingsPage = () => {
    const [hasCredentials, setHasCredentials] = useState(false);
    const { register, handleSubmit, formState: { errors }, setValue } = useForm();
    const [credentials, setCredentials] = useState({ client_id: '', client_secret: '', _id: '' })

    useEffect(() => {
        fetchUserCredentials();
    }, [])

    const setupForm = ({client_id, client_secret}) => {
        setValue('client_id', client_id);
        setValue('client_secret', client_secret);
    }

    const fetchUserCredentials = async () => {
        const response = await UserService.getCredentials();
        if (response.ok) {
            setHasCredentials(true);
            setCredentials(response.credentials);
            setupForm(response.credentials);
        } else {
            setHasCredentials(false);
        }
    }


    const onSubmit = async (data) => {
        if (hasCredentials) {
            let request = {
                id: credentials._id,
                ...data
            }
            let response = await UserService.updateCredentials(request);
            if (response.ok) {
                Swal.fire('Success', 'Credentials has been updated', 'success');
            } else {
                Swal.fire('Opss!!', `Error: ${response.msg}`, 'error');
            }
        } else {
            let response = await UserService.createCredentials(data);
            if (response.ok) {
                Swal.fire('Success', 'Credentials has been created', 'ok');
            } else {
                Swal.fire('Opss!!', `Error: ${response.msg}`, 'error');
            }
        }
    }

    return (
        <>
            <form onSubmit={handleSubmit(onSubmit)} className="d-flex flex-column align-items-center justify-content-center">
                <div className="mb-4 w-75">
                    <label htmlFor="clientKey" className="form-label text-secondary">Client key</label>
                    <input
                        type="text"
                        className="form-control"
                        id="clientKey"
                        {...register('client_id', { required: true })}
                    />
                    {errors.client_id && <span className="text-danger mt-1 d-block">This field is required</span>}
                </div>
                <div className="mb-4 w-75">
                    <label htmlFor="clientSecretKey" className="form-label text-secondary">Client secret key</label>
                    <input
                        type="password"
                        className="form-control"
                        id="clientSecretKey"
                        {...register('client_secret', { required: true })}
                    />
                    {errors.client_secret && <span className="text-danger mt-1 d-block">This field is required</span>}
                </div>

                <div className='w-75 d-flex justify-content-center mb-4'>
                    <button type="submit" className="btn btn-dark btn-outline-secondary w-100">Save</button>
                </div>
            </form>

        </>
    );
}

export default SettingsPage;


{/* 
<button type="button" onClick={handleModal} className={className}>Settings</button>
<Modal isOpen={modalOpen} handleClose={handleModal}>
    <h1 className="text-center display-6 mb-4">Settings</h1>
    <form onSubmit={handleSubmit(onSubmit)} className="d-flex flex-column align-items-center justify-content-center">
        <div className="mb-4 w-75">
            <label htmlFor="clientKey" className="form-label text-secondary">Client key</label>
            <input
                type="text"
                className="form-control"
                id="clientKey"
                {...register('client_id', { required: true })}
            />
            {errors.clientKey && <span className="text-danger mt-1 d-block">This field is required</span>}
        </div>
        <div className="mb-4 w-75">
            <label htmlFor="clientSecretKey" className="form-label text-secondary">Client secret key</label>
            <input
                type="password"
                className="form-control"
                id="clientSecretKey"
                {...register('client_secret', { required: true })}
            />
            {errors.clientSecret && <span className="text-danger mt-1 d-block">This field is required</span>}
        </div>

        <div className='w-75 d-flex justify-content-center mb-4'>
            <button type="submit" className="btn btn-dark w-100">Save</button>
        </div>
    </form>
</Modal> */}