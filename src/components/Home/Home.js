import "./Home.scss";
import { useSelector } from "react-redux";



const Home = () => {
  const state = useSelector(state => state)
  return (
    <div className="cmp-hero">
      Soy heroooooooo
      {console.log(state)}
    </div>
  );
};

export default Home;
