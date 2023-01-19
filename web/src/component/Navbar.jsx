import { Link } from "react-router-dom";
import logo from "../assets/logo.png"
import styles from "../styles/Navbar.module.css"

const routes = [
    { name: "Бүртгүүлэх", to: "signup" },
    { name: "Нэвтрэх", to: "login" },
  ];
export const Navbar = (props) => {
    return (
        <div className={styles.container}>
            {props.children}
            <Link to="/">
                <img src={logo}  />
            </Link>
            <div >
          {routes.map(({ name, to }) => (
            <Link to={to}>{name}</Link>
          ))}
        </div>
        </div>
    )
}