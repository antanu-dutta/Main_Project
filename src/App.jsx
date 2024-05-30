import Ayurvedicremedie from "./Components/Ayurvedic_remedie/Ayurvedicremedie";
import BuyProduct from "./Components/Buy Product/BuyProduct";
import Header from "./Components/Header/Header";
import Iconstrip from "./Components/Icon Strip/Iconstrip";
import Shopbyconcern from "./Components/Shop By Concern/Shopbyconcern";
import Shopbyproducts from "./Components/Shop By Products/Shopbyproducts";
import Slider from "./Components/Slider/Slider";
import { Honey } from "./Components/Buy Product/Producs/Honey";
import { Oil } from "./Components/Buy Product/Producs/Oil";
import { Ghee } from "./Components/Buy Product/Producs/Ghee";
import { Juice } from "./Components/Buy Product/Producs/Juice";
import Context from "./Components/Store/Context";
import FarmNatural from "./Components/Farm Natural/FarmNatural";
import Gift from "./Components/Gift/Gift";
import Review from "./Components/Review/Review";
import CreatetiveBanner from "./Components/Creative Banner/Welcome";
import AmazonReview from "./Components/Amazon Review/AmazonReview";
import { firstStrip, secondStrip } from "./Components/Icon Strip/IconStrip";
import TestimonialSection from "./Components/Testimonial/Testimoial Section/TestimonialSection";

function App() {
  return (
    <>
      <Context>
        <Header />
        <Slider />
        <Iconstrip strips={firstStrip} />
        <Shopbyconcern />
        <Ayurvedicremedie />
        <Shopbyproducts />
        <BuyProduct
          title={"Pure Honey"}
          subTitle={
            "Bee-produced, unprocessed honey from a farm, pure and natural."
          }
          products={Honey}
        />
        <BuyProduct
          title={"Cold Pressed Cooking Oils"}
          subTitle={
            "Cold-pressed, natural cooking oils sourced from farm ingredients for healthier cuisine."
          }
          products={Oil}
        />
        <BuyProduct
          title={"Bilona A2 Ghee"}
          subTitle={"Pure, farm-sourced, made through traditional method."}
          products={Ghee}
        />
        <FarmNatural />
      </Context>
      <BuyProduct
        title={"Herbal Juices"}
        subTitle={
          "Pure, Organic herbal juices sourced from farm ingredients has no added sugar."
        }
        products={Juice}
      />
      <Gift />
      <Review />
      <CreatetiveBanner />
      <AmazonReview />
      <Iconstrip strips={secondStrip} />
      <TestimonialSection />
    </>
  );
}

export default App;
