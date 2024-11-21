import { useContext, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../provider/AuthProvider";

const Register = () => {
  const { createNewUser, setUser, updateUserProfile } = useContext(AuthContext);
  const navigate = useNavigate();
  const [error, setError] = useState({});
  
  const handleSubmit = (e) => {
    e.preventDefault();
    const form = new FormData(e.target);
    const name = form.get("name");
    const email = form.get("email");
    const photo = form.get("photo");
    const password = form.get("password");

    // Password Validation
    const passwordPattern = /^(?=.*[a-z])(?=.*[A-Z]).{6,}$/;
    if (!passwordPattern.test(password)) {
      setError({ password: "Password must be at least 6 characters long, with both uppercase and lowercase letters." });
      return; // Prevent form submission
    }

    // Validate name length
    if (name.length < 5) {
      setError({ name: "Name should be more than 5 characters." });
      return; // Prevent submission if name is too short
    }

    // Clear previous errors
    setError({});
    
    createNewUser(email, password)
      .then((result) => {
        const user = result.user;
        setUser(user);

        // Update profile with name and photo URL
        updateUserProfile({ displayName: name, photoURL: photo })
          .then(() => {
            navigate("/"); // Redirect after successful signup
          })
          .catch((err) => {
            setError({ register: "Profile update failed." });
            console.log(err);
          });
      })
      .catch((err) => {
        setError({ register: "Signup failed. Please try again." });
        console.log(err);
      });
  };

  return (
    <div className="min-h-screen flex justify-center items-center">
      <div className="w-10/12 mx-auto card bg-base-100 lg:w-full max-w-lg shrink-0 rounded-lg p-10">
        <h2 className="lg:text-3xl text-2xl text-yellow-500 font-semibold text-center">
          Register Your Account
        </h2>

        <form onSubmit={handleSubmit} className="card-body rounded-lg">
          <div className="form-control">
            <label className="label">
              <span className="label-text">Name</span>
            </label>
            <input
              name="name"
              type="text"
              className="input input-bordered"
              required
            />
          </div>
          {error.name && (
            <label className="label text-xs text-red-500">{error.name}</label>
          )}

          <div className="form-control">
            <label className="label">
              <span className="label-text">Photo URL</span>
            </label>
            <input
              type="text"
              name="photo"
              className="input input-bordered"
              required
            />
          </div>

          <div className="form-control">
            <label className="label">
              <span className="label-text">Email</span>
            </label>
            <input
              name="email"
              type="email"
              className="input input-bordered"
              required
            />
          </div>

          <div className="form-control">
            <label className="label">
              <span className="label-text">Password</span>
            </label>
            <input
              name="password"
              type="password"
              className="input input-bordered"
              required
            />
            {error.password && (
              <label className="label text-xs text-red-500">{error.password}</label>
            )}
          </div>

          {error.register && <label className="label text-red-500">{error.register}</label>}

          <div className="form-control mt-6">
            <button className="btn btn-primary bg-yellow-400 rounded-lg">
              Register
            </button>
          </div>
        </form>

        <p className="text-center font-semibold">
          Already have an account?{" "}
          <Link to="/auth/login" className="text-red-500">
            Login
          </Link>
        </p>
      </div>
    </div>
  );
};

export default Register;
