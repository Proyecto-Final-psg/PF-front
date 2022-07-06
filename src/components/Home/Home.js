import "./Home.scss";
import { useSelector } from "react-redux";
import { Carousel } from "../Carousel/Carousel";
import { Info } from "../Info Panel/Info";
import { Grid } from "../Comerce Grid/Grid";
import { Footer } from "../Footer/Footer";
import { NavBar } from "../NavBar/NavBar";



const Home = () => {
  const state = useSelector(state => state)
  return (
    <div className="cmp-hero">     
      <NavBar /> 
      <Carousel />
      <Info />
      <Grid />
      <Footer />
      {console.log(state)}
    </div>
  );
};

export default Home;
