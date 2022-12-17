import { useEffect } from "react";
import AppBar from "../components/AppBar";
import AuthService from "../services/authService";
import Cookies from 'js-cookie';


import styles from '../styles/signup.module.css'
import Head from "next/head";
import Image from 'next/image'

export default function signup() {

    // const loginHandler = async () => {
    //     await AuthService.login('', '');
    //     Cookies.set('service_token', 'def');
    // }

    return (

        <div className="h-full w-full row">
            <Head>
                <meta name="viewport" content="width=device-width, initial-scale=1" />
            </Head>

            <style jsx global>
                {`
                    body {
                        background-color: #69cbbf;
                    }
                `}
            </style>

            <div className="container">

                <Image
                    src="/../public/static/images/kid.png"
                    alt="kid"
                    width={330}
                    height={320}
                    className="z-3 position-absolute bottom-3.5 left-40"
                />

                <div className="row ">
                    <div className="col-4 text-left ">
                        <h1 className="text-white pt-32 pl-16">中央大學<br></br>場地預約網</h1>
                    </div>
                    <div className="col-8 rounded-bl-xl rounded-tl-xl bg-white z-10 h-full w-full">

                        <h2 className="text-theme pt-8 pl-24 ">Sign Up</h2>

                        <form className="pt-2 pl-24 pb-8 pr-44 ">
                            <div className="grid md:grid-cols-1 md:gap-6">{/* 姓名 */}
                                <div className="relative z-0 mb-6 w-full group">
                                    <input type="text" name="floating_name" id="floating_name" className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-t-0 border-r-0 border-l-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " required />
                                    <label htmlFor="floating_name" className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">姓名</label>
                                </div>
                            </div>

                            <div className="grid md:grid-cols-1 md:gap-6">{/* 學號 */}
                                <div className="relative z-0 mb-6 w-full group">
                                    <input type="text" name="floating_student_id" id="floating_student_id" className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-t-0 border-r-0 border-l-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " required />
                                    <label htmlFor="floating_student_id" className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">學號</label>
                                </div>
                            </div>

                            <div className="grid md:grid-cols-1 md:gap-6">{/* 電子郵件 */}
                                <div className="relative z-0 mb-6 w-full group">
                                    <input type="email" name="floating_email" id="floating_email" className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-t-0 border-r-0 border-l-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " required />
                                    <label htmlFor="floating_email" className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">電子郵件</label>
                                </div>
                            </div>

                            <div className="grid md:grid-cols-1 md:gap-6">{/* 電話號碼 */}
                                <div className="relative z-0 mb-6 w-full group">
                                    <input type="tel" pattern="[0-9]{4}-[0-9]{3}-[0-9]{3}" name="floating_phone" id="floating_phone" className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-t-0 border-r-0 border-l-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " required />
                                    <label htmlFor="floating_phone" className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">電話號碼 (0912-345-678)</label>
                                </div>
                            </div>

                            <div className="grid md:grid-cols-1 md:gap-6">{/* 密碼 */}

                                <div className="relative z-0 mb-6 w-full group">
                                    <input type="password" name="floating_password" id="floating_password" className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-t-0 border-r-0 border-l-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " required />
                                    <label htmlFor="floating_password" className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">密碼</label>
                                </div>
                            </div>

                            <div className="grid md:grid-cols-1 md:gap-6">{/* 確認密碼 */}
                                <div className="relative z-0 mb-6 w-full group">
                                    <input type="password" name="repeat_password" id="floating_repeat_password" className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-t-0 border-r-0 border-l-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " required />
                                    <label htmlFor="floating_repeat_password" className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">確認密碼</label>
                                </div>
                            </div>

                            <div className="grid md:grid-cols-1 ">{/* 確認 */}
                                <button type="submit" className="text-white bg-theme hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">確認</button>
                            </div>
                            <div className="grid md:grid-cols-1 ">
                                <button type="button" className="text-theme bg-white font-medium rounded-lg text-sm w-full sm:w-auto px-5 pt-2.5 text-center">已經有帳號?</button>
                            </div>
                        </form>

                    </div>

                </div>
            </div >

        </div >
    );
}