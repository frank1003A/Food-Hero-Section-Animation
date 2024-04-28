"use client";
import clsx from "clsx";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useRef, useState } from "react";

import { Playfair_Display } from "next/font/google";

const playFairDisplay = Playfair_Display({ subsets: ["latin"] });

const navItems = [
  { name: "breakfast", url: "/" },
  { name: "lunch", url: "/" },
  { name: "dinner", url: "/" },
];

const menus = [
  {
    name: "Caviar Express",
    description: "Norem ipsum dolor sit amet, consectetur",
    img: "/ce.png",
  },
  {
    name: "Blue Berry",
    description: "Norem ipsum dolor sit amet, consectetur",
    img: "/bb.png",
  },
  {
    name: "Beef Steak",
    description: "Norem ipsum dolor sit amet, consectetur",
    img: "/bs.png",
  },
  {
    name: "Strawberry Finx",
    description: "Norem ipsum dolor sit amet, consectetur",
    img: "/sf.png",
  },
];

const svgs = [];

export default function Home() {
  const modalRef = useRef<HTMLDialogElement | null>(null);
  const [twirl, setTwirl] = useState(false);
  const [, setIsOver] = useState(false);
  const [active, setActive] = useState(0);
  const [toggleView, setToggleView] = useState(false);

  const handleMouseEnter = () => setIsOver(true);
  const handleMouseLeave = () => setIsOver(false);

  const isActive = (index: number) => active === index;

  const handleActive = (index: number) => {
    setActive(index);
    setTwirl(false);

    if (toggleView) {
      closeNav();
    }
  };

  const toggleNav = () => {
    setToggleView(!toggleView);
  };

  const openNav = () => setToggleView(true);
  const closeNav = () => setToggleView(false);

  useEffect(() => {
    setTwirl(true);
  }, [active]);

  return (
    <>
      <main className="w-full h-screen flex flex-col bg-zinc-50 px-3 py-10 md:px-16 relative overflow-x-hidden">
        <div className="navbar justify-center max-h-16 bg-transparent text-neutral-content rounded-full z-40">
          <Link href={"/"} aria-label="xum logo">
            <svg
              width="101"
              height="35"
              viewBox="0 0 101 35"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M26.9732 26.0147H7.09767M17.0354 26.0147V17.4966M21.2945 26.0147V20.3359M12.7764 26.0147V20.3359M26.9732 31.6934V16.5454C27.5003 16.3533 27.9844 16.0589 28.3974 15.6793C28.8105 15.2996 29.1446 14.842 29.3804 14.3329C29.6161 13.8238 29.749 13.2731 29.7714 12.7125C29.7938 12.1518 29.7052 11.5923 29.5108 11.066C29.3164 10.5397 29.0199 10.057 28.6384 9.64557C28.2569 9.23416 27.7979 8.90215 27.2877 8.66862C26.7775 8.43508 26.2263 8.30462 25.6655 8.28471C25.1048 8.2648 24.5457 8.35585 24.0202 8.55262C23.495 5.96028 20.5278 3.2998 17.0354 3.2998C13.543 3.2998 10.5759 5.96028 10.0506 8.55262C8.99069 8.16103 7.81864 8.20654 6.79228 8.67911C5.76592 9.15169 4.96932 10.0126 4.57774 11.0725C4.18616 12.1325 4.23166 13.3045 4.70424 14.3309C5.17682 15.3572 6.03776 16.1538 7.09767 16.5454V31.6934H26.9732Z"
                stroke="black"
                stroke-width="2.83936"
              />
              <path
                d="M43.2749 10.6024L47.2012 17.2381H47.3533L51.2986 10.6024H55.9474L50.0057 20.3374L56.0805 30.0723H51.3461L47.3533 23.4271H47.2012L43.2083 30.0723H38.4929L44.5868 20.3374L38.607 10.6024H43.2749Z"
                fill="#FE8026"
              />
              <path
                d="M70.5783 10.6024H74.6948V23.2464C74.6948 24.6661 74.3557 25.9083 73.6775 26.9731C73.0057 28.0378 72.0645 28.8681 70.854 29.4639C69.6435 30.0533 68.2333 30.348 66.6235 30.348C65.0074 30.348 63.594 30.0533 62.3835 29.4639C61.173 28.8681 60.2318 28.0378 59.56 26.9731C58.8882 25.9083 58.5522 24.6661 58.5522 23.2464V10.6024H62.6687V22.8947C62.6687 23.6362 62.8303 24.2953 63.1535 24.8721C63.4831 25.4488 63.9458 25.902 64.5415 26.2316C65.1373 26.5611 65.8313 26.7259 66.6235 26.7259C67.4221 26.7259 68.1161 26.5611 68.7055 26.2316C69.3012 25.902 69.7607 25.4488 70.084 24.8721C70.4135 24.2953 70.5783 23.6362 70.5783 22.8947V10.6024ZM78.0815 10.6024H83.1582L88.52 23.6837H88.7482L94.11 10.6024H99.1866V30.0723H95.1937V17.3998H95.0321L89.9935 29.9772H87.2746L82.236 17.3522H82.0744V30.0723H78.0815V10.6024Z"
                fill="black"
              />
            </svg>
          </Link>
          <div className="ml-auto flex gap-3 lg:gap-20">
            <ul className="navbar hidden md:flex gap-3 lg:gap-20">
              {navItems.map((nav) => {
                return (
                  <li
                    className="font-[inter] capitalize cursor-pointer"
                    key={nav.name}
                  >
                    <Link href={nav.url}>{nav.name}</Link>
                  </li>
                );
              })}
            </ul>
            <div className="indicator w-fit h-fit">
              <span className="indicator-item translate-x-0 translate-y-0 badge badge-primary bg-orange-500 border-orange-500 indicator-bottom text-white w-[21px] h-[21px] text-[12px] px-[.3rem]">
                3
              </span>
              <button
                className="btn btn-ghost btn-circle"
                onClick={() => modalRef.current!.showModal()}
              >
                <svg
                  width="34"
                  height="34"
                  viewBox="0 0 34 34"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M5.47472 23.3112C4.25922 18.4492 3.65147 16.0197 4.92788 14.3848C6.20288 12.75 8.71039 12.75 13.7211 12.75H20.2803C25.2925 12.75 27.7971 12.75 29.0735 14.3848C30.35 16.0183 29.7422 18.4507 28.5267 23.3112C27.7532 26.4038 27.3679 27.9494 26.2147 28.8504C25.0615 29.75 23.4678 29.75 20.2803 29.75H13.7211C10.5336 29.75 8.93988 29.75 7.78672 28.8504C6.63355 27.9494 6.2468 26.4038 5.47472 23.3112Z"
                    stroke="#8C8C8C"
                    stroke-width="2.125"
                  />
                  <path
                    d="M27.6252 13.4583L26.6194 9.76791C26.2312 8.34416 26.0372 7.63299 25.6391 7.09607C25.2422 6.56265 24.7031 6.15173 24.0836 5.91032C23.4602 5.66666 22.7236 5.66666 21.2502 5.66666M6.37524 13.4583L7.38108 9.76791C7.76924 8.34416 7.96333 7.63299 8.36141 7.09607C8.75833 6.56265 9.29739 6.15173 9.91691 5.91032C10.5402 5.66666 11.2769 5.66666 12.7502 5.66666"
                    stroke="#8C8C8C"
                    stroke-width="2.125"
                  />
                  <path
                    d="M12.7502 5.66667C12.7502 5.29094 12.8995 4.93061 13.1652 4.66493C13.4309 4.39926 13.7912 4.25 14.1669 4.25H19.8336C20.2093 4.25 20.5696 4.39926 20.8353 4.66493C21.101 4.93061 21.2502 5.29094 21.2502 5.66667C21.2502 6.04239 21.101 6.40272 20.8353 6.6684C20.5696 6.93408 20.2093 7.08333 19.8336 7.08333H14.1669C13.7912 7.08333 13.4309 6.93408 13.1652 6.6684C12.8995 6.40272 12.7502 6.04239 12.7502 5.66667Z"
                    stroke="#8C8C8C"
                    stroke-width="2.125"
                  />
                </svg>
              </button>
            </div>
          </div>
        </div>

        <div className="w-full flex flex-col-reverse gap-3 lg:flex-row lg:h-full">
          {/** Hero Text */}
          <div className="flex flex-col justify-center gap-4 w-full lg:w-[30%] h-full text-center">
            <div
              className={clsx(
                "text-black text-[150px] font-black  leading-[130.29px]",
                playFairDisplay.className
              )}
            >
              Food
              <br />
              Zone
            </div>
            <div className="flex items-start gap-1">
              <div
                className={clsx(
                  "text-zinc-500 text-lg font-normal font-['Inter'] uppercase leading-[26.96px]"
                )}
              >
                ---- Norem ipsum dolor sit amet, consectetur.
              </div>
            </div>
          </div>
          {/** Central Image */}
          <div className="flex relative">
            <span
              className={clsx(
                "flex items-center justify-center w-full h-full ",
                "lg:fixed lg:top-1/2 lg:left-1/2 lg:transform lg:-translate-x-1/2 lg:-translate-y-1/2 lg:-z-0"
              )}
            >
              {twirl && (
                <Image
                  className="animate-swirl"
                  src={`/big${menus[active].img}`}
                  alt="menu image"
                  width={620}
                  height={600}
                />
              )}
            </span>
          </div>
          {/** Nav overlay */}
          <div
            onClick={() => setToggleView(false)}
            className={clsx(
              "inset-0 bg-black/50 z-40 cursor-pointer",
              toggleView ? "fixed" : "hidden"
            )}
          ></div>
          {/** Menus Nav */}
          <ul
            role="menu"
            className={clsx(
              "transition-all flex flex-col items-end lg:ml-auto max-w-92 lg:absolute lg:right-0 lg:top-36 gap-3 z-50 mt-5 lg:mt-0"
              //"fixed right-0 translate-x-[100%] lg:translate-x-[-0%]",
              //toggleView ? "translate-x-[-0%]" : "translate-x-[100%]"
            )}
          >
            {menus.map((menu, index) => {
              return (
                <li
                  key={menu.name}
                  role="menuitem"
                  aria-label={menu.name}
                  onMouseEnter={handleMouseEnter}
                  onMouseLeave={handleMouseLeave}
                  onClick={() => handleActive(index)}
                  tabIndex={0}
                  className={clsx(
                    "flex transition-all cursor-pointer py-2 px-3 h-[80px] rounded-tl-full rounded-bl-full",
                    isActive(index)
                      ? "bg-orange-500 w-full lg:w-[30rem] shadow-2xl"
                      : "bg-white w-96 shadow-none",
                    !isActive(index) &&
                      "hover:shadow-2xl hover:w-full lg:hover:w-[30rem]",
                    isActive(index) && index === 1
                      ? "bg-purple-500"
                      : "bg-orange-500",
                    isActive(index) && index === 2
                      ? "bg-yellow-500"
                      : "bg-orange-500",
                    isActive(index) && index === 3
                      ? "bg-red-500"
                      : "bg-orange-500"
                  )}
                >
                  <div className="flex gap-5">
                    <Image
                      src={menu.img}
                      alt={menu.name}
                      width={60}
                      height={60}
                    />

                    <div
                      className={clsx(
                        "flex flex-col justify-center gap-0 leading-4 py-0 transition-all ",
                        isActive(index) ? "text-white" : "text-zinc-800"
                      )}
                    >
                      <span className=" text-[16px] font-bold font-['Inter'] uppercase leading-[30px]">
                        {menu.name}
                      </span>
                      <span className="text-sm font-normal font-['Inter'] ">
                        {menu.description}
                      </span>
                    </div>
                  </div>
                </li>
              );
            })}
          </ul>
        </div>

        {/** Order Button */}
        <button className="btn text-white rounded-full bg-orange-500 z-50 fixed bottom-10 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
          $20 -- Order now
        </button>
      </main>

      {/** Notification Modal */}
      <dialog id="notification_modal" className="modal" ref={modalRef}>
        <div className="modal-box  border-2 border-orange-500">
          <form method="dialog">
            {/* if there is a button in form, it will close the modal */}
            <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">
              ✕
            </button>
          </form>
          <h3 className="font-bold text-lg font-[inter]">Notifications</h3>
          <div className="flex flex-col gap-2 mt-2">
            <div className="flex items-center w-full bg-zinc-300 rounded-md p-2 ">
              <span className="font-[inter]">🎉 Welcome to Xum </span>
            </div>
            <div className="flex items-center w-full bg-zinc-300 rounded-md p-2">
              <span className="font-[inter]">Message</span>
            </div>
            <div className="flex items-center w-full bg-zinc-300 rounded-md p-2">
              <span className="font-[inter]">Message</span>
            </div>
          </div>
        </div>
      </dialog>
    </>
  );
}
