import { useEffect, useState } from "react";
import AdminNavBar from "../components/AdminNavBar";
//import reserveService from "../services/reserveService";
import courtService from "../services/courtService";

export default function ReservationShow() {
  const [reservation, setReservation] = useState([]);
  useEffect(() => {
    fetchReservation();
  }, []);

  const [name, setName] = useState("");

  useEffect(() => {
    fetchReservation();
  }, []);

  const fetchReservation = async () => {
    const reservationList = await courtService.getReservation();
    setReservation(reservationList);
  };

  const searchHandler = async () => {
    const searchId = await courtService.getUsers(name);
    searchReservation(searchId);
  };

  const searchReservation = async (id: string) => {
    const reservationList = await courtService.getReservationByName(id);
    setReservation(reservationList);
  };

  const deleteHandler = async (id: string) => {
    await courtService.deleteReservation(id);
    window.location.reload();
  };

  return (
    <div>
      <AdminNavBar
        manageUser={false}
        manageAdmin={false}
        manageReservation={true}
        manageCourt={false}
      ></AdminNavBar>
      <div className="flex">
        <div className="flex-col p-4 w-full mx-8">
          <h2 className="text-lg text-gray-700 ml-5 mt-5">瀏覽預約紀錄</h2>

          <div className="p-4 flex items-center justify-between">
            <label htmlFor="table-search" className="sr-only">
              Search
            </label>{" "}
            {/* 搜尋 */}
            <div className="relative mt-1">
              <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                <svg
                  className="w-5 h-5 text-gray-500 dark:text-gray-400"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fillRule="evenodd"
                    d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z"
                    clipRule="evenodd"
                  ></path>
                </svg>
              </div>
              <div className="flex space-x-4">
                <input
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  type="text"
                  id="table-search"
                  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg 
								focus:ring-blue-500 focus:border-blue-500 block w-80 pl-10 p-2.5  dark:bg-[#69CBBF] dark:border-[#69CBBF] 
								dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  placeholder="以名字搜尋"
                />
                <button
                  type="button"
                  onClick={() => searchHandler()}
                  className="inline-block px-6 py-2.5 bg-[#69CBBF] text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-[#40948A] hover:shadow-lg focus:bg-[#40948A] focus:shadow-lg focus:outline-none focus:ring-0 active:bg-[#40948A] active:shadow-lg transition duration-150 ease-in-out"
                >
                  搜尋
                </button>
              </div>
            </div>
          </div>

          <div className="overflow-x-auto sm:-mx-6 lg:-mx-8">
            <div className="py-2 inline-block min-w-full sm:px-6 lg:px-8">
              <div className="overflow-hidden">
                <table className="min-w-full">
                  <thead className="border-b">
                    <tr>
                      <th
                        scope="col"
                        className="text-sm font-medium text-gray-900 px-6 py-4 text-left"
                      >
                        場地名稱
                      </th>
                      <th
                        scope="col"
                        className="text-sm font-medium text-gray-900 px-6 py-4 text-left"
                      >
                        姓名
                      </th>
                      <th
                        scope="col"
                        className="text-sm font-medium text-gray-900 px-6 py-4 text-left"
                      >
                        日期
                      </th>
                      <th
                        scope="col"
                        className="text-sm font-medium text-gray-900 px-6 py-4 text-left"
                      >
                        時間
                      </th>
                      <th
                        scope="col"
                        className="text-sm font-medium text-gray-900 px-6 py-4 text-left"
                      >
                        操作
                      </th>
                    </tr>
                  </thead>

                  {reservation.map((reservation: any) => (
                    <tbody key={reservation._id}>
                      <tr className="border-b">
                        <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                          {reservation.court.name}
                        </td>
                        <td className="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                          {reservation.user.name}
                        </td>
                        <td className="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                          {reservation.date}
                        </td>
                        <td className="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                          {reservation.time}
                        </td>
                        <td className="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                          <button
                            onClick={() => deleteHandler(reservation.id)}
                            type="button"
                            className="inline-block px-6 py-2.5 bg-[#69CBBF] text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-[#40948A] hover:shadow-lg focus:bg-[#40948A] focus:shadow-lg focus:outline-none focus:ring-0 active:bg-[#40948A] active:shadow-lg transition duration-150 ease-in-out"
                          >
                            取消預約
                          </button>
                        </td>
                      </tr>
                    </tbody>
                  ))}
                </table>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
