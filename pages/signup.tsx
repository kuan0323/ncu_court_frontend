import { useEffect, useState } from "react";
import UserService from "../services/userService";

import AppBar from "../components/AppBar";

import Cookies from 'js-cookie';

import Head from "next/head";
import Image from 'next/image'


export default function SignUp() {

    const [name, setName] = useState('');
    const [studentId, setStudentId] = useState('');
    const [email, setEmail] = useState('');
    const [phone, setPhone] = useState('');
    const [password, setPassword] = useState('');
    const [repeatPassword, setRepeatPassword] = useState('');

    const sign_upHandler = async () => {

        // const name_Element = document.getElementById("name");
        // const name = name_Element.value;

        // const student_id_Element = document.getElementById("student_id");
        // const student_id = student_id_Element.value; // 紅字可以不用理它，可以正常運作

        // const email_Element = document.getElementById("email");
        // const email = email_Element.value;

        // const phone_Element = document.getElementById("phone");
        // const phone = phone_Element.value;

        // const password_Element = document.getElementById("password");
        // const password = password_Element.value; // 紅字可以不用理它，可以正常運作

        const user = await UserService.register(name, studentId, email, phone, password);
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

            <div className="container">
                {/* <Image
                    src="/../public/static/images/kid.png"
                    alt="kid"
                    width={330}
                    height={320}
                    className="z-3 position-absolute bottom-3.5 left-40"
                /> */}

                <div className="row h-full">
                    <div className="col-4 text-left ">
                        <h1 className="text-white pt-32 pl-16">中央大學<br></br>場地預約網</h1>
                    </div>
                    <div className="col-8 rounded-bl-xl rounded-tl-xl bg-white z-10 h-full w-full">

                        <h2 className="text-theme pt-8 pl-24 ">Sign Up</h2>

                        <form className="pt-2 pl-24 pb-8 pr-44 " action="signupSuccess">
                            <div className="grid md:grid-cols-1 md:gap-6">{/* 姓名 */}
                                <div className="relative z-0 mb-6 w-full group">
                                    <input value={name} onChange={(e) => setName(e.target.value)} type="text" name="name" id="name" className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-t-0 border-r-0 border-l-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " required />
                                    <label htmlFor="name" className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">姓名</label>
                                </div>
                            </div>

                            <div className="grid md:grid-cols-1 md:gap-6">{/* 學號 */}
                                <div className="relative z-0 mb-6 w-full group">
                                    <input value={studentId} onChange={(e) => setStudentId(e.target.value)} type="text" name="student_id" id="student_id" className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-t-0 border-r-0 border-l-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " required />
                                    <label htmlFor="student_id" className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">學號</label>
                                </div>
                            </div>

                            <div className="grid md:grid-cols-1 md:gap-6">{/* 電子郵件 */}
                                <div className="relative z-0 mb-6 w-full group">
                                    <input value={email} onChange={(e) => setEmail(e.target.value)} type="email" name="email" id="email" className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-t-0 border-r-0 border-l-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " required />
                                    <label htmlFor="email" className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">電子郵件</label>
                                </div>
                            </div>

                            <div className="grid md:grid-cols-1 md:gap-6">{/* 電話號碼 */}
                                <div className="relative z-0 mb-6 w-full group">
                                    <input value={phone} onChange={(e) => setPhone(e.target.value)} type="tel" pattern="[0-9]{10}" name="phone" id="phone" className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-t-0 border-r-0 border-l-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " required />
                                    <label htmlFor="phone" className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">電話號碼 (0912345678)</label>
                                </div>
                            </div>

                            <div className="grid md:grid-cols-1 md:gap-6">{/* 密碼 */}

                                <div className="relative z-0 mb-6 w-full group">
                                    <input value={password} onChange={(e) => setPassword(e.target.value)} type="password" name="password" id="password" className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-t-0 border-r-0 border-l-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " required />
                                    <label htmlFor="password" className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">密碼</label>
                                </div>
                            </div>

                            <div className="grid md:grid-cols-1 md:gap-6">{/* 確認密碼 */}
                                <div className="relative z-0 mb-6 w-full group">
                                    <input value={repeatPassword} onChange={(e) => setRepeatPassword(e.target.value)} type="password" name="repeat_password" id="repeat_password" className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-t-0 border-r-0 border-l-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " required />
                                    <label htmlFor="repeat_password" className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">確認密碼</label>
                                </div>
                            </div>

                            <div className="grid md:grid-cols-1 ">{/* 確認 */}
                                <button type="submit" onClick={() => sign_upHandler()} className=" bg-theme hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800" ><a className="text-decoration-none text-white">確認</a></button>
                            </div>
                            <div className="grid md:grid-cols-1 ">
                                <button type="button" className="text-theme bg-white font-medium rounded-lg text-sm w-full px-5 py-2.5 text-center "><a href="/" className="text-decoration-none text-theme">已經有帳號?</a></button>
                            </div>
                        </form>
                    </div>

                </div>
            </div >

        </div >
    );
}