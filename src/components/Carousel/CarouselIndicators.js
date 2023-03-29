import classes from "./CarouselIndicator.module.css";

const CarouselIndicator = (props) => {
  return (
    <div className={classes.carouselIndicator}>
      <div className={` ${props.activeItem === 1 ? classes.active : ""}`}></div>
      <div className={` ${props.activeItem === 2 ? classes.active : ""}`}></div>
      <div className={` ${props.activeItem === 3 ? classes.active : ""}`}></div>
      <div className={` ${props.activeItem === 4 ? classes.active : ""}`}></div>
    </div>
  );
};

export default CarouselIndicator;
