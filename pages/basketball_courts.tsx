import NavBar from "../components/NavBar";
import { Fragment, useState } from "react";
import { Dialog, Listbox, Transition } from "@headlessui/react";
import { XMarkIcon } from "@heroicons/react/24/outline";
import { CheckIcon, ChevronUpDownIcon } from "@heroicons/react/20/solid";

const courts = [
  {
    id: 1,
    name: "籃球場A",
    place: "依仁堂",
    openTime: "7:00~21:00",
    href: "./singleCourt",
    photo: "",
    photoAlt: "籃球場A圖片",
    price: "$999",
    beReserved: true,
  },
  {
    id: 2,
    name: "籃球場B",
    place: "戶外",
    openTime: "7:00~21:00",
    href: "#",
    photo: "",
    photoAlt: "籃球場B圖片",
    price: "$999",
    beReserved: true,
  },
  {
    id: 3,
    name: "籃球場C",
    place: "依仁堂",
    openTime: "7:00~21:00",
    href: "#",
    photo: "",
    photoAlt: "籃球場C圖片",
    price: "$999",
    beReserved: false,
  },
  {
    id: 4,
    name: "籃球場D",
    place: "依仁堂",
    openTime: "7:00~21:00",
    href: "#",
    photo: "",
    photoAlt: "籃球場D圖片",
    price: "$999",
    beReserved: false,
  },
  {
    id: 5,
    name: "籃球場E",
    place: "戶外",
    openTime: "7:00~21:00",
    href: "#",
    photo: "",
    photoAlt: "籃球場E圖片",
    price: "$999",
    beReserved: true,
  },
  // More courts...
];

const users = {
  name: "小王",
  studentID: "109403999",
  email: "tsettest@gmail.com",
  phone: "0900123456",
  role: "regular",
};

const messages = [
  {
    id: 1,
    userId: "109403000",
    userName: "小明",
    content: "77777777777",
    createdTime: "2022/12/1 17:36",
  },
  {
    id: 1,
    userId: "109403000",
    userName: "小張",
    content: "6666666666666666",
    createdTime: "2022/12/1 17:36",
  },
  {
    id: 1,
    userId: "109403000",
    userName: "小王",
    content: "8888888 888888888888 888888888888 8 8888",
    createdTime: "2022/12/1 17:36",
  },
  {
    id: 1,
    userId: "109403000",
    userName: "小明",
    content: "e04e04e04 c8 哈哈哈哈 6666666666666666666",
    createdTime: "2022/12/1 17:36",
  },
  {
    id: 1,
    userId: "109403000",
    userName: "酸民",
    content: "Lorem ipsum dolor sit amet, consecteturasldfjiwjeorijf",
    createdTime: "2022/12/1 17:36",
  },
];

function classNames(...classes: string[]) {
  return classes.filter(Boolean).join(" ");
}

export default function test() {
  const [open, setOpen] = useState(false);
  const [resOpen, setResOpen] = useState(false);
  const [selectedCourt, setCourt] = useState(courts[0]);

  return (
    <div>
      <div className="bg-white">
        <div>
          <NavBar mainPage={false} myReserve={false} myAccount={false}></NavBar>
        </div>
        <div className=" mx-auto max-w-2xl py-8 px-4 sm:py-16 sm:px-6 lg:max-w-7xl lg:px-8">
          <h2 className="mb-5 text-2xl font-bold tracking-tight text-theme">
            籃球場列表
          </h2>
          <div className="bg-gray-400 h-0.5"></div>
          <div className="mt-16 grid grid-cols-1 gap-y-10 gap-x-6 sm:grid-cols-2 lg:grid-cols-3 xl:gap-x-8">
            {courts.map((court) => (
              <div key={court.id} className="group relative">
                <div className="min-h-80 aspect-w-1 aspect-h-1 w-full overflow-hidden rounded-md bg-gray-200 group-hover:opacity-75 lg:aspect-none lg:h-80">
                  <img
                    src={court.photo}
                    alt={court.photoAlt}
                    className="h-full w-full object-cover object-center lg:h-full lg:w-full"
                  />
                </div>
                <div className="mt-4 flex justify-between">
                  <div>
                    <h3 className="text-sm text-gray-700">
                      <button
                        onClick={() => {
                          setCourt(court);
                          setOpen(true);
                        }}
                      >
                        <span aria-hidden="true" className="absolute inset-0" />
                        {court.name}
                      </button>
                    </h3>
                    <p className="mt-1 text-sm text-gray-500">
                      {court.beReserved ? (
                        <span className="text-red-500">已滿</span>
                      ) : (
                        "有空位"
                      )}
                    </p>
                  </div>
                  <p className="text-sm font-medium text-gray-900">
                    {court.price}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <Transition.Root show={open} as={Fragment}>
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
                <Dialog.Panel className="flex w-full transform text-left text-base transition md:my-8 md:max-w-2xl md:px-4 lg:max-w-4xl">
                  <div className="relative flex w-full items-center overflow-hidden bg-white px-4 pt-14 pb-8 shadow-2xl sm:px-6 sm:pt-8 md:p-6 lg:p-8">
                    <button
                      type="button"
                      className="absolute top-4 right-4 text-gray-400 hover:text-gray-500 sm:top-8 sm:right-6 md:top-6 md:right-6 lg:top-8 lg:right-8"
                      onClick={() => setOpen(false)}
                    >
                      <span className="sr-only">Close</span>
                      <XMarkIcon className="h-6 w-6" aria-hidden="true" />
                    </button>

                    <div className="grid w-full grid-cols-1 items-start gap-y-8 gap-x-6 sm:grid-cols-12 lg:gap-x-8">
                      <div className="sm:col-span-5 lg:col-span-6">
                        <img
                          src={selectedCourt.photo}
                          alt="no picture"
                          className="w-full h-64 object-cover overflow-hidden rounded-lg bg-gray-200"
                        />
                        <div className="mt-6">
                          <p className="text-theme2 text-xl">
                            場地名稱 : {selectedCourt.name}
                          </p>
                          <p className="text-theme2 text-xl">
                            地點 : {selectedCourt.place}
                          </p>
                          <p className="text-theme2 text-xl">
                            開放時間 : {selectedCourt.openTime}
                          </p>
                          <p className="text-theme2 text-xl">
                            目前狀態 :{" "}
                            {selectedCourt.beReserved ? (
                              <span className="text-red-500">已被預約滿</span>
                            ) : (
                              "還有空位"
                            )}
                          </p>
                          <div>
                            {resOpen ? (
                              <button
                                type="button"
                                className="mt-2 rounded-xl bg-theme p-1 text-white hover:shadow-lg"
                                onClick={() => {
                                  setResOpen(false);
                                }}
                              >
                                <p className="mx-16 my-1 text-white">
                                  回到留言板
                                </p>
                              </button>
                            ) : (
                              <button
                                type="button"
                                className="mt-2 rounded-xl bg-theme p-1 text-white hover:shadow-lg"
                                onClick={() => {
                                  setResOpen(true);
                                }}
                              >
                                <p className="mx-16 my-1 text-white">
                                  預約場地
                                </p>
                              </button>
                            )}
                          </div>
                        </div>
                      </div>
                      <div className="sm:col-span-7 lg:col-span-6">
                        {resOpen ? (
                          <div className="my-16 w-full mx-14">
                            <p className="text-theme text-xl mb-2">
                              預約場地: {selectedCourt.name}
                            </p>
                            <p className="text-theme text-xl mb-2">
                              預約者: {users.name}
                            </p>
                            <p className="text-theme text-xl mb-2">
                              學號: {users.studentID}
                            </p>
                            <p className="text-theme text-xl mb-6">
                              聯絡電話: {users.phone}
                            </p>
                            <label
                              className="text-theme text-xl mb-2"
                              htmlFor="Date"
                            >
                              日期:{"    "}
                            </label>
                            <input
                              className="text-gray-300 text-xl mb-2 border-b border-gray-500 focus:outline-none w-1/2"
                              type="date"
                              id="Date"
                            />
                            <br />
                            <label
                              className="text-theme text-xl mb-8"
                              htmlFor="Time"
                            >
                              時間:{"    "}
                            </label>
                            <select
                              name="time"
                              id="Time"
                              className="text-gray-800 text-xl border-b border-gray-500 focus:outline-none mb-8"
                            >
                              <option value="">7:00 ~ 8:00</option>
                              <option value="">8:00 ~ 9:00</option>
                              <option value="">9:00 ~ 10:00</option>
                              <option value="">10:00 ~ 11:00</option>
                              <option value="">11:00 ~ 12:00</option>
                              <option value="">12:00 ~ 13:00</option>
                              <option value="">13:00 ~ 14:00</option>
                              <option value="">14:00 ~ 15:00</option>
                              <option value="">15:00 ~ 16:00</option>
                              <option value="">16:00 ~ 17:00</option>
                              <option value="">17:00 ~ 18:00</option>
                              <option value="">18:00 ~ 19:00</option>
                              <option value="">19:00 ~ 20:00</option>
                              <option value="">20:00 ~ 21:00</option>
                            </select>
                            <br />
                            <button
                              type="submit"
                              className="mt-2 rounded-xl bg-theme p-1 text-white hover:shadow-lg"
                            >
                              <p className="mx-16 my-1 text-white">確認預約</p>
                            </button>
                          </div>
                        ) : (
                          <div>
                            <div className="mt-10 w-full h-80 overflow-auto bg-gray-50 border border-gray-500 border-b-0">
                              <ul className="list-none w-full">
                                {messages.map((message, index) => (
                                  <li
                                    className={classNames(
                                      index % 2 == 0
                                        ? "bg-gray-50"
                                        : "bg-white",
                                      "px-4 py-2 flex w-full"
                                    )}
                                  >
                                    <div className="w-1/4">
                                      <p className="text-theme font-bold text-xl">
                                        {message.userName}
                                      </p>
                                    </div>
                                    <div className="w-3/4">
                                      <p className="text-xs text-gray-500">
                                        {message.createdTime}
                                      </p>
                                      <p className="w-full whitespace-normal">
                                        {message.content}
                                      </p>
                                    </div>
                                  </li>
                                ))}
                              </ul>
                            </div>
                            <div className="flex">
                              <input
                                type="text"
                                name="message"
                                className="h-10 block w-4/5 border-gray-500 border pl-7 pr-12 focus:outline-none"
                                placeholder="輸入留言"
                              />
                              <button
                                className="w-1/5 text-white bg-theme border border-gray-500 border-l-0"
                                type="submit"
                              >
                                留言
                              </button>
                            </div>
                          </div>
                        )}
                      </div>
                    </div>
                  </div>
                </Dialog.Panel>
              </Transition.Child>
            </div>
          </div>
        </Dialog>
      </Transition.Root>
    </div>
  );
}
