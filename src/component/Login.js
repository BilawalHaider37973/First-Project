import React, { useEffect } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { useState } from "react";
import { signInWithEmailAndPassword, auth } from "../Firebase";
import { Auth } from "../redux/action";
const Login = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const list = useSelector((state) => state.todo);

  useEffect(() => {
    if (list.uid !== "") {
      navigate("/Home");
    } else {
      navigate("/login");
    }
  }, []);

  const ValidateEmail = (email) => {
    return String(email)
      .toLowerCase()
      .match(
        /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
      );
  };

  const Signin = async () => {
    if (email !== "" && password !== "") {
      if (ValidateEmail(email)) {
        signInWithEmailAndPassword(auth, email, password)
          .then((userCredential) => {
            const uid = userCredential.user.uid;
            console.log(uid);
            const obj = { email: email, uid: uid };
            dispatch(Auth(obj));
            navigate("/Home");
            alert("Successfull");
          })
          .catch((error) => {
            const errorCode = error.code;
            const errorMessage = error.message;
            alert(errorMessage);
          });
      }
    } else {
      alert("Please Fill All Field");
    }
    console.log(list);
  };

  return (
    <>
      <section className="vh-100" style={{ backgroundColor: "#eee" }}>
        <div className="container h-100">
          <div className="row d-flex justify-content-center align-items-center h-100">
            <div className="col-lg-6 col-xl-4 col-md-6 ">
              <div className="form-outline mb-4">
                <label className="form-label" htmlFor="form2Example1">
                  Email address
                </label>
                <input
                  value={email}
                  type="email"
                  id="form2Example1"
                  className="form-control"
                  onChange={(e) => setEmail(e.target.value)}
                />
              </div>

              <div className="form-outline mb-4">
                <label className="form-label" htmlFor="form2Example2">
                  Password
                </label>
                <input
                  value={password}
                  type="password"
                  id="form2Example2"
                  className="form-control"
                  onChange={(e) => setPassword(e.target.value)}
                />
              </div>

              <div className="row mb-4">
                <div className="col d-flex justify-content-center">
                  <div className="form-check">
                    <input
                      className="form-check-input"
                      type="checkbox"
                      value=""
                      id="form2Example31"
                    />
                    <label
                      className="form-check-label"
                      htmlFor="form2Example31"
                    >
                      {" "}
                      Remember me{" "}
                    </label>
                  </div>
                </div>

                <div className="col">
                  <a href="#!">Forgot password?</a>
                </div>
              </div>

              <button
                type="button"
                className="btn btn-primary btn-block mb-4"
                onClick={Signin}
              >
                Sign in
              </button>

              <div className="text-center">
                <p>
                  Not a member?
                  <NavLink to="/Signup">Register</NavLink>
                </p>
                <p>or sign up with:</p>
                <button
                  type="button"
                  className="btn btn-link btn-floating mx-1"
                >
                  <i className="fab fa-facebook-f"></i>
                </button>

                <button
                  type="button"
                  className="btn btn-link btn-floating mx-1"
                >
                  <i className="fab fa-google"></i>
                </button>

                <button
                  type="button"
                  className="btn btn-link btn-floating mx-1"
                >
                  <i className="fab fa-twitter"></i>
                </button>

                <button
                  type="button"
                  className="btn btn-link btn-floating mx-1"
                >
                  <i className="fab fa-github"></i>
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};
export default Login;
