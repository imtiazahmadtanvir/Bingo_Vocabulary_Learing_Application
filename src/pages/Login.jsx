import { Link } from "react-router-dom";



const Login = () => {
    return (
        <div className="min-h-screen flex justify-center items-center">
            <div className="card bg-base-100 w-full max-w-lg shrink-0 shadow-2xl">
                <form className="card-body ">
                    <h1 className="text-white text-2xl font-semibold  text-center mb-4">Login Your Account</h1>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Email</span>
                        </label>
                        <input type="email" placeholder="email" className="input input-bordered" required />
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Password</span>
                        </label>
                        <input type="password" placeholder="password" className="input input-bordered" required />
                        <label className="label">
                            <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                        </label>
                    </div>
                    <div className="form-control mt-6">
                        <button className="btn btn-primary">Login</button>
                    </div>


                </form>
                <p className="text-center font-semibold mb-4">
                    Don’t Have An Account?{" "}
                    <Link to="register" className="text-red-500">
                        Register
                    </Link>
                </p>

            </div>

        </div>
    );
};

export default Login;