import { AiFillStar } from "react-icons/ai";
import "./CardBig.css";

export default function CardBig(props) {
  return (
    <div className="containerBig">
      <div className="imgcon">
      <img src={props.img} alt="" className="posterBig" />
      <div className="descriptionBig">
        <div>
          <p id="title">{props.title}</p>
          <p id="genre">{props.genre}</p>
        </div>
        <div className="star">
          <AiFillStar color="rgb(253, 199, 76)" size="15" />
          <p className="rate">4.6</p>
        </div>
        </div>
      </div>
    </div>
  );
}
