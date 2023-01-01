import NavBar from "../components/NavBar";
import { useEffect, useState } from "react";
import styles from '../styles/Home.module.css'
import Button from '../components/Button'
import reserveService from "../services/reserveService";
const records = [
    {
        id: "1",
        href: "#",
        photo: "",
        photoAlt: "圖片",
        category: "籃球",
        courtNum: "3",
        courtStatus: "尚無空場"
    },
    {
        id: "2",
        href: "#",
        photo: "",
        photoAlt: "圖片",
        category: "羽球",
        courtNum: "4",
        courtStatus: "尚無空場"
    },
    {
        id: "3",
        href: "#",
        photo: "",
        photoAlt: "圖片",
        category: "排球",
        courtNum: "1",
        courtStatus: "尚無空場"
    },
    {
        id: "4",
        href: "#",
        photo: "",
        photoAlt: "圖片",
        category: "桌球",
        courtNum: "2",
        courtStatus: "尚無空場"
    },
    {
        id: "5",
        href: "#",
        photo: "",
        photoAlt: "圖片",
        category: "籃球",
        courtNum: "1",
        courtStatus: "尚無空場"
    },
];
export default function reserveRecord() {
    const [users, setUsers] = useState([]);
    // const [isLoading, setIsLoading] = useState(false);
    useEffect(() => {
        fetchReserves();

    }, []);

    const fetchReserves = async () => {

        const userList = await reserveService.getReservation('109403020',"watch");//還要改成動態存取
        setUsers(userList);

    }

    const cancelHandler = async (courtName: string) => {
        const cancle = await reserveService.cancelReservation(courtName);
        window.location.reload();
    }
    const checkReservation = async () => {
        location.href = 'http://localhost:3000/reservationRecord'
    }
    return (
        <div>
            <div>
                <NavBar mainPage={false} myReserve={false} myAccount={false}></NavBar>
            </div>
            <div className=" mx-auto max-w-2xl py-8 px-4 sm:py-16 sm:px-6 lg:max-w-7xl lg:px-8">
                <div className="grid grid-cols-2 gap-4">

                    <h2 className="mb-5 text-2xl font-bold tracking-tight text-theme">
                        待選清單
                    </h2>
                    <div className="col-span-1 float-right p-4 ">

                        <div className="text-sm font-medium text-gray-900 float-right">
                            <a href="http://localhost:3000/reserveRecord">
                                <button className="text-white p-2 rounded bg-teal-500 hover:bg-teal-600" onClick={() => checkReservation()}>查看預約記錄</button>
                            </a>

                        </div>

                    </div>
                </div>


                <p className="mt-1 text-sm text-gray-500">
                    加入待選清單的場地，後續如有釋出將會寄送E-mail另行通知！
                </p>


                <div className="bg-gray-400 h-0.5"></div>

                <div className="mt-3 grid grid-cols-1 gap-y-5 gap-x-6 sm:grid-cols-2 lg:grid-cols-1 xl:gap-x-8">
                    <div className="flex flex-col">
                        <div className="overflow-x-auto sm:-mx-6 lg:-mx-8">
                            <div className="py-2 inline-block min-w-full sm:px-6 lg:px-8">
                                <div className="overflow-hidden">
                                    <table className="min-w-full">
                                        <thead className="border-b">
                                            <tr className="text-xl">
                                                {/* <th scope="col" className="text-lg font-medium text-gray-900 px-6 py-4 text-center">
                                                    圖片
                                                </th> */}
                                                <th scope="col" className="text-lg font-medium text-gray-900 px-6 py-4 text-center">
                                                    場地名稱
                                                </th>
                                                <th scope="col" className="text-lg font-medium text-gray-900 px-6 py-4 text-center">
                                                    預選日期
                                                </th>
                                                <th scope="col" className="text-lg font-medium text-gray-900 px-6 py-4 text-center">
                                                    預選時間
                                                </th>
                                                <th scope="col" className="text-lg font-medium text-gray-900 px-6 py-4 text-center">
                                                    操作
                                                </th>
                                            </tr>
                                            {users.map((user:any) => (
                                                <tr>
                                                    {/* <td>
                                                        <img
                                                            src={user.photo}
                                                            alt={user.photoAlt}
                                                            className="h-full w-full object-cover object-center lg:h-full lg:w-full text-center"
                                                        />
                                                    </td> */}
                                                    <td>
                                                        <p className="text-sm font-medium text-gray-900 text-center">
                                                            {user.courtName}
                                                        </p>
                                                    </td>
                                                    <td>
                                                        <p className="text-sm font-medium text-gray-900 text-center">
                                                            {user.date}
                                                        </p>
                                                    </td>
                                                    <td>
                                                        <p className="text-sm font-medium text-gray-900 text-center">
                                                            {user.time}
                                                        </p>
                                                    </td>
                                                    <td scope="col" className="text-sm font-medium text-gray-900 px-6 py-4 text-center"><button className="text-white p-2 rounded bg-teal-500 hover:bg-teal-600" onClick={() => cancelHandler(user.courtName)}>取消待選</button></td>
                                                </tr>
                                            ))}</thead>

                                    </table>
                                </div>
                            </div>
                        </div>
                    </div>


                </div>
            </div>
        </div >

    )

}