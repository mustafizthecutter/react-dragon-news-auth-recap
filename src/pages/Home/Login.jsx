import { Link } from "react-router-dom";
import Navbar from "../Shared/Navbar/Navbar";
import { useContext } from "react";
import { AuthContext } from "../../Providers/AuthProviders";


const Login = () => {
    const { signIn } = useContext(AuthContext);
    const handleLogin = e => {
        e.preventDefault();
        console.log(e.currentTarget);
        const form = new FormData(e.currentTarget);
        // console.log(form.get('email'));
        const email = form.get('email')
        const password = form.get('password')

        // console.log(form.get('password'));
        signIn(email, password)
            .then(res => console.log(res.user))
            .catch(error => console.error(error.message));
    }

    return (
        <div>
            <Navbar></Navbar>
            <div>
                <h2 className="text-3xl text-center">Please Login</h2>
                <form onSubmit={handleLogin} className="md:w-3/4 lg:w-1/2 mx-auto" >
                    <div className="card-body  ">
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Email</span>
                            </label>
                            <input type="email" name="email" placeholder="email" className="input input-bordered" required />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Password</span>
                            </label>
                            <input type="password" name="password" placeholder="password" className="input input-bordered" required />
                            <label className="label">
                                <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                            </label>
                        </div>
                        <div className="form-control mt-6">
                            <button  className="btn btn-primary">Login</button>
                        </div>
                    </div>
                </form>
                <p className="text-md text-center">Do not have any account!? Please <Link className="font-bold text-blue-600" to={'/register'}>Register</Link></p>
            </div>



        </div>
    );
};

export default Login;