const forwardAnimationHandler = (nextActiveItem, disptchFunc, styleClasses) => {
  switch (nextActiveItem) {
    case 1:
      disptchFunc({
        four: `${styleClasses.animationCarouselCenterFadeIn} ${styleClasses.carouselItemCenter}`,
        first: styleClasses.animationRightToCenter,
        pseudoSecondRight: styleClasses.carouselItemRight,
        pseudoFourLeft: styleClasses.carouselItemLeft,
      });
      break;
    case 2:
      disptchFunc({
        second: `${styleClasses.animationCarouselCenterFadeOut} ${styleClasses.carouselItemCenter}`,
        // second: styleClasses.carouselItemCenter,
        first: styleClasses.animationCenterToLeft,
        pseudoFirstLeft: styleClasses.carouselItemLeft,
        pseudoThirdRight: styleClasses.carouselItemRight,
      });
      break;
    case 3:
      disptchFunc({
        second: `${styleClasses.animationCarouselCenterFadeIn} ${styleClasses.carouselItemCenter}`,
        third: styleClasses.animationRightToCenter,
        pseudoFourRight: styleClasses.carouselItemRight,
        pseudoSecondLeft: styleClasses.carouselItemLeft,
      });
      break;
    case 4:
      disptchFunc({
        four: `${styleClasses.animationCarouselCenterFadeOut} ${styleClasses.carouselItemCenter}`,
        // four: styleClasses.carouselItemCenter,
        third: styleClasses.animationCenterToLeft,
        pseudoThirdLeft: styleClasses.carouselItemLeft,
        pseudoFirstRight: styleClasses.carouselItemRight,
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
        first: `${styleClasses.animationCarouselCenterFadeOut} ${styleClasses.carouselItemCenter}`,
        second: styleClasses.animationCenterToRight,
        // first: styleClasses.carouselItemCenter,
        pseudoSecondRight: styleClasses.carouselItemRight,
        pseudoFourLeft: styleClasses.carouselItemLeft,
      });
      break;
    case 2:
      disptchFunc({
        second: styleClasses.animationLeftToCenter,
        third: `${styleClasses.animationCarouselCenterFadeIn} ${styleClasses.carouselItemCenter}`,
        pseudoThirdRight: styleClasses.carouselItemRight,
        pseudoFirstLeft: styleClasses.carouselItemLeft,
      });
      break;
    case 3:
      disptchFunc({
        four: styleClasses.animationCenterToRight,
        third: `${styleClasses.animationCarouselCenterFadeOut} ${styleClasses.carouselItemCenter}`,
        pseudoFourRight: styleClasses.carouselItemRight,
        pseudoSecondLeft: styleClasses.carouselItemLeft,
      });
      break;
    case 4:
      disptchFunc({
        four: styleClasses.animationLeftToCenter,
        first: `${styleClasses.animationCarouselCenterFadeIn} ${styleClasses.carouselItemCenter}`,
        pseudoFirstRight: styleClasses.carouselItemRight,
        pseudoThirdLeft: styleClasses.carouselItemLeft,
      });
      break;
    default:
  }
};

export { forwardAnimationHandler, backwardAnimationHandler };
