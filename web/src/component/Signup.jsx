import { useRef } from "react";
import { Button } from "react-bootstrap";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { userContext } from "../Context";
import { useContext } from "react";
const Signup = (props) => {
  const email = useRef();
  const password1 = useRef();
  const password2 = useRef();
  const { logged, setLogged } = useContext(userContext);
  const navigate = useNavigate();
  if (logged === true) {
    navigate("/");
  }
  const nevtreh = () => {
    if (password1.current.value === password2.current.value) {
      axios
        .post("http://localhost:5000/signup", {
          username: email.current.value,
          password: password1,
        })
        .then(function (res) {
          console.log(res);
          navigate("/login");
          // window.localStorage.setItem("credentials", JSON.stringify(res.data));
          // window.localStorage.removeItem("credentials"); logged out
        })
        .catch((error) => console.log(error));
    } else {
      console.log("passwords don't match");
    }
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
      <div>
        <p>Нууц үгээ давтна уу?</p>
        <input
          className="signupInp"
          placeholder="********"
          ref={password2}
        ></input>
      </div>
      <Button className="tomButt" onClick={nevtreh}>
        Нэвтрэх
      </Button>
    </div>
  );
};
export default Signup;