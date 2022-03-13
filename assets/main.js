main();

function main() {
  animateSectionLoading();

  // load portrait when it's ready
  loadPortrait();

  // nudge the user if they're not scrolling
  checkInitialScroll();

  // check if a form has been submitted on load
  checkSubmissionStatus();
  successStatus();
}

function animateSectionLoading() {
  /* Record all sections */
  sections = document.querySelectorAll("section");

  /* Map out the children of each section */
  allChildren = [...sections].map((section) => section.children);

  /* Create empty array for collecting all children */
  tempArray = [];

  /* Iterate through each section to collect their children */
  allChildren.forEach((child) => {
    tempArray.push(Array.from(child));
  });

  /* Flatten out the items in the array so they can all be accessed on the same plane. */
  let finalArray = tempArray.flat();

  /* ENTRY ANIMATION */

  /* Create observer function to catch all elements for being watched */
  const observer = new IntersectionObserver((entries) => {
    // Loop over the entries
    entries.forEach((entry) => {
      // If the element is visible
      if (entry.isIntersecting) {
        // Add the animation class
        entry.target.classList.add("reveal");
      }
    });
  });

  finalArray.forEach((section) => {
    observer.observe(section);
  });
}

// indicate successful submission of contact form
function successStatus() {
  // add event listener to form
  document.getElementById("form").addEventListener("submit", (evt) => {
    // mark success if form submitted
    localStorage.setItem("submission", "success");
  });
}

// check if form was successfully submitted
function checkSubmissionStatus() {
  var status = localStorage.getItem("submission");

  // if appropriate, show success animation
  if (status == "success") {
    // remove local storage item
    localStorage.removeItem("submission");

    // notify success
    let successMsg = document.getElementById("successMsg");
    successMsg.classList.add("reveal-msg");

    // hide success msg after 10 seconds
    setTimeout(() => {
      successMsg.classList.remove("reveal-msg");
    }, 6000);
  }
}
function checkInitialScroll() {
  // find arrow element
  let arrow = document.getElementById("visit-the-about-section");

  // assume user has not scrolled
  let hasScrolled = false;

  // start listening for scroll event
  // params summary: listener type, call function, control listener passivity -- research further
  window.addEventListener(
    "scroll",
    () => {
      hideArrow();
    },
    true
  );

  // if there's no scroll after 3 secs, show the arrow
  window.setTimeout(() => {
    // nudge user after waiting
    if (hasScrolled === false) {
      // show down-arrow
      arrow.classList.add("reveal-arrow");
    }
  }, 3000);

  // if a scroll is ever detected, hide the arrow
  function hideArrow() {
    console.log("scroll detected");

    // change state of scroll variable (located in scope above this one)
    hasScrolled = true;

    // reset arrow state if possible
    arrow.classList.remove("reveal-arrow");
  }
}

// reveals picture all at once rather than allowing a staggered load.
function loadPortrait() {
  // fetch image
  let img = new Image();
  img.classList.add("portrait-img");
  img.alt = "Portrait of me, James Tedesco.";
  img.id = "portrait";
  img.src = "/assets/myself.png";

  // remove the temporary classs
  let portraitLink = document.getElementById("portrait-of-james");

  // detect img loaded in JS
  img.onload = () => {
    portraitLink.classList.remove("pre-portrait");

    // replace in DOM
    portraitLink.appendChild(img);

    // slight delay to allow transition detection
    window.setTimeout(() => {
      img.classList.add("visible");
    }, 100);
  };
}
