import Head from 'next/head'
import { useEffect, useState } from "react";
import NavBar from '../components/NavBar'
import Cookies from 'js-cookie';
import UserService from "../services/userService";



export default function editAccount() {
    const [showModal, setShowModal] = useState(true);
    const [users, setUsers] = useState([]);
    
    useEffect(() => {
        fetchUsers();
        //editHandler();
    }, []);

    const fetchUsers = async () => {
        const userList = await UserService.getUser('specificName', 'regular');
        setUsers(userList);
    }

    //console.log("edit");
    const editHandler = async () => {
      //console.log("test");
      const email_Element = document.getElementById("email");
      const email = email_Element.value; // 紅字可以不用理它，可以正常運作

      const name_Element = document.getElementById("name");
      const name = name_Element.value; // 紅字可以不用理它，可以正常運作

      const phone_Element = document.getElementById("phone");
      const phone = phone_Element.value; // 紅字可以不用理它，可以正常運作

      const password_old_Element = document.getElementById("password_old");
      const password_old = password_old_Element.value; // 紅字可以不用理它，可以正常運作

      const password_new1_Element = document.getElementById("password_new1");
      const password_new1 = password_new1_Element.value; // 紅字可以不用理它，可以正常運作

      const password_new2_Element = document.getElementById("password_new2");
      const password_new2 = password_new2_Element.value; // 紅字可以不用理它，可以正常運作
      console.log("test");
      
      const edit = await UserService.editUsers(name, phone, email, password_old, password_new1);
      console.log("test2");
      console.log(typeof edit);
      //window.location.reload();

  }
    
  return (
    
    <div className="bg-white">
      <div>
        <NavBar mainPage={false} myReserve={false} myAccount={false}></NavBar>
      </div>
      <div className=" col-span-2 row-span-1 text-background place-items-center">
        <div className="flex md:flex-col justify-center items-center mt-40 ">

        {/* modal */}
        {showModal ? (
        <div className="fixed  inset-0 bg-black bg-opacity-25 backdrop-blur-sm flex justify-center items-center">
        <div className="w-[600px]">
            <div className="bg-blue-100 p-2 rounded-lg">
            <div className="px-6 py-6 lg:px-8">
                
                        <h3 className="mb-4 text-xl font-medium text-gray-900 dark:text-white">修改會員資料</h3>
                        
                        <form className="space-y-6" action="#">
                        {
                                        users.map(
                                            (a: any) =>
                            <div>
                            <div className="flex gap-5">
                            
                            <div className="w-full">
                                <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white" htmlFor="email">學號</label>
                                <input type="studentId" name="studentId" id="studentId" className="w-full bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white" placeholder={a.studentId} disabled/>
                            </div>
                            <div className="w-full">
                                <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white" htmlFor="email">電子郵件</label>
                                <input type="email" name="email" id="email" className="w-full bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white" placeholder={a.email} />
                            </div>
                            </div>
                            
                            <div className="flex gap-5">
                            <div className="w-full">
                                <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white" htmlFor="email">暱稱</label>
                                <input type="name" name="name" id="name" className="w-full bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white" placeholder={a.name} />
                            </div>
                            <div className="w-full">
                                <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white" htmlFor="email">聯絡電話</label>
                                <input type="phone" name="phone" id="phone" className="w-full bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white" placeholder={a.phone} />
                            </div>
                            </div>
                            </div>)}
                            <div>
                                <label htmlFor="password" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">輸入舊密碼</label>
                                <input type="password" name="password_old" id="password_old" placeholder="••••••••" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white" />
                            </div>
                            <div>
                                <label htmlFor="password" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">輸入新密碼</label>
                                <input type="password" name="password_new1" id="password_new1" placeholder="••••••••" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white" />
                            </div>
                            <div>
                                <label htmlFor="password" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">重新輸入舊密碼</label>
                                <input type="password" name="password_new2" id="password_new2" placeholder="••••••••" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white" />
                            </div>
                            
                            <div className="flex gap-5">
                                <button type="submit" 
                                    className="w-full text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                                    onClick={() => setShowModal(false)}                                                                    
                                >取消
                                </button>
                                <button 
                                    className="w-full text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                                    onClick={() => editHandler()}
                                >儲存
                                </button>
                            </div>
                                        
                        </form>

            </div>
            </div>
        </div>
        </div>
        
        ) : null}
        </div>
      </div>
    </div>
  );
}