import "./Loading.scss";
import imagen from './Loading.gif';

const Loading = () => {

  return (
    <div className="Loading">
      <img className="Loading" src={imagen} />
    </div>
  );
};
export default Loading;
