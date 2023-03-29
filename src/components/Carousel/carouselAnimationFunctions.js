const forwardAnimationHandler = (nextActiveItem, disptchFunc, styleClasses) => {
  switch (nextActiveItem) {
    case 1:
      disptchFunc({
        four: styleClasses.carouselItemCenter,
        first: styleClasses.animationRightToCenter,
        pseudoSecond: styleClasses.carouselItemRight,
        pseudoFour: styleClasses.carouselItemLeft,
      });
      break;
    case 2:
      disptchFunc({
        second: styleClasses.carouselItemCenter,
        first: styleClasses.animationCenterToLeft,
        pseudoFirst: styleClasses.carouselItemLeft,
        pseudoThird: styleClasses.carouselItemRight,
      });
      break;
    case 3:
      disptchFunc({
        second: styleClasses.carouselItemCenter,
        third: styleClasses.animationRightToCenter,
        pseudoFour: styleClasses.carouselItemRight,
        pseudoSecond: styleClasses.carouselItemLeft,
      });
      break;
    case 4:
      disptchFunc({
        four: styleClasses.carouselItemCenter,
        third: styleClasses.animationCenterToLeft,
        pseudoThird: styleClasses.carouselItemLeft,
        pseudoFirst: styleClasses.carouselItemRight,
      });
      break;
    default:
  }
};

const backwardAnimationHandler = (
  nextActiveItem,
  disptchFunc,
  styleClasses
) => {
  switch (nextActiveItem) {
    case 1:
      disptchFunc({
        second: styleClasses.animationCenterToRight,
        first: styleClasses.carouselItemCenter,
        pseudoSecond: styleClasses.carouselItemRight,
        pseudoFour: styleClasses.carouselItemLeft,
      });
      break;
    case 2:
      disptchFunc({
        second: styleClasses.animationLeftToCenter,
        third: styleClasses.carouselItemCenter,
        pseudoThird: styleClasses.carouselItemRight,
        pseudoFirst: styleClasses.carouselItemLeft,
      });
      break;
    case 3:
      disptchFunc({
        four: styleClasses.animationCenterToRight,
        third: styleClasses.carouselItemCenter,
        pseudoFour: styleClasses.carouselItemRight,
        pseudoSecond: styleClasses.carouselItemLeft,
      });
      break;
    case 4:
      disptchFunc({
        four: styleClasses.animationLeftToCenter,
        first: styleClasses.carouselItemCenter,
        pseudoFirst: styleClasses.carouselItemRight,
        pseudoThird: styleClasses.carouselItemLeft,
      });
      break;
    default:
  }
};

export { forwardAnimationHandler, backwardAnimationHandler };
