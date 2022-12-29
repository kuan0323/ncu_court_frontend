import { useEffect, useState } from "react";
import UserService from "../services/userService";

import AppBar from "../components/AppBar";

import Cookies from 'js-cookie';

import Head from "next/head";
import Image from 'next/image'



export default function Post() {
    // const [name, setName] = useState("");
    // const [student_id, setStudent_id] = useState("");
    // const [email, setEmail] = useState("");
    // const [phone, setPhone] = useState("");
    // const [password, setPassword] = useState("");

    const sign_upHandler = async () => {
        const a = await UserService.register('Eleanor', '109403034', 'email@gmail.com', '0912345678', '123');
        // return a;
    }

    return (

        <button type="submit" onClick={() => sign_upHandler()}>Submit</button>
    );
};

