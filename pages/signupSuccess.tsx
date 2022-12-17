import Head from "next/head";
import Image from 'next/image'

export default function signup_success() {

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
                    <div className="col-4 ">
                        <h1 className="text-left text-white pt-32 pl-16">中央大學<br></br>場地預約網</h1>
                    </div>
                    <div className="col-8 rounded-bl-xl rounded-tl-xl bg-white z-10 h-screen w-full position-relative">

                        <div className="position-absolute top-40 start-50 translate-middle">
                            <Image
                                src="/../public/static/images/login_success.png"
                                alt="login_success"
                                width={150}
                                height={150}
                                className="pt-32"
                            />
                        </div>
                        <div className="position-absolute bottom-40 start-50 translate-middle">{/* 返回登入頁面 */}
                            <button type="submit" className="text-white bg-theme hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">返回登入頁面</button>
                        </div>

                    </div>

                </div>
            </div >

        </div >

    );
}