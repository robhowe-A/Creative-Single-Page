export class BrandSpotSlideShow {
  #slideshowElements; /*private class member */

  /** This class is tailored to the Brand Spotlight slideshow. The constructor
   * initilizes the slideshow. Then, a user can click the next and
   * previous buttons to change slides */
  constructor() {
    this.nextBtn = document.getElementById("slidenext");
    this.prevBtn = document.getElementById("slideprev");
    /**Elements of brand spot 1 spotlight */
    this.Brand_spot1 = document.querySelectorAll(".Brand_spot1");

    /**Elements of brand spot 2 spotlight */
    this.Brand_spot2 = document.querySelectorAll(".Brand_spot2");

    /**Elements of brand spot 3 spotlight */
    this.Brand_spot3 = document.querySelectorAll(".Brand_spot3");

    /**An index number of the currently visible slide. */
    this.currentSlideIndex = 0;

    /**The total slides in the slideshow. */
    this.slidesCount = 3;
    this.#slideshowElements = [this.Brand_spot1, this.Brand_spot2, this.Brand_spot3];
  }
  /** Here, the slide index is noted for use in prev/next slideshow actions. */
  #getUpcomingSlideElements(e) {
    if (e[0].classList.contains("show")) {
      switch (e) {
        case this.#slideshowElements[0]:
          this.currentSlideIndex = 0;
          return e;
        case this.#slideshowElements[1]:
          this.currentSlideIndex = 1;
          return e;
        case this.#slideshowElements[2]:
          this.currentSlideIndex = 2;
          return e;
        default:
          this.currentSlideIndex = -1;
          return;
      }
    }
  }

  /** This function hides elements from the viewport. It changes opacity to 0,
   * display to none, and removes the show class. */
  #hideSlideElements(elem) {
    // set the display to none
    elem.style.opacity = 0;
    elem.style.display = "none";
    elem.classList.remove("show");
  }

  /** This function reveals elements from to viewport. It changes opacity to 1,
   * display to inline-block, and adds the show class. */
  #showSlideElements(elem) {
    // set the display visible
    elem.style.display = "inline-block";
    elem.style.opacity = 1;
    elem.classList.add("show");
  }

  /** This function assigns click event listeners to the previous and next buttons from the
   * constructor. When either button is clicked, the slideshow handles the picture image and
   * heading change to the spotlight markup.
   */
  init() {
    this.nextBtn.addEventListener("click", event => {
      event.preventDefault();
      //Hide the current slide content when next is clicked; display
      //the next element

      // find the current slideshow shown to know the index
      if (this.currentSlideIndex < this.slidesCount - 1) {
        let currentSlideElements;
        for (let e of this.#slideshowElements) {
          if (currentSlideElements == null) {
            currentSlideElements = this.#getUpcomingSlideElements(e);
          }
        }

        // hide the current elements
        for (let e of currentSlideElements) {
          this.#hideSlideElements(e);
        }
        let nextSlideElements = this.#slideshowElements[this.currentSlideIndex + 1];

        // show the next elements
        for (let e of nextSlideElements) {
          this.#showSlideElements(e);
        }
        this.currentSlideIndex++;
      } else {
        console.info("%cClicked next slide but there are no next slides.", "Font-weight: bold; color: purple");
      }
    });
    this.prevBtn.addEventListener("click", event => {
      event.preventDefault();
      //Hide the current slide content when previous is clicked; display
      //the previous element

      // find the current slideshow shown to know the index
      if (this.currentSlideIndex >= 1) {
        let currentSlideElements;
        for (let e of this.#slideshowElements) {
          if (currentSlideElements == null) {
            currentSlideElements = this.#getUpcomingSlideElements(e);
          }
        }

        // hide the current elements
        for (let e of currentSlideElements) {
          this.#hideSlideElements(e);
        }
        let prevSlideElements = this.#slideshowElements[this.currentSlideIndex - 1];

        // show the next elements
        for (let e of prevSlideElements) {
          this.#showSlideElements(e);
        }
        this.currentSlideIndex--;
      } else {
        console.info("%cClicked previous slide but there are no previous slides.", "Font-weight: bold; color: purple");
      }
    });
  }
}
