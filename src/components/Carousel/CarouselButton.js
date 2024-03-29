import classes from "./CarouselButton.module.css";
import {
  MdOutlineArrowBackIosNew,
  MdOutlineArrowForwardIos,
} from "react-icons/md";

const CarouselButtonForward = (props) => {
  return (
    <button
      className={`${classes.btnForward} ${classes.btn}`}
      onClick={props.onClick}
    >
      <MdOutlineArrowForwardIos />
    </button>
  );
};

const CarouselButtonBackward = (props) => {
  return (
    <button
      className={`${classes.btnBackward} ${classes.btn}`}
      onClick={props.onClick}
    >
      <MdOutlineArrowBackIosNew />
    </button>
  );
};

export { CarouselButtonBackward, CarouselButtonForward };
