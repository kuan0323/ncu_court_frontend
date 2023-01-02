import AdminNavBar from "../components/AdminNavBar";

export default function courtCreate(){
    return(
        <div>
            <AdminNavBar manageUser={false} manageAdmin={false} manageReservation={false} manageCourt={false}></AdminNavBar>
            <div className="flex">

            <div className="flex-col p-4 w-full mx-8">

            <h2 className="text-lg text-gray-700 ml-5 mt-5">新增場地</h2>
        
            <div className="flex justify-start">
            <div className="mb-3 xl:w-96">
                <label className="form-label inline-block mb-2 text-gray-700 ml-5 mt-5">場地名稱</label>
                <input type="text"
            className="form-control block w-full px-3 py-1.5 ml-5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300
                rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-[#69CBBF] focus:outline-none" id="court_name" placeholder="場地名稱"/>
            </div>
        </div>

        <div className="flex justify-start">
        <div className="mb-3 xl:w-96">
            <label className="form-label inline-block mb-2 text-gray-700 ml-5 mt-1">場地費用</label>
            <input type="number"
            className=" form-control block w-full px-3 py-1.5 ml-5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300
                rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-[#69CBBF] focus:outline-none" id="exampleText0" placeholder="場地費用"/>
            </div>
        </div>

        <div className="flex justify-start">
            <div className="mb-3 xl:w-96">
                <label className="form-label inline-block mb-2 text-gray-700 ml-5 mt-1">場地類型</label>
                <select className="form-select appearance-none
                    block w-full px-3 ml-5 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding bg-no-repeat border border-solid border-gray-300
                    rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-[#69CBBF] focus:outline-none" aria-label="Default select example">
                    <option selected>選擇場地類型</option>
                    <option value="1">網球場</option>
                    <option value="2">羽球場</option>
                    <option value="3">籃球場</option>
                    <option value="3">排球場</option>
                </select>
            </div>
        </div>

        <div className="flex justify-start">
            <div className="mb-3 w-96">
                <label className="form-label inline-block mb-2 ml-5 text-gray-700">場地圖片</label>
                    <input className="form-control block w-full px-3 py-1.5 ml-5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300
                        rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-[#69CBBF] focus:outline-none" type="file" id="court_photo">
                    </input>
                </div>
            </div>

            <div className="mb-3 w-96 flex space-x-4 justify-end mt-5">
                <div className="">
                    <button type="button" className="inline-block px-6 py-2.5 bg-[#69CBBF] text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-[#40948A] hover:shadow-lg focus:bg-[#40948A] focus:shadow-lg focus:outline-none focus:ring-0 active:bg-[#40948A] active:shadow-lg transition duration-150 ease-in-out">確認</button>
                </div>

                <div className="">
                    <button type="button" className="inline-block px-6 py-2.5 bg-[#69CBBF] text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-[#40948A] hover:shadow-lg focus:bg-[#40948A] focus:shadow-lg focus:outline-none focus:ring-0 active:bg-[#40948A] active:shadow-lg transition duration-150 ease-in-out">取消</button>
                </div>
            </div>
    </div>
        </div>

   

      
    //   </div>
    )
}