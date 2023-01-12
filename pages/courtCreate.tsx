import AdminNavBar from "../components/AdminNavBar";
import courtService from "../services/courtService";
import { ChangeEvent, SetStateAction, useEffect, useState } from "react";
import React from "react";
import toast, { Toaster } from "react-hot-toast";
import { MdOutlineClose } from "react-icons/md";
import { HiLightningBolt, HiCheck } from "react-icons/hi";
import styles from "../styles/App.module.css";
import classNames from "classnames";

export default function CourtCreate() {
  const [name, setName] = useState("");
  const [price, setPrice] = useState("");
  const [type, setType] = useState("");
  const [photo, setPhoto] = useState<File>();

  // var formData: any = new FormData();
  const onChangePhoto = (e: any) => {
    setPhoto(e.target.files[0]);
  };

  const createCourt = async () => {
    await courtService.createCourt(photo, name, price, type);
  };
  // await courtService.createCourt(photo, "測試", "100", "羽球場");
  return (
    <div>
      <AdminNavBar
        manageUser={false}
        manageAdmin={false}
        manageReservation={false}
        manageCourt={true}
      ></AdminNavBar>
      <Toaster />
      <div className="flex">
        <div className="flex-col p-4 w-full mx-8">
          <h2 className="text-lg text-gray-700 ml-5 mt-5">新增場地</h2>

          {/* <form action="courtShow" encType="form-data"> */}
          <form
            encType="form-data"
            onSubmit={(event) => {
              event.preventDefault();
              createCourt();
              const form = event.target as HTMLFormElement;
              notifySuccess();
              form.reset();
            }}
          >
            <div className="flex justify-start">
              <div className="mb-3 xl:w-96">
                {/* 場地名稱 */}
                <label className="form-label inline-block mb-2 text-gray-700 ml-5 mt-5">
                  場地名稱
                </label>
                <input
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  type="text"
                  className="form-control block w-full px-3 py-1.5 ml-5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300
                        rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-[#69CBBF] focus:outline-none"
                  id="court_name"
                  placeholder="場地名稱"
                  required
                />
              </div>
            </div>

            <div className="flex justify-start">
              {/* 場地費用 */}
              <div className="mb-3 xl:w-96">
                <label className="form-label inline-block mb-2 text-gray-700 ml-5 mt-1">
                  場地費用
                </label>
                <input
                  value={price}
                  onChange={(e) => setPrice(e.target.value)}
                  type="number"
                  className=" form-control block w-full px-3 py-1.5 ml-5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300
                            rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-[#69CBBF] focus:outline-none"
                  id="exampleText0"
                  placeholder="場地費用"
                  required
                />
              </div>
            </div>

            <div className="flex justify-start">
              {/* 場地類型 */}
              <div className="mb-3 xl:w-96">
                <label className="form-label inline-block mb-2 text-gray-700 ml-5 mt-1">
                  場地類型
                </label>
                <select
                  value={type}
                  onChange={(e) => setType(e.target.value)}
                  className="form-select appearance-none
                            block w-full px-3 ml-5 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding bg-no-repeat border border-solid border-gray-300
                            rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-[#69CBBF] focus:outline-none"
                  aria-label="Default select example"
                  required
                >
                  <option selected>選擇場地類型</option>
                  <option value="tennis">網球場</option>
                  <option value="badminton">羽球場</option>
                  <option value="basketball">籃球場</option>
                  <option value="volleyball">排球場</option>
                </select>
              </div>
            </div>

            <div className="flex justify-start">
              {/* 場地圖片 */}
              <div className="mb-3 w-96">
                <label className="form-label inline-block mb-2 ml-5 text-gray-700">
                  場地圖片
                </label>
                <input
                  onChange={onChangePhoto}
                  className="form-control block w-full px-3 py-1.5 ml-5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300
                                rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-[#69CBBF] focus:outline-none"
                  type="file"
                  id="court_photo"
                  required
                ></input>
              </div>
            </div>

            <div className="mb-3 w-96 flex space-x-4 justify-end mt-5">
              <div className="">
                <button
                  type="submit"
                  className="inline-block px-6 py-2.5 bg-[#69CBBF] text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-[#40948A] hover:shadow-lg focus:bg-[#40948A] focus:shadow-lg focus:outline-none focus:ring-0 active:bg-[#40948A] active:shadow-lg transition duration-150 ease-in-out"
                >
                  確認
                </button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

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
          <h1>新增成功</h1>
          <p>場地已新增到清單內</p>
        </div>
        <div className={styles.closeIcon} onClick={() => toast.dismiss(t.id)}>
          <MdOutlineClose />
        </div>
      </div>
    ),
    { id: "unique-notification", position: "top-center" }
  );
};
