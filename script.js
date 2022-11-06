const removeButtonList = document.querySelectorAll(".btn-outline-danger");

for (let btn of removeButtonList) {
  btn.addEventListener("click", () => {
    const td = btn.parentElement;
    const tr = td.parentElement;
    tr.remove();
  });
}

const addButtonModal = document.querySelector("#add-button");

addButtonModal.addEventListener("click", () => {
  let checker = false;

  const removeButtonList = document.querySelectorAll(".btn-outline-danger");

  let trackNumber = document.querySelector("#track-number");
  let trackTitle = document.querySelector("#track-title");
  let artistName = document.querySelector("#artist-name");
  let trackDuration = document.querySelector("#track-duration");

  const newTr = document.createElement("tr");

  const newTh = document.createElement("th");
  newTh.setAttribute("scope", "row");
  newTh.innerText = trackNumber.value;
  newTh.classList.add("align-middle");
  newTr.appendChild(newTh);

  const newTdSong = document.createElement("td");
  newTdSong.innerText = trackTitle.value;
  newTdSong.classList.add("align-middle");
  newTr.appendChild(newTdSong);

  const newTdArtistName = document.createElement("td");
  newTdArtistName.innerText = artistName.value;
  newTdArtistName.classList.add("align-middle");
  newTr.appendChild(newTdArtistName);

  const newTdDuration = document.createElement("td");
  newTdDuration.classList.add("align-middle");
  newTdDuration.innerText = trackDuration.value;
  newTr.appendChild(newTdDuration);

  const newRemoveButton = document.createElement("button");
  const newTdButton = document.createElement("td");
  newRemoveButton.setAttribute("type", "button");
  newRemoveButton.classList.add("btn");
  newRemoveButton.classList.add("btn-outline-danger");
  newRemoveButton.innerText = "Remove";
  newTdButton.appendChild(newRemoveButton);
  newTr.appendChild(newTdButton);
  newRemoveButton.addEventListener("click", () => {
    newTr.remove();
  });

  const tableBody = document.querySelector("tbody");

  if (
    trackNumber.value != "" &&
    trackTitle.value != "" &&
    artistName.value != "" &&
    trackDuration.value != ""
  ) {
    tableBody.appendChild(newTr);
    checker = true;
  }

  if (checker === true) {
    const alert = document.querySelector(".alert");
    alert.classList.add("show");
    const strongTag = document.querySelector("strong");
    strongTag.innerText = trackTitle.value;
  }

  addButtonModal.setAttribute("data-dismiss", "modal");

  trackNumber.value = "";
  trackTitle.value = "";
  artistName.value = "";
  trackDuration.value = "";
});

// for (let i = 0; i < removeButtonList.length; i++) {
//   removeButtonList[i].addEventListener("click", () => {
//     const btn = removeButtonList[i];
//     const td = btn.parentElement;
//     const tr = td.parentElement;
//     // tr.remove();
//     for (let j = i + 1; j < removeButtonList.length; j++) {
//       const nextTr = tr.nextElementSibling;
//       let currentNumber = nextTr.firstChild;
//       currentNumber.innerText = `${j}`;
//     }
//     tr.remove();
//   });
// }
