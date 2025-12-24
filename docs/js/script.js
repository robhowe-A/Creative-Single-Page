import { NavigationAction } from "./models/Navigation.js";
import { BrandSpotSlideShow } from "./models/SlideShow.js";

const Creative = {
  start: () => {
    document.addEventListener("DOMContentLoaded", Creative.main);
  },
  main: () => {
    const navigation = new NavigationAction();
    navigation.init();

    const slideshow = new BrandSpotSlideShow();
    slideshow.init();
  },
};

Creative.start();
