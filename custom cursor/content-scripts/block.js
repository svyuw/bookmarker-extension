let shouldShowPagePet = true;
// Create a block container div and append it to the document


function addPagePet() {
  const pagePetContainer = document.createElement("div");
  pagePetContainer.classList.add("page-pet__container");
  document.body.appendChild(pagePetContainer);

  const insideContainer = document.createElement("div");
  insideContainer.classList.add("inside-container");

  const pagePet = document.createElement("img");
  pagePet.src = "https://66.media.tumblr.com/f12fd13af7961686d16ae176be147cf3/tumblr_mjz1p5Xmlc1rfjowdo1_500.gif"
  pagePet.classList.add("page-pet");

  const removeBtn = document.createElement("div");
  removeBtn.classList.add("btn");
  removeBtn.classList.add("remove-btn");
  const xIcon = document.createElement("img");
  xIcon.src = "https://icons-for-free.com/download-icon-x+icon-1320166903649367557_512.png";
  xIcon.width = 25;
  xIcon.height = 25;
  removeBtn.appendChild(xIcon);
  removeBtn.addEventListener("click", ()=>{
    deleteElement(pagePetContainer);
  });

  // Add the delete button and drag handle to the block
  insideContainer.appendChild(pagePet);
  insideContainer.appendChild(removeBtn);
  pagePetContainer.appendChild(insideContainer);  
  pagePetContainer.addEventListener("click", ()=> {
    if (pagePetContainer.classList.contains("x") &&
    insideContainer.classList.contains("y")) {
      pagePetContainer.classList.remove("x");
      insideContainer.classList.remove("y");
    } else {
      pagePetContainer.classList.add("x");
      insideContainer.classList.add("y");
    }
  })
}

function deleteElement(element) {
  element.remove()
}

// function makeDraggable(el) {
//   el.addEventListener("mousedown", function (e) {
//     const parentBlock = el.parentNode;
//     var offsetX =
//       e.clientX - parseInt(window.getComputedStyle(parentBlock).left);
//     var offsetY =
//       e.clientY - parseInt(window.getComputedStyle(parentBlock).top);

//     function mouseMoveHandler(e) {
//       parentBlock.style.top = e.clientY - offsetY + "px";
//       parentBlock.style.left = e.clientX - offsetX + "px";
//     }

//     function reset() {
//       window.removeEventListener("mousemove", mouseMoveHandler);
//       window.removeEventListener("mouseup", reset);
//     }

//     window.addEventListener("mousemove", mouseMoveHandler);
//     window.addEventListener("mouseup", reset);
//   });
// }

function renderPagePet(shouldShowPagePet) {
  const allPagePets = document.querySelectorAll(".page-pet__container");
  for (const element of allPagePets) {
    if (shouldShowPagePet) {
      element.classList.remove("invisible");
    } else {
      element.classList.add("invisible");
    }
  }
}

// Add a message listener that sets the value of "replace"
chrome.runtime.onMessage.addListener((request) => {
  shouldShowPagePet = request["enable"];
  if (request["addBlock"]) addPagePet();
  renderPagePet(shouldShowPagePet);
});