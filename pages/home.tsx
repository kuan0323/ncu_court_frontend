import NavBar from '../components/NavBar'
import Image from "next/image";



export default function Home() {

    return (
        <div className="bg-gray-200">
            <div>
                <NavBar mainPage={false} myReserve={false} myAccount={false}></NavBar>
            </div>
            {/* <!-- component --> */}
            <section className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-4 py-12">
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-2 gap-6">
                    {/* card 1 */}
                    <div className="shadow-md w-full bg-white rounded-lg p-12 flex flex-col justify-center items-center">
                        <div className="mb-8">
                            <Image className="object-center object-cover rounded-lg h-52 w-full" src="/../public/static/images/basketball.jpeg" width={100} height={320} alt="basketball" />
                        </div>
                        <div className="text-center">
                            <p className="text-xl text-gray-700 font-bold mb-2">籃球場</p>
                            {/* <p className="text-base text-gray-400 font-normal">Software Engineer</p> */}
                            <ul className="mt-3 flex flex-wrap">
                                <div className="p-5">
                                    <a href="#" className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                                        查看場地
                                        <svg aria-hidden="true" className="w-4 h-4 ml-2 -mr-1" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg>
                                    </a>
                                </div>
                            </ul>
                        </div>
                    </div>
                    {/* card 2 */}
                    <div className="shadow-md w-full bg-white rounded-lg p-12 flex flex-col justify-center items-center">
                        <div className="mb-8">
                            <Image className="object-center object-cover rounded-lg h-52 w-full" src="/../public/static/images/badminton.jpeg" width={100} height={320} alt="badminton" />
                        </div>
                        <div className="text-center">
                            <p className="text-xl text-gray-700 font-bold mb-2">羽球場</p>
                            {/* <p className="text-base text-gray-400 font-normal">Software Engineer</p> */}
                            <ul className="mt-3 flex flex-wrap">
                                <div className="p-5">
                                    <a href="#" className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                                        查看場地
                                        <svg aria-hidden="true" className="w-4 h-4 ml-2 -mr-1" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg>
                                    </a>
                                </div>
                            </ul>
                        </div>
                    </div>
                    {/* card 3 */}
                    <div className="shadow-md w-full bg-white rounded-lg p-12 flex flex-col justify-center items-center">
                        <div className="mb-8">
                            <Image className="object-center object-cover rounded-lg h-52 w-full" src="/../public/static/images/tennis.jpg" width={100} height={320} alt="tennis" />
                        </div>
                        <div className="text-center">
                            <p className="text-xl text-gray-700 font-bold mb-2">網球場</p>
                            {/* <p className="text-base text-gray-400 font-normal">Software Engineer</p> */}
                            <ul className="mt-3 flex flex-wrap">
                                <div className="p-5">
                                    <a href="#" className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                                        查看場地
                                        <svg aria-hidden="true" className="w-4 h-4 ml-2 -mr-1" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg>
                                    </a>
                                </div>
                            </ul>
                        </div>
                    </div>
                    {/* card 4 */}
                    <div className="shadow-md w-full bg-white rounded-lg p-12 flex flex-col justify-center items-center">
                        <div className="mb-8">
                            <Image className="object-center object-cover rounded-lg h-52 w-full" src="/../public/static/images/volleyball.jpeg" width={100} height={320} alt="volleyball" />
                        </div>
                        <div className="text-center">
                            <p className="text-xl text-gray-700 font-bold mb-2">排球場</p>
                            {/* <p className="text-base text-gray-400 font-normal">Software Engineer</p> */}
                            <ul className="mt-3 flex flex-wrap">
                                <div className="p-5">
                                    <a href="#" className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                                        查看場地
                                        <svg aria-hidden="true" className="w-4 h-4 ml-2 -mr-1" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg>
                                    </a>
                                </div>
                            </ul>
                        </div>
                    </div>
                </div>
            </section>
        </div>

    );
}