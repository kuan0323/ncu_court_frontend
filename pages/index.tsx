import { useEffect, useState } from "react";
import AppBar from "../components/AppBar";
import AuthService from "../services/authService";
import UserService from "../services/userService";

import Cookies from 'js-cookie';
import Head from "next/head";
import { redirect } from "next/dist/server/api-utils";


export default function Login() {

    const [studentId, setStudentId] = useState('');
    const [password, setPassword] = useState('');


    const loginHandler = async () => {
        try {
            if (studentId != "" && password != "") {
                const serviceToken = await AuthService.login(studentId, password);
                Cookies.set('service_token', serviceToken);
            }

            const profile = await UserService.getSelfProfile();
            if (profile.role == "regular") {
                window.location.replace("/home");
            } else {
                window.location.replace("/userShow");
            }
        }
        catch (e) {
            if (studentId == "") {
                alert("請輸入學號!");
            }
            else if (password == "") {
                alert("請輸入密碼!");
            }
            else {
                window.location.replace("/loginFailed");
            }
        }
    }

    return (

        <div className="h-screen row">

            <Head>
                <meta name="viewport" content="width=device-width, initial-scale=1" />
            </Head>

            <style jsx global>
                {`
                    body {
                        background-color: #69cbbf;
                        width: 99%;
                        min-width: 750px;
                    }
                    .container{
                        min-width: 750px;
                    }
                `}
            </style>

            {/* <button onClick={() => find_userHandler()}>test</button> */}



            <div className="container ">
                <div className="row h-full ">
                    <div className="col-4 text-left ">
                        <h1 className="text-white pt-32 pl-16">中央大學<br></br>場地預約網</h1>
                    </div>
                    <div className="col-8 rounded-bl-xl rounded-tl-xl bg-white z-10" >

                        <div className="pt-2 pl-24 pb-8 pr-44">
                            <h2 className="text-theme pt-32">Log In</h2>
                            {/* <form className="pt-2 pl-24 pb-8 pr-44 " > */}
                            <div className="grid md:grid-cols-1 md:gap-6">{/* 學號 */}
                                <div className="relative z-0 mb-6  group">
                                    <input value={studentId} onChange={(e) => setStudentId(e.target.value)} type="text hidden" name="student_id" id="student_id" className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-t-0 border-r-0 border-l-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " required />
                                    <label htmlFor="floating_student_id" className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">學號</label>
                                </div>
                            </div>

                            <div className="grid md:grid-cols-1 md:gap-6">{/* 密碼 */}

                                <div className="relative z-0 mb-6  group ">
                                    <input value={password} onChange={(e) => setPassword(e.target.value)} type="password" name="password" id="password" className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-t-0 border-r-0 border-l-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " required />
                                    <label htmlFor="floating_password" className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">密碼</label>
                                </div>
                            </div>

                            <div className="grid md:grid-cols-1 ">{/* 登入 */}
                                <button type="button" className="text-white bg-theme hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm  sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800" onClick={() => loginHandler()}><a className="text-decoration-none text-white">登入</a></button>
                            </div>
                            <div className="grid md:grid-cols-1 ">
                                <button type="button" className="text-theme bg-white font-medium rounded-lg text-sm  sm:w-auto px-5 py-2.5 text-center"><a href="signup" className="text-decoration-none text-theme">還沒有帳號?</a></button>
                            </div>
                            {/* </form> */}
                        </div>

                    </div>

                </div>
            </div >
        </div >
    );
}


