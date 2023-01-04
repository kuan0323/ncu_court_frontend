import Head from "next/head";
import Image from 'next/image'
import Link from 'next/link';


export default function NotFound() {

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
                    <div className="col-4 ">
                        <h1 className="text-left text-white pt-32 pl-16">中央大學<br></br>場地預約網</h1>
                    </div>


                    <div className="col-8 rounded-bl-xl rounded-tl-xl bg-white z-10 h-screen w-full position-relative">
                        <div className="container text-center">
                            <div className="row row-cols-1">
                                <div className="col">
                                    <div className="position-absolute top-40 start-50 translate-middle">

                                        <Image
                                            src="/static/images/signupFailed.png"
                                            alt="signup_failed"
                                            width={250}
                                            height={250}
                                            className="pt-32"
                                        />
                                        <br></br>
                                        <Link href="/signup">
                                            <button type="submit" className="text-white bg-theme hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">返回註冊頁面</button>
                                        </Link>
                                    </div>
                                </div>

                            </div>
                        </div>

                    </div>

                </div>
            </div >

        </div >

    );
}