import AdminNavBar from "../components/AdminNavBar";
import { useEffect, useState } from "react";
import adminUserService from "../services/adminUserService";

export default function UserShow() {
  const [users, setUsers] = useState([]);

  const [users, setUsers] = useState([]);

  useEffect(() => {
    fetchUsers();
    //fetchUsersLastModified();
  }, []);

  //默認排序、按註冊日期排序
  const fetchUsers = async () => {
    const userList = await adminUserService.getUsers(
      "createdTime",
      "regular",
      ""
    );
    setUsers(userList);
  };

  //默認排序、按註冊日期排序
  const fetchUsers = async () => {
    const userList = await adminUserService.getUsers2("createdTime", "regular");
    setUsers(userList);
  };

  //按修改日期排列
  const fetchUsersLastModified = async () => {
    const userList = await adminUserService.getUsers2(
      "lastModified",
      "regular"
    );
    setUsers(userList);
  };

  //按姓名搜尋
  const fetchUsersByName = async () => {
    const userList = await adminUserService.getUsers(
      "createdTime",
      "regular",
      name
    );
    setUsers(userList);
  };

  const deleteHandler = async (id: string) => {
    await adminUserService.delete(id);
    window.location.reload();
  };

  return (
    <div>
      <AdminNavBar
        manageUser={false}
        manageAdmin={false}
        manageReservation={false}
        manageCourt={false}
      ></AdminNavBar>
      <div className="flex">
        <div className="flex-col p-4 w-full mx-8">
          <h2 className="text-lg text-gray-700 ml-5 mt-5">瀏覽會員</h2>

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
                  onClick={() => fetchUsersByName()}
                  className="inline-block px-6 py-2.5 bg-[#69CBBF] text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-[#40948A] hover:shadow-lg focus:bg-[#40948A] focus:shadow-lg focus:outline-none focus:ring-0 active:bg-[#40948A] active:shadow-lg transition duration-150 ease-in-out"
                >
                  搜尋
                </button>
              </div>
            </div>
            <div className="flex space-x-4">
              <button
                onClick={() => fetchUsers()}
                type="button"
                className="inline-block py-3 px-4  items-center text-sm font-medium leading-none text-gray-600 bg-gray-200 hover:bg-gray-300 cursor-pointer rounded"
              >
                以註冊日期排序
              </button>
              <button
                onClick={() => fetchUsersLastModified()}
                type="button"
                className="inline-block py-3 px-4  items-center text-sm font-medium leading-none text-gray-600 bg-gray-200 hover:bg-gray-300 cursor-pointer rounded"
              >
                以修改日期排序
              </button>
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
                        姓名
                      </th>
                      <th
                        scope="col"
                        className="text-sm font-medium text-gray-900 px-6 py-4 text-left"
                      >
                        學號
                      </th>
                      <th
                        scope="col"
                        className="text-sm font-medium text-gray-900 px-6 py-4 text-left"
                      >
                        Email
                      </th>
                      <th
                        scope="col"
                        className="text-sm font-medium text-gray-900 px-6 py-4 text-left"
                      >
                        電話
                      </th>
                      <th
                        scope="col"
                        className="text-sm font-medium text-gray-900 px-6 py-4 text-left"
                      >
                        操作
                      </th>
                    </tr>
                  </thead>

                  {users.map((user: any) => (
                    <tbody key={user.studentId}>
                      <tr className="border-b">
                        <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                          {user.name}
                        </td>
                        <td className="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                          {user.studentId}
                        </td>
                        <td className="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                          {user.email}
                        </td>
                        <td className="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                          {user.phone}
                        </td>
                        <td className="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                          <button
                            onClick={() => deleteHandler(user.id)}
                            type="button"
                            className="inline-block px-6 py-2.5 bg-[#69CBBF] text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-[#40948A] hover:shadow-lg focus:bg-[#40948A] focus:shadow-lg focus:outline-none focus:ring-0 active:bg-[#40948A] active:shadow-lg transition duration-150 ease-in-out"
                          >
                            刪除會員
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
