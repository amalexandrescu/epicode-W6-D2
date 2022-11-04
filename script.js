const removeButtonList = document.querySelectorAll(".btn-outline-danger");

for (let btn of removeButtonList) {
  btn.addEventListener("click", () => {
    const td = btn.parentElement;
    const tr = td.parentElement;
    tr.remove();
  });
}

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
