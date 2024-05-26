import Ayurvedicremedie from "./Components/Ayurvedic_remedie/Ayurvedicremedie";
import Header from "./Components/Header/Header";
import Honeysection from "./Components/Honey Section/Honeysection";
import Iconstrip from "./Components/Icon Strip/Iconstrip";
import Shopbyconcern from "./Components/Shop By Concern/Shopbyconcern";
import Shopbyproducts from "./Components/Shop By Products/Shopbyproducts";
import Slider from "./Components/Slider/Slider";

function App() {
  return (
    <>
      <Header />
      <Slider />
      <Iconstrip />
      <Shopbyconcern />
      <Ayurvedicremedie />
      <Shopbyproducts />
      <Honeysection />
    </>
  );
}

export default App;
