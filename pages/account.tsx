import Head from 'next/head'
import Modal from '../components/Modal'
import Button from '../components/Button'



export default function Home() {
  return (

      <div className="grid grid-cols-2 grid-row-2">
        <style jsx global>
          {`
            body {background :#ffffff;}
          `}
        </style>
        <div className=" col-span-2 row-span-1 text-center bg-background p-8 ">
          <Button value = {'我的預約'} ></Button>
          <Button value = {'中央大學場地預約網'}></Button>
          <Button value = {'我的帳戶'}></Button>
          
          <button type="button" className="text-right hover:bg-green-800 focus:outline-none focus:ring-4 focus:ring-green-300 font-medium rounded-full text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-800 ">
            登出
          </button>
        </div>
        <div className=" col-span-2 row-span-1 text-background place-items-center">
        
          <Modal />
        
        </div>
      </div>
  );
}