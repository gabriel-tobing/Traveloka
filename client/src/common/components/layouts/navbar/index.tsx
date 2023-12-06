import { Link } from "react-router-dom";

import Modal from "./components/modal/SettingModal";

const Navbar = () => {
  return (
    <div className="sticky top-0 z-[100] flex flex-col items-stretch basis-auto shrink-0 w-full overflow-visible">
      <div className="absolute z-[1] flex flex-col items-stretch basis-auto shrink-0 w-full h-[72px] mx-auto bg-navbar">
        <div className="absolute z-[1] flex flex-col justify-center items-center basis-auto shrink-0 w-full min-w-[1222px] min-h-[56px] bg-[rgba(0,0,0,0)]">
          <div className="relative z-[1] flex justify-between items-stretch basis-auto shrink-0 w-[1222px] py-1 px-3">
            <div className="relative z-0 flex items-center basis-auto shrink-0">
              <Link to={"/"} className="bg-[rgba(0,0,0,0.00)]">
                <img
                  src="/assets/logo-white.svg"
                  alt=""
                  width={135}
                  height={43}
                  className="object-fill"
                  style={{ objectPosition: "50% 50%" }}
                  loading="lazy"
                />
              </Link>
            </div>
            <div className="relative z-0 flex items-center basis-auto shrink-0">
              <div className="relative z-0 flex flex-col items-stretch basis-auto shrink-0 mr-3">
                <div className="cursor-pointer">
                  <div className="relative z-0 flex items-center h-9 p-1 hover:bg-[rgba(0,0,0,0.25)] rounded-[5px] select-none">
                    <img
                      src="/assets/indonesia-flag.svg"
                      alt=""
                      width={16}
                      height={16}
                      className="mr-2 border-2 border-[rgb(2,100,200)] rounded-full object-none"
                      loading="lazy"
                      style={{ objectPosition: "50% 50%" }}
                    />
                    <div className="text-[rgba(255,255,255,1.00)] text-sm font-medium text-left leading-5 whitespace-pre-wrap break-words">
                      EN | IDR
                    </div>
                    <img
                      src="https://d1785e74lyxkqq.cloudfront.net/_next/static/v2/3/3de2bccd750fe7e9a102505064b03a37.svg"
                      alt=""
                      width={12}
                      height={12}
                      className="ml-1 object-fill"
                      style={{ objectPosition: "50% 50%" }}
                      loading="lazy"
                    />
                  </div>
                </div>
                {/* <Modal /> */}
              </div>
              <div className="relative z-0 flex items-center basis-auto shrink-0">
                <div className="relative z-0 flex flex-col items-stretch basis-auto shrink-0 mr-2 p-2 hover:bg-[rgba(0,0,0,0.25)] rounded-md">
                  <Link to={"/"} className="flex items-center shrink-0 cursor-pointer">
                    <div className="relative z-0 flex flex-col items-stretch basis-auto shrink-0 mr-2">
                      <svg
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                        data-id="IcMarketingPromoBadge"
                      >
                        <circle
                          cx="12"
                          cy="12"
                          r="10"
                          stroke="#0194f3"
                          stroke-width="2"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                        ></circle>
                        <path
                          d="M8.5 17.5L15.5 6.5C15.5 6.5 14 8.00002 12 8.00002C10 8.00002 8 7.05 8 7.05M8 7.00002V7.00002C9.10457 7.00002 10 7.89545 10 9.00002V9.00002C10 10.1046 9.10457 11 8 11V11C6.89543 11 6 10.1046 6 9.00002V9.00002C6 7.89545 6.89543 7.00002 8 7.00002V7.00002ZM18 15V15C18 16.1046 17.1046 17 16 17V17C14.8954 17 14 16.1046 14 15V15C14 13.8954 14.8954 13 16 13V13C17.1046 13 18 13.8954 18 15Z"
                          stroke="#91EC00"
                          stroke-width="2"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                        ></path>
                      </svg>
                    </div>
                    <div className="text-[rgba(255,255,255,1.00)] text-[13px] font-medium leading-5 text-left whitespace-pre-wrap break-words">
                      Deals
                    </div>
                  </Link>
                </div>
                <div className="relative z-0 flex flex-col items-stretch basis-auto shrink-0 mr-2 p-2 hover:bg-[rgba(0,0,0,0.25)] rounded-md">
                  <Link to={"/"} className="flex items-center shrink-0 cursor-pointer">
                    <div className="text-[rgba(255,255,255,1.00)] text-[13px] font-medium leading-5 text-left whitespace-pre-wrap break-words">
                      Support
                    </div>
                  </Link>
                </div>
                <div className="relative z-0 flex flex-col items-stretch basis-auto shrink-0 mr-2 p-2 hover:bg-[rgba(0,0,0,0.25)] rounded-md">
                  <Link to={"/"} className="flex items-center shrink-0 cursor-pointer">
                    <div className="text-[rgba(255,255,255,1.00)] text-[13px] font-medium leading-5 text-left whitespace-pre-wrap break-words">
                      Partnership
                    </div>
                  </Link>
                </div>
                <div className="relative z-0 flex flex-col items-stretch basis-auto shrink-0 mr-2 p-2 hover:bg-[rgba(0,0,0,0.25)] rounded-md">
                  <Link to={"/"} className="flex items-center shrink-0 cursor-pointer">
                    <div className="text-[rgba(255,255,255,1.00)] text-[13px] font-medium leading-5 text-left whitespace-pre-wrap break-words">
                      Bookings
                    </div>
                  </Link>
                </div>
              </div>
              <div
                className="relative z-0 flex items-center basis-auto shrink-0 p-[6px] border border-[rgba(255,255,255,1.00)] hover:bg-[rgba(0,0,0,0.25)] rounded-[10px] cursor-pointer select-none"
                style={{ touchAction: "manipulation" }}
              >
                <div className="relative z-0 flex flex-col items-stretch basis-auto shrink-0 mx-1">
                  <svg
                    width="14"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    data-id="IcSystemUserAccountFill"
                  >
                    <path
                      d="M3.44954 20.6443C3.3058 21.3665 3.88623 22 4.62267 22H19.3773C20.1138 22 20.6942 21.3665 20.5505 20.6443C19.9516 17.635 17.9884 13 12 13C6.01165 13 4.04844 17.635 3.44954 20.6443Z"
                      fill="#FFFFFF"
                    ></path>
                    <path
                      d="M7 7.5C7 10.2614 9.23858 12.5 12 12.5C14.7614 12.5 17 10.2614 17 7.5V6.5C17 3.73858 14.7614 1.5 12 1.5C9.23858 1.5 7 3.73858 7 6.5V7.5Z"
                      fill="#FFFFFF"
                    ></path>
                  </svg>
                </div>
                <div className="mx-1 text-[rgba(255,255,255,1.00)] text-[13px] font-medium leading-5 text-left whitespace-pre-wrap break-words">
                  Log In
                </div>
              </div>
              <div
                className="relative z-0 flex flex-col items-stretch basis-auto shrink-0 ml-1 py-[10px] px-4 bg-[rgb(1,148,243)] hover:bg-[rgb(0,124,232)] rounded-md cursor-pointer select-none"
                style={{ touchAction: "manipulation" }}
              >
                <div
                  className="absolute w-[1px] h-[1px] -m-[1px] break-words whitespace-nowrap overflow-hidden"
                  style={{ clip: "rect(0, 0, 0, 0)" }}
                >
                  Register
                </div>
                <div className="relative z-0 flex justify-center items-center flex-1 opacity-100">
                  <div className="max-w-full text-[rgba(255,255,255,1.00)] text-[13px] font-bold text-center leading-4 text-ellipsis whitespace-nowrap break-words overflow-hidden">
                    Register
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="relative z-0 flex flex-col items-center basis-auto shrink-0 w-full border-y border-[rgba(104,113,118,0.25)]">
            <div className="relative z-0 flex flex-col items-center basis-auto shrink-0 w-full h-11">
              <div className="relative z-0 flex items-stretch flex-nowrap basis-auto shrink-0 w-full h-full max-w-[1222px] min-w-[720px] px-1">
                <Link to={"/"} className="flex items-center my-1 mr-4 px-2 hover:bg-[rgba(0,0,0,0.25)] rounded-md">
                  <h4 className="text-[rgba(255,255,255,1.00)] text-[13px] font-semibold leading-4 text-left whitespace-pre-wrap break-words">
                    Hotels
                  </h4>
                </Link>
                <Link to={"/"} className="flex items-center my-1 mr-4 px-2 hover:bg-[rgba(0,0,0,0.25)] rounded-md">
                  <h4 className="text-[rgba(255,255,255,1.00)] text-[13px] font-semibold leading-4 text-left whitespace-pre-wrap break-words">
                    Flights
                  </h4>
                </Link>
                <Link to={"/"} className="flex items-center my-1 mr-4 px-2 hover:bg-[rgba(0,0,0,0.25)] rounded-md">
                  <h4 className="text-[rgba(255,255,255,1.00)] text-[13px] font-semibold leading-4 text-left whitespace-pre-wrap break-words">
                    Trains
                  </h4>
                </Link>
                <Link to={"/"} className="flex items-center my-1 mr-4 px-2 hover:bg-[rgba(0,0,0,0.25)] rounded-md">
                  <h4 className="text-[rgba(255,255,255,1.00)] text-[13px] font-semibold leading-4 text-left whitespace-pre-wrap break-words">
                    Bus & Travel
                  </h4>
                </Link>
                <Link to={"/"} className="flex items-center my-1 mr-4 px-2 hover:bg-[rgba(0,0,0,0.25)] rounded-md">
                  <h4 className="text-[rgba(255,255,255,1.00)] text-[13px] font-semibold leading-4 text-left whitespace-pre-wrap break-words">
                    Airport Transfer
                  </h4>
                </Link>
                <Link to={"/"} className="flex items-center my-1 mr-4 px-2 hover:bg-[rgba(0,0,0,0.25)] rounded-md">
                  <h4 className="text-[rgba(255,255,255,1.00)] text-[13px] font-semibold leading-4 text-left whitespace-pre-wrap break-words">
                    Car Rental
                  </h4>
                </Link>
                <Link to={"/"} className="flex items-center my-1 mr-4 px-2 hover:bg-[rgba(0,0,0,0.25)] rounded-md">
                  <h4 className="text-[rgba(255,255,255,1.00)] text-[13px] font-semibold leading-4 text-left whitespace-pre-wrap break-words">
                    Things to Do
                  </h4>
                </Link>
                <div className="relative z-0 flex flex-col justify-center items-stretch basis-auto shrink-0 h-full">
                  <div className="cursor-pointer">
                    <div className="relative z-0 flex justify-center items-center h-full py-2.5 px-2 hover:bg-[rgba(0,0,0,0.25)] rounded-md">
                      <h4 className="text-[rgba(255,255,255,1.00)] text-[13px] font-semibold leading-4 text-left whitespace-pre-wrap break-words">
                        More
                      </h4>
                      <div className="relative z-0 flex flex-col items-stretch basis-auto shrink-0 ml-1">
                        <svg
                          width="12"
                          height="12"
                          viewBox="0 0 24 24"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                          data-id="IcSystemChevronDown"
                        >
                          <path
                            d="M6 9L12 15L18 9"
                            stroke="#FFFFFF"
                            stroke-width="2"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                          ></path>
                        </svg>
                      </div>
                    </div>
                  </div>
                  <div className="absolute top-full right-0 z-0 flex flex-row-reverse items-stretch basis-auto shrink-0 min-w-max -mt-1 pointer-events-auto hidden">
                    <div className="relative z-0 flex flex-col items-stretch basis-auto shrink-0 w-full bg-[rgba(255,255,255,1.00)] rounded-md shadow-[0_4px_10px_rgba(3,18,26,0.15)] scale-y-100 origin-[top_center] overflow-hidden">
                      <div className="relative z-0 flex flex-col items-stretch basis-auto shrink-0 translate-y-0 origin-[top_center] opacity-100">
                        <div className="relative z-0 flex flex-col items-stretch basis-auto shrink-0 py-2 bg-[rgba(255,255,255,1.00)]">
                          <Link
                            to={"/"}
                            className="relative flex items-center p-3 whitespace-nowrap hover:bg-[rgb(242,243,243)]"
                          >
                            <img
                              src="https://d1785e74lyxkqq.cloudfront.net/_next/static/v2/c/c69bbbaab19285dd98e27ec11d83bf33.svg"
                              alt=""
                              width={20}
                              height={20}
                              className="mr-2 object-fill"
                              style={{ objectPosition: "50% 50%" }}
                            />
                            <h4 className="max-w-full text-[rgb(104,113,118)] text-sm font-semibold leading-4 text-left text-ellipsis overflow-hidden whitespace-nowrap break-words">
                              Flight + Hotel
                            </h4>
                          </Link>
                          <Link
                            to={"/"}
                            className="relative flex items-center p-3 whitespace-nowrap hover:bg-[rgb(242,243,243)]"
                          >
                            <img
                              src="https://d1785e74lyxkqq.cloudfront.net/_next/static/v2/b/b5ba7b36551c2499565d55c265f5f9e7.svg"
                              alt=""
                              width={20}
                              height={20}
                              className="mr-2 object-fill"
                              style={{ objectPosition: "50% 50%" }}
                            />
                            <h4 className="max-w-full text-[rgb(104,113,118)] text-sm font-semibold leading-4 text-left text-ellipsis overflow-hidden whitespace-nowrap break-words">
                              Travel Insurance
                            </h4>
                          </Link>
                          <Link
                            to={"/"}
                            className="relative flex items-center p-3 whitespace-nowrap hover:bg-[rgb(242,243,243)]"
                          >
                            <img
                              src="https://d1785e74lyxkqq.cloudfront.net/_next/static/v2/4/43217640a8928e7daebe11d305c2494a.svg"
                              alt=""
                              width={20}
                              height={20}
                              className="mr-2 object-fill"
                              style={{ objectPosition: "50% 50%" }}
                            />
                            <h4 className="max-w-full text-[rgb(104,113,118)] text-sm font-semibold leading-4 text-left text-ellipsis overflow-hidden whitespace-nowrap break-words">
                              International Data Plans
                            </h4>
                          </Link>
                          <Link
                            to={"/"}
                            className="relative flex items-center p-3 whitespace-nowrap hover:bg-[rgb(242,243,243)]"
                          >
                            <img
                              src="https://d1785e74lyxkqq.cloudfront.net/_next/static/v2/3/350daed5305a7d6c7ffa9c66f20ea2b5.svg"
                              alt=""
                              width={20}
                              height={20}
                              className="mr-2 object-fill"
                              style={{ objectPosition: "50% 50%" }}
                            />
                            <h4 className="max-w-full text-[rgb(104,113,118)] text-sm font-semibold leading-4 text-left text-ellipsis overflow-hidden whitespace-nowrap break-words">
                              Paylater
                            </h4>
                          </Link>
                          <Link
                            to={"/"}
                            className="relative flex items-center p-3 whitespace-nowrap hover:bg-[rgb(242,243,243)]"
                          >
                            <img
                              src="https://d1785e74lyxkqq.cloudfront.net/_next/static/v2/e/e807cdb83ebd6fe9329c0e3ad4764265.svg"
                              alt=""
                              width={20}
                              height={20}
                              className="mr-2 object-fill"
                              style={{ objectPosition: "50% 50%" }}
                            />
                            <h4 className="max-w-full text-[rgb(104,113,118)] text-sm font-semibold leading-4 text-left text-ellipsis overflow-hidden whitespace-nowrap break-words">
                              City Guides
                            </h4>
                          </Link>
                          <Link
                            to={"/"}
                            className="relative flex items-center p-3 whitespace-nowrap hover:bg-[rgb(242,243,243)]"
                          >
                            <img
                              src="https://d1785e74lyxkqq.cloudfront.net/_next/static/v2/e/e676ec2c54d3d081691ff29b7fb9a97e.svg"
                              alt=""
                              width={20}
                              height={20}
                              className="mr-2 object-fill"
                              style={{ objectPosition: "50% 50%" }}
                            />
                            <h4 className="max-w-full text-[rgb(104,113,118)] text-sm font-semibold leading-4 text-left text-ellipsis overflow-hidden whitespace-nowrap break-words">
                              Gift Voucher
                            </h4>
                          </Link>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="absolute top-0 -z-[1] flex flex-col justify-center items-center basis-auto shrink-0 w-full">
        <div className="relative z-0 flex flex-col items-stretch basis-auto shrink-0 min-w-[1222px]">
          <div className="absolute -top-12 -left-[140px] z-0 flex flex-col items-stretch basis-auto shrink-0">
            <img
              src="https://d1785e74lyxkqq.cloudfront.net/_next/static/v2/4/44de1c047b775679395479a7637ebf83.svg"
              alt=""
              className="object-fill"
              style={{ objectPosition: "50% 50%" }}
              loading="lazy"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
