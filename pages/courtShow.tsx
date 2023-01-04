import AdminNavBar from "../components/AdminNavBar";
import courtService from "../services/courtService";
import { useEffect, useState } from "react";

export default function CourtShow() {

    const [court, setCourt] = useState([]);
    useEffect(() => {
        fetchCourt();
    }, []);

    const fetchCourt = async () => {
        const courtList = await courtService.getCourt();
        setCourt(courtList);
    }


    return (
        <div>
            <AdminNavBar manageUser={false} manageAdmin={false} manageReservation={false} manageCourt={false}></AdminNavBar>
            <div className="flex">
                <div className="flex-col p-4 w-full mx-8">
                    <div>
                        <h2 className="inline-block text-lg text-gray-700 ml-5 mt-5">瀏覽場地</h2>
                        <button type="button" className="inline-block ml-5 px-6 py-2.5 bg-[#69CBBF] text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-[#40948A] hover:shadow-lg focus:bg-[#40948A] focus:shadow-lg focus:outline-none focus:ring-0 active:bg-[#40948A] active:shadow-lg transition duration-150 ease-in-out ">
                            <a href="http://localhost:3000/courtCreate"  className="text-white" >新增場地</a>
                        </button>
                    </div>
                    <div className="overflow-x-auto sm:-mx-6 lg:-mx-8">
                        <div className="py-2 inline-block min-w-full sm:px-6 lg:px-8">
                            <div className="overflow-hidden">
                                <table className="min-w-full">
                                    <thead className="border-b">
                                        <tr>
                                            <th scope="col" className="text-sm font-medium text-gray-900 px-6 py-4 text-left">
                                                場地名稱
                                            </th>
                                            <th scope="col" className="text-sm font-medium text-gray-900 px-6 py-4 text-left">
                                                場地類別
                                            </th>
                                            <th scope="col" className="text-sm font-medium text-gray-900 px-6 py-4 text-left">
                                                場地費用
                                            </th>
                                            <th scope="col" className="text-sm font-medium text-gray-900 px-6 py-4 text-left">
                                                操作
                                            </th>
                                        </tr>
                                    </thead>
                                    {
                                        court.map(
                                            (court: any) =>
                                                <tbody key={court.name}>
                                                    <tr className="border-b">
                                                        <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">{court.name}</td>
                                                        <td className="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">{court.type}</td>
                                                        <td className="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">{court.price}</td>
                                                        <td className="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                                                            <div className="flex space-x-4 ">
                                                                <button type="button" className="inline-block px-6 py-2.5 bg-[#69CBBF] text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-[#40948A] hover:shadow-lg focus:bg-[#40948A] focus:shadow-lg focus:outline-none focus:ring-0 active:bg-[#40948A] active:shadow-lg transition duration-150 ease-in-out">刪除</button>
                                                                <button type="button" className="inline-block px-6 py-2.5 bg-[#69CBBF] text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-[#40948A] hover:shadow-lg focus:bg-[#40948A] focus:shadow-lg focus:outline-none focus:ring-0 active:bg-[#40948A] active:shadow-lg transition duration-150 ease-in-out">修改</button>
                                                                <button type="button" className="inline-block px-6 py-2.5 bg-[#69CBBF] text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-[#40948A] hover:shadow-lg focus:bg-[#40948A] focus:shadow-lg focus:outline-none focus:ring-0 active:bg-[#40948A] active:shadow-lg transition duration-150 ease-in-out">留言</button>
                                                            </div>
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
}
