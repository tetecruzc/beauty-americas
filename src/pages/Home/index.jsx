import Banner from "./components/Banner/Banner";
import Brands from "./components/Brands/Brands";
import decoration from './assets/decoration.png';
import decorationSm from './assets/decoration-sm.png';
import Distribution from "./components/Distribution/Distribution";
import WhyUs from "./components/WhyUs/WhyUs";
import Contact from "./components/Contact/Contact";
import Header from "../../components/Header/Header";

const HomePage = () => {
  return (
      <>
        <Header/>
        <Banner/>
        <Brands/>
        <img className="w-100 hide-on-sm" src={decoration} alt="" />
        <img className="w-100 show-on-sm" src={decorationSm} alt="" />
        <Distribution/>
        <WhyUs/>
        <img className="w-100 hide-on-sm" src={decoration} alt="" />
        <img className="w-100 show-on-sm" src={decorationSm} alt="" />
        <Contact/>
      </>
  );
};

export default HomePage;
