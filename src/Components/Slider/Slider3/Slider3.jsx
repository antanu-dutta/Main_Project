import "./Slider3.css";

function Slider3() {
  return (
    <div className="slider3 w-full h-screen relative bg-center bg-cover">
      <div className="text-center absolute top-[60px] left-[50%] -translate-x-2/4 w-3/5 p-8">
        <h2 className="mb-1 text-base font-semibold text-white uppercase">
          HEALTHY LIVING STARTS WITH HEALTHY EATING
        </h2>
        <h3 className="text-6xl text-white font-semibold font-serif mb-11">
          Go Organic With{" "}
          <span className="text-[#cbd82d] text-6xl font-serif font-semibold">
            20+ Acre of Farm
          </span>
        </h3>
        <a
          href=""
          className=" text-white text-sm font-semibold uppercase px-5 py-4 border rounded-xl hover:bg-white hover:text-primary transition-all"
        >
          Visit Our Farm
        </a>
      </div>
    </div>
  );
}

export default Slider3;
