import Head from 'next/head'
import { useEffect, useState } from "react";
import NavBar from '../components/NavBar'
import Cookies from 'js-cookie';
import UserService from "../services/userService";



export default function editAccount() {
    const [showModal, setShowModal] = useState(true);
    const [showPassword, setShowPassword] = useState(false);
    const [showPassword2, setShowPassword2] = useState(false);
    const [showPassword3, setShowPassword3] = useState(false);
    const [users, setUsers] = useState([]);
    
    useEffect(() => {
        fetchUsers();
        //editHandler();
    }, []);

    const fetchUsers = async () => {
        const userList = await UserService.getUser('specificName', 'regular');
        setUsers(userList);
    }

    const editHandler = async () => {

    //document.getElementById("result").innerHTML = "hiiiii"; 

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
      
      const edit = await UserService.editUsers(name, phone, email, password_old, password_new1);
      
    //   if(edit == true)
    //   {
    //     document.getElementById("result").innerHTML="會員資料修改成功";
    //   }
    //   else
    //   {
    //     document.getElementById("result").innerHTML="會員資料修改失敗";
    //   }
  }
    
  return (
    
    <div className="bg-white h-screen">
      <div>
        <NavBar mainPage={false} myReserve={false} myAccount={false}></NavBar>
      </div>
      
      <div className=" col-span-2 row-span-1  place-items-center">
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
                                <input type={showPassword?'text':'password'}  name="password_old" id="password_old" placeholder="••••••••" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white" />
                                <label
                                        style={{float:"right"}}
                                        onClick={()=>setShowPassword(!showPassword)}
                                        className="bg-gray-300 hover:bg-gray-400 rounded px-2 py-1 text-sm text-gray-600 font-mono cursor-pointer " htmlFor="toggle">{showPassword?'hide':'show'}
                                </label>
                            </div>
                            <div>
                                <label htmlFor="password" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">輸入新密碼</label>
                                <input type={showPassword2?'text':'password'} name="password_new1" id="password_new1" placeholder="••••••••" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white" />
                                <label
                                        style={{float:"right"}}
                                        onClick={()=>setShowPassword2(!showPassword2)}
                                        className="bg-gray-300 hover:bg-gray-400 rounded px-2 py-1 text-sm text-gray-600 font-mono cursor-pointer " htmlFor="toggle">{showPassword2?'hide':'show'}
                                    </label>
                            </div>
                            <div>
                                <label htmlFor="password" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">重新輸入舊密碼</label>
                                <input type={showPassword3?'text':'password'} name="password_new2" id="password_new2" placeholder="••••••••" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white" />
                                
                                    <label
                                    style={{float:"right"}}
                                    onClick={()=>setShowPassword3(!showPassword3)}
                                    
                                    className="bg-gray-300 hover:bg-gray-400 rounded px-2 py-1 text-sm text-gray-600 font-mono cursor-pointer " htmlFor="toggle">
                                        {showPassword3?'hide':'show'}
                                       
                                </label>
                                <p id="result" >會員資料未修改</p> 
                                
                            </div>
                            
                            <div className="flex gap-5">
                                
                                <a href="/" className="w-full text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                                    取消
                                </a>
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