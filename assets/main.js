main();

function main() {
  // load portrait when it's ready
  loadPortrait();

  animateSectionLoading();

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

// reveals picture all at once rather than allowing a staggered load.
function loadPortrait() {
  // build image object
  let img = new Image();
  img.classList.add("portrait-img");
  img.alt = "Portrait of me, James Tedesco.";
  img.id = "portrait";
  img.src = "/assets/myself.webp";

  // locate where portrait should go
  let portraitLink = document.getElementById("portrait-of-james");

  // detect img loaded
  img.onload = () => {
    // remove the temporary class
    portraitLink.classList.remove("pre-portrait");

    // add the actual img element inside the existing div
    portraitLink.appendChild(img);

    // slight delay to allow transition detection
    window.setTimeout(() => {
      // animate entry of portrait
      img.classList.add("visible");
    }, 100);
  };
}
