import styles from '../styles/Home.module.css'
import Button from '../components/Button'
export default function pickingList() {
    return (
        <div>
            <div className=" text-xl text-center bg-teal-500">
                <Button value={'我的預約'} ></Button>
                <Button value={'中央大學場地預約網'}></Button>
                <Button value={'我的帳戶'}></Button>
                <Button value={'登出'}></Button>

            </div>

            <section>
                <div className="flex flex-col">
                    <div className="overflow-x-auto sm:-mx-6 lg:-mx-8">
                        <div className="py-2 inline-block min-w-full sm:px-6 lg:px-8">
                            <div className="overflow-hidden">
                                <table className="min-w-full">
                                    <thead className="border-b">
                                        <tr>
                                            <th scope="col" className="text-sm font-medium text-gray-900 px-6 py-4 text-left">
                                                圖片
                                            </th>
                                            <th scope="col" className="text-sm font-medium text-gray-900 px-6 py-4 text-left">
                                                場地類別
                                            </th>
                                            <th scope="col" className="text-sm font-medium text-gray-900 px-6 py-4 text-left">
                                                場地編號
                                            </th>
                                            <th scope="col" className="text-sm font-medium text-gray-900 px-6 py-4 text-left">
                                                預約時間
                                            </th>
                                            <th scope="col" className="text-sm font-medium text-gray-900 px-6 py-4 text-left">
                                                操作
                                            </th>
                                        </tr>
                                        <tr>
                                            <th></th>
                                            <th></th>
                                            <th></th>
                                            <th></th>
                                            <th scope="col" className="text-sm font-medium text-gray-900 px-6 py-4 text-left"><Button value={'取消預約'}></Button></th>
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