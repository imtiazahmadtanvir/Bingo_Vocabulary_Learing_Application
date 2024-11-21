import { useLocation } from "react-router-dom";
import { useState } from "react";

const ForgetPassword = () => {
  const location = useLocation();
  const [email, setEmail] = useState(location.state?.email || ""); // Retrieve email from the login page or default to empty
  const [error, setError] = useState("");

  const handleResetPassword = () => {
    if (!email) {
      setError("Email address is required.");
      return;
    }

    const subject = encodeURIComponent("Password Reset Request");
    const body = encodeURIComponent(`Please reset your password for the following account: ${email}`);
    const mailtoLink = `mailto:passwordreset@gmail.com?subject=${subject}&body=${body}`;

    // Redirect the user to Gmail to initiate the reset process
    window.location.href = mailtoLink;
  };

  return (
    <div className="min-h-screen flex justify-center items-center">
      <div className="w-10/12 mx-auto card bg-base-100 lg:w-full max-w-lg shrink-0 rounded-lg p-10">
        <h2 className="text-3xl text-yellow-400 font-semibold text-center">
          Reset Your Password
        </h2>
        <form className="card-body">
          <div className="form-control">
            <label className="label">
              <span className="label-text">Enter Your Email</span>
            </label>
            <input
              name="email"
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)} // Update state on email change
              className="input input-bordered"
              required
            />
          </div>

          {error && (
            <div className="form-control mt-4">
              <label className="label text-xs text-red-500">{error}</label>
            </div>
          )}

          <div className="form-control mt-6">
            <button
              type="button"
              onClick={handleResetPassword}
              className="btn btn-primary bg-yellow-400 rounded-lg"
            >
              Send Reset Instructions
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default ForgetPassword;
