import "./Ayurvedicremedie.css";

function Ayurvedicremedie() {
  return (
    <div className="ayurvedicremedie">
      <div className="container">
        <div className="ayurvedic_remedie_wrapper ayurvedic_remedies_wrap">
          <div className="flex align-content-center justify-center gap-6">
            <div className="w-1/2">
              <h2 className="text-[40px] font-medium text-white leading-[48px] mt-3">
                Not Sure What to Buy
              </h2>
              <p className="mt-4 text-[16px] leading-[28px] font-normal text-[#d6d6d6] mb-4">
                Consult our Expert and make your daily life healthy
              </p>
              <div className=" flex flex-wrap  justify-between">
                <div className=" flex align-content-center text-black text-lg py-3 px-3  font-medium rounded-lg  border-top-[3px] border-[#006944] border-solid leading-6 mb-4 bg-white w-[49%]">
                  <img
                    src="https://farmnaturelle.com/cdn/shop/files/Group.svg?v=1696442650"
                    alt=""
                  />{" "}
                  Ayurvedic Products
                </div>
                <div className=" flex align-content-center text-black text-lg py-3 px-3  font-medium rounded-lg  border-top-[3px] border-[#006944] border-solid leading- mb-4 bg-white w-[49%]">
                  <img
                    src="https://farmnaturelle.com/cdn/shop/files/Group_1.svg?v=1696443200"
                    alt=""
                  />{" "}
                  Lifestyle Recomendation
                </div>
                <div className=" flex align-content-center text-black text-lg py-3 px-3  font-medium rounded-lg  border-top-[3px] border-[#006944] border-solid leading-6 mb-4 bg-white w-[49%]">
                  <img
                    src="https://farmnaturelle.com/cdn/shop/files/Group_2.svg?v=1696443200"
                    alt=""
                  />{" "}
                  Custom Diet Plan
                </div>
                <div className=" flex align-content-center text-black text-lg py-3 px-3  font-medium rounded-lg  border-top-[3px] border-[#006944] border-solid leading-6 mb-4 bg-white w-[49%]">
                  <img
                    src="https://farmnaturelle.com/cdn/shop/files/Group_3.svg?v=1696443198"
                    alt=""
                  />{" "}
                  Doctor's Advice
                </div>
              </div>
              <div className=" py-4 px-9 block rounded-xl border-[1px] border-solid border-[#fff] text-center text-white text-[14px] font-normal leading-[18px] uppercase mt-4 hover:bg-white hover:text-[#006944] transition-all cursor-pointer">
                book consultation @ Rs 99
              </div>
            </div>
            <div className="w-47 mt-[-75px] translate-y-3">
              <div>
                <img
                  src="https://farmnaturelle.com/cdn/shop/files/desk.png?v=1698732439"
                  alt=""
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Ayurvedicremedie;
