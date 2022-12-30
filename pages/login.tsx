import { useEffect } from "react";
import AppBar from "../components/AppBar";
import AuthService from "../services/authService";
import Cookies from 'js-cookie';

export default function Login () {

    const loginHandler = async () => {
        const a = await AuthService.login('109403008', '123');
        // console.log(typeof a);
        Cookies.set('service_token', a);
        return a;
    }

    return (
        <div>
            <p style={{marginTop: 10, color: 'red'}}>jioquwheio</p>
            <AppBar value={'example value'}><p>example children</p></AppBar>
            <div>login page</div>
            <button onClick={() => loginHandler()}>Login</button>
        </div>
    );
}
