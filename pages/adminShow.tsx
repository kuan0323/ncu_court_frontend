import AdminNavBar from "../components/AdminNavBar";
import { useEffect, useState } from "react";
import adminUserService from "../services/adminUserService";
import Cookies from "js-cookie";

export default function AdminShow() {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    fetchAdmin();
  }, []);

  /*const fetchUsers = async () => {
        const userList = await adminUserService.getAdminUser('109403020');
        setUsers(userList);
    }*/

    const fetchAdmin = async () => {
        const userList = await adminUserService.getUsers2('createdTime', 'admin');
        setUsers(userList);
    }

    return(

        <div>
            <AdminNavBar manageUser={false} manageAdmin={false} manageReservation={false} manageCourt={false}></AdminNavBar>
            <div className="flex">
                <div className="flex-col p-4 w-full mx-8">
                    <h2 className="text-lg text-gray-700 ml-5 mt-5">瀏覽管理員</h2>
                    
                    <div className="overflow-x-auto sm:-mx-6 lg:-mx-8">
                        <div className="py-2 inline-block min-w-full sm:px-6 lg:px-8">
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
                                        <tbody key={user.id}>
                                        <tr className="border-b">
                                        <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">{user.name}</td>
                                        <td className="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">{user.studentId}</td>
                                        <td className="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">{user.email}</td>
                                        <td className="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">{user.phone}</td>
                                        <td className="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                                            <div className="flex space-x-4 ">
                                                <button type="button" className="inline-block px-6 py-2.5 bg-[#69CBBF] text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-[#40948A] hover:shadow-lg focus:bg-[#40948A] focus:shadow-lg focus:outline-none focus:ring-0 active:bg-[#40948A] active:shadow-lg transition duration-150 ease-in-out">刪除</button>
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
          <div className="overflow-x-auto sm:-mx-6 lg:-mx-8">
            <div className="py-2 inline-block min-w-full sm:px-6 lg:px-8">
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
                  <tbody key={user.id}>
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
                        <div className="flex space-x-4 ">
                          <button
                            type="button"
                            className="inline-block px-6 py-2.5 bg-[#69CBBF] text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-[#40948A] hover:shadow-lg focus:bg-[#40948A] focus:shadow-lg focus:outline-none focus:ring-0 active:bg-[#40948A] active:shadow-lg transition duration-150 ease-in-out"
                          >
                            刪除
                          </button>
                        </div>
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
  );
}
