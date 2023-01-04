import { useEffect, useState } from "react";
import UserService from "../services/userService";
import Link from 'next/link';
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
    const [message, setMessage] = useState('');

    const emailRule = /^\w+((-\w+)|(\.\w+))*\@[A-Za-z0-9]+((\.|-)[A-Za-z0-9]+)*\.[A-Za-z]+$/;
    const sign_upHandler = async () => {
        try {
            await UserService.register(name, studentId, email, phone, password);
            window.location.replace("/signupSuccess");
        }
        catch (e) {
            if (name == "") {
                alert("請輸入姓名!");
            }
            else if (studentId == "") {
                alert("請輸入學號!");
            }
            else if (email == "") {
                alert("請輸入電子郵件!");
            }
            else if (phone == "") {
                alert("請輸入電話!");
            }
            else if (password == "") {
                alert("請輸入密碼!");
            }
            else if (repeatPassword == "") {
                alert("請輸入確認密碼!");
            }
            else if (repeatPassword != password) {
                alert("兩次的密碼不相同!");
            }
            else if (email.search(emailRule) == -1) {
                alert("請輸入正確email格式");
            }
            else if (phone.length != 10) {
                alert("請輸入正確電話格式");
            }
            else {
                window.location.replace("/signupFailed");
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

            <div className="container">


                <div className="row h-full">
                    <div className="col-4 text-left ">
                        <h1 className="text-white pt-32 pl-16">中央大學<br></br>場地預約網</h1>
                    </div>
                    <div className="col-8 rounded-bl-xl rounded-tl-xl bg-white z-10">
                        <div className="pt-2 pl-24 pb-8 pr-44">
                            <h2 className="text-theme pt-8 ">Sign Up</h2>

                            <div className="grid md:grid-cols-1 md:gap-6">{/* 姓名 */}
                                <div className="relative z-0 mb-6 group">
                                    <input value={name} onChange={(e) => setName(e.target.value)} type="text hidden" name="name" id="name" className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-t-0 border-r-0 border-l-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " required />
                                    <label htmlFor="name" className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">姓名</label>
                                </div>
                            </div>

                            <div className="grid md:grid-cols-1 md:gap-6">{/* 學號 */}
                                <div className="relative z-0 mb-6 group">
                                    <input value={studentId} onChange={(e) => setStudentId(e.target.value)} type="text hidden" name="student_id" id="student_id" className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-t-0 border-r-0 border-l-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " required />
                                    <label htmlFor="student_id" className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">學號</label>
                                </div>
                            </div>

                            <div className="grid md:grid-cols-1 md:gap-6">{/* 電子郵件 */}
                                <div className="relative z-0 mb-6  group">
                                    <input value={email} onChange={(e) => setEmail(e.target.value)} type="email" name="email" id="email" className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-t-0 border-r-0 border-l-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " required />
                                    <label htmlFor="email" className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">電子郵件 (xxx@gmail.com)</label>
                                </div>
                            </div>

                            <div className="grid md:grid-cols-1 md:gap-6">{/* 電話號碼 */}
                                <div className="relative z-0 mb-6  group">
                                    <input value={phone} onChange={(e) => setPhone(e.target.value)} type="tel" pattern="[0-9]{10}" name="phone" id="phone" className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-t-0 border-r-0 border-l-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " required />
                                    <label htmlFor="phone" className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">電話號碼 (0912345678)</label>
                                </div>
                            </div>

                            <div className="grid md:grid-cols-1 md:gap-6">{/* 密碼 */}

                                <div className="relative z-0 mb-6  group">
                                    <input value={password} onChange={(e) => setPassword(e.target.value)} type="password" name="password" id="password" className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-t-0 border-r-0 border-l-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " required />
                                    <label htmlFor="password" className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">密碼</label>
                                </div>
                            </div>

                            <div className="grid md:grid-cols-1 md:gap-6">{/* 確認密碼 */}
                                <div className="relative z-0 mb-6  group">
                                    <input value={repeatPassword} onChange={(e) => setRepeatPassword(e.target.value)} type="password" name="repeat_password" id="repeat_password" className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-t-0 border-r-0 border-l-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " required />
                                    <span id='message'></span>
                                    <label htmlFor="repeat_password" className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">確認密碼</label>

                                </div>
                            </div>

                            <div className="grid md:grid-cols-1 ">{/* 確認 */}
                                <button type="button" onClick={() => sign_upHandler()} className=" bg-theme hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800" ><a className="text-decoration-none text-white">確認</a></button>
                            </div>
                            <div className="grid md:grid-cols-1 ">
                                <button type="button" className="text-theme bg-white font-medium rounded-lg text-sm w-full px-5 py-2.5 text-center ">
                                    <Link href="/" className="text-decoration-none text-theme">已經有帳號?</Link>
                                </button>
                            </div>

                        </div>

                    </div>

                </div>
            </div >

        </div >
    );
}