import "./Loading.scss";
import imagen from './Loading.gif';
const Loading = () => {
  return (
    <div className="Loading">
      <h4>Loading</h4>
      <img className="Loading" src={imagen} alt="loading" />
    </div>
  );
};
export default Loading;
