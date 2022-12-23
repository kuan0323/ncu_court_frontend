import { useEffect } from "react";
import AppBar from "../components/AppBar";
import AuthService from "../services/authService";
import Cookies from 'js-cookie';



// 可以先忽略掉這個page，只是測試用
export default function Login() {

    const loginHandler = async () => {

        const a = await AuthService.login('12345', '12345');
        // console.log(typeof a);
        Cookies.set('service_token', a);
        return a;
    }

    return (
        <div>

            <div>login page</div>
            <button onClick={() => loginHandler()}>Login</button>
        </div>
    );
}