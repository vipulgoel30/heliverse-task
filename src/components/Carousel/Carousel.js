import { useState, useReducer, useEffect } from "react";
import classes from "./Carousel.module.css";
import First from "./../../utils/CarouselImages/First.png";
import Second from "./../../utils/CarouselImages/Second.png";
import Third from "./../../utils/CarouselImages/Third.png";
import Four from "./../../utils/CarouselImages/Four.png";
import PseudoFirstLeft from "./../../utils/CarouselImages/PseudoFirstLeft.png";
import PseudoFirstRight from "./../../utils/CarouselImages/PseudoFirstRight.png";
import PseudoSecondLeft from "./../../utils/CarouselImages/PseudoSecondLeft.png";
import PseudoSecondRight from "./../../utils/CarouselImages/PseudoSecondRight.png";
import PseudoThirdLeft from "./../../utils/CarouselImages/PseudoThirdLeft.png";
import PseudoThirdRight from "./../../utils/CarouselImages/PseudoThirdRight.png";
import PseudoFourLeft from "./../../utils/CarouselImages/PseudoFourLeft.png";
import PseudoFourRight from "./../../utils/CarouselImages/PseudoFourRight.png";

import {
  backwardAnimationHandler,
  forwardAnimationHandler,
} from "./carouselAnimationFunctions";
import {
  CarouselButtonBackward,
  CarouselButtonForward,
} from "./CarouselButton";
import CarouselIndicator from "./CarouselIndicators";

const initialItemClasses = {
  first: `${classes.carouselItemCenter}`,
  pseudoSecondRight: `${classes.carouselItemRight}`,
  pseudoFourLeft: `${classes.carouselItemLeft}`,
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

  const backBtnHandler = () => {
    setActiveItem((curActiveItem) => {
      const nextActiveItem = curActiveItem === 1 ? 4 : curActiveItem - 1;
      backwardAnimationHandler(nextActiveItem, dispatchItemClasses, classes);
      return nextActiveItem;
    });
  };

  const forwardBtnHandler = () => {
    setActiveItem((curActiveItem) => {
      const nextActiveItem = curActiveItem === 4 ? 1 : curActiveItem + 1;
      forwardAnimationHandler(nextActiveItem, dispatchItemClasses, classes);
      return nextActiveItem;
    });
  };

  return (
    <section>
      <div className={classes.carousel}>
        <img
          src={First}
          alt=""
          className={`${classes.carouselItem}  ${itemClasses.first}`}
        />
        <img
          src={Second}
          alt=""
          className={`${classes.carouselItem}  ${itemClasses.second}`}
        />
        <img
          src={Third}
          alt=""
          className={`${classes.carouselItem}  ${itemClasses.third}`}
        />
        <img
          src={Four}
          alt=""
          className={`${classes.carouselItem}  ${itemClasses.four}`}
        />
        {/* </div> */}
        {/* <div className={`${classes.carouselItem}  ${itemClasses.second} `}>
          Container 2
        </div>
        <div className={`${classes.carouselItem}  ${itemClasses.third}`}>
          Container 3
        </div>
        <div className={`${classes.carouselItem}  ${itemClasses.four}`}>
          Container 4
        </div> */}
        <img
          src={PseudoFirstLeft}
          alt=""
          className={`${classes.carouselItem}  ${itemClasses.pseudoFirstLeft}`}
        />
        <img
          src={PseudoFirstRight}
          alt=""
          className={`${classes.carouselItem}  ${itemClasses.pseudoFirstRight}`}
        />
        <img
          src={PseudoSecondLeft}
          alt=""
          className={`${classes.carouselItem}  ${itemClasses.pseudoSecondLeft}`}
        />
        <img
          src={PseudoSecondRight}
          alt=""
          className={`${classes.carouselItem}  ${itemClasses.pseudoSecondRight}`}
        />
        <img
          src={PseudoThirdLeft}
          alt=""
          className={`${classes.carouselItem}  ${itemClasses.pseudoThirdLeft}`}
        />
        <img
          src={PseudoThirdRight}
          alt=""
          className={`${classes.carouselItem}  ${itemClasses.pseudoThirdRight}`}
        />
        <img
          src={PseudoFourLeft}
          alt=""
          className={`${classes.carouselItem}  ${itemClasses.pseudoFourLeft}`}
        />
        <img
          src={PseudoFourRight}
          alt=""
          className={`${classes.carouselItem}  ${itemClasses.pseudoFourRight}`}
        />

        {/* <div
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
        </div> */}

        <div className={classes.carouselBtnContainer}>
          <CarouselButtonBackward onClick={backBtnHandler} />
          <CarouselButtonForward onClick={forwardBtnHandler} />
        </div>
      </div>

      <CarouselIndicator activeItem={activeItem} />
    </section>
  );
};

export default Carousel;
