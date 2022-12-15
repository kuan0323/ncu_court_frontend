import Head from 'next/head'
import Image from 'next/image'
import AppBar from '../components/AppBar'
import styles from '../styles/Home.module.css'
import Button from '../components/Button'

export default function Home() {
  return (
    <>
    
    <div className="grid grid-cols-2 ">
      <div className=" col-span-2 text-center bg-background p-8">
        <Button value = {'我的預約'} ></Button>
        <Button value = {'中央大學場地預約網'}></Button>
        <Button value = {'我的帳戶'}></Button>
        <button type="button" className="text-right hover:bg-green-800 focus:outline-none focus:ring-4 focus:ring-green-300 font-medium rounded-full text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-800 ">
          登出
        </button>
      </div>
      <div className="h-16 text-background">
        <style jsx global>
          {`
            body {background :#ffffff;}
          `}
        </style>
        <p className="p-8 text-black text-left text-3xl">基本資料</p> 
        <p className="leading-7 px-8 py-2 block text-gray-500 md:text-left mb-1 md:mb-0 pr-4">學號：109403777</p>{/*要修改 */}
        <p className="leading-7 px-8 py-2 block text-gray-500 md:text-left mb-1 md:mb-0 pr-4">電子郵件：109403777@ncumail.com</p>{/*要修改 */}
        <form className="w-full max-w-sm">
        <div className="px-8 py-2 md:flex md:items-center mb-6">
          <div className=" md:w-1/3">
            <label className=" block text-gray-500 mb-1 md:mb-0 pr-4" >
              暱稱：
            </label>
          </div>
        <div className="md:w-2/3">
          <input type = "text" className="px-8 py-2 bg-white appearance-none border-2 border-gray-200 rounded w-full  text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500" id="inline-full-name"  placeholder="王小傑"/>
          </div>
        </div>
        <div className="px-8 py-2 md:flex md:items-center mb-6">
          <div className="md:w-1/3">
            <label className="block  mb-1 md:mb-0 pr-4" >
              聯絡電話：
            </label>
          </div>
          <div className="md:w-2/3">
            <input className="px-8 py-2 bg-white appearance-none border-2 border-gray-200 rounded w-full text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500" id="inline-password" type="text" placeholder="0912345678"></input>
          </div>
        </div>
        <div className="md:flex md:items-center">
          <div className="md:w-2/3"></div>
          <div className="md:w-1/3">
            <button className="shadow bg-background hover:bg-purple-400 focus:shadow-outline focus:outline-none text-white py-2 px-4 rounded" type="button">
              Sign Up
            </button>
          </div>
        </div>
      </form>
      </div>
      <div className="h-16 p-8 text-background">
        <p className="p-8 text-left text-3xl">密碼</p>
        <div className="md:flex md:items-center mb-6">
          <div className="flex flex-col text-sm rounded-md ">
            <input className="px-8 py-2 text-background bg-white mb-5 rounded-[4px] border p-3 hover:outline-none focus:outline-none hover:border-yellow-500" id="inline-password"  value="**********"></input>
          </div>
        </div>
        <div className="flex flex-col text-sm rounded-md">
          <input className="px-8 py-2 text-background bg-white mb-5 rounded-[4px] border p-3 hover:outline-none focus:outline-none hover:border-yellow-500 " type="password" placeholder="輸入新的密碼" />
          <input className="px-8 py-2 text-background bg-white border rounded-[4px] p-3 hover:outline-none focus:outline-none hover:border-yellow-500" type="password" placeholder="重新輸入密碼" />
        </div>
    <div className="px-8 py-2 md:flex md:items-center">
          <div className="md:w-1/3"></div>
          <div className="md:w-2/3">
            <button className="bg-background text-white shadow bg-purple-500 hover:bg-purple-400 focus:shadow-outline focus:outline-none text-white py-2 px-4 rounded" type="button">
              變更密碼
            </button>
          </div>
        </div>
    </div>
      </div>
    
   </>
   );
  }
