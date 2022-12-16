import Head from 'next/head'
import Image from 'next/image'
import AppBar from '../components/AppBar'
import styles from '../styles/Home.module.css'
import Button from '../components/Button'


export default function Home() {
  return (
    
    
    <div className="grid grid-col">
      <div className=" col-span-2 text-center bg-background p-8">
        <Button value = {'我的預約'} ></Button>
        <Button value = {'中央大學場地預約網'}></Button>
        <Button value = {'我的帳戶'}></Button>
        <button type="button" className="text-right hover:bg-green-800 focus:outline-none focus:ring-4 focus:ring-green-300 font-medium rounded-full text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-800 ">
          登出
        </button>
      </div>
      <div className="h-16 text-background col-span-2 text-center">
        <style jsx global>
          {`
            body {background :#ffffff;}
          `}
        </style>
        {/* <p className="p-8 text-3xl">基本資料</p>  */}
        {/*<p className="leading-7 px-8 py-2 block text-gray-500  mb-1 md:mb-0 pr-4">學號：109403777</p>要修改 */}
        {/*<p className="leading-7 px-8 py-2 block text-gray-500 mb-1 md:mb-0 pr-4">電子郵件：109403777@ncumail.com</p>要修改 */}
        
        <div className="carousel w-full">
        <div id="slide1" className="carousel-item relative w-full">
            <Image src="/../public/static/images/籃球.png" alt="basketball" width={330} height={320} className="w-full" />
            <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
            <a  className="right carousel-control btn btn-circle" href="#slide4"   data-carousel-slide-to = "slide2" data-carousel-next >❮</a> 
            <a href="#slide2" className="btn btn-circle">❯</a>
            </div>
        </div> 
        <div id="slide2" className="carousel-item relative w-full">
            <Image src="/../public/static/images/羽球.png"alt="badminton" width={330} height={320}  className="w-full" />
            <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
            <a href="#slide1" className="btn btn-circle" data-carousel-slide-to="#slide1">❮</a> 
            <a href="#slide3" className="btn btn-circle"data-carousel-slide-to="#slide3">❯</a>
            </div>
        </div> 
        <div id="slide3" className="carousel-item relative w-full">
        <Image src="/../public/static/images/網球.png"alt="tennis" width={330} height={320}  className="w-full" />    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
            <a href="#slide2" className="btn btn-circle">❮</a> 
            <a href="#slide4" className="btn btn-circle">❯</a>
            </div>
        </div> 
        <div id="slide4" className="carousel-item relative w-full">
        <Image src="/../public/static/images/排球.png"alt="volley" width={330} height={320}  className="w-full" />    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
            <a href="#slide3" className="btn btn-circle">❮</a> 
            <a  className="right carousel-control btn btn-circle" href="#slide1">❯</a>
            </div>
        </div>
        </div>
      
        </div>
      </div>
   
   );
  }
