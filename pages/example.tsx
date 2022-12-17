import React, { Component } from 'react';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';
import Image from 'next/image'
import Button from '../components/Button'



export default class NextJsCarousel extends Component {
	render() {
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
                <div className = "h-16 text-background col-span-2 text-center">
                    <style jsx global>
                    {`
                        body {background :#ffffff;}
                    `}
                    </style>
                    {/*<h2>NextJs Carousel - GeeksforGeeks</h2>*/}

                    <Carousel >
                        <div>
                            <Image src="/../public/static/images/籃球.png" alt="basketball" width={330} height={320} className="w-full" />
                            {/*<p className="legend">Image 1</p>*/}

                        </div>
                        <div>
                            <Image src="/../public/static/images/羽球.png"alt="badminton" width={330} height={320}  className="w-full" />
                            {/*<p className="legend">Image 2</p>*/}

                        </div>
                        <div>
                            <Image src="/../public/static/images/網球.png"alt="tennis" width={330} height={320}  className="w-full" />    
                            {/*<p className="legend">Image 3</p>*/}

                        </div>
                        <div>
                            <Image src="/../public/static/images/排球.png"alt="volley" width={330} height={320}  className="w-full" />    
                            {/*<p className="legend">Image 4</p>*/}

                        </div>
                    </Carousel>
			    </div>
                
            </div>
			
		);
	}
};
