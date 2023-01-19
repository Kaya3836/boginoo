import React, { useContext, useState } from "react";
import styles from "../styles/Home.module.css";
import { Login } from "./Login";
import { Signup } from "./Signup";
import InputShortener from './utils/InputShortener';
import LinkResult from './utils/LinkResult';
import logo from "../assets/logo.png";
import { userContext } from "../Context";

 export const Home = () => {
    const [inputValue, setInputValue] = useState("");

    return (
        <div className={styles.container}>
            <img className={styles.logo} src={logo}/>
            <InputShortener setInputValue={setInputValue} />
            <LinkResult inputValue={inputValue} />
        </div>
    )
 }