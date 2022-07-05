import "./Hero.scss";
import { useSelector } from "react-redux";
const Hero = () => {
  const state = useSelector(state => state)
  return (
    <div className="cmp-hero">
      Soy herooooooooooooo
      {console.log(state)}
    </div>
  );
};

export default Hero;
