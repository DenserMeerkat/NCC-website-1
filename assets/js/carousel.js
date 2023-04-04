
window.onload = function () {
    const helpers = (function () {
      function getDOMElements(DOMSelectors) {
        let DOMElements = {};
        for (let selector in DOMSelectors) {
          if (DOMSelectors.hasOwnProperty(selector)) {
            DOMElements[selector] = document.querySelector(
              DOMSelectors[selector]
            );
          }
        }
        return DOMElements;
      }
      return {
        getDOMElements
      };
    })();
  
    const modal = (function () {
      const state = {
        counter: 0,
        intervalID: 0
      };
      let CONSTANTS = {
        ACTIVE_CLASS_NAME: "active",
        TIMER: 3000,
        TRANSITION: "all .3s ease-out"
      };
      function addConstant(key, value) {
        CONSTANTS[key] = value;
      }
  
      return {
        state,
        CONSTANTS,
        addConstant
      };
    })();
  
    const view = (function (helpers) {
      const DOMSelectors = {
        carouselInnerSlider: ".content_inner_slider",
        dots: ".dots",
        prevButton: ".prev_button",
        nextButton: ".next_button",
        carouselImages: ".content_inner_slider > img",
        dot: ".dot"
      };
      const DOMElements = helpers.getDOMElements(DOMSelectors);
      const CAROUSEL_IMAGES = [
        ...document.querySelectorAll(DOMSelectors.carouselImages)
      ];
      const DOTS = [...document.querySelectorAll(DOMSelectors.dot)];
      function moveSliderToIndex(IMAGE_SIZE, index) {
        DOMElements.carouselInnerSlider.style.transform = `translateX(-${
          IMAGE_SIZE * index
        }px)`;
      }
      function addClassToIndex(className, index) {
        CAROUSEL_IMAGES[index].classList.add(className);
      }
      function removeClassToIndex(className, index) {
        CAROUSEL_IMAGES[index].classList.remove(className);
      }
      function addBackGroundToCurrentIndex(index) {
        DOTS[index].style.background = "#2e3092";
      }
      function removeBackGroundToCurrentIndex(index) {
        DOTS[index].style.background = "transparent";
      }
      function setTransition(element, transition) {
        element.style.transition = `${transition}`;
      }
      return {
        DOMSelectors,
        moveSliderToIndex,
        addClassToIndex,
        removeClassToIndex,
        addBackGroundToCurrentIndex,
        removeBackGroundToCurrentIndex,
        setTransition
      };
    })(helpers);
  
    const controller = (function (modal, view, helpers) {
      const DOMSelectors = view.DOMSelectors;
      const DOMElements = helpers.getDOMElements(DOMSelectors);
      autoSlide();
      function initApp() {
        const imageSize = DOMElements.carouselInnerSlider.clientWidth;
        const imagesCount =
          [...document.querySelectorAll(DOMSelectors.carouselImages)].length - 1;
        modal.addConstant("IMAGE_SIZE", imageSize);
        modal.addConstant("TOTAL_IMAGES", imagesCount);
        view.moveSliderToIndex(modal.CONSTANTS.IMAGE_SIZE, modal.state.counter);
        handleAdding();
        DOMElements.nextButton.addEventListener("click", handleNextImage);
        DOMElements.prevButton.addEventListener("click", handlePrevImage);
        DOMElements.dots.addEventListener("click", handleDotClick);
      }
      function removeEventListeners() {
        DOMElements.nextButton.removeEventListener("click", handleNextImage);
        DOMElements.prevButton.removeEventListener("click", handlePrevImage);
        DOMElements.dots.removeEventListener("click", handleDotClick);
      }
      function handleNextImage() {
        handleRemove();
        if (modal.state.counter === modal.CONSTANTS.TOTAL_IMAGES) {
          modal.state.counter = -1;
        }
        modal.state.counter += 1;
        handleAdding();
        view.moveSliderToIndex(modal.CONSTANTS.IMAGE_SIZE, modal.state.counter);
      }
      function handlePrevImage() {
        handleRemove();
        if (modal.state.counter === 0) {
          modal.state.counter = modal.CONSTANTS.TOTAL_IMAGES + 1;
        }
        modal.state.counter -= 1;
        handleAdding();
        view.moveSliderToIndex(modal.CONSTANTS.IMAGE_SIZE, modal.state.counter);
      }
      function handleDotClick(event) {
        const value = Number(event.target.value);
        if (!isNaN(value)) {
          handleRemove();
          modal.state.counter = value;
          view.moveSliderToIndex(modal.CONSTANTS.IMAGE_SIZE, modal.state.counter);
          handleAdding();
        }
      }
      function handleSlide(event) {
        const isChecked = event.target.checked;
        if (isChecked) {
          modal.state.intervalID = setInterval(() => {
            handleNextImage();
          }, modal.CONSTANTS.TIMER);
        } else {
          clearInterval(modal.state.intervalID);
          modal.state.intervalID = null;
        }
      }
      function autoSlide() {
          modal.state.intervalID = setInterval(() => {
            handleNextImage();
          }, modal.CONSTANTS.TIMER);
      }
      function handleRemove() {
        view.removeClassToIndex(
          modal.CONSTANTS.ACTIVE_CLASS_NAME,
          modal.state.counter
        );
        view.removeBackGroundToCurrentIndex(modal.state.counter);
      }
      function handleAdding() {
        view.addClassToIndex(
          modal.CONSTANTS.ACTIVE_CLASS_NAME,
          modal.state.counter
        );
        view.addBackGroundToCurrentIndex(modal.state.counter);
      }
      DOMElements.carouselInnerSlider.addEventListener(
        "transitionstart",
        removeEventListeners
      );
      DOMElements.carouselInnerSlider.addEventListener("transitionend", initApp);
      view.setTransition(
        DOMElements.carouselInnerSlider,
        modal.CONSTANTS.TRANSITION
      );
      return {
        initApp,
        removeEventListeners
      };
    })(modal, view, helpers);
  
    controller.initApp();
  
    window.addEventListener("resize", () => {
      controller.removeEventListeners();
      controller.initApp();
    });
  };



    $(function () {
      var tickerLength = $(".achievement ul li").length;
      var tickerHeight = $(".achievement ul li").outerHeight();
      $(".achievement ul li:last-child").prependTo(".achievement ul");
      $(".achievement ul").css("marginTop", -tickerHeight);
      function moveTop() {
        $(".achievement ul").animate(
          {
            top: -tickerHeight,
          },
          600,
          function () {
            $(".achievement ul li:first-child").appendTo(".achievement ul");
            $(".achievement ul").css("top", "");
          }
        );
      }
      setInterval(function () {
        moveTop();
      }, 9000);
    });
