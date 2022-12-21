import Head from 'next/head'
import Image from 'next/image'
import AppBar from '../components/AppBar'
import styles from '../styles/Home.module.css'
import Button from '../components/Button'


export default function Home() {
  return (
    
        <div className="h-full w-full col place-items-right">

            <style jsx global>
                {`
                    body {background :#ffffff;}
                `}
            </style>

            
            <div className="h-16 text-background text-center">
                <div className=" col-span-2 text-center bg-background p-8">
                    <Button value = {'我的預約'} ></Button>
                    <Button value = {'中央大學場地預約網'}></Button>
                    <Button value = {'我的帳戶'}></Button>
                    <button type="button" className="text-right hover:bg-green-800 focus:outline-none focus:ring-4 focus:ring-green-300 font-medium rounded-full text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-800 ">
                    登出
                    </button>
                </div>

                <div className="flex md:flex-col md:flex-col col-span-2 row-span-1 justify-center text-background place-items-center">
                    <div className="flex gap-5 ">
                        {/* card 1 */}
                        <div className=" max-w-sm bg-white border border-gray-200 rounded-lg shadow-md dark:bg-gray-800 dark:border-gray-700 ">
                                <a className="inline-flex items-center">
                                <Image src="/../public/static/images/basketball.jpeg" alt="basketball" width={500} height={320} className="rounded-lg " />

                                    {/*<img className="rounded-t-lg" src={im1} alt="basketball" />*/}
                                </a>
                                <div className="p-5">
                                    <a href="#">
                                        <h5 className="mb-6 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">籃球場</h5>
                                    </a>
                                    {/*<p className="mb-3 font-normal text-gray-700 dark:text-gray-400">Here are the biggest enterprise technology acquisitions of 2021 so far, in reverse chronological order.</p>*/}
                                    <a href="#" className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                                        查看場地
                                        <svg aria-hidden="true" className="w-4 h-4 ml-2 -mr-1" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg>
                                    </a>
                                </div>
                        </div>
                        
                        {/* card 2 */}
                        <div className="max-w-sm bg-white border border-gray-200 rounded-lg shadow-md dark:bg-gray-800 dark:border-gray-700 ">
                                <a className="inline-flex items-center">
                                <Image src="/../public/static/images/badminton.jpeg" alt="basketball" width={500} height={320} className="rounded-lg " />

                                    {/*<img className="rounded-t-lg" src={im1} alt="basketball" />*/}
                                </a>
                                <div className="p-5">
                                    <a href="#">
                                        <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">羽球場</h5>
                                    </a>
                                    {/*<p className="mb-3 font-normal text-gray-700 dark:text-gray-400">Here are the biggest enterprise technology acquisitions of 2021 so far, in reverse chronological order.</p>*/}
                                    <a href="#" className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                                        查看場地
                                        <svg aria-hidden="true" className="w-4 h-4 ml-2 -mr-1" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg>
                                    </a>
                                </div>
                        </div>
                    </div>
                    <br></br>
                    <div className="flex gap-5 ">
                        {/* card 3 */}
                        <div className="max-w-sm bg-white border border-gray-200 rounded-lg shadow-md dark:bg-gray-800 dark:border-gray-700 ">
                                <a className="inline-flex items-center">
                                <Image src="/../public/static/images/tennis.jpg" alt="basketball" width={500} height={320} className="rounded-lg " />

                                    {/*<img className="rounded-t-lg" src={im1} alt="basketball" />*/}
                                </a>
                                <div className="p-5">
                                    <a href="#">
                                        <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">網球場</h5>
                                    </a>
                                    {/*<p className="mb-3 font-normal text-gray-700 dark:text-gray-400">Here are the biggest enterprise technology acquisitions of 2021 so far, in reverse chronological order.</p>*/}
                                    <a href="#" className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                                        查看場地
                                        <svg aria-hidden="true" className="w-4 h-4 ml-2 -mr-1" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg>
                                    </a>
                                </div>
                        </div>
                        {/* card 4 */}
                        <div className="max-w-sm bg-white border border-gray-200 rounded-lg shadow-md dark:bg-gray-800 dark:border-gray-700">
                                <a className="inline-flex items-center">
                                <Image src="/../public/static/images/volleyball.jpeg" alt="basketball" width={500} height={320} className="rounded-lg " />

                                    {/*<img className="rounded-t-lg" src={im1} alt="basketball" />*/}
                                </a>
                                <div className="p-5">
                                    <a href="#">
                                        <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">排球場</h5>
                                    </a>
                                    {/*<p className="mb-3 font-normal text-gray-700 dark:text-gray-400">Here are the biggest enterprise technology acquisitions of 2021 so far, in reverse chronological order.</p>*/}
                                    <a href="#" className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                                        查看場地
                                        <svg aria-hidden="true" className="w-4 h-4 ml-2 -mr-1" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg>
                                    </a>
                                </div>
                        </div>
                    </div>
                        
                        
                </div>
            </div>
        </div>
    
   );
  }
                    
            