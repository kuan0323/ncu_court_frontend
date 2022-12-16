import admin_navibar from "../components/admin_navbar";

export default function admin_member() {
    return( 
      
      <div className="md:flex-row">
        <div>
        <nav>
        <div className="w-60 h-full shadow-md bg-[#69CBBF] px-1 absolute">
        <ul className="relative">
          <li className="relative">
            <a className="flex items-center text-base py-4 px-6 h-12 overflow-hidden text-gray-700 text-ellipsis whitespace-nowrap rounded hover:text-gray-900 hover:bg-gray-100 transition duration-300 ease-in-out" href="#!" data-mdb-ripple="true" data-mdb-ripple-color="dark">會員管理</a>
          </li>
          <li className="relative">
            <a className="flex items-center text-base py-4 px-6 h-12 overflow-hidden text-gray-700 text-ellipsis whitespace-nowrap rounded hover:text-gray-900 hover:bg-gray-100 transition duration-300 ease-in-out" href="#!" data-mdb-ripple="true" data-mdb-ripple-color="dark">管理員管理</a>
          </li>
          <li className="relative">
            <a className="flex items-center text-base py-4 px-6 h-12 overflow-hidden text-gray-700 text-ellipsis whitespace-nowrap rounded hover:text-gray-900 hover:bg-gray-100 transition duration-300 ease-in-out" href="#!" data-mdb-ripple="true" data-mdb-ripple-color="dark">預約紀錄管理</a>
          </li>
          <li className="relative">
            <a className="flex items-center text-base py-4 px-6 h-12 overflow-hidden text-gray-700 text-ellipsis whitespace-nowrap rounded hover:text-gray-900 hover:bg-gray-100 transition duration-300 ease-in-out" href="#!" data-mdb-ripple="true" data-mdb-ripple-color="dark">場地管理</a>
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

                </table>
              </div>
            </div>
          </div>
        </div>
        </section>

        </div>


    )
  }