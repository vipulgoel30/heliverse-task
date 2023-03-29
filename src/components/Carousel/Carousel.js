import { useState, useReducer, useEffect } from "react";
import classes from "./Carousel.module.css";
import {
  MdOutlineArrowBackIosNew,
  MdOutlineArrowForwardIos,
} from "react-icons/md";
import {
  backwardAnimationHandler,
  forwardAnimationHandler,
} from "./carouselAnimationFunctions";
import CarouselIndicator from "./CarouselIndicators";

const initialItemClasses = {
  first: `${classes.carouselItemCenter}`,
  pseudoSecond: `${classes.carouselItemRight}`,
  pseudoFour: `${classes.carouselItemLeft}`,
};

const actionItemClasses = (prevState, action) => {
  return {
    ...action,
  };
};

const Carousel = () => {
  const [activeItem, setActiveItem] = useState(1);

  const [itemClasses, dispatchItemClasses] = useReducer(
    actionItemClasses,
    initialItemClasses
  );

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveItem((curActiveItem) => {
        const nextActiveItem = curActiveItem === 4 ? 1 : curActiveItem + 1;
        forwardAnimationHandler(nextActiveItem, dispatchItemClasses, classes);
        return nextActiveItem;
      });
    }, 7000);

    return () => {
      clearInterval(interval);
    };
  }, [activeItem]);

  const leftBtnHandler = () => {
    setActiveItem((curActiveItem) => {
      const nextActiveItem = curActiveItem === 1 ? 4 : curActiveItem - 1;
      backwardAnimationHandler(nextActiveItem, dispatchItemClasses, classes);
      return nextActiveItem;
    });
  };

  const rightBtnHandler = () => {
    setActiveItem((curActiveItem) => {
      const nextActiveItem = curActiveItem === 4 ? 1 : curActiveItem + 1;
      forwardAnimationHandler(nextActiveItem, dispatchItemClasses, classes);
      return nextActiveItem;
    });
  };

  return (
    <section>
      <div className={classes.carousel}>
        <div className={`${classes.carouselItem}  ${itemClasses.first}`}>
          Container 1
        </div>
        <div className={`${classes.carouselItem}  ${itemClasses.second} `}>
          Container 2
        </div>
        <div className={`${classes.carouselItem}  ${itemClasses.third}`}>
          Container 3
        </div>
        <div className={`${classes.carouselItem}  ${itemClasses.four}`}>
          Container 4
        </div>

        <div
          className={`${classes.carouselItem}   ${itemClasses.pseudoFirst} `}
        >
          Pseudo 1
        </div>
        <div
          className={`${classes.carouselItem}   ${itemClasses.pseudoSecond}`}
        >
          Pseudo 2
        </div>
        <div className={`${classes.carouselItem}   ${itemClasses.pseudoThird}`}>
          Pseudo 3
        </div>
        <div className={`${classes.carouselItem}   ${itemClasses.pseudoFour}`}>
          Pseudo 4
        </div>

        <button className={classes.btnLeft} onClick={leftBtnHandler}>
          <MdOutlineArrowBackIosNew />
        </button>
        <button className={classes.btnRight} onClick={rightBtnHandler}>
          <MdOutlineArrowForwardIos />
        </button>
      </div>

      {/* <div className={classes.carouselIndicatorContainer}> */}
      <CarouselIndicator activeItem={activeItem} />
      {/* </div> */}
    </section>
  );
};

export default Carousel;
