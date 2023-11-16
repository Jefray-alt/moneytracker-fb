import { Link } from "react-router-dom";

const Login = () => {
  return (
    <div className="w-screen h-screen flex justify-center items-center flex-col">
      <div className="mb-3">
        <h1 className="text-4xl font-bold">Money Tracker</h1>
      </div>
      <div className="w-1/3">
        <form className="flex flex-col space-y-5 justify-center items-center p-6">
          <div className="form-control w-full max-w-xs">
            <label className="label">
              <span className="label-text">Email</span>
            </label>
            <input type="text" className="input input-bordered w-full max-w-xs" />
          </div>
          <div className="form-control w-full max-w-xs">
            <label className="label">
              <span className="label-text">Password</span>
            </label>
            <input type="password" className="input input-bordered w-full max-w-xs" />
          </div>
          <div className="form-control w-full max-w-xs mt-3">
            <input type="submit" value="Login" className="btn bg-primary text-white" />
          </div>
          <div className="form-control w-full max-w-xs text-center">
            <span>or {' '}
              <Link to={'/register'} className="underline text-primary inline ml">Register</Link>
            </span>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Login;