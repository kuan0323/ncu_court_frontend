import { useEffect, useState } from "react";
import Cookies from "js-cookie";
import NavBar from "../components/NavBar";
import styles from "../styles/Home.module.css";
import Button from "../components/Button";
import reserveService from "../services/reserveService";
import { Link } from "react-router-dom";

export default function ReserveRecord() {
  const [users, setUsers] = useState([]);
  // const [isLoading, setIsLoading] = useState(false);
  useEffect(() => {
    fetchReserves();
  }, []);

  const fetchReserves = async () => {
    const userList = await reserveService.getReservation();
    setUsers(userList);
  };

  const cancelHandler = async (reservationId: string) => {
    const cancle = await reserveService.cancelReservation(reservationId);
    window.location.reload();
  };

  return (
    <div>
      <div>
        <NavBar mainPage={false} myReserve={true} myAccount={false}></NavBar>
      </div>

      <div className=" mx-auto max-w-2xl py-8 px-4 sm:py-16 sm:px-6 lg:max-w-7xl lg:px-8">
        <div className="grid grid-cols-2 gap-4">
          <div className="col-span-1 float-left p-4">
            <h2 className="mb-1 text-2xl font-bold tracking-tight text-theme ">
              預約記錄
            </h2>
          </div>
          {/* <div className="col-span-1 float-right p-4 "> */}

          {/* <div className="text-sm font-medium text-gray-900 float-right">
                            <a href="http://localhost:3000/pickingList">
                                <button className="text-white p-2 rounded bg-teal-500 hover:bg-teal-600" onClick={() =>checkPickingList()}>查看待選清單</button>
                            </a>
                                
                        </div> */}

          {/* </div> */}
        </div>

        <div className="bg-gray-400 h-0.5"></div>

        <div className="mt-3 grid grid-cols-1 gap-y-5 gap-x-6 sm:grid-cols-2 lg:grid-cols-1 xl:gap-x-8">
          <div className="flex flex-col">
            <div className="overflow-x-auto sm:-mx-6 lg:-mx-8">
              <div className="py-2 inline-block min-w-full sm:px-6 lg:px-8">
                <div className="overflow-hidden">
                  <table className="min-w-full">
                    <thead className="border-b">
                      <tr className="text-xl">
                        <th
                          scope="col"
                          className="text-lg font-medium text-gray-900 px-6 py-4 text-center"
                        >
                          場地名稱
                        </th>
                        <th
                          scope="col"
                          className="text-lg font-medium text-gray-900 px-6 py-4 text-center"
                        >
                          預約日期
                        </th>
                        <th
                          scope="col"
                          className="text-lg font-medium text-gray-900 px-6 py-4 text-center"
                        >
                          預約時間
                        </th>
                        <th
                          scope="col"
                          className="text-lg font-medium text-gray-900 px-6 py-4 text-center"
                        >
                          場地價格
                        </th>
                        <th
                          scope="col"
                          className="text-lg font-medium text-gray-900 px-6 py-4 text-center"
                        >
                          操作
                        </th>
                      </tr>
                      {users.map((user: any) => (
                        <tr key={user.name}>
                          <td>
                            <p className="text-sm font-medium text-gray-900 text-center">
                              {user.court.name}
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
                          <td>
                            <p className="text-sm font-medium text-gray-900 text-center">
                              {user.court.price}
                            </p>
                          </td>
                          <td
                            scope="col"
                            className="text-sm font-medium text-gray-900 px-6 py-4 text-center"
                          >
                            <button
                              className="text-white p-2 rounded bg-teal-500 hover:bg-teal-600"
                              onClick={() => cancelHandler(user.id)}
                            >
                              取消預約
                            </button>
                          </td>
                        </tr>
                      ))}
                    </thead>
                  </table>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
