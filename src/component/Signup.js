import React, { useState, useEffect } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { Auth, UnAuth } from "../redux/action/index";
import {
  auth,
  createUserWithEmailAndPassword,
  db,
  set,
  ref,
} from "../Firebase";
const Signup = () => {
  const navigate = useNavigate();
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  // const dispatch = useDispatch();
  // console.log(Auth);
  const list = useSelector((state) => state.todo);
  const ValidateEmail = (email) => {
    return String(email)
      .toLowerCase()
      .match(
        /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
      );
  };

  const getData = () => {
    console.log(list);
  };
  useEffect(() => {
    getData();
  }, []);
  const Signup = () => {
    console.log("list Chal gya", list);

    if (
      firstName !== "" &&
      lastName !== "" &&
      email !== "" &&
      password !== "" &&
      confirmPassword !== ""
    ) {
      if (ValidateEmail(email)) {
        if (password === confirmPassword) {
          createUserWithEmailAndPassword(auth, email, password)
            .then((userCredential) => {
              const uid = userCredential.user.uid;
              // const obj = { email: email, uid: uid };
              // dispatch(Auth(obj));
              console.log("user", uid);
              alert("Validate");

              set(ref(db, `Users/${uid}`), {
                FirstName: firstName,
                LastName: lastName,
                Email: email,
              });
              navigate("/login");
            })
            .catch((error) => {
              const errorCode = error.code;
              const errorMessage = error.message;
              console.log(errorMessage, errorCode);
            });
        } else {
          alert("Password should  be Match with confirm Password");
        }
      } else {
        alert("Email is Not Valid");
      }
    } else {
      alert("Please Fill All Fields");
    }
  };

  return (
    <>
      <section className="vh-100" style={{ backgroundColor: "#eee" }}>
        <div className="container h-100">
          <div className="row d-flex justify-content-center align-items-center h-100">
            <div className="col-lg-6 col-xl-5 col-md-6 ">
              <form className="mx-1 mx-md-4">
                <div className="d-flex flex-row align-items-center mb-4">
                  <i className="fas fa-user fa-lg me-3 fa-fw"></i>
                  <div className="form-outline  flex-fill mb-0">
                    <label className="form-label" htmlFor="form3Example1c">
                      First Name
                    </label>
                    <input
                      type="text"
                      value={firstName}
                      className="form-control"
                      onChange={(e) => setFirstName(e.target.value)}
                    />
                    <label className="form-label" htmlFor="form3Example1c">
                      Last Name
                    </label>
                    <input
                      value={lastName}
                      type="text"
                      className="form-control"
                      onChange={(e) => {
                        setLastName(e.target.value);
                      }}
                    />
                  </div>
                </div>

                <div className="d-flex flex-row align-items-center mb-4">
                  <i className="fas fa-envelope fa-lg me-3 fa-fw"></i>
                  <div className="form-outline flex-fill mb-0">
                    <label className="form-label" htmlFor="form3Example3c">
                      Your Email
                    </label>
                    <input
                      type="email"
                      className="form-control"
                      onChange={(e) => setEmail(e.target.value)}
                    />
                  </div>
                </div>

                <div className="d-flex flex-row align-items-center mb-4">
                  <i className="fas fa-lock fa-lg me-3 fa-fw"></i>
                  <div className="form-outline flex-fill mb-0">
                    <label className="form-label" htmlFor="form3Example4c">
                      Password
                    </label>
                    <input
                      type="password"
                      className="form-control"
                      onChange={(e) => setPassword(e.target.value)}
                    />
                  </div>
                </div>

                <div className="d-flex flex-row align-items-center mb-4">
                  <i className="fas fa-key fa-lg me-3 fa-fw"></i>
                  <div className="form-outline flex-fill mb-0">
                    <label className="form-label" htmlFor="form3Example4cd">
                      Repeat your password
                    </label>
                    <input
                      type="password"
                      className="form-control"
                      onChange={(e) => setConfirmPassword(e.target.value)}
                    />
                  </div>
                </div>

                <div className="d-flex justify-content-center mx-4 mb-3 mb-lg-4">
                  <button
                    type="button"
                    className="btn btn-primary btn-lg"
                    onClick={Signup}
                  >
                    Register
                  </button>
                </div>
                <div style={{ textAlign: "center" }}>
                  Already have an Account?
                  <NavLink to="/Login">Login?</NavLink>
                </div>
              </form>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Signup;
