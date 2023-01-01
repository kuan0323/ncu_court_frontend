// import admin_navibar from "../components/admin_navbar";
import exampleService from "../services/exampleService2";
import AppBar from "../components/AppBar";
import { useEffect, useState } from "react";
import Cookies from 'js-cookie';
export default function AdminMember() {

    const [users, setUsers] = useState([]);
    useEffect(() => {
        fetchUsers();
    }, []);

    const fetchUsers = async () => {
        const userList = await exampleService.getExample('createdTime', 'regular');
        setUsers(userList);
    }

    return (
        <div className="md:flex-row">
            <div>
                <nav>
                    <div className="w-60 h-full shadow-md bg-[#69CBBF] px-1 absolute">
                        <ul className="relative">
                            <li className="relative">
                                <a className="flex items-center text-base py-4 px-6 h-12 overflow-hidden text-gray-700 text-ellipsis whitespace-nowrap rounded hover:text-gray-900 hover:bg-gray-100 transition duration-300 ease-in-out" href="adminMember" data-mdb-ripple="true" data-mdb-ripple-color="dark">會員管理</a>
                            </li>
                            <li className="relative">
                                <a className="flex items-center text-base py-4 px-6 h-12 overflow-hidden text-gray-700 text-ellipsis whitespace-nowrap rounded hover:text-gray-900 hover:bg-gray-100 transition duration-300 ease-in-out" href="#!" data-mdb-ripple="true" data-mdb-ripple-color="dark">管理員管理</a>
                            </li>
                            <li className="relative">
                                <a className="flex items-center text-base py-4 px-6 h-12 overflow-hidden text-gray-700 text-ellipsis whitespace-nowrap rounded hover:text-gray-900 hover:bg-gray-100 transition duration-300 ease-in-out" href="#!" data-mdb-ripple="true" data-mdb-ripple-color="dark">預約紀錄管理</a>
                            </li>
                            <li className="relative">
                                <a className="flex items-center text-base py-4 px-6 h-12 overflow-hidden text-gray-700 text-ellipsis whitespace-nowrap rounded hover:text-gray-900 hover:bg-gray-100 transition duration-300 ease-in-out" href="" data-mdb-ripple="true" data-mdb-ripple-color="dark">場地管理</a>
                            </li>
                        </ul>
                        <div className="flex space-x-2 justify-center">
                            <button type="button" className="inline-block px-6 py-2.5 bg-[#40948A] text-white font-medium text-xs leading-tight uppercase shadow-md hover:bg-gray-100 hover:shadow-lg focus:bg-gray-100 focus:shadow-lg focus:outline-none rounded-full focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out">登出</button>
                        </div>
                    </div>
                </nav>
            </div>

            <section>

                <div className="flex flex-col ml-60">
                    <h2 className="text-lg text-gray-700 ml-5 mt-5">瀏覽會員</h2>
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
                                            (a: any) =>
                                                <tbody key={a.studentId}>

                                                    <tr className="border-b">
                                                        <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">{a.name}</td>{/* 姓名 */}
                                                        <td className="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap"> {a.studentId}<div></div></td>{/* 學號 */}
                                                        <td className="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap"> {a.email}</td>{/* Email */}
                                                        <td className="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap"> {a.phone}</td>{/* 電話 */}
                                                        <button type="button" className="inline-block px-6 py-2.5 bg-[#69CBBF] text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-[#40948A] hover:shadow-lg focus:bg-[#40948A] focus:shadow-lg focus:outline-none focus:ring-0 active:bg-[#40948A] active:shadow-lg transition duration-150 ease-in-out">刪除會員</button>
                                                    </tr>

                                                </tbody>)}

                                </table>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <div>

            </div>


        </div>


    )
}