import "./Home.scss";
import { useSelector } from "react-redux";
import { Carousel } from "../Carousel/Carousel";
import { Info } from "../Info Panel/Info";



const Home = () => {
  const state = useSelector(state => state)
  return (
    <div className="cmp-hero">
      <Carousel />
      <Info />
      {console.log(state)}
    </div>
  );
};

export default Home;
