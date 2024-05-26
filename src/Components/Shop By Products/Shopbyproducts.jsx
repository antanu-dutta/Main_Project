import "./Shopbyproducts.css";
import shopbyproduct from "../../assets/shobbyproductlogo.avif";
import Shopby from "../Shop By/Shopby";
import ShobbyItem from "./Shob By Item/ShobbyItem";

function Shopbyproducts() {
  return (
    <div className=" py-[77px] bg-[#f2f7e3]">
      <div className="container">
        <div>
          <Shopby img={shopbyproduct} title={"Shob by Products"} />
          <div className=" flex p-4 flex-wrap justify-center align-items-start gap-0">
            <ShobbyItem />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Shopbyproducts;
