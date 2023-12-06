import { useState } from "react";

import Menu from "./components/Menu";
import FlightMenuModal from "./components/FlightMenuModal";

const HomePage = () => {
  const [activeTab, setActiveTab] = useState("Hotels");

  const handleClick = (text: string) => {
    setActiveTab(text);
  };

  return (
    <div className="relative z-[initial] flex flex-col justify-between items-stretch basis-auto shrink-0 w-full min-h-[600px] bg-[rgba(28,41,48,1.00)]">
      <div className="absolute z-0 flex flex-col items-stretch basis-auto shrink-0 w-full h-full overflow-hidden">
        <img
          src="https://ik.imagekit.io/tvlk/image/imageResource/2023/09/27/1695776209619-17a750c3f514f7a8cccde2d0976c902a.png?tr=q-75"
          alt=""
          className="z-0 object-cover object-[center_top] opacity-100"
        />
      </div>
      <div className="relative z-auto flex flex-col items-stretch basis-auto shrink-0 w-[1222px] mt-28 mb-4 mx-auto">
        <div className="relative z-auto flex flex-col items-stretch basis-auto shrink-0">
          <div className="relative z-0 flex flex-col items-center basis-auto shrink-0 mx-3">
            <div className="text-[rgba(255,255,255,1.00)] text-[32px] font-semibold text-left leading-[56px] whitespace-pre-wrap break-words">
              From Southeast Asia to the World, All Yours.
            </div>
          </div>
          <div className="relative z-[5] flex flex-col items-stretch basis-auto shrink-0 max-h-[600px] mt-4">
            <div className="relative z-0 flex flex-col items-stretch basis-auto shrink-0 p-3 border-2 bg-[rgba(0,0,0,0)] border-[rgba(0,0,0,0)] rounded-md">
              <div className="relative z-[1] flex flex-col items-stretch basis-auto shrink-0 mb-2 rounded-tl-md rounded-bl-md">
                <div className="relative z-[1] flex flex-col items-stretch basis-auto shrink-0">
                  <div className="relative z-0 flex items-stretch gap-1">
                    <div className="relative z-[1] flex flex-col items-stretch basis-auto shrink-0 h-full">
                      <div
                        className={`group relative z-0 flex items-stretch h-full py-2 px-4 border rounded-[25px] cursor-pointer select-none ${
                          activeTab === "Hotels"
                            ? "bg-[rgba(255,255,255,1.00)]"
                            : "border-[rgba(0,0,0,0)] hover:border-[rgba(255,255,255,1.00)]"
                        }`}
                        style={{ touchAction: "manipulation" }}
                        onClick={() => handleClick("Hotels")}
                      >
                        <div className="relative z-0 flex flex-col justify-center items-center basis-auto shrink-0">
                          <svg
                            width="24"
                            height="24"
                            viewBox="0 0 24 24"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                            data-id="IcProductDuotoneHotelFill"
                          >
                            <path
                              d="M16 7V3C16 2.44772 16.4477 2 17 2C17.5523 2 18 2.44772 18 3V4H20V3C20 2.44772 20.4477 2 21 2C21.5523 2 22 2.44772 22 3V7C22 7.55228 21.5523 8 21 8C20.4477 8 20 7.55228 20 7V6H18V7C18 7.55228 17.5523 8 17 8C16.4477 8 16 7.55228 16 7Z"
                              className={`${
                                activeTab === "Hotels"
                                  ? "fill-[#235D9F] group-hover:fill-[#235D9F]"
                                  : "fill-[#CDD0D1] group-hover:fill-[rgba(255,255,255,1.00)]"
                              }`}
                            ></path>
                            <path
                              fill-rule="evenodd"
                              clip-rule="evenodd"
                              d="M2 4V21C2 21.5523 2.44772 22 3 22H6.5V20.75C6.5 20.3358 6.16421 20 5.75 20C5.33579 20 5 19.6642 5 19.25V19C5 18.4477 5.44772 18 6 18H11C11.5523 18 12 18.4477 12 19V19.25C12 19.6642 11.6642 20 11.25 20C10.8358 20 10.5 20.3358 10.5 20.75V22H14H15H21C21.5523 22 22 21.5523 22 21V12C22 10.8954 21.1046 10 20 10H15V4C15 3.44772 14.5523 3 14 3H12.5C12.2061 1.82459 11.15 1 9.93845 1H7.06155C5.84996 1 4.79385 1.82459 4.5 3H3C2.44772 3 2 3.44771 2 4ZM4 6C4 5.44772 4.44772 5 5 5H7C7.55228 5 8 5.44772 8 6V7C8 7.55228 7.55228 8 7 8H5C4.44772 8 4 7.55228 4 7V6ZM10 5C9.44772 5 9 5.44772 9 6V7C9 7.55228 9.44772 8 10 8H12C12.5523 8 13 7.55228 13 7V6C13 5.44772 12.5523 5 12 5H10ZM9 10C9 9.44772 9.44772 9 10 9H12C12.5523 9 13 9.44771 13 10V11C13 11.5523 12.5523 12 12 12H10C9.44772 12 9 11.5523 9 11V10ZM4 10C4 9.44771 4.44772 9 5 9H7C7.55228 9 8 9.44772 8 10V11C8 11.5523 7.55228 12 7 12H5C4.44772 12 4 11.5523 4 11V10ZM5 13C4.44772 13 4 13.4477 4 14V15C4 15.5523 4.44772 16 5 16H7C7.55228 16 8 15.5523 8 15V14C8 13.4477 7.55228 13 7 13H5ZM10 13C9.44772 13 9 13.4477 9 14V15C9 15.5523 9.44772 16 10 16H12C12.5523 16 13 15.5523 13 15V14C13 13.4477 12.5523 13 12 13H10ZM16 14V13C16 12.4477 16.4477 12 17 12H19C19.5523 12 20 12.4477 20 13V14C20 14.5523 19.5523 15 19 15H17C16.4477 15 16 14.5523 16 14ZM19 16H17C16.4477 16 16 16.4477 16 17V18C16 18.5523 16.4477 19 17 19H19C19.5523 19 20 18.5523 20 18V17C20 16.4477 19.5523 16 19 16Z"
                              className={`${
                                activeTab === "Hotels"
                                  ? "fill-[#235D9F] group-hover:fill-[#235D9F]"
                                  : "fill-[#CDD0D1] group-hover:fill-[rgba(255,255,255,1.00)]"
                              }`}
                            ></path>
                          </svg>
                        </div>
                        <div className="relative z-0 flex justify-center items-stretch basis-auto shrink-0 mt-0">
                          <div
                            className={`ml-2 text-[15px] font-semibold text-center leading-6 whitespace-pre-wrap break-words ${
                              activeTab === "Hotels"
                                ? "text-[rgba(3,18,26,1.00)]"
                                : "text-[rgba(205,208,209,1.00)] group-hover:text-[rgba(255,255,255,1.00)]"
                            }`}
                          >
                            Hotels
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="relative z-[1] flex flex-col items-stretch basis-auto shrink-0 h-full">
                      <div
                        className={`group relative z-0 flex items-stretch h-full py-2 px-4 border rounded-[25px] cursor-pointer select-none ${
                          activeTab === "Flights"
                            ? "bg-[rgba(255,255,255,1.00)]"
                            : "border-[rgba(0,0,0,0)] hover:border-[rgba(255,255,255,1.00)]"
                        }`}
                        style={{ touchAction: "manipulation" }}
                        onClick={() => handleClick("Flights")}
                      >
                        <div className="relative z-0 flex flex-col justify-center items-center basis-auto shrink-0">
                          <svg
                            width="24"
                            height="24"
                            viewBox="0 0 16 16"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                            data-id="IcProductDuotoneFlightFill16"
                          >
                            <g clip-path="url(#clip0_4978_5190)">
                              <path
                                fill-rule="evenodd"
                                clip-rule="evenodd"
                                d="M12.3067 1.22242C12.9992 0.606863 14.0515 0.637769 14.7067 1.29291C15.3619 1.94804 15.3928 3.00031 14.7774 3.69285L11.6317 7.23229L13.9483 14.1839C14.1067 14.6592 13.889 15.1783 13.4389 15.3984C12.9889 15.6185 12.4455 15.4716 12.1676 15.0548L8.73502 9.9059L6.50032 11.4702V14C6.50032 14.4794 6.16014 14.8914 5.68943 14.982C5.21871 15.0727 4.74987 14.8165 4.57184 14.3714L4.02318 12.9998C3.75754 13.0059 3.49182 12.9064 3.29252 12.7071C3.09332 12.5079 2.99383 12.2424 2.99987 11.9769L1.62893 11.4285C1.18385 11.2505 0.92771 10.7817 1.01836 10.3109C1.10901 9.84022 1.52095 9.50005 2.00032 9.50005H4.52895L6.09375 7.26463L0.944927 3.83212C0.528082 3.55422 0.3812 3.01076 0.601306 2.56072C0.821413 2.11067 1.34057 1.89296 1.81585 2.05138L8.76737 4.36852L12.3067 1.22242Z"
                                className={`${
                                  activeTab === "Flights"
                                    ? "fill-[#30C5F7] group-hover:fill-[#30C5F7]"
                                    : "fill-[#CDD0D1] group-hover:fill-[rgba(255,255,255,1.00)]"
                                }`}
                              ></path>
                            </g>
                            <defs>
                              <clipPath id="clip0_4978_5190">
                                <rect width="16" height="16" fill="white"></rect>
                              </clipPath>
                            </defs>
                          </svg>
                        </div>
                        <div className="relative z-0 flex justify-center items-stretch basis-auto shrink-0 mt-0">
                          <div
                            className={`ml-2 text-[15px] font-semibold text-center leading-6 whitespace-pre-wrap break-words ${
                              activeTab === "Flights"
                                ? "text-[rgba(3,18,26,1.00)]"
                                : "text-[rgba(205,208,209,1.00)] group-hover:text-[rgba(255,255,255,1.00)]"
                            }`}
                          >
                            Flights
                          </div>
                          <div className="relative z-0 flex flex-col justify-center items-center basis-auto shrink-0 rotate-0">
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
                                stroke-width="2"
                                stroke-linecap="round"
                                stroke-linejoin="round"
                                className={`${
                                  activeTab === "Flights"
                                    ? "stroke-[#687176] group-hover:stroke-[#687176]"
                                    : "stroke-[#CDD0D1] group-hover:stroke-[rgba(255,255,255,1.00)]"
                                }`}
                              ></path>
                            </svg>
                          </div>
                        </div>
                      </div>
                      {/* <FlightMenuModal /> */}
                    </div>
                    <div className="relative z-[1] flex flex-col items-stretch basis-auto shrink-0 h-full">
                      <div
                        className={`group relative z-0 flex items-stretch h-full py-2 px-4 border rounded-[25px] cursor-pointer select-none ${
                          activeTab === "Trains"
                            ? "bg-[rgba(255,255,255,1.00)]"
                            : "border-[rgba(0,0,0,0)] hover:border-[rgba(255,255,255,1.00)]"
                        }`}
                        style={{ touchAction: "manipulation" }}
                        onClick={() => handleClick("Trains")}
                      >
                        <div className="relative z-0 flex flex-col justify-center items-center basis-auto shrink-0">
                          <svg
                            width="24"
                            height="24"
                            viewBox="0 0 16 16"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                            data-id="IcProductDuotoneTrainFill16"
                          >
                            <path
                              fill-rule="evenodd"
                              clip-rule="evenodd"
                              d="M5.03035 11.4697C5.32325 11.7626 5.32325 12.2374 5.03035 12.5303L3.5 14.25H12.5L10.9697 12.5303C10.6768 12.2374 10.6768 11.7626 10.9697 11.4697C11.2626 11.1768 11.7375 11.1768 12.0304 11.4697L14.5304 13.9697C14.7449 14.1842 14.809 14.5068 14.6929 14.787C14.5768 15.0673 14.3034 15.25 14 15.25H2.00002C1.69668 15.25 1.4232 15.0673 1.30711 14.787C1.19103 14.5068 1.25519 14.1842 1.46969 13.9697L3.96969 11.4697C4.26259 11.1768 4.73746 11.1768 5.03035 11.4697Z"
                              className={`${
                                activeTab === "Trains"
                                  ? "fill-[#FCA000] group-hover:fill-[#FCA000]"
                                  : "fill-[#CDD0D1] group-hover:fill-[rgba(255,255,255,1.00)]"
                              }`}
                            ></path>
                            <path
                              fill-rule="evenodd"
                              clip-rule="evenodd"
                              d="M2 5.5C2 3.01472 4.01472 1 6.5 1H9.5C11.9853 1 14 3.01472 14 5.5V9L14.8934 10.7868C14.9635 10.927 15 11.0816 15 11.2384C15 11.6892 14.7011 12.0854 14.2677 12.2092L8 14L1.73233 12.2092C1.29886 12.0854 1 11.6892 1 11.2384C1 11.0816 1.0365 10.927 1.1066 10.7868L2 9V5.5ZM6 4C6 3.44772 6.44772 3 7 3H9C9.55229 3 10 3.44772 10 4C10 4.55228 9.55229 5 9 5H7C6.44772 5 6 4.55228 6 4ZM4.5 10C4.22386 10 4 10.2239 4 10.5C4 10.7761 4.22386 11 4.5 11H5.5C5.77614 11 6 10.7761 6 10.5C6 10.2239 5.77614 10 5.5 10H4.5ZM10 10.5C10 10.2239 10.2239 10 10.5 10H11.5C11.7761 10 12 10.2239 12 10.5C12 10.7761 11.7761 11 11.5 11H10.5C10.2239 11 10 10.7761 10 10.5ZM7.5 8.43361V6.94139C7.5 6.68923 7.31223 6.47653 7.06202 6.44525L4.06202 6.07025C3.76359 6.03295 3.5 6.26564 3.5 6.56639V8.05861C3.5 8.31077 3.68777 8.52347 3.93798 8.55475L6.93798 8.92975C7.23641 8.96705 7.5 8.73436 7.5 8.43361ZM8.5 6.94139V8.43361C8.5 8.73436 8.76359 8.96705 9.06202 8.92975L12.062 8.55475C12.3122 8.52347 12.5 8.31077 12.5 8.05861V6.56639C12.5 6.26564 12.2364 6.03295 11.938 6.07025L8.93798 6.44525C8.68777 6.47653 8.5 6.68923 8.5 6.94139Z"
                              className={`${
                                activeTab === "Trains"
                                  ? "fill-[#FCA000] group-hover:fill-[#FCA000]"
                                  : "fill-[#CDD0D1] group-hover:fill-[rgba(255,255,255,1.00)]"
                              }`}
                            ></path>
                          </svg>
                        </div>
                        <div className="relative z-0 flex justify-center items-stretch basis-auto shrink-0 mt-0">
                          <div
                            className={`ml-2 text-[15px] font-semibold text-center leading-6 whitespace-pre-wrap break-words ${
                              activeTab === "Trains"
                                ? "text-[rgba(3,18,26,1.00)]"
                                : "text-[rgba(205,208,209,1.00)] group-hover:text-[rgba(255,255,255,1.00)]"
                            }`}
                          >
                            Trains
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="relative z-[1] flex flex-col items-stretch basis-auto shrink-0 h-full">
                      <div
                        className={`group relative z-0 flex items-stretch h-full py-2 px-4 border rounded-[25px] cursor-pointer select-none ${
                          activeTab === "Travel"
                            ? "bg-[rgba(255,255,255,1.00)]"
                            : "border-[rgba(0,0,0,0)] hover:border-[rgba(255,255,255,1.00)]"
                        }`}
                        style={{ touchAction: "manipulation" }}
                        onClick={() => handleClick("Travel")}
                      >
                        <div className="relative z-0 flex flex-col justify-center items-center basis-auto shrink-0">
                          <svg
                            width="24"
                            height="24"
                            viewBox="0 0 24 24"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                            data-id="IcProductDuotoneBusFill"
                          >
                            <path
                              fill-rule="evenodd"
                              clip-rule="evenodd"
                              d="M3 9V11C3 11.5523 3.44772 12 4 12H5V8H4C3.44772 8 3 8.44772 3 9ZM21 11V9C21 8.44772 20.5523 8 20 8H19V12H20C20.5523 12 21 11.5523 21 11ZM8.5 20.75V20H15.5V20.75C15.5 21.7165 16.2835 22.5 17.25 22.5C18.2165 22.5 19 21.7165 19 20.75V19H5V20.75C5 21.7165 5.7835 22.5 6.75 22.5C7.7165 22.5 8.5 21.7165 8.5 20.75Z"
                              className={`${
                                activeTab === "Travel"
                                  ? "fill-[#20BF55] group-hover:fill-[#20BF55]"
                                  : "fill-[#CDD0D1] group-hover:fill-[rgba(255,255,255,1.00)]"
                              }`}
                            ></path>
                            <path
                              fill-rule="evenodd"
                              clip-rule="evenodd"
                              d="M16 2H8C5.79086 2 4 3.79086 4 6V18.75C4 19.3023 4.44772 19.75 5 19.75H19C19.5523 19.75 20 19.3023 20 18.75V6C20 3.79086 18.2091 2 16 2ZM8 5C7.44772 5 7 5.44772 7 6C7 6.55228 7.44772 7 8 7H16C16.5523 7 17 6.55228 17 6C17 5.44772 16.5523 5 16 5H8ZM6 9C6 8.44772 6.44772 8 7 8H17C17.5523 8 18 8.44772 18 9V13C18 13.5523 17.5523 14 17 14H7C6.44772 14 6 13.5523 6 13V9ZM6 17C6 16.4477 6.44772 16 7 16H9C9.55228 16 10 16.4477 10 17C10 17.5523 9.55228 18 9 18H7C6.44772 18 6 17.5523 6 17ZM14 17C14 16.4477 14.4477 16 15 16H17C17.5523 16 18 16.4477 18 17C18 17.5523 17.5523 18 17 18H15C14.4477 18 14 17.5523 14 17Z"
                              className={`${
                                activeTab === "Travel"
                                  ? "fill-[#20BF55] group-hover:fill-[#20BF55]"
                                  : "fill-[#CDD0D1] group-hover:fill-[rgba(255,255,255,1.00)]"
                              }`}
                            ></path>
                          </svg>
                        </div>
                        <div className="relative z-0 flex justify-center items-stretch basis-auto shrink-0 mt-0">
                          <div
                            className={`ml-2 text-[15px] font-semibold text-center leading-6 whitespace-pre-wrap break-words ${
                              activeTab === "Travel"
                                ? "text-[rgba(3,18,26,1.00)]"
                                : "text-[rgba(205,208,209,1.00)] group-hover:text-[rgba(255,255,255,1.00)]"
                            }`}
                          >
                            Bus & Travel
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="relative z-[1] flex flex-col items-stretch basis-auto shrink-0 h-full">
                      <div
                        className={`group relative z-0 flex items-stretch h-full py-2 px-4 border rounded-[25px] cursor-pointer select-none ${
                          activeTab === "Airport"
                            ? "bg-[rgba(255,255,255,1.00)]"
                            : "border-[rgba(0,0,0,0)] hover:border-[rgba(255,255,255,1.00)]"
                        }`}
                        style={{ touchAction: "manipulation" }}
                        onClick={() => handleClick("Airport")}
                      >
                        <div className="relative z-0 flex flex-col justify-center items-center basis-auto shrink-0">
                          <svg
                            width="24"
                            height="24"
                            viewBox="0 0 24 24"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                            data-id="IcProductDuotoneAirportTransportFill"
                          >
                            <path
                              fill-rule="evenodd"
                              clip-rule="evenodd"
                              d="M19.5 16.5L19 15H10V14H13H14H14.8371C15.1693 14 15.4092 13.682 15.3179 13.3626L15.1217 12.6758C15.088 12.5578 15.0474 12.4432 15.0006 12.3323L17 9H21C21.5523 9 22 8.55228 22 8C22 7.44772 21.5523 7 21 7H17L14 2H13L14 7H11L10 6H9L9.5 8H7V3C7 1.89543 7.89543 1 9 1H21C22.1046 1 23 1.89543 23 3V13C23 14.1046 22.1046 15 21 15L20.5 16.5L21 18V21.5C21 22.0523 20.5523 22.5 20 22.5C19.4477 22.5 19 22.0523 19 21.5V18L19.5 16.5ZM13.6313 10.8435L14 9H11L10 10V10.5H12.2371C12.7354 10.5 13.2112 10.6229 13.6313 10.8435Z"
                              className={`${
                                activeTab === "Airport"
                                  ? "fill-[#6DD3CE] group-hover:fill-[#6DD3CE]"
                                  : "fill-[#CDD0D1] group-hover:fill-[rgba(255,255,255,1.00)]"
                              }`}
                            ></path>
                            <path
                              fill-rule="evenodd"
                              clip-rule="evenodd"
                              d="M12.7913 9C13.1976 9 13.5921 9.06115 13.9649 9.17557L13.6313 10.8435C13.2112 10.6229 12.7354 10.5 12.2371 10.5H8.7629C7.42346 10.5 6.24631 11.3879 5.87833 12.6758L5.6821 13.3626C5.59084 13.682 5.83068 14 6.16286 14H13H14H14.8371C15.1693 14 15.4092 13.682 15.3179 13.3626L15.1217 12.6758C15.088 12.5578 15.0474 12.4432 15.0006 12.3323L16.0184 10.636C16.338 11.072 16.5729 11.5779 16.6961 12.1323L17 13.5L17.9207 13.1931C18.2531 13.0823 18.6164 13.2328 18.7731 13.5461C18.9086 13.8172 18.8555 14.1445 18.6412 14.3588L18 15C18.5523 15 19 15.4477 19 16V18.382C19 19.0672 18.6129 19.6936 18 20V21C18 21.8284 17.3284 22.5 16.5 22.5C15.6716 22.5 15 21.8284 15 21V20H6V21C6 21.8284 5.32843 22.5 4.5 22.5C3.67157 22.5 3 21.8284 3 21V20C2.38713 19.6936 2 19.0672 2 18.382V16C2 15.4477 2.44772 15 3 15L2.35881 14.3588C2.14453 14.1445 2.09141 13.8172 2.22693 13.5461C2.38362 13.2328 2.74689 13.0823 3.07927 13.1931L4 13.5L4.30394 12.1323C4.71064 10.3021 6.33389 9 8.20869 9H9.25L9 10H10L11 9H12.7913ZM5.5 18H7.5C8.05228 18 8.5 17.5523 8.5 17C8.5 16.4477 8.05228 16 7.5 16H5.5C4.94772 16 4.5 16.4477 4.5 17C4.5 17.5523 4.94772 18 5.5 18ZM15.5 18H13.5C12.9477 18 12.5 17.5523 12.5 17C12.5 16.4477 12.9477 16 13.5 16H15.5C16.0523 16 16.5 16.4477 16.5 17C16.5 17.5523 16.0523 18 15.5 18Z"
                              className={`${
                                activeTab === "Airport"
                                  ? "fill-[#6DD3CE] group-hover:fill-[#6DD3CE]"
                                  : "fill-[#CDD0D1] group-hover:fill-[rgba(255,255,255,1.00)]"
                              }`}
                            ></path>
                          </svg>
                        </div>
                        <div className="relative z-0 flex justify-center items-stretch basis-auto shrink-0 mt-0">
                          <div
                            className={`ml-2 text-[15px] font-semibold text-center leading-6 whitespace-pre-wrap break-words ${
                              activeTab === "Airport"
                                ? "text-[rgba(3,18,26,1.00)]"
                                : "text-[rgba(205,208,209,1.00)] group-hover:text-[rgba(255,255,255,1.00)]"
                            }`}
                          >
                            Airport Transfer
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="relative z-[1] flex flex-col items-stretch basis-auto shrink-0 h-full">
                      <div
                        className={`group relative z-0 flex items-stretch h-full py-2 px-4 border rounded-[25px] cursor-pointer select-none ${
                          activeTab === "Rental"
                            ? "bg-[rgba(255,255,255,1.00)]"
                            : "border-[rgba(0,0,0,0)] hover:border-[rgba(255,255,255,1.00)]"
                        }`}
                        style={{ touchAction: "manipulation" }}
                        onClick={() => handleClick("Rental")}
                      >
                        <div className="relative z-0 flex flex-col justify-center items-center basis-auto shrink-0">
                          <svg
                            width="24"
                            height="24"
                            viewBox="0 0 24 24"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                            data-id="IcProductDuotoneCarRentalFill"
                          >
                            <path
                              fill-rule="evenodd"
                              clip-rule="evenodd"
                              d="M4 20V21C4 21.8284 4.67157 22.5 5.5 22.5C6.32843 22.5 7 21.8284 7 21V20H17V21C17 21.8284 17.6716 22.5 18.5 22.5C19.3284 22.5 20 21.8284 20 21V20C20.6129 19.6936 21 19.0672 21 18.382V15C21 14.4477 20.5523 14 20 14L20.6412 13.3588C20.8555 13.1445 20.9086 12.8172 20.7731 12.5461C20.6164 12.2328 20.2531 12.0823 19.9207 12.1931L19 12.5L18.6961 11.1323C18.2894 9.30213 16.6661 8 14.7913 8H9.20869C7.33389 8 5.71064 9.30213 5.30394 11.1323L5 12.5L4.07927 12.1931C3.74689 12.0823 3.38362 12.2328 3.22693 12.5461C3.09141 12.8172 3.14453 13.1445 3.35881 13.3588L4 14C3.44772 14 3 14.4477 3 15V18.382C3 19.0672 3.38713 19.6936 4 20ZM16.8767 14H7.12331C6.80343 14 6.56582 13.7038 6.63521 13.3915L6.97795 11.8492C7.28298 10.4766 8.50042 9.5 9.90651 9.5H14.0935C15.4996 9.5 16.717 10.4766 17.022 11.8492L17.3648 13.3915C17.4342 13.7038 17.1966 14 16.8767 14ZM8.5 18H6.5C5.94772 18 5.5 17.5523 5.5 17C5.5 16.4477 5.94772 16 6.5 16H8.5C9.05228 16 9.5 16.4477 9.5 17C9.5 17.5523 9.05228 18 8.5 18ZM15.5 18H17.5C18.0523 18 18.5 17.5523 18.5 17C18.5 16.4477 18.0523 16 17.5 16H15.5C14.9477 16 14.5 16.4477 14.5 17C14.5 17.5523 14.9477 18 15.5 18Z"
                              className={`${
                                activeTab === "Rental"
                                  ? "fill-[#087E8B] group-hover:fill-[#087E8B]"
                                  : "fill-[#CDD0D1] group-hover:fill-[rgba(255,255,255,1.00)]"
                              }`}
                            ></path>
                            <path
                              fill-rule="evenodd"
                              clip-rule="evenodd"
                              d="M8.5 7H5C3.89543 7 3 6.10457 3 5V4C3 2.89543 3.89543 2 5 2H8.5C9.32843 2 10 2.67157 10 3.5H19.5C20.0523 3.5 20.5 3.94772 20.5 4.5C20.5 5.05228 20.0523 5.5 19.5 5.5H10C10 6.32843 9.32843 7 8.5 7ZM5.5 6C5.22386 6 5 5.77614 5 5.5V3.5C5 3.22386 5.22386 3 5.5 3C5.77614 3 6 3.22386 6 3.5V5.5C6 5.77614 5.77614 6 5.5 6Z"
                              className={`${
                                activeTab === "Rental"
                                  ? "fill-[#087E8B] group-hover:fill-[#087E8B]"
                                  : "fill-[#CDD0D1] group-hover:fill-[rgba(255,255,255,1.00)]"
                              }`}
                            ></path>
                          </svg>
                        </div>
                        <div className="relative z-0 flex justify-center items-stretch basis-auto shrink-0 mt-0">
                          <div
                            className={`ml-2 text-[15px] font-semibold text-center leading-6 whitespace-pre-wrap break-words ${
                              activeTab === "Rental"
                                ? "text-[rgba(3,18,26,1.00)]"
                                : "text-[rgba(205,208,209,1.00)] group-hover:text-[rgba(255,255,255,1.00)]"
                            }`}
                          >
                            Car Rental
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="relative z-[1] flex flex-col items-stretch basis-auto shrink-0 h-full">
                      <div
                        className={`group relative z-0 flex items-stretch h-full py-2 px-4 border rounded-[25px] cursor-pointer select-none ${
                          activeTab === "Things"
                            ? "bg-[rgba(255,255,255,1.00)]"
                            : "border-[rgba(0,0,0,0)] hover:border-[rgba(255,255,255,1.00)]"
                        }`}
                        style={{ touchAction: "manipulation" }}
                        onClick={() => handleClick("Things")}
                      >
                        <div className="relative z-0 flex flex-col justify-center items-center basis-auto shrink-0">
                          <svg
                            width="24"
                            height="24"
                            viewBox="0 0 24 24"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                            data-id="IcProductDuotoneXperienceFill"
                          >
                            <path
                              fill-rule="evenodd"
                              clip-rule="evenodd"
                              d="M5.32125 8.49859L9.98962 12.6068L18.1819 2.25861C18.8675 1.39258 20.1254 1.24632 20.9914 1.93193C21.8574 2.61754 22.0037 3.87539 21.3181 4.74143L11.8181 16.7414C11.1071 17.6395 9.78862 17.7581 8.92874 17.0014L2.67874 11.5014C1.84952 10.7717 1.76886 9.50798 2.49857 8.67876C3.22828 7.84955 4.49204 7.76888 5.32125 8.49859ZM4.72017 18.9617L6.81535 16.4737L8.26811 17.7522C8.86424 18.2768 9.60732 18.5209 10.3395 18.4987L7.77982 21.5383C7.06832 22.3832 5.80662 22.4913 4.96172 21.7798C4.11683 21.0683 4.00868 19.8066 4.72017 18.9617ZM12.6021 17.3621C12.1498 17.9334 11.5336 18.2945 10.8755 18.4342L15.57 21.8648C16.4618 22.5165 17.7131 22.3219 18.3648 21.4301C19.0165 20.5382 18.8218 19.287 17.93 18.6352L13.9163 15.7021L12.6021 17.3621Z"
                              className={`${
                                activeTab === "Things"
                                  ? "fill-[#FF6D6A] group-hover:fill-[#FF6D6A]"
                                  : "fill-[#CDD0D1] group-hover:fill-[rgba(255,255,255,1.00)]"
                              }`}
                            ></path>
                            <path
                              fill-rule="evenodd"
                              clip-rule="evenodd"
                              d="M7 6C7 8 10 10 10 10C10 10 13 8 13 6C13 4 11.5 3 10 3C8.5 3 7 4 7 6ZM11 6C11 6.55228 10.5523 7 10 7C9.44772 7 9 6.55228 9 6C9 5.44772 9.44772 5 10 5C10.5523 5 11 5.44772 11 6Z"
                              className={`${
                                activeTab === "Things"
                                  ? "fill-[#FF6D6A] group-hover:fill-[#FF6D6A]"
                                  : "fill-[#CDD0D1] group-hover:fill-[rgba(255,255,255,1.00)]"
                              }`}
                            ></path>
                          </svg>
                        </div>
                        <div className="relative z-0 flex justify-center items-stretch basis-auto shrink-0 mt-0">
                          <div
                            className={`ml-2 text-[15px] font-semibold text-center leading-6 whitespace-pre-wrap break-words ${
                              activeTab === "Things"
                                ? "text-[rgba(3,18,26,1.00)]"
                                : "text-[rgba(205,208,209,1.00)] group-hover:text-[rgba(255,255,255,1.00)]"
                            }`}
                          >
                            Things to Do
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="relative z-[1] flex flex-col items-stretch basis-auto shrink-0 h-full">
                      <div
                        className="group relative z-0 flex items-stretch h-full py-2 px-4 border border-[rgba(0,0,0,0)] hover:border-[rgba(255,255,255,1.00)] rounded-[25px] cursor-pointer select-none"
                        style={{ touchAction: "manipulation" }}
                      >
                        <div className="relative z-0 flex flex-col justify-center items-center basis-auto shrink-0">
                          <svg
                            width="24"
                            height="24"
                            viewBox="0 0 24 24"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                            data-id="IcSystemMenuViewGrid"
                          >
                            <path
                              d="M4 18.5C4 18.2239 4.22386 18 4.5 18H5.5C5.77614 18 6 18.2239 6 18.5V19.5C6 19.7761 5.77614 20 5.5 20H4.5C4.22386 20 4 19.7761 4 19.5V18.5Z"
                              stroke-width="2"
                              stroke-linecap="round"
                              stroke-linejoin="round"
                              className="stroke-[#CDD0D1] group-hover:stroke-[rgba(255,255,255,1.00)]"
                            ></path>
                            <path
                              d="M11 18.5C11 18.2239 11.2239 18 11.5 18H12.5C12.7761 18 13 18.2239 13 18.5V19.5C13 19.7761 12.7761 20 12.5 20H11.5C11.2239 20 11 19.7761 11 19.5V18.5Z"
                              stroke-width="2"
                              stroke-linecap="round"
                              stroke-linejoin="round"
                              className="stroke-[#CDD0D1] group-hover:stroke-[rgba(255,255,255,1.00)]"
                            ></path>
                            <path
                              d="M18 18.5C18 18.2239 18.2239 18 18.5 18H19.5C19.7761 18 20 18.2239 20 18.5V19.5C20 19.7761 19.7761 20 19.5 20H18.5C18.2239 20 18 19.7761 18 19.5V18.5Z"
                              stroke-width="2"
                              stroke-linecap="round"
                              stroke-linejoin="round"
                              className="stroke-[#CDD0D1] group-hover:stroke-[rgba(255,255,255,1.00)]"
                            ></path>
                            <path
                              d="M4 11.5C4 11.2239 4.22386 11 4.5 11H5.5C5.77614 11 6 11.2239 6 11.5V12.5C6 12.7761 5.77614 13 5.5 13H4.5C4.22386 13 4 12.7761 4 12.5V11.5Z"
                              stroke-width="2"
                              stroke-linecap="round"
                              stroke-linejoin="round"
                              className="stroke-[#CDD0D1] group-hover:stroke-[rgba(255,255,255,1.00)]"
                            ></path>
                            <path
                              d="M11 11.5C11 11.2239 11.2239 11 11.5 11H12.5C12.7761 11 13 11.2239 13 11.5V12.5C13 12.7761 12.7761 13 12.5 13H11.5C11.2239 13 11 12.7761 11 12.5V11.5Z"
                              stroke-width="2"
                              stroke-linecap="round"
                              stroke-linejoin="round"
                              className="stroke-[#CDD0D1] group-hover:stroke-[rgba(255,255,255,1.00)]"
                            ></path>
                            <path
                              d="M18 11.5C18 11.2239 18.2239 11 18.5 11H19.5C19.7761 11 20 11.2239 20 11.5V12.5C20 12.7761 19.7761 13 19.5 13H18.5C18.2239 13 18 12.7761 18 12.5V11.5Z"
                              stroke-width="2"
                              stroke-linecap="round"
                              stroke-linejoin="round"
                              className="stroke-[#CDD0D1] group-hover:stroke-[rgba(255,255,255,1.00)]"
                            ></path>
                            <path
                              d="M11 4.5C11 4.22386 11.2239 4 11.5 4H12.5C12.7761 4 13 4.22386 13 4.5V5.5C13 5.77614 12.7761 6 12.5 6H11.5C11.2239 6 11 5.77614 11 5.5V4.5Z"
                              stroke-width="2"
                              stroke-linecap="round"
                              stroke-linejoin="round"
                              className="stroke-[#CDD0D1] group-hover:stroke-[rgba(255,255,255,1.00)]"
                            ></path>
                            <path
                              d="M18 4.5C18 4.22386 18.2239 4 18.5 4H19.5C19.7761 4 20 4.22386 20 4.5V5.5C20 5.77614 19.7761 6 19.5 6H18.5C18.2239 6 18 5.77614 18 5.5V4.5Z"
                              stroke-width="2"
                              stroke-linecap="round"
                              stroke-linejoin="round"
                              className="stroke-[#CDD0D1] group-hover:stroke-[rgba(255,255,255,1.00)]"
                            ></path>
                            <path
                              d="M3.5 5C3.5 4.17157 4.17157 3.5 5 3.5V3.5C5.82843 3.5 6.5 4.17157 6.5 5V5C6.5 5.82843 5.82843 6.5 5 6.5V6.5C4.17157 6.5 3.5 5.82843 3.5 5V5Z"
                              stroke-width="2"
                              stroke-linecap="round"
                              stroke-linejoin="round"
                              className="stroke-[#CDD0D1] group-hover:stroke-[rgba(255,255,255,1.00)]"
                            ></path>
                          </svg>
                        </div>
                        <div className="relative z-0 flex justify-center items-stretch basis-auto shrink-0 mt-0">
                          <div className="ml-2 text-[rgba(205,208,209,1.00)] group-hover:text-[rgba(255,255,255,1.00)] text-[15px] font-semibold text-center leading-6 whitespace-pre-wrap break-words">
                            More
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="relative z-0 flex flex-col items-stretch basis-auto shrink-0 w-full h-[1px] bg-[rgb(242,243,243)]"></div>
              <Menu activeMenu={activeTab} />
            </div>
          </div>
        </div>
        <div className="relative z-0 flex flex-col items-stretch basis-auto shrink-0 mt-3">
          <div className="relative z-0 flex justify-center items-center basis-auto shrink-0">
            <div className="text-[rgba(255,255,255,1.00)] text-sm font-medium text-left leading-5 italic whitespace-pre-wrap break-words">
              Trusted by
            </div>
            <div className="relative z-0 flex justify-center items-center basis-auto shrink-0">
              <img
                src="https://ik.imagekit.io/tvlk/image/imageResource/2023/06/22/1687392289863-908d004ac26d738718af89354323fedc.png?tr=h-25,q-75"
                alt=""
                className="ml-2 p-2 object-cover"
                style={{ objectPosition: "50% 50%", filter: "invert(100%) saturate(0) brightness(1000%)" }}
                loading="lazy"
              />
              <img
                src="https://ik.imagekit.io/tvlk/image/imageResource/2023/06/22/1687392293447-4b411f767bb288e2d036555599b42ac0.png?tr=h-25,q-75"
                alt=""
                className="ml-2 p-2 object-cover"
                style={{ objectPosition: "50% 50%", filter: "invert(100%) saturate(0) brightness(1000%)" }}
                loading="lazy"
              />
              <img
                src="https://ik.imagekit.io/tvlk/image/imageResource/2023/06/13/1686625746819-4e67e5d6b225971c0d1430f596a907ed.png?tr=h-25,q-75"
                alt=""
                className="ml-2 p-2 object-cover"
                style={{ objectPosition: "50% 50%", filter: "invert(100%) saturate(0) brightness(1000%)" }}
                loading="lazy"
              />
              <img
                src="https://ik.imagekit.io/tvlk/image/imageResource/2023/06/13/1686625752457-84d40bf0706dfc333b39ae781308fb26.png?tr=h-25,q-75"
                alt=""
                className="ml-2 p-2 object-cover"
                style={{ objectPosition: "50% 50%", filter: "invert(100%) saturate(0) brightness(1000%)" }}
                loading="lazy"
              />
              <img
                src="https://ik.imagekit.io/tvlk/image/imageResource/2023/06/22/1687392301517-cbddbb775e67a178895e22c8045a0476.png?tr=h-25,q-75"
                alt=""
                className="ml-2 p-2 object-cover"
                style={{ objectPosition: "50% 50%", filter: "invert(100%) saturate(0) brightness(1000%)" }}
                loading="lazy"
              />
            </div>
          </div>
        </div>
      </div>
      <div className="relative z-0 flex flex-col items-stretch basis-auto shrink-0 w-full h-10 bg-[rgba(255,255,255,1.00)] rounded-t-full"></div>
    </div>
  );
};

export default HomePage;
