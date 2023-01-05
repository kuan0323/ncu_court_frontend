import NavBar from "../components/NavBar";
import { Fragment, useEffect, useState } from "react";
import { Dialog, Listbox, Transition } from "@headlessui/react";
import { XMarkIcon } from "@heroicons/react/24/outline";
import courtService from "../services/courtService";
import userService from "../services/userService";
import messageService from "../services/messageService";
import reserveService from "../services/reserveService";
import Cookies from "js-cookie";
import React from "react";
import toast, { Toaster } from "react-hot-toast";
import { MdOutlineClose } from "react-icons/md";
import { HiLightningBolt, HiCheck } from "react-icons/hi";
import styles from "../styles/App.module.css";
import classNames from "classnames";

function classNameS(...classes: string[]) {
  return classes.filter(Boolean).join(" ");
}

export default function tennisCourts() {
  const exampleCourt = {
    name: "exampleName",
    price: "examplePrice",
    type: "exampleType",
    photo: "examplePhoto",
    beReserved: false,
  };
  const [courts, setCourts] = useState([]);
  const [selectedCourt, setCourt] = useState<any>(exampleCourt);
  const [userSelf, setUserSelf] = useState<any>();
  const [messages, setMessages] = useState<any>([]);
  const [allReservations, setReservations] = useState<any>([]);
  let inputMessage = "";
  let inputDate = "";
  let inputTime = "";
  const date = new Date();
  const today = date.toISOString().split("T")[0];
  const twoWeeksFromToday = new Date(Date.now() + 14 * 24 * 60 * 60 * 1000)
    .toISOString()
    .split("T")[0];
  const currentHour = date.getHours() + ":00";
  const currentDate = today.replace(/-/g, "/");
  let rest = true;
  if (8 <= date.getHours() && date.getHours() <= 20) {
    rest = false;
  }

  useEffect(() => {
    fetchCourts();
    fetchSelfProfile();
    fetchAllReservations();
  }, []);

  const fetchCourts = async () => {
    const courtList = await courtService.getCourtByType("tennis");
    for (let i = 0; i < courtList.length; i++) {
      if (courtList[i].beReserved == false) {
        courtList.splice(i, 1);
      }
    }
    setCourts(courtList);
  };
  const fetchSelfProfile = async () => {
    const selfProfile = await userService.getSelfProfile();
    setUserSelf(selfProfile);
  };
  const fetchAllReservations = async () => {
    const allReservationsList = await reserveService.getReservation();
    setReservations(allReservationsList);
  };
  const fetchMessagesByCourt = async (courtId: string) => {
    const messageList = await messageService.getMessageByCourt(courtId);
    setMessages(messageList);
  };
  const leaveMessage = async (courtId: string, content: string) => {
    const newMessage = await messageService.createMessage(courtId, content);
  };
  const reserveCourt = async (date: string, time: string, courtId: string) => {
    const newReservation = await reserveService.createReservation(
      date,
      time,
      courtId
    );
  };
  const checkReserve = (
    date: string,
    time: string,
    courtId: string
  ): boolean => {
    for (let i = 0; i < allReservations.length; i++) {
      if (
        allReservations[i].date == date &&
        allReservations[i].time == time &&
        allReservations[i].court.id == courtId
      ) {
        return true;
      }
    }
    return false;
  };
  const getCourtStatus = (courtId: string): string => {
    if (rest == true) {
      return "休息中";
    }

    if (checkReserve(currentDate, currentHour, courtId) == true) {
      return "有人使用中";
    }
    return "無人使用中";
  };

  const [open, setOpen] = useState(false);
  const [resOpen, setResOpen] = useState(false);
  return (
    <div>
      <div className="bg-white">
        <div>
          <NavBar mainPage={false} myReserve={false} myAccount={false}></NavBar>
        </div>
        <Toaster />
        <div className=" mx-auto max-w-2xl py-8 px-4 sm:py-16 sm:px-6 lg:max-w-7xl lg:px-8">
          <h2 className="mb-4 text-3xl font-bold tracking-tight text-theme">
            網球場列表
          </h2>
          <div className="bg-gray-400 h-0.5"></div>
          <div className="mt-16 grid grid-cols-1 gap-y-10 gap-x-6 sm:grid-cols-2 lg:grid-cols-3 xl:gap-x-8">
            {courts.map((court: any) => (
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
                          fetchMessagesByCourt(court.id);
                          setOpen(true);
                        }}
                      >
                        <span aria-hidden="true" className="absolute inset-0" />
                        {court.name}
                      </button>
                    </h3>
                    <p className="mt-1 text-sm text-green-500">
                      {getCourtStatus(court.id) == "無人使用中" ? (
                        "無人使用中"
                      ) : (
                        <span className="text-red-500">
                          {getCourtStatus(court.id)}
                        </span>
                      )}
                    </p>
                  </div>
                  <p className="text-base font-medium text-gray-900">
                    ${court.price}
                    <span className="text-xs text-gray-500">/hr</span>
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
                      onClick={() => {
                        setOpen(false);
                        setResOpen(false);
                      }}
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
                            開放時間 : 8:00 ~ 20:00
                          </p>
                          <p className="text-theme2 text-xl">
                            價格 : ${selectedCourt.price}(每小時)
                          </p>
                          <p className="text-theme2 text-xl">
                            目前狀態 :{" "}
                            {getCourtStatus(selectedCourt.id) ==
                            "無人使用中" ? (
                              "無人使用中"
                            ) : (
                              <span className="text-red-500">
                                {getCourtStatus(selectedCourt.id)}
                              </span>
                            )}
                          </p>
                          <div>
                            {resOpen ? (
                              <button
                                type="button"
                                className="mt-2 rounded-xl bg-theme p-1 text-white hover:shadow-lg"
                                onClick={() => {
                                  setResOpen(false);
                                  console.log(getCourtStatus(selectedCourt.id));
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
                      <div className="flex flex-col sm:col-span-7 lg:col-span-6">
                        {resOpen ? (
                          <div className="flex flex-col my-16 w-4/5 mr-14 bg-gray-200 px-4 py-6 ml-8 shadow-lg">
                            <p className="text-theme text-xl mb-2">
                              預約場地: {selectedCourt.name}
                            </p>
                            <p className="text-theme text-xl mb-2">
                              預約者: {userSelf.name}
                            </p>
                            <p className="text-theme text-xl mb-2">
                              學號: {userSelf.studentId}
                            </p>
                            <p className="text-theme text-xl mb-6">
                              聯絡電話: {userSelf.phone}
                            </p>
                            <form
                              onSubmit={(event) => {
                                event.preventDefault();
                                const form = event.target as HTMLFormElement;

                                if (inputTime !== "" && inputDate !== "") {
                                  if (
                                    checkReserve(
                                      inputDate,
                                      inputTime,
                                      selectedCourt.id
                                    ) == true
                                  ) {
                                    notifyFull();
                                  } else {
                                    reserveCourt(
                                      inputDate,
                                      inputTime,
                                      selectedCourt.id
                                    );
                                    notifySuccess();
                                    form.reset();
                                  }
                                } else {
                                  notifyFill();
                                }
                              }}
                            >
                              <label
                                className="text-theme text-xl mb-2 mr-4"
                                htmlFor="Date"
                              >
                                日期:{"    "}
                              </label>
                              <input
                                className="text-gray-300 text-xl mb-2 border-b border-gray-500 focus:outline-none w-1/2"
                                type="date"
                                id="Date"
                                min={today}
                                max={twoWeeksFromToday}
                                onChange={(event) => {
                                  inputDate = event.target.value;
                                  inputDate = inputDate.replace(/-/g, "/");
                                }}
                              />
                              <br />
                              <label
                                className="text-theme text-xl mb-8 mr-4"
                                htmlFor="Time"
                              >
                                時間:{"    "}
                              </label>
                              <select
                                name="time"
                                id="Time"
                                className="text-gray-800 text-xl border-b border-gray-500 focus:outline-none mb-8"
                                onChange={(event) => {
                                  inputTime = event.target.value;
                                }}
                              >
                                <option disabled selected>
                                  -- 選擇時段 --
                                </option>
                                <option value="8:00">8:00 ~ 9:00</option>
                                <option value="9:00">9:00 ~ 10:00</option>
                                <option value="10:00">10:00 ~ 11:00</option>
                                <option value="11:00">11:00 ~ 12:00</option>
                                <option value="12:00">12:00 ~ 13:00</option>
                                <option value="13:00">13:00 ~ 14:00</option>
                                <option value="14:00">14:00 ~ 15:00</option>
                                <option value="15:00">15:00 ~ 16:00</option>
                                <option value="16:00">16:00 ~ 17:00</option>
                                <option value="17:00">17:00 ~ 18:00</option>
                                <option value="18:00">18:00 ~ 19:00</option>
                                <option value="19:00">19:00 ~ 20:00</option>
                                <option value="20:00">20:00 ~ 21:00</option>
                              </select>
                              <br />
                              <button
                                type="submit"
                                className="ml-7 mt-2 rounded-xl bg-theme p-1 text-white hover:shadow-lg"
                              >
                                <p className="mx-16 my-1 text-white">
                                  確認預約
                                </p>
                              </button>
                            </form>
                          </div>
                        ) : (
                          <div>
                            <div className="mt-10 w-full h-80 overflow-auto bg-gray-50 border border-gray-500 border-b-0 py-0">
                              <ul className="pl-0 flex flex-col list-none w-full bg-black">
                                {messages.map((message: any, index: any) => (
                                  <li
                                    className={classNameS(
                                      index % 2 == 0
                                        ? "bg-gray-50"
                                        : "bg-white",
                                      "px-6 py-2 flex w-full"
                                    )}
                                    key={message.id}
                                  >
                                    <div className="w-1/4">
                                      <p className="text-theme font-bold text-xl">
                                        {message.user.name}
                                      </p>
                                    </div>
                                    <div className="w-3/4 pl-4">
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
                              <form
                                onSubmit={(event) => {
                                  event.preventDefault();
                                  const form = event.target as HTMLFormElement;
                                  if (inputMessage !== "") {
                                    leaveMessage(
                                      selectedCourt.id,
                                      inputMessage
                                    );
                                    form.reset();
                                    setTimeout(() => {
                                      fetchMessagesByCourt(selectedCourt.id);
                                    }, 1000);
                                  }
                                }}
                                className="flex w-full"
                              >
                                <input
                                  type="text"
                                  id="inputMessage"
                                  name="message"
                                  className="h-10 block w-4/5 border-gray-500 border pl-7 pr-12 focus:outline-none"
                                  placeholder="輸入留言"
                                  onChange={(event) => {
                                    inputMessage = event.target.value;
                                  }}
                                />
                                <button
                                  className="w-1/5 text-white bg-theme border border-gray-500 border-l-0 hover:bg-theme2"
                                  type="submit"
                                >
                                  送出
                                </button>
                              </form>
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

const notifyFill = () => {
  toast.custom(
    (t) => (
      <div
        className={classNames([
          styles.notificationWrapper,
          t.visible ? "top-0" : "-top-96",
          "bg-red-400",
        ])}
      >
        <div className={styles.iconWrapper}>
          <HiLightningBolt />
        </div>
        <div className={styles.contentWrapper}>
          <h1>填寫缺漏</h1>
          <p>請選擇想要的日期和時間</p>
        </div>
        <div className={styles.closeIcon} onClick={() => toast.dismiss(t.id)}>
          <MdOutlineClose />
        </div>
      </div>
    ),
    { id: "unique-notification", position: "top-center" }
  );
};

const notifySuccess = () => {
  toast.custom(
    (t) => (
      <div
        className={classNames([
          styles.notificationWrapper,
          t.visible ? "top-0" : "-top-96",
          "bg-theme",
        ])}
      >
        <div className={styles.iconWrapper}>
          <HiLightningBolt />
        </div>
        <div className={styles.contentWrapper}>
          <h1>成功預約</h1>
          <p>預約已加到您的預約清單</p>
        </div>
        <div className={styles.closeIcon} onClick={() => toast.dismiss(t.id)}>
          <MdOutlineClose />
        </div>
      </div>
    ),
    { id: "unique-notification", position: "top-center" }
  );
};

const notifyFull = () => {
  toast.custom(
    (t) => (
      <div
        className={classNames([
          styles.notificationWrapper,
          t.visible ? "top-0" : "-top-96",
          "bg-red-400",
        ])}
      >
        <div className={styles.iconWrapper}>
          <HiLightningBolt />
        </div>
        <div className={styles.contentWrapper}>
          <h1>已被預約</h1>
          <p>你選擇的該時段已被預約，請重新選擇</p>
        </div>
        <div className={styles.closeIcon} onClick={() => toast.dismiss(t.id)}>
          <MdOutlineClose />
        </div>
      </div>
    ),
    { id: "unique-notification", position: "top-center" }
  );
};
