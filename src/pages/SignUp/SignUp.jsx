import { Link } from 'react-router-dom';
import img from '../../assets/images/login/login.svg';


const SignUp = () => {

    const handleSignUp = event => {
        // stop the reload
        event.preventDefault();

    }

    return (
        <div className="hero min-h-screen bg-base-200">
            <div className="hero-content flex-col lg:flex-row">
                <div className="w-1/2 mr-12">
                    <img src={img} alt="" />
                </div>
                <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                    <div className="card-body">
                        <h1
                            className="text-3xl text-center font-bold">
                            Sign Up
                        </h1>
                        {/* login form start */}
                        <form onSubmit={handleSignUp}>
                            <div className="form-control">
                                <label className="label">
                                    <span
                                        className="label-text">
                                        Name
                                    </span>
                                </label>
                                <input type="text" name='name' placeholder="Name" className="input input-bordered" />
                            </div>

                            <div className="form-control">
                                <label className="label">
                                    <span
                                        className="label-text">
                                        Email
                                    </span>
                                </label>
                                <input type="text" name='email' placeholder="Email" className="input input-bordered" />
                            </div>

                            <div className="form-control">
                                <label className="label">
                                    <span
                                        className="label-text">
                                        confirm Password
                                    </span>
                                </label>

                                <input type="text" placeholder="Confirm Password" name='password' className="input input-bordered" />
                                
                                <label className="label">
                                    <a
                                        href="#" className="label-text-alt link link-hover">
                                        Forgot password?
                                    </a>
                                </label>
                            </div>
                            <div className="form-control mt-6">
                                {/* login submit btn */}
                                <input className="btn btn-primary" type="submit" value="Sign Up" />
                            </div>
                        </form>
                        {/* login form end */}
                        <p className='my-4 text-center'>
                            Already Have an Account?
                            <Link
                                to="/login"
                                className='text-orange-600 font-bold'>
                                Login
                            </Link>
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SignUp;