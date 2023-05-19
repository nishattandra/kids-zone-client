import React, { useContext, useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import img from '../../assets/images/login/login.svg'
import { FaGoogle } from 'react-icons/fa';
import useTitle from '../../hooks/useTitle';
import { AuthContext } from '../../providers/AuthProvider';


const Login = () => {

    const [err, setErr] = useState('')
    const { handleGoogleSignIn, signIn } = useContext(AuthContext)

    const navigate = useNavigate();
    const location = useLocation();
    console.log('login page location', location)
    const from = location.state?.from?.pathname || '/'

    const googleSignIn = () => {
        handleGoogleSignIn()
            .then(result => {
                const loggedUser = result.user;
                console.log(loggedUser)
                navigate(from, { replace: true })
            })
            .catch(error => {
                console.log(error)
            })
    }

    const handleLogin = event => {
        event.preventDefault();
        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;
        console.log(email, password);

        signIn(email, password)
            .then(result => {
                const loggedUser = result.user;
                console.log(loggedUser);
                navigate(from, { replace: true })
            })
            .catch(error => {
                console.log(error);
                setErr(error.message)
            })
    }

    useTitle('login')

    return (
        <div className="hero min-h-screen">
            <div className="hero-content flex-col lg:flex-row">
                <div className=" w-1/2 mr-12">
                    <img className='bg-none border-none' src={img} alt="" />
                </div>
                <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                    <div className="card-body">
                        <h1 className="text-3xl text-center font-bold text-orange-600">Sign In</h1>
                        <form onSubmit={handleLogin}>
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
                            <div className="form-control mt-6">
                                <input type="submit" value="Sign In" className="btn bg-orange-600 border-none" />
                            </div>
                        </form>
                        <p className=' my-4 text-center'>New to Kids Zone? <Link to='/signup' className='text-orange-600 font-bold'>Sign Up</Link> </p>
                        <hr />
                        <p className='text-center font-extrabold'>OR</p>
                        <button className="btn btn-outline btn-block border-orange-500" onClick={googleSignIn}>Sign in with Google<FaGoogle className='ml-2 text-green-800'></FaGoogle></button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Login;