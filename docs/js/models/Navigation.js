export class NavigationAction {
  /** Toggles the navigation to reveal or hide. This class is tailored for the
   * header nav menu.
   */
  constructor() {
    this.openNavBtn = document.querySelector("header button.open");
    this.closeNavBtn = document.querySelector("header button.close");
    this.navMenu = document.querySelector("header nav");
    this.navMenuBtns = document.querySelectorAll("nav li a");
  }
  /**This function created the click event listeners that operate the navigation
   * action.
   */
  init() {
    this.openNavBtn.addEventListener("click", e => {
      e.preventDefault();
      if (this.navMenu.classList.contains("closed")) {
        this.openNavBtn.style.display = "none";
        this.closeNavBtn.style.display = "block";
        this.navMenu.style.display = "block";
        this.navMenu.style.width = "fit-content";
        this.navMenu.style.opacity = "1";
        this.navMenu.classList.remove("closed");
        this.navMenu.classList.add("opened");

        for (let nav of this.navMenuBtns) {
          nav.tabIndex = "0";
          nav.style.display = "block";
        }
      }
    });
    this.closeNavBtn.addEventListener("click", e => {
      e.preventDefault();
      if (this.navMenu.classList.contains("opened")) {
        this.closeNavBtn.style.display = "none";
        this.openNavBtn.style.display = "block";
        this.navMenu.style.opacity = "0";
        this.navMenu.style.width = "0";
        this.navMenu.classList.remove("opened");
        this.navMenu.classList.add("closed");

        for (let nav of this.navMenuBtns) {
          nav.tabIndex = "-1";
          nav.style.display = "none";
        }
      }
    });
  }
}
