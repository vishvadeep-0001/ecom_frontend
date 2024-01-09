import React from "react";
import { Link } from "react-router-dom";

const checked = ()=>{
  name: "yogi"
}
const Login = () => {
  return (
    <section className="vh-100">
      <div className="container py-5 h-100">
        <div className="row d-flex align-items-center justify-content-center h-100">
          <div className="col-md-8 col-lg-7 col-xl-6">
            <img
              src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-login-form/draw2.svg"
              className="img-fluid"
              alt="Phone image"
            />
          </div>
          <div className="col-md-7 col-lg-5 col-xl-5 offset-xl-1">
            <form>
              {/* Email input */}
              <div className="form-outline mb-4">
                <input
                  type="email"
                  id="form1Example13"
                  className="form-control form-control-lg"
                  placeholder="Email"
                />
              </div>

              {/* Password input */}
              <div className="form-outline mb-4">
                <input
                  type="password"
                  id="form1Example23"
                  className="form-control form-control-lg"
                  placeholder="Password"
                />
              </div>
              {/*Submit button  */}
              <button
                type="submit"
                className="btn btn-success"
              >
                Sign in
              </button>
              <div className="mt-4">
              <Link to="/forgotPassword">Forgot Password ?</Link>            
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Login;
