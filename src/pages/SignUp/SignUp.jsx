import React, { useContext, useState } from 'react';
import img from '../../assets/images/login/login.svg'
import { Link, useNavigate } from 'react-router-dom';
import useTitle from '../../hooks/useTitle';
import { AuthContext } from '../../providers/AuthProvider';

const SignUp = () => {

    const { createUser, updateUserData, logOut } = useContext(AuthContext);
    const navigate = useNavigate();
    const [err, setErr] = useState('')
    const handleRegister = event => {
        event.preventDefault();
        const form = event.target;
        const name = form.name.value;
        const photo = form.photo.value;
        const email = form.email.value;
        const password = form.password.value;
    
        console.log(name, photo, email, password)
        createUser(email, password)
            .then(result => {
                const createdUser = result.user;
                console.log(createdUser);
                updateUserData(result.user, name, photo)
                event.target.reset()
                setErr('')
                navigate('/login')
                logOut();
            })
            .catch(error => {
                console.log(error);
                setErr(error.message)
            })
        // console.log('register Clicked')
    }

    useTitle('register')


    return (
        <div className="hero min-h-screen">
            <div className="hero-content flex-col lg:flex-row">
                <div className=" w-1/2 mr-12">
                    <img className='bg-none border-none' src={img} alt="" />
                </div>
                <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                    <div className="card-body">
                        <h1 className="text-3xl text-center font-bold text-orange-600">Sign Up</h1>
                        <p>{err}</p>
                        <form onSubmit={handleRegister}>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Name</span>
                                </label>
                                <input type="text" name='name' placeholder="name" className="input input-bordered" />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Email</span>
                                </label>
                                <input type="text" name='email' placeholder="email" className="input input-bordered" required />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Password</span>
                                </label>
                                <input type="text"
                                    name='password' placeholder="password" className="input input-bordered" required />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Photo URL</span>
                                </label>
                                <input type="text"
                                    name='photo' placeholder="photo url" className="input input-bordered" />
                            </div>
                            <div className="form-control mt-6">
                                <input type="submit" value="Sign Up" className="btn bg-orange-600 border-none" />
                            </div>
                        </form>
                        <p className=' my-4 text-center'>Already Have an Account? <Link to='/login' className='text-orange-600 font-bold'>Sign In</Link> </p>
                    </div>
                </div>
            </div>
        </div>

    );
};

export default SignUp;