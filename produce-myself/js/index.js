let firstMsg = document.querySelector(".other-box__first-msg span");
let otherMsg = document.querySelector(".other-box__likes");

const UNHIDDEN_CLASSNAME = "unhidden";
const HIDDEN_CLASSNAME = "hidden";

function showMsgOnclick(e) {
  firstMsg.classList.add(HIDDEN_CLASSNAME);
  otherMsg.classList.remove(HIDDEN_CLASSNAME);
}

firstMsg.addEventListener("click", showMsgOnclick);
