const FlightMenuModal = () => {
  return (
    <div className="absolute top-modifier left-0 right-2 z-100 scale-y-100 origin-[top_center] flex flex-col items-stretch basis-auto shrink-0 w-max">
      <div className="relative z-0 flex flex-col items-stretch basis-auto shrink-0 bg-[rgba(255,255,255,1.00)] rounded-md shadow-[0_4px_10px_rgba(3,18,26,0.15)] overflow-hidden">
        <div className="relative z-0 flex items-stretch basis-auto shrink-0">
          <div
            className="relative z-0 flex flex-col items-stretch basis-auto shrink-0 cursor-pointer select-none"
            style={{ touchAction: "manipulation" }}
          >
            <div className="relative z-0 flex flex-col items-stretch basis-auto shrink-0 p-4 bg-[rgba(247,249,250,0)]">
              <div className="relative z-0 flex justify-start items-center basis-auto shrink-0">
                <img
                  src="https://d1785e74lyxkqq.cloudfront.net/_next/static/v2/a/a4aeae89d08f4e113e770c9542bdcb3b.svg"
                  width="24"
                />
                <div className="relative z-0 flex flex-col items-stretch basis-auto shrink-0 pr-2"></div>
                <div className="text-[rgb(104,113,118)] text-[15.7px] font-medium text-left leading-6 whitespace-pre-wrap break-words">
                  Flights
                </div>
              </div>
            </div>
          </div>
          <div className="relative z-0 flex flex-col items-stretch basis-auto shrink-0 my-2 border-r border-[rgba(205,208,209,1.00)] bg-[rgb(242,243,243)]"></div>
          <div
            className="relative z-0 flex flex-col items-stretch basis-auto shrink-0 cursor-pointer select-none"
            style={{ touchAction: "manipulation" }}
          >
            <div className="relative z-0 flex flex-col items-stretch basis-auto shrink-0 p-4 bg-[rgba(247,249,250,0)]">
              <div className="relative z-0 flex justify-start items-center basis-auto shrink-0">
                <img
                  src="https://d1785e74lyxkqq.cloudfront.net/_next/static/v2/f/fbcf451f89ce8199408d91242f75358b.svg"
                  width="24"
                />
                <div className="relative z-0 flex flex-col items-stretch basis-auto shrink-0 pr-2"></div>
                <div className="text-[rgb(104,113,118)] text-[15.7px] font-medium text-left leading-6 whitespace-pre-wrap break-words">
                  Online Check-in
                </div>
              </div>
            </div>
          </div>
          <div className="relative z-0 flex flex-col items-stretch basis-auto shrink-0 my-2 border-r border-[rgba(205,208,209,1.00)] bg-[rgb(242,243,243)]"></div>
          <div
            className="relative z-0 flex flex-col items-stretch basis-auto shrink-0 cursor-pointer select-none"
            style={{ touchAction: "manipulation" }}
          >
            <div className="relative z-0 flex flex-col items-stretch basis-auto shrink-0 p-4 bg-[rgba(247,249,250,0)]">
              <div className="relative z-0 flex justify-start items-center basis-auto shrink-0">
                <img
                  src="https://d1785e74lyxkqq.cloudfront.net/_next/static/v2/6/6583c4389d310b2b1a8db5effc5e3c72.svg"
                  width="24"
                />
                <div className="relative z-0 flex flex-col items-stretch basis-auto shrink-0 pr-2"></div>
                <div className="text-[rgb(104,113,118)] text-[15.7px] font-medium text-left leading-6 whitespace-pre-wrap break-words">
                  Extra Baggage
                </div>
              </div>
            </div>
          </div>
          <div className="relative z-0 flex flex-col items-stretch basis-auto shrink-0 my-2 border-r border-[rgba(205,208,209,1.00)] bg-[rgb(242,243,243)]"></div>
          <div
            className="relative z-0 flex flex-col items-stretch basis-auto shrink-0 cursor-pointer select-none"
            style={{ touchAction: "manipulation" }}
          >
            <div className="relative z-0 flex flex-col items-stretch basis-auto shrink-0 p-4 bg-[rgba(247,249,250,0)]">
              <div className="relative z-0 flex justify-start items-center basis-auto shrink-0">
                <img
                  src="https://d1785e74lyxkqq.cloudfront.net/_next/static/v2/5/5004b449835e496e36312d0412c5a76c.svg"
                  width="24"
                />
                <div className="relative z-0 flex flex-col items-stretch basis-auto shrink-0 pr-2"></div>
                <div className="text-[rgb(104,113,118)] text-[15.7px] font-medium text-left leading-6 whitespace-pre-wrap break-words">
                  Flight + Hotel
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FlightMenuModal;
