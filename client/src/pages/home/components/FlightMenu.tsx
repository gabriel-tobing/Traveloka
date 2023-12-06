const FlightMenu = () => {
  return (
    <div className="relative z-0 flex flex-col items-stretch basis-auto shrink-0 mt-6 overflow-visible">
      <div className="relative z-0 flex items-stretch basis-auto shrink-0 translate-x-0 translate-y-0">
        <div className="relative z-0 flex flex-col items-stretch basis-auto shrink grow min-h-[75px]">
          <div className="relative z-0 flex flex-col items-stretch basis-auto shrink-0 opacity-100">
            <div className="relative z-0 flex flex-col items-stretch flex-1 bg-cover bg-no-repeat rounded-[5px]">
              <div className="absolute z-[2] flex flex-col items-stretch basis-auto shrink-0 px-3">
                <div className="relative z-0 flex justify-start items-center basis-auto shrink-0">
                  <div
                    className="relative z-0 flex flex-col items-stretch cursor-pointer select-none"
                    style={{ touchAction: "manipulation" }}
                  >
                    <div className="relative z-0 flex flex-col items-stretch basis-auto shrink-0 py-2 px-3 bg-[rgba(1,148,243,1.00)] rounded-[25px] text-[rgba(255,255,255,1.00)]">
                      <div className="relative z-0 flex justify-start items-center basis-auto shrink-0">
                        <h4 className="text-[rgba(255,255,255,1.00)] text-sm font-semibold text-left leading-4 whitespace-pre-wrap break-words">
                          One-way / Round-trip
                        </h4>
                      </div>
                    </div>
                  </div>
                  <div className="relative z-0 flex flex-col items-stretch basis-auto shrink-0 pr-2"></div>
                  <div
                    className="relative z-0 flex flex-col items-stretch cursor-pointer select-none"
                    style={{ touchAction: "manipulation" }}
                  >
                    <div className="relative z-0 flex flex-col items-stretch basis-auto shrink-0 py-2 px-3 bg-[rgba(3,18,26,0.30)] rounded-[25px] text-[rgba(255,255,255,1.00)]">
                      <div className="relative z-0 flex justify-start items-center basis-auto shrink-0">
                        <h4 className="text-[rgba(255,255,255,1.00)] text-sm font-semibold text-left leading-4 whitespace-pre-wrap break-words">
                          Multi-city
                        </h4>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="relative z-0 flex flex-col items-stretch basis-auto shrink-0 px-3 rounded-t-xl rounded-b-md">
                <div className="relative z-0 flex flex-col items-stretch basis-auto shrink-0">
                  <div className="relative z-0 flex flex-col items-stretch basis-auto shrink-0 px-2">
                    <div className="relative z-[3] flex flex-col items-stretch basis-auto shrink-0 mb-5">
                      <div className="relative z-0 flex justify-end items-start basis-auto shrink-0">
                        <div className="relative z-0 flex flex-col items-stretch basis-auto shrink-0 min-w-[310px]">
                          <div className="relative z-0 flex flex-col items-stretch basis-auto shrink-0">
                            <div
                              className="relative z-0 flex flex-col items-stretch basis-auto shrink-0 cursor-pointer select-none"
                              style={{ touchAction: "manipulation" }}
                            >
                              <div className="relative z-0 only:flex justify-start items-center basis-auto shrink-0 w-[310px] py-1 px-3 border border-[rgba(255,255,255,1.00] bg-[rgba(255,255,255,0.25)] rounded-md cursor-pointer">
                                <div className="relative z-0 flex flex-col basis-auto shrink-0 mr-2">
                                  <svg
                                    width="16"
                                    height="16"
                                    viewBox="0 0 24 24"
                                    fill="none"
                                    xmlns="http://www.w3.org/2000/svg"
                                    data-id="IcSymbolGuestPassenger"
                                  >
                                    <path
                                      fill-rule="evenodd"
                                      clip-rule="evenodd"
                                      d="M9 13.5C12.3137 13.5 15 16.1863 15 19.5V21H3V19.5C3 16.1863 5.68629 13.5 9 13.5ZM9 10.5C11.0711 10.5 12.75 8.82107 12.75 6.75C12.75 4.67893 11.0711 3 9 3C6.92893 3 5.25 4.67893 5.25 6.75C5.25 8.82107 6.92893 10.5 9 10.5Z"
                                      stroke="#FFFFFF"
                                      stroke-width="2"
                                      stroke-linecap="round"
                                      stroke-linejoin="round"
                                    ></path>
                                    <path
                                      d="M15 3H15.75C17.8211 3 19.5 4.67893 19.5 6.75C19.5 8.82107 17.8211 10.5 15.75 10.5M16.5 13.5C18.9853 13.5 21 15.5147 21 18V21H19.5"
                                      stroke="#FFFFFF"
                                      stroke-width="2"
                                      stroke-linecap="round"
                                      stroke-linejoin="round"
                                    ></path>
                                  </svg>
                                </div>
                                <div className="relatie z-0 flex justify-between items-center flex-1">
                                  <h4 className="text-[rgba(255,255,255,1.00)] text-sm font-semibold text-left leading-4 whitespace-pre-wrap break-words">
                                    1 Adult, 0 Child, 0 Infant
                                  </h4>
                                  <div className="relative z-0 flex flex-col justify-center items-stretch basis-auto shrink-0 rotate-0 ml-3">
                                    <svg
                                      width="24"
                                      height="24"
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
                            </div>
                          </div>
                        </div>
                        <div className="relative z-0 flex flex-col items-stretch basis-auto shrink-0 pr-2"></div>
                        <div className="relative -z-[1] flex flex-col items-stretch basis-auto shrink-0 mt-0">
                          <div className="relative z-0 flex flex-col items-stretch basis-auto shrink-0">
                            <div
                              className="relative z-0 flex flex-col items-stretch basis-auto shrink-0 cursor-pointer select-none"
                              style={{ touchAction: "manipulation" }}
                            >
                              <div className="relative z-0 flex justify-start items-center basis-auto shrink-0 w-[250px] py-1 px-3 border border-[rgba(255,255,255,1.00)] bg-[rgba(255,255,255,0.25)] rounded-md">
                                <div className="relative z-0 flex flex-col items-stretch basis-auto shrink-0 mr-2">
                                  <svg
                                    width="16"
                                    height="16"
                                    viewBox="0 0 24 24"
                                    fill="none"
                                    xmlns="http://www.w3.org/2000/svg"
                                    data-id="IcTransportSeatClass"
                                  >
                                    <path
                                      d="M6.99997 21H17M4.10496 3H4.76788C6.0927 3 7.26067 3.869 7.64136 5.13796L9.78617 12.2873C9.91307 12.7103 10.3024 13 10.744 13H16.4059C18.0152 13 19.7434 13.8444 20.5714 15.2244C21.3043 16.4459 20.4244 18 18.9999 18H7.21493C5.67368 18 4.38318 16.8321 4.22982 15.2985L3.10992 4.0995C3.05105 3.51082 3.51333 3 4.10496 3Z"
                                      stroke="#FFFFFF"
                                      stroke-width="2"
                                      stroke-linecap="round"
                                      stroke-linejoin="round"
                                    ></path>
                                    <path
                                      d="M13 10H17"
                                      stroke="#FFFFFF"
                                      stroke-width="2"
                                      stroke-linecap="round"
                                      stroke-linejoin="round"
                                    ></path>
                                  </svg>
                                </div>
                                <div className="relative z-0 flex justify-between items-center flex-1">
                                  <h4 className="text-[rgba(255,255,255,1.00)] text-sm font-semibold text-left leading-4 whitespace-pre-wrap break-words">
                                    Economy
                                  </h4>
                                  <div className="relative z-0 flex flex-col justify-center items-stretch basis-auto shrink-0 rotate-0 ml-3">
                                    <svg
                                      width="24"
                                      height="24"
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
                            </div>
                            <div className="absolute top-10 left-0 z-[1000] flex justify-start items-start content-start basis-auto shrink-0 flex-wrap w-full min-w-0 max-h-60 bg-[rgba(255,255,255,1.00)] rounded-md shadow-[0_4px_10px_rgba(3,18,26,0.15)] overflow-auto hidden">
                              <div
                                className="relative flex flex-col items-stretch basis-auto shrink-0 w-full cursor-pointer select-none"
                                style={{ touchAction: "manipulation" }}
                              >
                                <div className="relative z-0 flex justify-start items-center basis-auto shrink-0 flex-wrap py-1 px-4 bg-[rgb(247,249,250)]">
                                  <div className="relative z-0 flex flex-col items-stretch basis-auto shrink-0 w-2 h-2 mr-2 bg-[rgb(1,148,243)] rounded-full"></div>
                                  <div className="max-w-full text-[rgb(1,148,243)] text-[15.7px] font-normal text-left leading-6 text-ellipsis whitespace-nowrap overflow-hidden break-words">
                                    Economy
                                  </div>
                                </div>
                              </div>
                              <div
                                className="relative flex flex-col items-stretch basis-auto shrink-0 w-full cursor-pointer select-none"
                                style={{ touchAction: "manipulation" }}
                              >
                                <div className="relative z-0 flex justify-start items-center basis-auto shrink-0 flex-wrap py-1 px-4 bg-[rgb(247,249,250)]">
                                  <div className="relative z-0 flex flex-col items-stretch basis-auto shrink-0 w-2 h-2 mr-2 bg-[rgba(255,255,255,1.00)] rounded-full"></div>
                                  <div className="max-w-full text-[rgba(3,18,26,1.00)] text-[15.7px] font-normal text-left leading-6 text-ellipsis whitespace-nowrap overflow-hidden break-words">
                                    Premium Economy
                                  </div>
                                </div>
                              </div>
                              <div
                                className="relative flex flex-col items-stretch basis-auto shrink-0 w-full cursor-pointer select-none"
                                style={{ touchAction: "manipulation" }}
                              >
                                <div className="relative z-0 flex justify-start items-center basis-auto shrink-0 flex-wrap py-1 px-4 bg-[rgb(247,249,250)]">
                                  <div className="relative z-0 flex flex-col items-stretch basis-auto shrink-0 w-2 h-2 mr-2 bg-[rgba(255,255,255,1.00)] rounded-full"></div>
                                  <div className="max-w-full text-[rgba(3,18,26,1.00)] text-[15.7px] font-normal text-left leading-6 text-ellipsis whitespace-nowrap overflow-hidden break-words">
                                    Business
                                  </div>
                                </div>
                              </div>
                              <div
                                className="relative flex flex-col items-stretch basis-auto shrink-0 w-full cursor-pointer select-none"
                                style={{ touchAction: "manipulation" }}
                              >
                                <div className="relative z-0 flex justify-start items-center basis-auto shrink-0 flex-wrap py-1 px-4 bg-[rgb(247,249,250)]">
                                  <div className="relative z-0 flex flex-col items-stretch basis-auto shrink-0 w-2 h-2 mr-2 bg-[rgba(255,255,255,1.00)] rounded-full"></div>
                                  <div className="max-w-full text-[rgba(3,18,26,1.00)] text-[15.7px] font-normal text-left leading-6 text-ellipsis whitespace-nowrap overflow-hidden break-words">
                                    First Class
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="relative z-[2] flex items-stretch flex-1">
                      <div className="relative z-0 grid grid-cols-2 items-start grow basis-auto shrink-0 gap-y-3 gap-x-4">
                        <div className="relative z-0 flex items-stretch">
                          <div className="relative z-0 flex flex-col items-stretch flex-1 min-w-[160px]">
                            <div className="relative z-0 flex flex-col items-stretch basis-auto shrink-0">
                              <div className="relative z-0 flex flex-col items-stretch basis-auto shrink-0">
                                <label htmlFor="" className="relative z-0 flex items-stretch basis-auto shrink-0 py-1">
                                  <div className="w-full max-w-full mb-2 line-clamp-2 text-[rgba(255,255,255,1.00)] text-sm font-semibold text-left leading-5 whitespace-pre-wrap break-words">
                                    From
                                  </div>
                                </label>
                                <div
                                  className="group relative z-0 flex justify-center items-center basis-auto shrink-0 min-h-[54px] py-2 pl-4 pr-2 border-[rgba(205,208,209,0.5)]"
                                  style={{ borderWidth: "3px 0 3px 3px", borderRadius: "20px 0 0 20px" }}
                                >
                                  <div
                                    className="absolute top-0 left-0 right-0 bottom-0 -z-[1] flex flex-col items-stretch basis-auto shrink-0 border border-[rgba(205,208,209,1.00)] group-hover:border-[rgb(104,113,118)] bg-[rgba(255,255,255,1.00)]"
                                    style={{ borderRadius: "16px 0 0 16px" }}
                                  ></div>
                                  <div className="relative z-0 flex flex-col items-stretch basis-auto shrink-0 mr-2">
                                    <svg
                                      width="24"
                                      height="24"
                                      viewBox="0 0 24 24"
                                      fill="none"
                                      xmlns="http://www.w3.org/2000/svg"
                                      data-id="IcFlightTakeOff"
                                    >
                                      <path
                                        d="M3 21H21"
                                        stroke="#0194f3"
                                        stroke-width="2"
                                        stroke-linecap="round"
                                        stroke-linejoin="round"
                                      ></path>
                                      <path
                                        fill-rule="evenodd"
                                        clip-rule="evenodd"
                                        d="M12 9L15.1924 7.93585C17.317 7.22767 19.6563 7.95843 21 9.75L7.44513 14.0629C5.86627 14.5653 4.1791 13.6926 3.67674 12.1137C3.66772 12.0854 3.65912 12.0569 3.65094 12.0283L3 9.75L5.25 10.875L9 9.75L4.5 3H5.25L12 9Z"
                                        stroke="#0194f3"
                                        stroke-width="2"
                                        stroke-linecap="round"
                                        stroke-linejoin="round"
                                      ></path>
                                    </svg>
                                  </div>
                                  <input
                                    type="text"
                                    placeholder="Origin"
                                    className="flex-1 min-w-0 text-[rgba(3,18,26,1.00)] text-base leading-6 outline-none resize-none"
                                  />
                                </div>
                              </div>
                            </div>
                          </div>
                          <div className="relative z-[1] flex flex-col justify-end items-center basis-auto shrink-0 w-0">
                            <div className="relative z-0 flex flex-col justify-center items-center basis-auto shrink-0 w-10 h-10 mb-[7px] border-[1.5px] border-[rgba(205,208,209,1.00)] bg-[rgba(255,255,255,1.00)] rounded-3xl">
                              <div
                                className="relative z-0 flex flex-col items-stretch basis-auto shrink-0 w-6 h-6 rounded-full -rotate-180 cursor-pointer select-none"
                                style={{ touchAction: "manipulation" }}
                              >
                                <img
                                  src="https://d1785e74lyxkqq.cloudfront.net/_next/static/v2/3/331a92149a02dc615986206c588d6642.svg"
                                  alt=""
                                  width={24}
                                  height={24}
                                />
                              </div>
                            </div>
                          </div>
                          <div className="relative z-0 flex flex-col items-stretch flex-1 min-w-[160px]">
                            <div className="relative z-0 flex flex-col items-stretch basis-auto shrink-0">
                              <div className="relative z-0 flex flex-col items-stretch basis-auto shrink-0">
                                <label htmlFor="" className="relative z-0 flex items-stretch basis-auto shrink-0 py-1">
                                  <div className="w-full max-w-full mb-2 line-clamp-2 text-[rgba(255,255,255,1.00)] text-sm font-semibold text-left leading-5 whitespace-pre-wrap break-words">
                                    To
                                  </div>
                                </label>
                                <div
                                  className="group relative z-0 flex justify-center items-center basis-auto shrink-0 min-h-[54px] py-2 pl-6 pr-2 border-[rgba(205,208,209,0.5)]"
                                  style={{ borderWidth: "3px 3px 3px 0", borderRadius: "0 20px 20px 0" }}
                                >
                                  <div
                                    className="absolute top-0 left-0 right-0 bottom-0 -z-[1] flex flex-col items-stretch basis-auto shrink-0 border border-[rgba(205,208,209,1.00)] group-hover:border-[rgb(104,113,118)] bg-[rgba(255,255,255,1.00)]"
                                    style={{ borderRadius: "0 16px 16px 0" }}
                                  ></div>
                                  <div className="relative z-0 flex flex-col items-stretch basis-auto shrink-0 mr-2">
                                    <svg
                                      width="24"
                                      height="24"
                                      viewBox="0 0 24 24"
                                      fill="none"
                                      xmlns="http://www.w3.org/2000/svg"
                                      data-id="IcFlightLanding"
                                    >
                                      <path
                                        d="M3 21H21"
                                        stroke="#0194f3"
                                        stroke-width="2"
                                        stroke-linecap="round"
                                        stroke-linejoin="round"
                                      ></path>
                                      <path
                                        fill-rule="evenodd"
                                        clip-rule="evenodd"
                                        d="M21 15L7.1263 13.8439C4.79398 13.6495 3 11.6998 3 9.3594V7.5L4.5 10.5H9L7.5 3H8.1L12 10.5L17.3419 11.5684C18.7036 11.8407 19.8632 12.7265 20.4843 13.9685L21 15ZM16.5 17.625L16.875 17.25L17.25 17.625L16.875 18L16.5 17.625Z"
                                        stroke="#0194f3"
                                        stroke-width="2"
                                        stroke-linecap="round"
                                        stroke-linejoin="round"
                                      ></path>
                                    </svg>
                                  </div>
                                  <input
                                    type="text"
                                    placeholder="Destination"
                                    className="flex-1 min-w-0 text-[rgba(3,18,26,1.00)] text-base leading-6 outline-none resize-none"
                                  />
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="relative z-0 flex items-stretch">
                          <div className="relative -z-[1] flex items-stretch flex-1 min-w-[320px]">
                            <div className="relative z-0 flex flex-col items-stretch flex-1 min-w-[160px]">
                              <div className="relative z-0 flex flex-col items-stretch basis-auto shrink-0 w-full">
                                <div className="relative z-0 flex flex-col items-stretch">
                                  <label
                                    htmlFor=""
                                    className="relative z-0 flex items-stretch basis-auto shrink-0 py-1"
                                  >
                                    <div className="w-full max-w-full mb-2 line-clamp-2 text-[rgba(255,255,255,1.00)] text-sm font-semibold text-left leading-5 whitespace-pre-wrap break-words">
                                      Departure Date
                                    </div>
                                  </label>
                                  <div
                                    className="group relative z-0 flex justify-center items-center basis-auto shrink-0 min-h-[54px] p-2 border-[rgba(205,208,209,0.5)]"
                                    style={{ borderWidth: "3px 0 3px 3px", borderRadius: "20px 0 0 20px" }}
                                  >
                                    <div
                                      className="absolute top-0 left-0 right-0 bottom-0 -z-[1] flex flex-col items-stretch basis-auto shrink-0 border border-[rgba(205,208,209,1.00)] group-hover:border-[rgb(104,113,118)] bg-[rgba(255,255,255,1.00)]"
                                      style={{ borderRadius: "16px 0 0 16px" }}
                                    ></div>
                                    <div className="relative z-0 flex flex-col items-stretch basis-auto shrink-0 mr-2">
                                      <svg
                                        width="24"
                                        height="24"
                                        viewBox="0 0 24 24"
                                        fill="none"
                                        xmlns="http://www.w3.org/2000/svg"
                                        data-id="IcSystemCalendar"
                                      >
                                        <path
                                          d="M7 2V5M17 2V5M3 8H21M11.5 11.5H12.5V12.5H11.5V11.5ZM11.5 16.5H12.5V17.5H11.5V16.5ZM16.5 11.5H17.5V12.5H16.5V11.5ZM6.5 16.5H7.5V17.5H6.5V16.5ZM5 21H19C20.1046 21 21 20.1046 21 19V6C21 4.89543 20.1046 4 19 4H5C3.89543 4 3 4.89543 3 6V19C3 20.1046 3.89543 21 5 21Z"
                                          stroke="#0194f3"
                                          stroke-width="2"
                                          stroke-linecap="round"
                                          stroke-linejoin="round"
                                        ></path>
                                        <path
                                          fill-rule="evenodd"
                                          clip-rule="evenodd"
                                          d="M7.5 11.5V12.5H6.5V11.5H7.5Z"
                                          stroke="#0194F3"
                                          stroke-width="2"
                                          stroke-linecap="round"
                                          stroke-linejoin="round"
                                        ></path>
                                      </svg>
                                    </div>
                                    <input
                                      type="text"
                                      placeholder="Select date"
                                      className="flex-1 min-w-0 text-[rgba(3,18,26,1.00)] text-base leading-6 outline-none resize-none"
                                    />
                                  </div>
                                </div>
                                <div className="relative z-0 flex flex-col items-stretch basis-auto shrink-0 hidden">
                                  <div className="relative z-0 flex flex-col items-stretch basis-auto shrink-0">
                                    <div className="absolute left-0 z-0 flex flex-col items-stretch basis-auto shrink-0 w-[612px] bg-[rgba(255,255,255,1.00)] rounded-md shadow-[0_1px_2px_rgba(3,18,26,0.20)] overflow-visible">
                                      <div className="relative z-0 flex flex-col items-stretch basis-auto shrink-0 py-2 px-3">
                                        <div
                                          className="relative z-0 flex items-stretch basis-auto shrink grow overflow-hidden"
                                          style={{ scrollSnapType: "x mandatory" }}
                                        >
                                          <div className="relative z-0 flex items-stretch basis-auto shrink-0 w-[596px]">
                                            <div
                                              className="relative z-0 flex flex-col items-stretch basis-auto shrink-0"
                                              style={{ scrollSnapAlign: "start" }}
                                            >
                                              <div className="relative z-0 flex items-stretch basis-auto shrink-0">
                                                <div className="relative z-0 flex flex-col items-stretch basis-auto shrink-0 w-[290px]">
                                                  <div className="relative z-0 flex justify-center items-center basis-auto shrink-0 py-2 px-3">
                                                    <div className="relative z-0 flex items-stretch basis-auto shrink-0">
                                                      <h3 className="text-[rgba(3,18,26,1.00)] text-base font-semibold text-left leading-5 whitespace-pre-wrap break-words">
                                                        December 2023
                                                      </h3>
                                                    </div>
                                                    <div className="absolute left-0 z-0 flex flex-col items-stretch basis-auto shrink-0">
                                                      <div className="relative z-0 flex flex-col justify-center items-center basis-auto shrink-0 w-6 h-6 select-none">
                                                        <svg
                                                          width="16"
                                                          height="16"
                                                          viewBox="0 0 16 16"
                                                          fill="none"
                                                          xmlns="http://www.w3.org/2000/svg"
                                                          data-id="IcSystemChevronLeft16"
                                                        >
                                                          <path
                                                            d="M10 3L5 8L10 13"
                                                            stroke="#CDD0D1"
                                                            stroke-width="2"
                                                            stroke-linecap="round"
                                                            stroke-linejoin="round"
                                                          ></path>
                                                        </svg>
                                                      </div>
                                                    </div>
                                                  </div>
                                                  <div className="relative z-0 grid grid-cols-7 items-stretch basis-auto shrink-0 py-1 border-b border-[rgb(205,208,209)]">
                                                    <div className="relative z-0 flex flex-col items-stretch h-4">
                                                      <div className="text-[rgb(231,9,14)] text-xs font-medium text-center leading-4 whitespace-pre-wrap break-words">
                                                        Sun
                                                      </div>
                                                    </div>
                                                    <div className="relative z-0 flex flex-col items-stretch h-4">
                                                      <div className="text-[rgb(104,113,118)] text-xs font-medium text-center leading-4 whitespace-pre-wrap break-words">
                                                        Mon
                                                      </div>
                                                    </div>
                                                    <div className="relative z-0 flex flex-col items-stretch h-4">
                                                      <div className="text-[rgb(104,113,118)] text-xs font-medium text-center leading-4 whitespace-pre-wrap break-words">
                                                        Tue
                                                      </div>
                                                    </div>
                                                    <div className="relative z-0 flex flex-col items-stretch h-4">
                                                      <div className="text-[rgb(104,113,118)] text-xs font-medium text-center leading-4 whitespace-pre-wrap break-words">
                                                        Wed
                                                      </div>
                                                    </div>
                                                    <div className="relative z-0 flex flex-col items-stretch h-4">
                                                      <div className="text-[rgb(104,113,118)] text-xs font-medium text-center leading-4 whitespace-pre-wrap break-words">
                                                        Thu
                                                      </div>
                                                    </div>
                                                    <div className="relative z-0 flex flex-col items-stretch h-4">
                                                      <div className="text-[rgb(104,113,118)] text-xs font-medium text-center leading-4 whitespace-pre-wrap break-words">
                                                        Fri
                                                      </div>
                                                    </div>
                                                    <div className="relative z-0 flex flex-col items-stretch h-4">
                                                      <div className="text-[rgb(104,113,118)] text-xs font-medium text-center leading-4 whitespace-pre-wrap break-words">
                                                        Sat
                                                      </div>
                                                    </div>
                                                  </div>
                                                  <div className="relative z-0 grid grid-cols-7 grid-rows-4 items-stretch basis-auto shrink-0">
                                                    <div className="relative z-0 flex flex-col items-stretch">
                                                      <div className="relative z-0 flex flex-col justify-center items-center rounded-md">
                                                        <div className="relative z-0 flex flex-col items-stretch basis-auto shrink-0 w-full">
                                                          <div className="relative z-0 flex flex-col items-stretch basis-auto shrink-0 h-[14px]"></div>
                                                          <div className="relative z-0 flex flex-col items-stretch basis-auto shrink-0 w-full h-6">
                                                            <div className="relative z-[1] flex flex-col items-stretch basis-auto shrink-0 w-1/2"></div>
                                                            <div className="absolute left-1/2 z-[2] flex-col justify-center items-center basis-auto shrink-0 grow h-6 -translate-x-1/2">
                                                              <div className="text-[rgb(231,9,14)] text-sm font-medium text-center leading-5 whitespace-pre-wrap break-words">
                                                                1
                                                              </div>
                                                            </div>
                                                          </div>
                                                          <div className="relative z-0 flex flex-col items-stretch basis-auto shrink-0 h-[14px]"></div>
                                                        </div>
                                                      </div>
                                                    </div>
                                                    <div className="relative z-0 flex flex-col items-stretch">
                                                      <div className="relative z-0 flex flex-col justify-center items-center rounded-md">
                                                        <div className="relative z-0 flex flex-col items-stretch basis-auto shrink-0 w-full">
                                                          <div className="relative z-0 flex flex-col items-stretch basis-auto shrink-0 h-[14px]"></div>
                                                          <div className="relative z-0 flex flex-col items-stretch basis-auto shrink-0 w-full h-6">
                                                            <div className="relative z-[1] flex flex-col items-stretch basis-auto shrink-0 w-1/2"></div>
                                                            <div className="absolute left-1/2 z-[2] flex-col justify-center items-center basis-auto shrink-0 grow h-6 -translate-x-1/2">
                                                              <div className="text-[rgba(205,208,209,1.00)] text-sm font-medium text-center leading-5 whitespace-pre-wrap break-words">
                                                                2
                                                              </div>
                                                            </div>
                                                          </div>
                                                          <div className="relative z-0 flex flex-col items-stretch basis-auto shrink-0 h-[14px]"></div>
                                                        </div>
                                                      </div>
                                                    </div>
                                                    <div className="relative z-0 flex flex-col items-stretch">
                                                      <div className="relative z-0 flex flex-col justify-center items-center rounded-md">
                                                        <div className="relative z-0 flex flex-col items-stretch basis-auto shrink-0 w-full">
                                                          <div className="relative z-0 flex flex-col items-stretch basis-auto shrink-0 h-[14px]"></div>
                                                          <div className="relative z-0 flex flex-col items-stretch basis-auto shrink-0 w-full h-6">
                                                            <div className="relative z-[1] flex flex-col items-stretch basis-auto shrink-0 w-1/2"></div>
                                                            <div className="absolute left-1/2 z-[2] flex-col justify-center items-center basis-auto shrink-0 grow h-6 px-2 border-2 border-[rgb(1,148,243)] bg-[rgb(236,248,255)] rounded-full -translate-x-1/2">
                                                              <div className="text-[rgba(3,18,26,1.00)] text-sm font-medium text-center leading-5 whitespace-pre-wrap break-words">
                                                                3
                                                              </div>
                                                            </div>
                                                          </div>
                                                          <div className="relative z-0 flex flex-col items-stretch basis-auto shrink-0 h-[14px]">
                                                            <div className="max-w-full text-[rgb(104,113,118)] text-[11px] font-medium text-center leading-[11px] text-ellipsis whitespace-nowrap overflow-hidden">
                                                              896
                                                            </div>
                                                          </div>
                                                        </div>
                                                      </div>
                                                    </div>
                                                  </div>
                                                </div>
                                                <div className="relative z-0 flex flex-col items-stretch basis-auto shrink-0 w-4"></div>
                                              </div>
                                            </div>
                                            <div
                                              className="relative z-0 flex flex-col items-stretch basis-auto shrink-0"
                                              style={{ scrollSnapAlign: "start" }}
                                            >
                                              <div className="relative z-0 flex items-stretch basis-auto shrink-0">
                                                <div className="relative z-0 flex flex-col items-stretch basis-auto shrink-0 w-[290px]">
                                                  <div className="relative z-0 flex justify-center items-center basis-auto shrink-0 py-2 px-3">
                                                    <div className="relative z-0 flex items-stretch basis-auto shrink-0">
                                                      <h3 className="text-[rgba(3,18,26,1.00)] text-base font-semibold text-left leading-5 whitespace-pre-wrap break-words">
                                                        January 2023
                                                      </h3>
                                                    </div>
                                                    <div className="absolute right-0 z-0 flex flex-col items-stretch basis-auto shrink-0">
                                                      <div className="relative z-0 flex flex-col justify-center items-center basis-auto shrink-0 w-6 h-6 select-none">
                                                        <svg
                                                          width="16"
                                                          height="16"
                                                          viewBox="0 0 16 16"
                                                          fill="none"
                                                          xmlns="http://www.w3.org/2000/svg"
                                                          data-id="IcSystemChevronRight16"
                                                        >
                                                          <path
                                                            d="M6 3L11 8L6 13"
                                                            stroke="#0194f3"
                                                            stroke-width="2"
                                                            stroke-linecap="round"
                                                            stroke-linejoin="round"
                                                          ></path>
                                                        </svg>
                                                      </div>
                                                    </div>
                                                  </div>
                                                  <div className="relative z-0 grid grid-cols-7 items-stretch basis-auto shrink-0 py-1 border-b border-[rgb(205,208,209)]">
                                                    <div className="relative z-0 flex flex-col items-stretch h-4">
                                                      <div className="text-[rgb(231,9,14)] text-xs font-medium text-center leading-4 whitespace-pre-wrap break-words">
                                                        Sun
                                                      </div>
                                                    </div>
                                                    <div className="relative z-0 flex flex-col items-stretch h-4">
                                                      <div className="text-[rgb(104,113,118)] text-xs font-medium text-center leading-4 whitespace-pre-wrap break-words">
                                                        Mon
                                                      </div>
                                                    </div>
                                                    <div className="relative z-0 flex flex-col items-stretch h-4">
                                                      <div className="text-[rgb(104,113,118)] text-xs font-medium text-center leading-4 whitespace-pre-wrap break-words">
                                                        Tue
                                                      </div>
                                                    </div>
                                                    <div className="relative z-0 flex flex-col items-stretch h-4">
                                                      <div className="text-[rgb(104,113,118)] text-xs font-medium text-center leading-4 whitespace-pre-wrap break-words">
                                                        Wed
                                                      </div>
                                                    </div>
                                                    <div className="relative z-0 flex flex-col items-stretch h-4">
                                                      <div className="text-[rgb(104,113,118)] text-xs font-medium text-center leading-4 whitespace-pre-wrap break-words">
                                                        Thu
                                                      </div>
                                                    </div>
                                                    <div className="relative z-0 flex flex-col items-stretch h-4">
                                                      <div className="text-[rgb(104,113,118)] text-xs font-medium text-center leading-4 whitespace-pre-wrap break-words">
                                                        Fri
                                                      </div>
                                                    </div>
                                                    <div className="relative z-0 flex flex-col items-stretch h-4">
                                                      <div className="text-[rgb(104,113,118)] text-xs font-medium text-center leading-4 whitespace-pre-wrap break-words">
                                                        Sat
                                                      </div>
                                                    </div>
                                                  </div>
                                                  <div className="relative z-0 grid grid-cols-7 grid-rows-4 items-stretch basis-auto shrink-0">
                                                    <div className="relative z-0 flex flex-col items-stretch">
                                                      <div className="relative z-0 flex flex-col justify-center items-center rounded-md">
                                                        <div className="relative z-0 flex flex-col items-stretch basis-auto shrink-0 w-full">
                                                          <div className="relative z-0 flex flex-col items-stretch basis-auto shrink-0 h-[14px]"></div>
                                                          <div className="relative z-0 flex flex-col items-stretch basis-auto shrink-0 w-full h-6">
                                                            <div className="relative z-[1] flex flex-col items-stretch basis-auto shrink-0 w-1/2"></div>
                                                            <div className="absolute left-1/2 z-[2] flex-col justify-center items-center basis-auto shrink-0 grow h-6 -translate-x-1/2">
                                                              <div className="text-[rgb(231,9,14)] text-sm font-medium text-center leading-5 whitespace-pre-wrap break-words">
                                                                1
                                                              </div>
                                                            </div>
                                                          </div>
                                                          <div className="relative z-0 flex flex-col items-stretch basis-auto shrink-0 h-[14px]"></div>
                                                        </div>
                                                      </div>
                                                    </div>
                                                    <div className="relative z-0 flex flex-col items-stretch">
                                                      <div className="relative z-0 flex flex-col justify-center items-center rounded-md">
                                                        <div className="relative z-0 flex flex-col items-stretch basis-auto shrink-0 w-full">
                                                          <div className="relative z-0 flex flex-col items-stretch basis-auto shrink-0 h-[14px]"></div>
                                                          <div className="relative z-0 flex flex-col items-stretch basis-auto shrink-0 w-full h-6">
                                                            <div className="relative z-[1] flex flex-col items-stretch basis-auto shrink-0 w-1/2"></div>
                                                            <div className="absolute left-1/2 z-[2] flex-col justify-center items-center basis-auto shrink-0 grow h-6 -translate-x-1/2">
                                                              <div className="text-[rgba(205,208,209,1.00)] text-sm font-medium text-center leading-5 whitespace-pre-wrap break-words">
                                                                2
                                                              </div>
                                                            </div>
                                                          </div>
                                                          <div className="relative z-0 flex flex-col items-stretch basis-auto shrink-0 h-[14px]"></div>
                                                        </div>
                                                      </div>
                                                    </div>
                                                    <div className="relative z-0 flex flex-col items-stretch">
                                                      <div className="relative z-0 flex flex-col justify-center items-center rounded-md">
                                                        <div className="relative z-0 flex flex-col items-stretch basis-auto shrink-0 w-full">
                                                          <div className="relative z-0 flex flex-col items-stretch basis-auto shrink-0 h-[14px]"></div>
                                                          <div className="relative z-0 flex flex-col items-stretch basis-auto shrink-0 w-full h-6">
                                                            <div className="relative z-[1] flex flex-col items-stretch basis-auto shrink-0 w-1/2"></div>
                                                            <div className="absolute left-1/2 z-[2] flex-col justify-center items-center basis-auto shrink-0 grow h-6 px-2 border-2 border-[rgb(1,148,243)] bg-[rgb(236,248,255)] rounded-full -translate-x-1/2">
                                                              <div className="text-[rgba(3,18,26,1.00)] text-sm font-medium text-center leading-5 whitespace-pre-wrap break-words">
                                                                3
                                                              </div>
                                                            </div>
                                                          </div>
                                                          <div className="relative z-0 flex flex-col items-stretch basis-auto shrink-0 h-[14px]">
                                                            <div className="max-w-full text-[rgb(104,113,118)] text-[11px] font-medium text-center leading-[11px] text-ellipsis whitespace-nowrap overflow-hidden">
                                                              896
                                                            </div>
                                                          </div>
                                                        </div>
                                                      </div>
                                                    </div>
                                                  </div>
                                                </div>
                                                <div className="relative z-0 flex flex-col items-stretch basis-auto shrink-0 w-4"></div>
                                              </div>
                                            </div>
                                            <div>3</div>
                                            <div>4</div>
                                          </div>
                                        </div>
                                      </div>
                                      <div className="relative z-0 flex justify-between items-stretch basis-auto shrink-0 py-2 px-4 bg-[rgb(247,249,250)] rounded-b-md shadow-[0_-2px_5px_rgba(3,18,26,0.15)]">
                                        <div className="relative z-0 flex justify-start items-center basis-auto shrink-0">
                                          <div className="relative z-0 flex flex-col items-stretch basis-auto shrink-0 w-3 h-3 bg-[rgb(5,165,105)] rounded-sm"></div>
                                          <div className="relative z-0 flex flex-col items-stretch basis-auto shrink-0 pr-3"></div>
                                          <div className="text-[rgb(0,135,90)] text-xs font-normal text-left leading-4 whitespace-pre-wrap break-words">
                                            Lowest flight price
                                          </div>
                                        </div>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                            <div className="relative z-0 flex flex-col items-stretch flex-1 min-w-[160px]">
                              <div className="relative z-0 flex flex-col items-stretch basis-auto shrink-0 my-1">
                                <div className="relative z-0 flex flex-col items-stretch basis-auto shrink-0">
                                  <div className="relative z-0 flex flex-col items-stretch basis-auto shrink-0">
                                    <div className="relative z-0 flex flex-col items-stretch basis-auto shrink-0 pb-2">
                                      <div
                                        className="relative z-0 flex flex-col items-stretch basis-auto shrink-0 cursor-pointer select-none"
                                        style={{ touchAction: "manipulation" }}
                                      >
                                        <div className="relative z-0 flex items-center basis-auto shrink-0 pointer-events-none">
                                          <div
                                            className="relative z-0 flex items-center self-start basis-auto shrink-0 p-0 opacity-100 cursor-pointer"
                                            style={{ touchAction: "manipulation" }}
                                          >
                                            <div className="relative z-0 flex flex-col justify-center items-center basis-auto shrink-0 w-5 h-5 m-0.5 border border-[rgb(104,113,118)] bg-[rgba(255,255,255,1.00)] rounded-md overflow-hidden">
                                              <svg
                                                width="16"
                                                height="16"
                                                viewBox="0 0 24 24"
                                                fill="none"
                                                xmlns="http://www.w3.org/2000/svg"
                                                accent-color="#CDD0D1"
                                                fill-color="#0194F3"
                                              >
                                                <path
                                                  d="M6.5 12L10.5 16L18 8.5"
                                                  stroke="#CDD0D1"
                                                  stroke-width="2"
                                                  stroke-linecap="round"
                                                  stroke-linejoin="round"
                                                ></path>
                                              </svg>
                                            </div>
                                          </div>
                                          <div className="ml-1 text-[rgba(255,255,255,1.00)] text-sm font-semibold text-left leading-5 whitespace-pre-wrap break-words">
                                            Return Date
                                          </div>
                                        </div>
                                      </div>
                                    </div>
                                    <div
                                      className="group relative z-0 flex justify-center items-center basis-auto shrink-0 min-h-[54px] p-2 border-[rgba(205,208,209,0.5)]"
                                      style={{ borderWidth: "3px 3px 3px 0", borderRadius: "0 20px 20px 0" }}
                                    >
                                      <div
                                        className="absolute top-0 left-0 right-0 bottom-0 z-[1] flex flex-col items-stretch basis-auto shrink-0 w-full h-full cursor-pointer bg-[rgba(255,255,255,0.25)]"
                                        style={{ borderRadius: "0 16px 16px 0", touchAction: "manipulation" }}
                                      ></div>
                                      <div
                                        className="absolute top-0 left-0 right-0 bottom-0 -z-[1] flex flex-col items-stretch basis-auto shrink-0 border border-[rgba(205,208,209,1.00)] group-hover:border-[rgb(104,113,118)] bg-[rgba(255,255,255,1.00)]"
                                        style={{ borderRadius: "0 16px 16px 0" }}
                                      ></div>
                                      <div className="relative z-0 flex flex-col items-stretch basis-auto shrink-0 mr-2">
                                        <svg
                                          width="24"
                                          height="24"
                                          viewBox="0 0 24 24"
                                          fill="none"
                                          xmlns="http://www.w3.org/2000/svg"
                                          data-id="IcSystemCalendar"
                                        >
                                          <path
                                            d="M7 2V5M17 2V5M3 8H21M11.5 11.5H12.5V12.5H11.5V11.5ZM11.5 16.5H12.5V17.5H11.5V16.5ZM16.5 11.5H17.5V12.5H16.5V11.5ZM6.5 16.5H7.5V17.5H6.5V16.5ZM5 21H19C20.1046 21 21 20.1046 21 19V6C21 4.89543 20.1046 4 19 4H5C3.89543 4 3 4.89543 3 6V19C3 20.1046 3.89543 21 5 21Z"
                                            stroke="#687176"
                                            stroke-width="2"
                                            stroke-linecap="round"
                                            stroke-linejoin="round"
                                          ></path>
                                          <path
                                            fill-rule="evenodd"
                                            clip-rule="evenodd"
                                            d="M7.5 11.5V12.5H6.5V11.5H7.5Z"
                                            stroke="#687176"
                                            stroke-width="2"
                                            stroke-linecap="round"
                                            stroke-linejoin="round"
                                          ></path>
                                        </svg>
                                      </div>
                                      <input
                                        type="text"
                                        placeholder="Select date"
                                        className="flex-1 min-w-0 text-[rgba(3,18,26,1.00)] text-base leading-6 outline-none resize-none"
                                      />
                                    </div>
                                  </div>
                                  <div className="relative z-0 flex flex-col items-stretch basis-auto shrink-0 hidden">
                                    <div className="relative z-0 flex flex-col items-stretch basis-auto shrink-0">
                                      <div className="absolute right-0 z-0 flex flex-col items-stretch basis-auto shrink-0 w-[612px] bg-[rgba(255,255,255,1.00)] rounded-md shadow-[0_1px_2px_rgba(3,18,26,0.20)] overflow-visible">
                                        <div className="relative z-0 flex flex-col items-stretch basis-auto shrink-0 py-2 px-3">
                                          <div
                                            className="relative z-0 flex items-stretch basis-auto shrink grow overflow-hidden"
                                            style={{ scrollSnapType: "x mandatory" }}
                                          >
                                            <div className="relative z-0 flex items-stretch basis-auto shrink-0 w-[596px]">
                                              <div
                                                className="relative z-0 flex flex-col items-stretch basis-auto shrink-0"
                                                style={{ scrollSnapAlign: "start" }}
                                              >
                                                <div className="relative z-0 flex items-stretch basis-auto shrink-0">
                                                  <div className="relative z-0 flex flex-col items-stretch basis-auto shrink-0 w-[290px]">
                                                    <div className="relative z-0 flex justify-center items-center basis-auto shrink-0 py-2 px-3">
                                                      <div className="relative z-0 flex items-stretch basis-auto shrink-0">
                                                        <h3 className="text-[rgba(3,18,26,1.00)] text-base font-semibold text-left leading-5 whitespace-pre-wrap break-words">
                                                          December 2023
                                                        </h3>
                                                      </div>
                                                      <div className="absolute left-0 z-0 flex flex-col items-stretch basis-auto shrink-0">
                                                        <div className="relative z-0 flex flex-col justify-center items-center basis-auto shrink-0 w-6 h-6 select-none">
                                                          <svg
                                                            width="16"
                                                            height="16"
                                                            viewBox="0 0 16 16"
                                                            fill="none"
                                                            xmlns="http://www.w3.org/2000/svg"
                                                            data-id="IcSystemChevronLeft16"
                                                          >
                                                            <path
                                                              d="M10 3L5 8L10 13"
                                                              stroke="#CDD0D1"
                                                              stroke-width="2"
                                                              stroke-linecap="round"
                                                              stroke-linejoin="round"
                                                            ></path>
                                                          </svg>
                                                        </div>
                                                      </div>
                                                    </div>
                                                    <div className="relative z-0 grid grid-cols-7 items-stretch basis-auto shrink-0 py-1 border-b border-[rgb(205,208,209)]">
                                                      <div className="relative z-0 flex flex-col items-stretch h-4">
                                                        <div className="text-[rgb(231,9,14)] text-xs font-medium text-center leading-4 whitespace-pre-wrap break-words">
                                                          Sun
                                                        </div>
                                                      </div>
                                                      <div className="relative z-0 flex flex-col items-stretch h-4">
                                                        <div className="text-[rgb(104,113,118)] text-xs font-medium text-center leading-4 whitespace-pre-wrap break-words">
                                                          Mon
                                                        </div>
                                                      </div>
                                                      <div className="relative z-0 flex flex-col items-stretch h-4">
                                                        <div className="text-[rgb(104,113,118)] text-xs font-medium text-center leading-4 whitespace-pre-wrap break-words">
                                                          Tue
                                                        </div>
                                                      </div>
                                                      <div className="relative z-0 flex flex-col items-stretch h-4">
                                                        <div className="text-[rgb(104,113,118)] text-xs font-medium text-center leading-4 whitespace-pre-wrap break-words">
                                                          Wed
                                                        </div>
                                                      </div>
                                                      <div className="relative z-0 flex flex-col items-stretch h-4">
                                                        <div className="text-[rgb(104,113,118)] text-xs font-medium text-center leading-4 whitespace-pre-wrap break-words">
                                                          Thu
                                                        </div>
                                                      </div>
                                                      <div className="relative z-0 flex flex-col items-stretch h-4">
                                                        <div className="text-[rgb(104,113,118)] text-xs font-medium text-center leading-4 whitespace-pre-wrap break-words">
                                                          Fri
                                                        </div>
                                                      </div>
                                                      <div className="relative z-0 flex flex-col items-stretch h-4">
                                                        <div className="text-[rgb(104,113,118)] text-xs font-medium text-center leading-4 whitespace-pre-wrap break-words">
                                                          Sat
                                                        </div>
                                                      </div>
                                                    </div>
                                                    <div className="relative z-0 grid grid-cols-7 grid-rows-4 items-stretch basis-auto shrink-0">
                                                      <div className="relative z-0 flex flex-col items-stretch">
                                                        <div className="relative z-0 flex flex-col justify-center items-center rounded-md">
                                                          <div className="relative z-0 flex flex-col items-stretch basis-auto shrink-0 w-full">
                                                            <div className="relative z-0 flex flex-col items-stretch basis-auto shrink-0 h-[14px]"></div>
                                                            <div className="relative z-0 flex flex-col items-stretch basis-auto shrink-0 w-full h-6">
                                                              <div className="relative z-[1] flex flex-col items-stretch basis-auto shrink-0 w-1/2"></div>
                                                              <div className="absolute left-1/2 z-[2] flex-col justify-center items-center basis-auto shrink-0 grow h-6 -translate-x-1/2">
                                                                <div className="text-[rgb(231,9,14)] text-sm font-medium text-center leading-5 whitespace-pre-wrap break-words">
                                                                  1
                                                                </div>
                                                              </div>
                                                            </div>
                                                            <div className="relative z-0 flex flex-col items-stretch basis-auto shrink-0 h-[14px]"></div>
                                                          </div>
                                                        </div>
                                                      </div>
                                                      <div className="relative z-0 flex flex-col items-stretch">
                                                        <div className="relative z-0 flex flex-col justify-center items-center rounded-md">
                                                          <div className="relative z-0 flex flex-col items-stretch basis-auto shrink-0 w-full">
                                                            <div className="relative z-0 flex flex-col items-stretch basis-auto shrink-0 h-[14px]"></div>
                                                            <div className="relative z-0 flex flex-col items-stretch basis-auto shrink-0 w-full h-6">
                                                              <div className="relative z-[1] flex flex-col items-stretch basis-auto shrink-0 w-1/2"></div>
                                                              <div className="absolute left-1/2 z-[2] flex-col justify-center items-center basis-auto shrink-0 grow h-6 -translate-x-1/2">
                                                                <div className="text-[rgba(205,208,209,1.00)] text-sm font-medium text-center leading-5 whitespace-pre-wrap break-words">
                                                                  2
                                                                </div>
                                                              </div>
                                                            </div>
                                                            <div className="relative z-0 flex flex-col items-stretch basis-auto shrink-0 h-[14px]"></div>
                                                          </div>
                                                        </div>
                                                      </div>
                                                      <div className="relative z-0 flex flex-col items-stretch">
                                                        <div className="relative z-0 flex flex-col justify-center items-center rounded-md">
                                                          <div className="relative z-0 flex flex-col items-stretch basis-auto shrink-0 w-full">
                                                            <div className="relative z-0 flex flex-col items-stretch basis-auto shrink-0 h-[14px]"></div>
                                                            <div className="relative z-0 flex flex-col items-stretch basis-auto shrink-0 w-full h-6">
                                                              <div className="relative z-[1] flex flex-col items-stretch basis-auto shrink-0 w-1/2"></div>
                                                              <div className="absolute left-1/2 z-[2] flex-col justify-center items-center basis-auto shrink-0 grow h-6 px-2 border-2 border-[rgb(1,148,243)] bg-[rgb(236,248,255)] rounded-full -translate-x-1/2">
                                                                <div className="text-[rgba(3,18,26,1.00)] text-sm font-medium text-center leading-5 whitespace-pre-wrap break-words">
                                                                  3
                                                                </div>
                                                              </div>
                                                            </div>
                                                            <div className="relative z-0 flex flex-col items-stretch basis-auto shrink-0 h-[14px]">
                                                              <div className="max-w-full text-[rgb(104,113,118)] text-[11px] font-medium text-center leading-[11px] text-ellipsis whitespace-nowrap overflow-hidden">
                                                                896
                                                              </div>
                                                            </div>
                                                          </div>
                                                        </div>
                                                      </div>
                                                    </div>
                                                  </div>
                                                  <div className="relative z-0 flex flex-col items-stretch basis-auto shrink-0 w-4"></div>
                                                </div>
                                              </div>
                                              <div
                                                className="relative z-0 flex flex-col items-stretch basis-auto shrink-0"
                                                style={{ scrollSnapAlign: "start" }}
                                              >
                                                <div className="relative z-0 flex items-stretch basis-auto shrink-0">
                                                  <div className="relative z-0 flex flex-col items-stretch basis-auto shrink-0 w-[290px]">
                                                    <div className="relative z-0 flex justify-center items-center basis-auto shrink-0 py-2 px-3">
                                                      <div className="relative z-0 flex items-stretch basis-auto shrink-0">
                                                        <h3 className="text-[rgba(3,18,26,1.00)] text-base font-semibold text-left leading-5 whitespace-pre-wrap break-words">
                                                          January 2023
                                                        </h3>
                                                      </div>
                                                      <div className="absolute right-0 z-0 flex flex-col items-stretch basis-auto shrink-0">
                                                        <div className="relative z-0 flex flex-col justify-center items-center basis-auto shrink-0 w-6 h-6 select-none">
                                                          <svg
                                                            width="16"
                                                            height="16"
                                                            viewBox="0 0 16 16"
                                                            fill="none"
                                                            xmlns="http://www.w3.org/2000/svg"
                                                            data-id="IcSystemChevronRight16"
                                                          >
                                                            <path
                                                              d="M6 3L11 8L6 13"
                                                              stroke="#0194f3"
                                                              stroke-width="2"
                                                              stroke-linecap="round"
                                                              stroke-linejoin="round"
                                                            ></path>
                                                          </svg>
                                                        </div>
                                                      </div>
                                                    </div>
                                                    <div className="relative z-0 grid grid-cols-7 items-stretch basis-auto shrink-0 py-1 border-b border-[rgb(205,208,209)]">
                                                      <div className="relative z-0 flex flex-col items-stretch h-4">
                                                        <div className="text-[rgb(231,9,14)] text-xs font-medium text-center leading-4 whitespace-pre-wrap break-words">
                                                          Sun
                                                        </div>
                                                      </div>
                                                      <div className="relative z-0 flex flex-col items-stretch h-4">
                                                        <div className="text-[rgb(104,113,118)] text-xs font-medium text-center leading-4 whitespace-pre-wrap break-words">
                                                          Mon
                                                        </div>
                                                      </div>
                                                      <div className="relative z-0 flex flex-col items-stretch h-4">
                                                        <div className="text-[rgb(104,113,118)] text-xs font-medium text-center leading-4 whitespace-pre-wrap break-words">
                                                          Tue
                                                        </div>
                                                      </div>
                                                      <div className="relative z-0 flex flex-col items-stretch h-4">
                                                        <div className="text-[rgb(104,113,118)] text-xs font-medium text-center leading-4 whitespace-pre-wrap break-words">
                                                          Wed
                                                        </div>
                                                      </div>
                                                      <div className="relative z-0 flex flex-col items-stretch h-4">
                                                        <div className="text-[rgb(104,113,118)] text-xs font-medium text-center leading-4 whitespace-pre-wrap break-words">
                                                          Thu
                                                        </div>
                                                      </div>
                                                      <div className="relative z-0 flex flex-col items-stretch h-4">
                                                        <div className="text-[rgb(104,113,118)] text-xs font-medium text-center leading-4 whitespace-pre-wrap break-words">
                                                          Fri
                                                        </div>
                                                      </div>
                                                      <div className="relative z-0 flex flex-col items-stretch h-4">
                                                        <div className="text-[rgb(104,113,118)] text-xs font-medium text-center leading-4 whitespace-pre-wrap break-words">
                                                          Sat
                                                        </div>
                                                      </div>
                                                    </div>
                                                    <div className="relative z-0 grid grid-cols-7 grid-rows-4 items-stretch basis-auto shrink-0">
                                                      <div className="relative z-0 flex flex-col items-stretch">
                                                        <div className="relative z-0 flex flex-col justify-center items-center rounded-md">
                                                          <div className="relative z-0 flex flex-col items-stretch basis-auto shrink-0 w-full">
                                                            <div className="relative z-0 flex flex-col items-stretch basis-auto shrink-0 h-[14px]"></div>
                                                            <div className="relative z-0 flex flex-col items-stretch basis-auto shrink-0 w-full h-6">
                                                              <div className="relative z-[1] flex flex-col items-stretch basis-auto shrink-0 w-1/2"></div>
                                                              <div className="absolute left-1/2 z-[2] flex-col justify-center items-center basis-auto shrink-0 grow h-6 -translate-x-1/2">
                                                                <div className="text-[rgb(231,9,14)] text-sm font-medium text-center leading-5 whitespace-pre-wrap break-words">
                                                                  1
                                                                </div>
                                                              </div>
                                                            </div>
                                                            <div className="relative z-0 flex flex-col items-stretch basis-auto shrink-0 h-[14px]"></div>
                                                          </div>
                                                        </div>
                                                      </div>
                                                      <div className="relative z-0 flex flex-col items-stretch">
                                                        <div className="relative z-0 flex flex-col justify-center items-center rounded-md">
                                                          <div className="relative z-0 flex flex-col items-stretch basis-auto shrink-0 w-full">
                                                            <div className="relative z-0 flex flex-col items-stretch basis-auto shrink-0 h-[14px]"></div>
                                                            <div className="relative z-0 flex flex-col items-stretch basis-auto shrink-0 w-full h-6">
                                                              <div className="relative z-[1] flex flex-col items-stretch basis-auto shrink-0 w-1/2"></div>
                                                              <div className="absolute left-1/2 z-[2] flex-col justify-center items-center basis-auto shrink-0 grow h-6 -translate-x-1/2">
                                                                <div className="text-[rgba(205,208,209,1.00)] text-sm font-medium text-center leading-5 whitespace-pre-wrap break-words">
                                                                  2
                                                                </div>
                                                              </div>
                                                            </div>
                                                            <div className="relative z-0 flex flex-col items-stretch basis-auto shrink-0 h-[14px]"></div>
                                                          </div>
                                                        </div>
                                                      </div>
                                                      <div className="relative z-0 flex flex-col items-stretch">
                                                        <div className="relative z-0 flex flex-col justify-center items-center rounded-md">
                                                          <div className="relative z-0 flex flex-col items-stretch basis-auto shrink-0 w-full">
                                                            <div className="relative z-0 flex flex-col items-stretch basis-auto shrink-0 h-[14px]"></div>
                                                            <div className="relative z-0 flex flex-col items-stretch basis-auto shrink-0 w-full h-6">
                                                              <div className="relative z-[1] flex flex-col items-stretch basis-auto shrink-0 w-1/2"></div>
                                                              <div className="absolute left-1/2 z-[2] flex-col justify-center items-center basis-auto shrink-0 grow h-6 px-2 border-2 border-[rgb(1,148,243)] bg-[rgb(236,248,255)] rounded-full -translate-x-1/2">
                                                                <div className="text-[rgba(3,18,26,1.00)] text-sm font-medium text-center leading-5 whitespace-pre-wrap break-words">
                                                                  3
                                                                </div>
                                                              </div>
                                                            </div>
                                                            <div className="relative z-0 flex flex-col items-stretch basis-auto shrink-0 h-[14px]">
                                                              <div className="max-w-full text-[rgb(104,113,118)] text-[11px] font-medium text-center leading-[11px] text-ellipsis whitespace-nowrap overflow-hidden">
                                                                896
                                                              </div>
                                                            </div>
                                                          </div>
                                                        </div>
                                                      </div>
                                                    </div>
                                                  </div>
                                                  <div className="relative z-0 flex flex-col items-stretch basis-auto shrink-0 w-4"></div>
                                                </div>
                                              </div>
                                              <div>3</div>
                                              <div>4</div>
                                            </div>
                                          </div>
                                        </div>
                                        <div className="relative z-0 flex justify-between items-stretch basis-auto shrink-0 py-2 px-4 bg-[rgb(247,249,250)] rounded-b-md shadow-[0_-2px_5px_rgba(3,18,26,0.15)]">
                                          <div className="relative z-0 flex justify-start items-center basis-auto shrink-0">
                                            <div className="relative z-0 flex flex-col items-stretch basis-auto shrink-0 w-3 h-3 bg-[rgb(5,165,105)] rounded-sm"></div>
                                            <div className="relative z-0 flex flex-col items-stretch basis-auto shrink-0 pr-3"></div>
                                            <div className="text-[rgb(0,135,90)] text-xs font-normal text-left leading-4 whitespace-pre-wrap break-words">
                                              Lowest flight price
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
                        </div>
                      </div>
                      <div className="relative z-0 flex flex-col items-stretch basis-auto shrink-0 mt-9 ml-4">
                        <div className="group relative z-0 flex flex-col items-stretch basis-auto shrink-0">
                          <div className="relative z-0 flex flex-col items-stretch basis-auto shrink-0 p-[3px] bg-[rgba(205,208,209,0.5)] rounded-[18px]">
                            <div
                              className="relative z-0 flex flex-col items-stretch basis-auto shrink-0 h-12 py-2 px-3 bg-[rgb(255,94,31)] group-hover:bg-[rgb(223,68,15)] rounded-2xl cursor-pointer select-none"
                              style={{ touchAction: "manipulation" }}
                            >
                              <div
                                className="absolute -m-[1px] w-[1px] h-[1px] whitespace-nowrap break-words overflow-hidden"
                                style={{ clip: "rect(0, 0, 0, 0)" }}
                              ></div>
                              <div className="relative z-0 flex justify-center items-center flex-1">
                                <div className="flex items-center mr-0 text-[rgba(255,255,255,1.00)] whitespace-pre-wrap break-words">
                                  <svg
                                    width="24"
                                    height="24"
                                    viewBox="0 0 24 24"
                                    fill="none"
                                    xmlns="http://www.w3.org/2000/svg"
                                    data-id="IcSystemSearch"
                                  >
                                    <path
                                      d="M15 15L20.5 20.5M10 17C13.866 17 17 13.866 17 10C17 6.13401 13.866 3 10 3C6.13401 3 3 6.13401 3 10C3 13.866 6.13401 17 10 17Z"
                                      stroke="#FFFFFF"
                                      stroke-width="2"
                                      stroke-linecap="round"
                                      stroke-linejoin="round"
                                    ></path>
                                  </svg>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="relative z-[1] flex flex-col items-stretch basis-auto shrink-0 mt-5">
                      <div className="relative z-0 flex items-center basis-auto shrink-0">
                        <h4 className="text-[rgba(255,255,255,1.00)] text-sm font-semibold text-left leading-4 whitespace-pre-wrap break-words">
                          Looking for
                        </h4>
                        <div className="relative z-0 flex items-stretch basis-auto shrink-0 ml-3">
                          <div className="relative z-0 flex justify-start items-center basis-auto shrink-0">
                            <div
                              className="relative z-0 flex flex-col items-stretch basis-auto shrink-0 cursor-pointer select-none"
                              style={{ touchAction: "manipulation" }}
                            >
                              <div className="relative z-0 flex justify-center items-center basis-auto shrink-0 py-2 px-3 bg-[rgba(255,255,255,0.25)] rounded-md cursor-pointer">
                                <div className="flex items-center mr-1 text-[rgba(3,18,26,1.00)] text-base font-medium text-left leading-6 whitespace-pre-wrap break-words">
                                  <svg
                                    width="16"
                                    height="16"
                                    viewBox="0 0 24 24"
                                    fill="none"
                                    xmlns="http://www.w3.org/2000/svg"
                                    data-id="IcSystemMapSphereGlobal"
                                  >
                                    <path
                                      d="M21.166 15.9839C18.9643 21.0474 13.0747 23.3674 8.0112 21.1657M21.166 15.9839C23.3676 10.9204 21.0477 5.03083 15.9842 2.82916M21.166 15.9839L2.82941 8.01096M8.0112 21.1657C2.9477 18.964 0.627736 13.0745 2.82941 8.01096M8.0112 21.1657L15.9842 2.82916M8.0112 21.1657C16.4499 19.6489 20.63 10.0354 15.9842 2.82916M8.0112 21.1657C3.36536 13.9595 7.54543 4.34602 15.9842 2.82916M2.82941 8.01096C5.03108 2.94746 10.9207 0.627492 15.9842 2.82916"
                                      stroke="#FFFFFF"
                                      stroke-width="2"
                                      stroke-linecap="round"
                                      stroke-linejoin="round"
                                    ></path>
                                  </svg>
                                </div>
                                <h4 className="text-[rgba(255,255,255,1.00)] text-sm font-medium text-left leading-4 whitespace-pre-wrap break-words">
                                  Discover Flight Ideas
                                </h4>
                              </div>
                            </div>
                            <div className="relative z-0 flex flex-col items-stretch basis-auto shrink-0 pr-3"></div>
                            <div
                              className="relative z-0 flex flex-col items-stretch basis-auto shrink-0 cursor-pointer select-none"
                              style={{ touchAction: "manipulation" }}
                            >
                              <div className="relative z-0 flex justify-center items-center basis-auto shrink-0 py-2 px-3 bg-[rgba(255,255,255,0.25)] rounded-md cursor-pointer">
                                <div className="flex items-center mr-1 text-[rgba(3,18,26,1.00)] text-base font-medium text-left leading-6 whitespace-pre-wrap break-words">
                                  <svg
                                    width="16"
                                    height="16"
                                    viewBox="0 0 24 24"
                                    fill="none"
                                    xmlns="http://www.w3.org/2000/svg"
                                    data-id="IcFlightPriceWatch"
                                  >
                                    <path
                                      d="M12.5 3.46341V2.4878C12.5 2.2184 12.7239 2 13 2C13.2761 2 13.5 2.2184 13.5 2.4878V3.46341M16.6076 4.43902C15.554 3.81969 14.3197 3.46341 13 3.46341C9.13401 3.46341 6 6.52098 6 10.2927V14.1951L4 18.0976V19.0732H22V18.0978L20.5 14.6831M10 19.0732H16C16 20.6896 14.6569 22 13 22C11.3431 22 10 20.6896 10 19.0732Z"
                                      stroke="#FFFFFF"
                                      stroke-width="2"
                                      stroke-linecap="round"
                                      stroke-linejoin="round"
                                    ></path>
                                    <path
                                      d="M3.20262 3.27999L3.82434 3.78345M1.93258 6.75518L2.99482 6.71464M6.33782 1.31516L6.51901 2.36262"
                                      stroke="#FFFFFF"
                                      stroke-width="2"
                                      stroke-linecap="round"
                                      stroke-linejoin="round"
                                    ></path>
                                    <path
                                      fill-rule="evenodd"
                                      clip-rule="evenodd"
                                      d="M20.1312 11.9888V12.4864C20.1312 12.625 20.0794 12.7467 19.9729 12.8439C19.865 12.9481 19.7243 13 19.5607 13C19.3971 13 19.2564 12.9481 19.1485 12.8439C19.042 12.7467 18.9902 12.625 18.9902 12.4864V12.0245C18.6937 12.0012 18.4206 11.9562 18.1714 11.8892C17.8461 11.8001 17.5658 11.696 17.3334 11.5763L17.33 11.5745C17.205 11.5052 17.1116 11.4161 17.0585 11.3058L17.0575 11.3038C17.0087 11.1962 16.9904 11.0862 17.0048 10.9753C17.019 10.8652 17.0627 10.7669 17.1385 10.6844C17.2202 10.5967 17.3248 10.5387 17.4489 10.5169C17.5869 10.4868 17.7305 10.5221 17.87 10.5945C18.029 10.6769 18.2401 10.7587 18.5057 10.8392C18.7676 10.9113 19.0854 10.9486 19.4614 10.9486C19.7539 10.9486 19.981 10.9166 20.1482 10.8578C20.3185 10.798 20.4312 10.7197 20.4987 10.6277L20.5008 10.625C20.5766 10.5286 20.6153 10.4183 20.6153 10.2905C20.6153 10.1858 20.5893 10.1012 20.542 10.0327L20.5404 10.0303C20.494 9.95866 20.4138 9.89175 20.2894 9.83285L20.2858 9.83115C20.1624 9.76785 19.9894 9.71348 19.7616 9.67107L19.7602 9.67082L18.8032 9.48236C18.2412 9.37025 17.8065 9.17969 17.514 8.9024C17.2192 8.62295 17.0762 8.26018 17.0762 7.8242C17.0762 7.485 17.1683 7.17939 17.355 6.91043C17.5408 6.63739 17.8001 6.42003 18.1302 6.25869C18.3852 6.13407 18.6724 6.04991 18.9902 6.00499V5.51358C18.9902 5.37502 19.042 5.25335 19.1484 5.15608C19.2564 5.05187 19.3971 5 19.5607 5C19.7194 5 19.856 5.05255 19.9625 5.15475C20.0751 5.25136 20.1312 5.3734 20.1312 5.51358V5.9901C20.3148 6.0135 20.507 6.05404 20.7078 6.11118C21.0328 6.20197 21.3142 6.33057 21.5499 6.49823L21.5508 6.49889C21.6565 6.57561 21.7312 6.66848 21.7689 6.77737C21.8054 6.87731 21.8092 6.97888 21.7796 7.0798L21.7791 7.08153C21.7492 7.17638 21.6926 7.2585 21.6106 7.32614C21.5236 7.39799 21.4146 7.43885 21.2905 7.4521L21.2838 7.45282C21.154 7.46018 21.0181 7.41917 20.8812 7.34816L20.88 7.34756C20.7154 7.25997 20.5297 7.18975 20.3221 7.13742L20.3191 7.13666C20.1172 7.08066 19.8712 7.05137 19.5787 7.05137C19.2116 7.05137 18.9373 7.12679 18.7421 7.26563C18.5544 7.39811 18.4609 7.57032 18.4609 7.79143C18.4609 7.95318 18.5173 8.07514 18.6233 8.16744C18.7328 8.25726 18.9332 8.33906 19.2445 8.40307L20.2281 8.59962C20.8179 8.71671 21.2676 8.90643 21.5609 9.17831C21.8567 9.44694 22 9.79942 22 10.225C22 10.5592 21.9076 10.8598 21.7203 11.1236L21.7197 11.1245C21.5336 11.3808 21.2775 11.5864 20.9543 11.7417C20.71 11.857 20.4347 11.9393 20.1312 11.9888Z"
                                      fill="#FFFFFF"
                                    ></path>
                                  </svg>
                                </div>
                                <h4 className="text-[rgba(255,255,255,1.00)] text-sm font-medium text-left leading-4 whitespace-pre-wrap break-words">
                                  Price Alert
                                </h4>
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
          </div>
        </div>
      </div>
    </div>
  );
};

export default FlightMenu;
