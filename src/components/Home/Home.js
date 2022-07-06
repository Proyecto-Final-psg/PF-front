import "./Home.scss";
import { useSelector } from "react-redux";
import { Carousel } from "../Carousel/Carousel";



const Home = () => {
  const state = useSelector(state => state)
  return (
    <div className="cmp-hero">
      <Carousel />
      {console.log(state)}
    </div>
  );
};

export default Home;
