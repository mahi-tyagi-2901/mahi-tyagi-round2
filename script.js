// created a function and stored  it in a variable "outsideClick" which takes "e" as a parameter
// created a variable "container" and stored a class "customDrp" (from html file) inside container
//used if ele conditional statement to check that event "e" is the descendant of container or not and display is not visible
// it will remove the active class after clicking on it
var outsideClick = function (e) {
  var container = document.querySelector(".customDrp");
  if (
    !container.contains(e.target) &&
    container.contains(e.target).length === 0 &&
    container.display !== "none"
  ) {
    container.classList.remove("active");
    document.removeEventListener("click", outsideClick);
  }
};

//  after loading the webpage if we click on a crossString class it will return flase
// for each function is used to handle all the click event
//inside click event if we click on "crossString" or "bowiro" it will return false and prevent default behaviour
// if we click on element and it contains anchor tag it will return true and allows the default behaviour
document.addEventListener("DOMContentLoaded", function () {
  document.querySelectorAll(".custmonDropDwon").forEach((ele) => {
    ele.addEventListener("click", function (e) {
      if (
        e.target.classList.contains("crossString") ||
        e.target.classList.contains("bowiro")
      ) {
        return false;
      }

      if (e.target.tagName === "a") {
        return true;
      }

      e.preventDefault();

      console.log(e.target);

      //if event contains "language" then languageFunc will be called
      if (
        e.target.classList.contains("language") ||
        e.target.parentElement.classList.contains("language")
      ) {
        languageFunc();
      }

      //   if screen size of window is max:1170pxwidth then overflow of that specific elemet will be changed to hidden
      if (window.matchMedia("(max-width: 1170px)").matches) {
        document.body.style.overflow = "hidden";
      }

      //it focuses on element which has class name "searchCoinDrop"
      if (e.target.classList.contains("searchCoinDrp")) {
        document.getElementById("tokensearch1").focus();
      }

// if next sibling contains class name "customDrp" then active class willbe added to it
// else add active class to it
      if (this.nextElementSibling.classList(".customDrp")) {
        this.nextElementSibling.classList(".customDrp").classList.add("active");
      } else {
        this.querySelector(".customDrp").classList.add("active");
      }
// it stops the propogation of click event to prevent it from trigerring other click event handlers
      e.stopPropagation();
      document.addEventListener("click", outsideClick);
    });
  });

//   select button and use conditional statement 
// if btn value sets to false then text "read less" will pe appear and if we click on read less then toggle button will be activated
// else "read more" will pe appear and if we click on read less then "toggle" class will be added
  let basic_banner_read_btn = false;
  document.querySelectorAll(".basic_banner_read_btn").forEach((ele) => {
    ele.addEventListener("click", function () {
      if (basic_banner_read_btn == false) {
        this.textContent = "Read Less";
        document.querySelector(".basic_banner_text").classList.toggle("active");
        basic_banner_read_btn = true;
      } else {
        document.querySelector(".basic_banner_text").classList.toggle("active");
        $(this).text("Read More");
        basic_banner_read_btn = false;
      }
    });
  });

//   if we click on toggle filter button then "toggle" class will be added to it
  document.querySelectorAll(".filterToggelBtn").forEach((ele) => {
    ele.addEventListener("click", function () {
      document.querySelector(".filterToggel").classList.toggle("active");
    });
  });

//   if we click on hide custom then "toggle" class will be removed from it
  document.querySelectorAll(".hideCustomDrp").forEach((ele) => {
    ele.addEventListener("click", function () {
      document.querySelector(".customDrp").classList.remove("active");
    });
  });

//   if we click on close icon then "ative" class will be reomved from it
  document.querySelectorAll(".closeIcon").forEach((ele) => {
    ele.addEventListener("click", function () {
      document.querySelector(".customPopup").classList.remove("active");
      document.querySelector(".commonPopup").classList.remove("active");

      if (!document.querySelector(".headerMain").classList.contains("active")) {
        document.body.style.overflow = "auto";
      }
    });
  });

//   if we click on main table then event listened will be called over it and then 
//  if we scroll to left then class "before" will be added to it 
// else "beofre" class will be removed from it
  document.querySelector(".mainTable").addEventListener("scroll", function (e) {
    let isScroll = e.currentTarget.scrollLeft;
    if (isScroll) {
      document
        .querySelector(".ListingTable th:nth-child(3), td:nth-child(3)")
        .classList.add("before");
    } else {
      document
        .querySelector(".ListingTable th:nth-child(3), td:nth-child(3)")
        .classList.remove("before");
    }
  });
});
