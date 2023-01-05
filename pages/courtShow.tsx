import AdminNavBar from "../components/AdminNavBar";
import courtService from "../services/courtService";
import { useEffect, useState } from "react";
import { Fragment} from "react";
import { Dialog, Transition } from "@headlessui/react";
import { XMarkIcon } from "@heroicons/react/24/outline";

export default function CourtShow() {

    const [open, setOpen] = useState(false);
    const [resOpen, setResOpen] = useState(false);
    const [message, setMessage] = useState([]);

    const [court, setCourt] = useState([]);
    useEffect(() => {
        fetchCourt();
    }, []);

    const fetchCourt = async () => {
        const courtList = await courtService.getCourt();
        setCourt(courtList);
    }

    const fetchMessage = async (id:string) => {
        const messageList = await courtService.getMessageByCourt(id);
        setMessage(messageList);
    }
    
    const deleteHandler = async (id: string) => {
        await courtService.deleteCourt(id);
        window.location.reload();
    }

    const deleteMessageHandler = async (id: string, courtId: string) => {
        await courtService.deleteMessage(id);
        //window.location.reload();
        const messageList = await courtService.getMessageByCourt(courtId);
        setMessage(messageList);
    }

    return (
        <div>
            <AdminNavBar manageUser={false} manageAdmin={false} manageReservation={false} manageCourt={false}></AdminNavBar>
            <div className="flex">
                <div className="flex-col p-4 w-full mx-8">
                    <div>
                        <h2 className="inline-block text-lg text-gray-700 ml-5 mt-5">瀏覽場地</h2>
                        <button type="button" className="inline-block ml-5 px-6 py-2.5 bg-[#69CBBF] text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-[#40948A] hover:shadow-lg focus:bg-[#40948A] focus:shadow-lg focus:outline-none focus:ring-0 active:bg-[#40948A] active:shadow-lg transition duration-150 ease-in-out ">
                            <a href="http://localhost:3000/courtCreate"  className="text-white" >新增場地</a>
                        </button>
                    </div>
                    <div className="overflow-x-auto sm:-mx-6 lg:-mx-8">
                        <div className="py-2 inline-block min-w-full sm:px-6 lg:px-8">
                            <div className="overflow-hidden">
                                <table className="min-w-full">
                                    <thead className="border-b">
                                        <tr>
                                            <th scope="col" className="text-sm font-medium text-gray-900 px-6 py-4 text-left">
                                                場地名稱
                                            </th>
                                            <th scope="col" className="text-sm font-medium text-gray-900 px-6 py-4 text-left">
                                                場地類別
                                            </th>
                                            <th scope="col" className="text-sm font-medium text-gray-900 px-6 py-4 text-left">
                                                場地費用
                                            </th>
                                            <th scope="col" className="text-sm font-medium text-gray-900 px-6 py-4 text-left">
                                                操作
                                            </th>
                                        </tr>
                                    </thead>
                                    {
                                        court.map(
                                            (court: any) =>
                                                <tbody key={court.name}>
                                                    <tr className="border-b">
                                                        <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">{court.name}</td>
                                                        <td className="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">{court.type}</td>
                                                        <td className="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">{court.price}</td>
                                                        <td className="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                                                            <div className="flex space-x-4 ">
                                                                <button onClick={() => deleteHandler(court.id)} type="button" className="inline-block px-6 py-2.5 bg-[#69CBBF] text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-[#40948A] hover:shadow-lg focus:bg-[#40948A] focus:shadow-lg focus:outline-none focus:ring-0 active:bg-[#40948A] active:shadow-lg transition duration-150 ease-in-out">刪除</button>
                                                                <button type="button" className="inline-block px-6 py-2.5 bg-[#69CBBF] text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-[#40948A] hover:shadow-lg focus:bg-[#40948A] focus:shadow-lg focus:outline-none focus:ring-0 active:bg-[#40948A] active:shadow-lg transition duration-150 ease-in-out">修改</button>
                                                                <button onClick={() => {fetchMessage(court.id); setOpen(true)}} type="button" className="inline-block px-6 py-2.5 bg-[#69CBBF] text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-[#40948A] hover:shadow-lg focus:bg-[#40948A] focus:shadow-lg focus:outline-none focus:ring-0 active:bg-[#40948A] active:shadow-lg transition duration-150 ease-in-out">留言</button>
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

            <div>

       <Transition.Root show={open} as={Fragment}>
            <div>
            <Dialog as="div" className="relative z-10" onClose={setOpen}>
                <Transition.Child
                    as={Fragment}
                    enter="ease-out duration-300"
                    enterFrom="opacity-0"
                    enterTo="opacity-100"
                    leave="ease-in duration-200"
                    leaveFrom="opacity-100"
                    leaveTo="opacity-0"
                    >
                    <div className="fixed inset-0 hidden bg-gray-500 bg-opacity-75 transition-opacity md:block" />
                </Transition.Child>

                <div className="fixed inset-0 z-10 overflow-y-auto">
                <div className="flex min-h-full items-stretch justify-center text-center md:items-center md:px-2 lg:px-4">
                <Transition.Child
                    as={Fragment}
                    enter="ease-out duration-300"
                    enterFrom="opacity-0 translate-y-4 md:translate-y-0 md:scale-95"
                    enterTo="opacity-100 translate-y-0 md:scale-100"
                    leave="ease-in duration-200"
                    leaveFrom="opacity-100 translate-y-0 md:scale-100"
                    leaveTo="opacity-0 translate-y-4 md:translate-y-0 md:scale-95"
                >
                    <Dialog.Panel className="flex transform transition md:my-8 md:max-w-2xl md:px-4 lg:max-w-4xl">
                        <div className="relative flex w-full items-center overflow-hidden bg-white px-4 pt-14 pb-8 shadow-2xl sm:px-6 sm:pt-8 md:p-6 lg:p-8">
                            
                            <button
                            type="button"
                            className="absolute top-4 right-4 text-gray-400 hover:text-gray-500 sm:top-8 sm:right-6 md:top-6 md:right-6 lg:top-8 lg:right-8"
                            onClick={() => {
                                setOpen(false);
                                setResOpen(false);
                            }}
                            >
                            <span className="sr-only">Close</span>
                            <XMarkIcon className="h-6 w-6" aria-hidden="true" />
                            </button>

                            <div>
                                <div className="pl-4 flex flex-col h-80">
                                    <div className="bg-white text-sm text-gray-500 font-bold px-5 py-2 shadow border-b border-gray-300">
                                    場地留言
                                    </div>
                                    <div className="w-full h-full overflow-auto shadow bg-white">
                                        <table className="w-full">

                                            {
                                            message.map(
                                            (message: any) =>
                                            <tbody className="">
                                                <tr className="relative transform scale-100 py-1 whitespace-no-wrap border-b-2 border-blue-100 cursor-default">
                                                    
                                                    
                                                    <td>
                                                    <div className="text-left px-2 py-1 leading-5 text-gray-500 text-lg">{message.user.name}</div>
                                                    <div className="text-left px-2 py-1 leading-5 text-gray-900 w-full whitespace-normal text-lg">{message.content}</div>
                                                    <div className="text-left px-2 leading-5 text-xs text-gray-500">{message.createdTime}</div>
                                                    </td>

                                                    <td className="pl-5 pr-3 whitespace-no-wrap">
                                                        <button onClick={() => deleteMessageHandler(message.id, message.courtId)} type="button" className="inline-block px-6 py-2.5 bg-[#69CBBF] text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-[#40948A] hover:shadow-lg focus:bg-[#40948A] focus:shadow-lg focus:outline-none focus:ring-0 active:bg-[#40948A] active:shadow-lg transition duration-150 ease-in-out">刪除留言</button>

                                                    </td>
                                                </tr>
                                               
                                            </tbody>)}
                                        </table>
                                    </div>
                                </div>
                            
                          </div>

                        </div>
                    </Dialog.Panel>
                </Transition.Child>
                </div>
                </div>

            </Dialog></div>
               
          
        </Transition.Root></div>

        </div>
    )
}
