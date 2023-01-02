import AdminNavBar from "../components/AdminNavBar";
import exampleService from "../services/adminUserService2";
import { useEffect, useState } from "react";

export default function userShow() {

    const [users, setUsers] = useState([]);
    useEffect(() => {
        fetchUsers();
        fetchUsersLastModified(); 
    }, []);

    const fetchUsers = async () => {
        const userList = await exampleService.searchByDate('createdTime', 'regular');
        setUsers(userList);
    }

    const fetchUsersLastModified = async () => {
        const userList = await exampleService.searchByDate('lastModified', 'regular');
        setUsers(userList);
    }

    /*const fetchUsersByName = async () => {
        const userList = await exampleService.searchByName('lastModified', 'regular', searchName);
        setUsers(userList);
    }*/

	return(
        
		<div>
			<AdminNavBar manageUser={false} manageAdmin={false} manageReservation={false} manageCourt={false}></AdminNavBar>
			<div className="flex">
                <div className="flex-col p-4 w-full mx-8">

                <h2 className="text-lg text-gray-700 ml-5 mt-5">瀏覽會員</h2>

                <div className="p-4 flex items-center justify-between">


                <label htmlFor="table-search" className="sr-only">Search</label>
                <div className="relative mt-1">
                    <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                        <svg className="w-5 h-5 text-gray-500 dark:text-gray-400" fill="currentColor" viewBox="0 0 20 20"
                            xmlns="http://www.w3.org/2000/svg">
                            <path fill-rule="evenodd"
                            d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z"
                            clip-rule="evenodd"></path>
                        </svg>
                    </div>
                    <input type="text" id="table-search" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-80 pl-10 p-2.5  dark:bg-[#69CBBF] dark:border-[#69CBBF] dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" 
                    placeholder="以名字搜尋" />

                    <button type="button" className="inline-block px-6 py-2.5 bg-[#69CBBF] text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-[#40948A] hover:shadow-lg focus:bg-[#40948A] focus:shadow-lg focus:outline-none focus:ring-0 active:bg-[#40948A] active:shadow-lg transition duration-150 ease-in-out">確認</button>

                </div>

                <div className="flex space-x-4">
                    <button onClick={() => fetchUsers()} type="button" className="inline-block py-3 px-4  items-center text-sm font-medium leading-none text-gray-600 bg-gray-200 hover:bg-gray-300 cursor-pointer rounded">以註冊日期排序</button>
                    <button onClick={() => fetchUsersLastModified()} type="button" className="inline-block py-3 px-4  items-center text-sm font-medium leading-none text-gray-600 bg-gray-200 hover:bg-gray-300 cursor-pointer rounded">以修改日期排序</button>
                </div>

                </div>

                <div className="overflow-x-auto sm:-mx-6 lg:-mx-8">
                <div className="py-2 inline-block min-w-full sm:px-6 lg:px-8">
                    <div className="overflow-hidden">

                    <table className="min-w-full">
                        <thead className="border-b">
                        <tr>
                            <th scope="col" className="text-sm font-medium text-gray-900 px-6 py-4 text-left">
                            姓名
                            </th>
                            <th scope="col" className="text-sm font-medium text-gray-900 px-6 py-4 text-left">
                            學號
                            </th>
                            <th scope="col" className="text-sm font-medium text-gray-900 px-6 py-4 text-left">
                            Email
                            </th>
                            <th scope="col" className="text-sm font-medium text-gray-900 px-6 py-4 text-left">
                            電話
                            </th>
                            <th scope="col" className="text-sm font-medium text-gray-900 px-6 py-4 text-left">
                            操作
                            </th>
                        </tr>
                        </thead>

                        {
                             users.map(
                                (user: any) =>
                                    <tbody>
                                    <tr className="border-b">
                                        <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">{user.name}</td>
                                        <td className="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">{user.studentId}</td>
                                        <td className="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">{user.email}</td>
                                        <td className="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">{user.phone}</td>
                                        <td className="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                                        <button type="button" className="inline-block px-6 py-2.5 bg-[#69CBBF] text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-[#40948A] hover:shadow-lg focus:bg-[#40948A] focus:shadow-lg focus:outline-none focus:ring-0 active:bg-[#40948A] active:shadow-lg transition duration-150 ease-in-out">刪除會員</button>
                                        </td>
                                    </tr>
                                    </tbody>
                             )
                        }

                    </table>
                    </div>
                </div>
                </div>
            </div>
          </div>

		</div>
	)

    // return( 
	// 	<div>
	// 	<NavBar mainPage={false} myReserve={false} myAccount={false}></NavBar>
		
	// <div>
		
    // <script src="https://cdn.jsdelivr.net/gh/alpinejs/alpine@v2.x.x/dist/alpine.min.js" defer></script>
    
	
	// <div className="md:flex-row">
		
    //     <nav>
    //       <div className=" w-60 h-full shadow-md bg-[#69CBBF] px-1 absolute">
    //         <ul className="relative">
    //           <li className="relative">
	//             <a className="flex items-center text-base py-4 px-6 h-12 overflow-hidden text-gray-700 text-ellipsis whitespace-nowrap rounded hover:text-gray-900 
	//				hover:bg-gray-100 transition duration-300 ease-in-out" href="admin_member" data-mdb-ripple="true" data-mdb-ripple-color="dark">會員管理</a>
    //           </li>
    //           <li className="relative">
	//             <a className="flex items-center text-base py-4 px-6 h-12 overflow-hidden text-gray-700 text-ellipsis whitespace-nowrap rounded hover:text-gray-900 
	//				hover:bg-gray-100 transition duration-300 ease-in-out" href="#!" data-mdb-ripple="true" data-mdb-ripple-color="dark">管理員管理</a>
    //           </li>
    //           <li className="relative">
	//             <a className="flex items-center text-base py-4 px-6 h-12 overflow-hidden text-gray-700 text-ellipsis whitespace-nowrap rounded hover:text-gray-900 
	//				hover:bg-gray-100 transition duration-300 ease-in-out" href="#!" data-mdb-ripple="true" data-mdb-ripple-color="dark">預約紀錄管理</a>
    //           </li>
    //           <li className="relative">
	//             <a className="flex items-center text-base py-4 px-6 h-12 overflow-hidden text-gray-700 text-ellipsis whitespace-nowrap rounded hover:text-gray-900 
	//				hover:bg-gray-100 transition duration-300 ease-in-out" href="admin_court" data-mdb-ripple="true" data-mdb-ripple-color="dark">場地管理</a>
    //           </li>
    //         </ul>
    //         <div className="flex space-x-2 justify-center">
	//           <button type="button" className="inline-block px-6 py-2.5 bg-[#40948A] text-white font-medium text-xs leading-tight uppercase shadow-md hover:bg-gray-100 
	//				hover:shadow-lg focus:bg-gray-100 focus:shadow-lg focus:outline-none rounded-full focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out">登出</button>
    //         </div>
    //       </div>
    //     </nav>
	//   </div>
	

    //   <section>

    //       <div className="flex flex-col ml-60">

    //         <h2 className="text-lg text-gray-700 ml-5 mt-5">瀏覽會員</h2>

    //         <div className="p-4 flex items-center justify-between">


    //           <label htmlFor="table-search" className="sr-only">Search</label>
    //           <div className="relative mt-1">
    //             <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
    //               <svg className="w-5 h-5 text-gray-500 dark:text-gray-400" fill="currentColor" viewBox="0 0 20 20"
    //                 xmlns="http://www.w3.org/2000/svg">
    //                 <path fill-rule="evenodd"
    //                   d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z"
    //                   clip-rule="evenodd"></path>
    //               </svg>
    //             </div>
    //             <input type="text" id="table-search" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-80 pl-10 p-2.5  dark:bg-[#69CBBF] dark:border-[#69CBBF] dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="以名字搜尋" />
    //           </div>

    //           <div className="flex space-x-4">
    //             <button type="button" className="inline-block py-3 px-4  items-center text-sm font-medium leading-none text-gray-600 bg-gray-200 hover:bg-gray-300 cursor-pointer rounded">以註冊日期排序</button>
    //             <button type="button" className="inline-block py-3 px-4  items-center text-sm font-medium leading-none text-gray-600 bg-gray-200 hover:bg-gray-300 cursor-pointer rounded">以修改日期排序</button>
    //           </div>

    //         </div>

    //         <div className="overflow-x-auto sm:-mx-6 lg:-mx-8">
    //           <div className="py-2 inline-block min-w-full sm:px-6 lg:px-8">
    //             <div className="overflow-hidden">

    //               <table className="min-w-full">
    //                 <thead className="border-b">
    //                   <tr>
    //                     <th scope="col" className="text-sm font-medium text-gray-900 px-6 py-4 text-left">
    //                       姓名
    //                     </th>
    //                     <th scope="col" className="text-sm font-medium text-gray-900 px-6 py-4 text-left">
    //                       學號
    //                     </th>
    //                     <th scope="col" className="text-sm font-medium text-gray-900 px-6 py-4 text-left">
    //                       Email
    //                     </th>
    //                     <th scope="col" className="text-sm font-medium text-gray-900 px-6 py-4 text-left">
    //                       電話
    //                     </th>
    //                     <th scope="col" className="text-sm font-medium text-gray-900 px-6 py-4 text-left">
    //                       操作
    //                     </th>
    //                   </tr>
    //                 </thead>

    //                 <tbody>
    //                   <tr className="border-b">
    //                     <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900"> </td>
    //                     <td className="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap"> </td>
    //                     <td className="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap"> </td>
    //                     <td className="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap"> </td>
    //                     <td className="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
    //                       <button type="button" className="inline-block px-6 py-2.5 bg-[#69CBBF] text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-[#40948A] hover:shadow-lg focus:bg-[#40948A] focus:shadow-lg focus:outline-none focus:ring-0 active:bg-[#40948A] active:shadow-lg transition duration-150 ease-in-out">刪除會員</button>
    //                     </td>
    //                   </tr>
    //                 </tbody>

    //               </table>
    //             </div>
    //           </div>
    //         </div>
    //       </div>
    //     </section>

    //     </div>
	// 	</div>
    // )
}