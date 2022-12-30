import NavBar from "../components/NavBar";
import Image from "next/image";


export default function basketball_courts() {
  return (
    <div className="bg-white ">
      <div>
        <NavBar mainPage={false} myReserve={false} myAccount={false}></NavBar>
      </div>
      
    <div className="flex min-h-screen w-full flex-wrap content-center justify-center p-5 bg-gray-200">
        <div className="grid grid-cols-2 gap-3">
            {/* card 1 */}
            <div className="shadow-md rounded-lg w-80 bg-white p-3">
            <Image className="rounded-lg h-52 w-full object-cover" src="/../public/static/images/basketball.jpeg" alt="basketball" width={100} height={320} />
            <ul className="mt-3 flex flex-wrap">
                <div className="p-5">
                                    
                                        <h5 className="mb-6 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">籃球場</h5>
                                    
                                    {/*<p className="mb-3 font-normal text-gray-700 dark:text-gray-400">Here are the biggest enterprise technology acquisitions of 2021 so far, in reverse chronological order.</p>*/}
                                    <a href="#" className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                                        查看場地
                                        <svg aria-hidden="true" className="w-4 h-4 ml-2 -mr-1" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg>
                                    </a>
                </div>
            </ul>
            </div>

            {/* card 2 */}
            <div className="shadow-md rounded-lg w-80 bg-white p-3">
            <Image className="rounded-lg h-52 w-full object-cover" src="/../public/static/images/badminton.jpeg" alt="badminton" width={100} height={320}  />
            <ul className="mt-3 flex flex-wrap">
                <div className="p-5">
                                    
                                        <h5 className="mb-6 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">羽球場</h5>
                                    
                                    {/*<p className="mb-3 font-normal text-gray-700 dark:text-gray-400">Here are the biggest enterprise technology acquisitions of 2021 so far, in reverse chronological order.</p>*/}
                                    <a href="#" className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                                        查看場地
                                        <svg aria-hidden="true" className="w-4 h-4 ml-2 -mr-1" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg>
                                    </a>
                </div>
            </ul>
            </div>

            {/* card 3 */}
            <div className="shadow-md rounded-lg w-80 bg-white p-3">
            <Image className="rounded-lg h-52 w-full object-cover" src="/../public/static/images/tennis.jpg" alt="tennis" width={100} height={320} />
            <ul className="mt-3 flex flex-wrap">
                <div className="p-5">
                                        <h5 className="mb-6 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">網球場</h5>
                                    
                                    {/*<p className="mb-3 font-normal text-gray-700 dark:text-gray-400">Here are the biggest enterprise technology acquisitions of 2021 so far, in reverse chronological order.</p>*/}
                                    <a href="#" className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                                        查看場地
                                        <svg aria-hidden="true" className="w-4 h-4 ml-2 -mr-1" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg>
                                    </a>
                </div>
            </ul>
            </div>

            {/* card 4 */}
            <div className="shadow-md rounded-lg w-80 bg-white p-3">
            <Image className="rounded-lg h-52 w-full object-cover" src="/../public/static/images/volleyball.jpeg" alt="volleyball" width={100} height={320} />
            <ul className="mt-3 flex flex-wrap">
                <div className="p-5">
                                    
                                        <h5 className="mb-6 text-2xl font-bold tracking-tight text-gray-900 dark:text-white"> 排球場</h5>
                                    
                                    {/*<p className="mb-3 font-normal text-gray-700 dark:text-gray-400">Here are the biggest enterprise technology acquisitions of 2021 so far, in reverse chronological order.</p>*/}
                                    <a href="#" className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                                        查看場地
                                        <svg aria-hidden="true" className="w-4 h-4 ml-2 -mr-1" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg>
                                    </a>
                </div>
            </ul>
            </div>
        </div>
    </div>
      
    </div>
  );
}