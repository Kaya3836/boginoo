import { Button } from "react-bootstrap";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import { userContext } from "../Context";
import { useContext, useRef, useState } from "react";
const Login = () => {
//   const { logged, setLogged } = useContext(userContext);
  const navigate = useNavigate();
  const password1 = useRef();
  const email = useRef();
  const {logged, setLogged} = useContext(userContext)
  if (logged === true) {
    navigate("/");
  }
  const nevtreh = () => {
    axios
      .post("http://localhost:5000/login", {
        password: password1.current.value,
        username: email.current.value,
      })
      .then(function (res) {
        console.log(res);
        navigate("/");
        setLogged(true);
        localStorage.setItem("credentials", JSON.stringify(res.data));
        // localStorage.removeItem("credentials"); logged out
      })
      .catch((error) => console.log(error));
  };
  return (
    <div className="signup">
      <div>
        <p>Цахим хаяг</p>
        <input
          className="signupInp"
          placeholder="name@mail.domain"
          ref={email}
        ></input>
      </div>
      <div style={{ margin: "50px" }}>
        <p>Нууц үг</p>
        <input
          className="signupInp"
          placeholder="********"
          ref={password1}
        ></input>
      </div>
      <Button className="tomButt" onClick={nevtreh}>
        Нэвтрэх
      </Button>
      <Link to="/signup">Шинэ хэрэглэгч бол энд дарна уу?</Link>
    </div>
  );
};

export default Login;