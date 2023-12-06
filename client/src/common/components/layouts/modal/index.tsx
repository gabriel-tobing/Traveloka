import { Link } from "react-router-dom";

const Modal = () => {
  return (
    <div className="fixed top-0 left-0 right-0 bottom-0 z-[9999] flex flex-col items-stretch">
      <div className="fixed top-0 left-0 right-0 bottom-0 z-0 flex flex-col items-stretch basis-auto shrink-0 w-full h-full bg-[rgb(3,18,26)] opacity-50"></div>
      <div className="relative z-0 flex flex-col justify-center items-stretch self-center flex-1 m-[68.3px] translate-y-0 pointer-events-none">
        <div className="relative z-0 flex flex-col items-stretch basis-auto shrink-0 w-[1080px] max-h-[70%] p-6 bg-[rgba(255,255,255,1.00)] rounded-[4px] shadow-[0_1px_2px_rgba(3,18,26,0.20)] overflow-hidden pointer-events-auto">
          <div className="relative z-0 flex justify-between items-center basis-auto shrink-0">
            <h1 className="text-[rgb(104,113,118)] text-[22px] font-bold text-left leading-7 whitespace-pre-wrap break-words">
              More Products
            </h1>
            <div
              className="relative z-0 flex flex-col items-stretch basis-auto shrink-0 cursor-pointer select-none"
              style={{ touchAction: "manipulation" }}
            >
              <img src="https://d1785e74lyxkqq.cloudfront.net/_next/static/v2/f/f2d49b7b0d07b79b1cd0ad26b789ab80.svg" />
            </div>
          </div>
          <div className="relative z-0 flex flex-col items-stretch basis-auto shrink grow overflow-x-hidden overflow-y-auto">
            <div className="relative z-0 flex flex-col items-stretch basis-auto shrink-0">
              <div className="relative z-0 flex flex-col items-stretch basis-auto shrink-0 mt-6">
                <h2 className="mb-4 text-[rgba(3,18,26,1.00)] text-lg font-bold text-left leading-6 whitespace-pre-wrap break-words"></h2>
                <div className="relative z-0 flex items-stretch basis-auto shrink-0 flex-wrap gap-4 w-full">
                  <div className="relative z-0 flex flex-col items-stretch basis-auto shrink-0 w-[32%]">
                    <Link to={"/"}>
                      <div className="relative z-0 flex items-center p-3 border border-[rgba(205,208,209,0.5)] rounded-lg">
                        <div className="relative z-0 flex flex-col items-stretch basis-auto shrink-0 w-10 h-10 mr-2 p-2 bg-[rgb(247,249,250)] rounded-full">
                          <img
                            src="https://d1785e74lyxkqq.cloudfront.net/_next/static/v2/5/5004b449835e496e36312d0412c5a76c.svg"
                            width={24}
                          />
                        </div>
                        <h3 className="text-[rgba(3,18,26,1.00)] text-[15.3px] font-bold text-left leading-5 whitespace-pre-wrap break-words">
                          Flight + Hotel
                        </h3>
                      </div>
                    </Link>
                  </div>
                  <div className="relative z-0 flex flex-col items-stretch basis-auto shrink-0 w-[32%]">
                    <Link to={"/"}>
                      <div className="relative z-0 flex items-center p-3 border border-[rgba(205,208,209,0.5)] rounded-lg">
                        <div className="relative z-0 flex flex-col items-stretch basis-auto shrink-0 w-10 h-10 mr-2 p-2 bg-[rgb(247,249,250)] rounded-full">
                          <img
                            src="https://d1785e74lyxkqq.cloudfront.net/_next/static/v2/b/b5ba7b36551c2499565d55c265f5f9e7.svg"
                            width={24}
                          />
                        </div>
                        <h3 className="text-[rgba(3,18,26,1.00)] text-[15.3px] font-bold text-left leading-5 whitespace-pre-wrap break-words">
                          Travel Insurance
                        </h3>
                      </div>
                    </Link>
                  </div>
                  <div className="relative z-0 flex flex-col items-stretch basis-auto shrink-0 w-[32%]">
                    <Link to={"/"}>
                      <div className="relative z-0 flex items-center p-3 border border-[rgba(205,208,209,0.5)] rounded-lg">
                        <div className="relative z-0 flex flex-col items-stretch basis-auto shrink-0 w-10 h-10 mr-2 p-2 bg-[rgb(247,249,250)] rounded-full">
                          <img
                            src="https://d1785e74lyxkqq.cloudfront.net/_next/static/v2/7/7d3a2276b08d9c6242e83d519e66ab59.svg"
                            width={24}
                          />
                        </div>
                        <h3 className="text-[rgba(3,18,26,1.00)] text-[15.3px] font-bold text-left leading-5 whitespace-pre-wrap break-words">
                          International Data Plans
                        </h3>
                      </div>
                    </Link>
                  </div>
                </div>
              </div>
              <div className="relative z-0 flex flex-col items-stretch basis-auto shrink-0 mt-6">
                <h2 className="mb-4 text-[rgba(3,18,26,1.00)] text-lg font-bold text-left leading-6 whitespace-pre-wrap break-words">
                  Activities to Try
                </h2>
                <div className="relative z-0 flex items-stretch basis-auto shrink-0 flex-wrap gap-4 w-full">
                  <div className="relative z-0 flex flex-col items-stretch basis-auto shrink-0 w-[32%]">
                    <Link to={"/"}>
                      <div className="relative z-0 flex items-center p-3 border border-[rgba(205,208,209,0.5)] rounded-lg">
                        <div className="relative z-0 flex flex-col items-stretch basis-auto shrink-0 w-10 h-10 mr-2 p-2 bg-[rgb(247,249,250)] rounded-full">
                          <img
                            src="https://d1785e74lyxkqq.cloudfront.net/_next/static/v2/d/d85425bbcb972428a8d82c57693b4c1f.svg"
                            width={24}
                          />
                        </div>
                        <h3 className="text-[rgba(3,18,26,1.00)] text-[15.3px] font-bold text-left leading-5 whitespace-pre-wrap break-words">
                          Attractions
                        </h3>
                      </div>
                    </Link>
                  </div>
                  <div className="relative z-0 flex flex-col items-stretch basis-auto shrink-0 w-[32%]">
                    <Link to={"/"}>
                      <div className="relative z-0 flex items-center p-3 border border-[rgba(205,208,209,0.5)] rounded-lg">
                        <div className="relative z-0 flex flex-col items-stretch basis-auto shrink-0 w-10 h-10 mr-2 p-2 bg-[rgb(247,249,250)] rounded-full">
                          <img
                            src="https://d1785e74lyxkqq.cloudfront.net/_next/static/v2/3/321d9ae21effd9ca667d24e0eab62a1f.svg"
                            width={24}
                          />
                        </div>
                        <h3 className="text-[rgba(3,18,26,1.00)] text-[15.3px] font-bold text-left leading-5 whitespace-pre-wrap break-words">
                          Beauty & Spa
                        </h3>
                      </div>
                    </Link>
                  </div>
                  <div className="relative z-0 flex flex-col items-stretch basis-auto shrink-0 w-[32%]">
                    <Link to={"/"}>
                      <div className="relative z-0 flex items-center p-3 border border-[rgba(205,208,209,0.5)] rounded-lg">
                        <div className="relative z-0 flex flex-col items-stretch basis-auto shrink-0 w-10 h-10 mr-2 p-2 bg-[rgb(247,249,250)] rounded-full">
                          <img
                            src="https://d1785e74lyxkqq.cloudfront.net/_next/static/v2/b/b14bbb68201c27031edf3ec595ed0219.svg"
                            width={24}
                          />
                        </div>
                        <h3 className="text-[rgba(3,18,26,1.00)] text-[15.3px] font-bold text-left leading-5 whitespace-pre-wrap break-words">
                          Playground
                        </h3>
                      </div>
                    </Link>
                  </div>
                  <div className="relative z-0 flex flex-col items-stretch basis-auto shrink-0 w-[32%]">
                    <Link to={"/"}>
                      <div className="relative z-0 flex items-center p-3 border border-[rgba(205,208,209,0.5)] rounded-lg">
                        <div className="relative z-0 flex flex-col items-stretch basis-auto shrink-0 w-10 h-10 mr-2 p-2 bg-[rgb(247,249,250)] rounded-full">
                          <img
                            src="https://d1785e74lyxkqq.cloudfront.net/_next/static/v2/e/ee1ba10e35088cac26126c2a73ea4a6d.svg"
                            width={24}
                          />
                        </div>
                        <h3 className="text-[rgba(3,18,26,1.00)] text-[15.3px] font-bold text-left leading-5 whitespace-pre-wrap break-words">
                          CLasses & workshops
                        </h3>
                      </div>
                    </Link>
                  </div>
                  <div className="relative z-0 flex flex-col items-stretch basis-auto shrink-0 w-[32%]">
                    <Link to={"/"}>
                      <div className="relative z-0 flex items-center p-3 border border-[rgba(205,208,209,0.5)] rounded-lg">
                        <div className="relative z-0 flex flex-col items-stretch basis-auto shrink-0 w-10 h-10 mr-2 p-2 bg-[rgb(247,249,250)] rounded-full">
                          <img
                            src="https://d1785e74lyxkqq.cloudfront.net/_next/static/v2/6/6b1c0e1636a790f9f7a3031fd3b2b561.svg"
                            width={24}
                          />
                        </div>
                        <h3 className="text-[rgba(3,18,26,1.00)] text-[15.3px] font-bold text-left leading-5 whitespace-pre-wrap break-words">
                          Events
                        </h3>
                      </div>
                    </Link>
                  </div>
                  <div className="relative z-0 flex flex-col items-stretch basis-auto shrink-0 w-[32%]">
                    <Link to={"/"}>
                      <div className="relative z-0 flex items-center p-3 border border-[rgba(205,208,209,0.5)] rounded-lg">
                        <div className="relative z-0 flex flex-col items-stretch basis-auto shrink-0 w-10 h-10 mr-2 p-2 bg-[rgb(247,249,250)] rounded-full">
                          <img
                            src="https://d1785e74lyxkqq.cloudfront.net/_next/static/v2/0/05f11e81ae8b75ab83456979994f9b23.svg"
                            width={24}
                          />
                        </div>
                        <h3 className="text-[rgba(3,18,26,1.00)] text-[15.3px] font-bold text-left leading-5 whitespace-pre-wrap break-words">
                          Tours
                        </h3>
                      </div>
                    </Link>
                  </div>
                </div>
              </div>
              <div className="relative z-0 flex flex-col items-stretch basis-auto shrink-0 mt-6">
                <h2 className="mb-4 text-[rgba(3,18,26,1.00)] text-lg font-bold text-left leading-6 whitespace-pre-wrap break-words">
                  Other Services
                </h2>
                <div className="relative z-0 flex items-stretch basis-auto shrink-0 flex-wrap gap-4 w-full">
                  <div className="relative z-0 flex flex-col items-stretch basis-auto shrink-0 w-[32%]">
                    <Link to={"/"}>
                      <div className="relative z-0 flex items-center p-3 border border-[rgba(205,208,209,0.5)] rounded-lg">
                        <div className="relative z-0 flex flex-col items-stretch basis-auto shrink-0 w-10 h-10 mr-2 p-2 bg-[rgb(247,249,250)] rounded-full">
                          <img
                            src="https://d1785e74lyxkqq.cloudfront.net/_next/static/v2/5/59275d7daf01b546a3f807623ecb6239.svg"
                            width={24}
                          />
                        </div>
                        <h3 className="text-[rgba(3,18,26,1.00)] text-[15.3px] font-bold text-left leading-5 whitespace-pre-wrap break-words">
                          Gift Voucher
                        </h3>
                      </div>
                    </Link>
                  </div>
                  <div className="relative z-0 flex flex-col items-stretch basis-auto shrink-0 w-[32%]">
                    <Link to={"/"}>
                      <div className="relative z-0 flex items-center p-3 border border-[rgba(205,208,209,0.5)] rounded-lg">
                        <div className="relative z-0 flex flex-col items-stretch basis-auto shrink-0 w-10 h-10 mr-2 p-2 bg-[rgb(247,249,250)] rounded-full">
                          <img
                            src="https://d1785e74lyxkqq.cloudfront.net/_next/static/v2/4/4cf12ff0667a640e669ba0a7323f5c4a.svg"
                            width={24}
                          />
                        </div>
                        <h3 className="text-[rgba(3,18,26,1.00)] text-[15.3px] font-bold text-left leading-5 whitespace-pre-wrap break-words">
                          PayLater
                        </h3>
                      </div>
                    </Link>
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

export default Modal;
