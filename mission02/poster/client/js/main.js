const body = document.querySelector("body");
const nickName = document.querySelector(".container .nickName");
const visualImg = document.querySelector(".container .visual img");
const navLi = document.querySelector(".nav li");
const navButtons = document.querySelectorAll(".nav li button");

// nav li .is-active 토글
function setIsActiveNavLi(node) {
  document.querySelector(".is-active", navLi).classList.remove("is-active");
  node.parentNode.classList.add("is-active");
}

// 이미지 정보 변경
function setImage(alt = "", src = "", nickNameData = "") {
  visualImg.setAttribute("alt", alt);
  visualImg.setAttribute("src", src);
  visualImg.dataset.nickName = nickNameData;

  setBgColor(nickNameData);
}

// 닉네임 텍스트 변경
function setNameText(nickNameData = "") {
  nickName.textContent = nickNameData;
}

// 배경 색상 변경
function setBgColor(name) {
  let colorTop = "#000";
  let colorBottom = "#000";

  if (name) {
    data.forEach((d) => {
      if (d.name === name) {
        colorTop = d.color[0] || colorTop;
        colorBottom = d.color[1] || colorBottom;
        return true;
      }
    });
  }

  body.style.background = `linear-gradient(to bottom, ${colorTop}, ${colorBottom})`;
}

// nav 버튼 클릭 이벤트
function navButtonClickEvent(e) {
  const children = this.children[0]; // 하위 img 엘리먼트

  const alt = children.getAttribute("alt") || "";
  const src = children.dataset.id ? `./assets/${children.dataset.id}.jpeg` : "";
  const nickNameData = children.dataset.nickName || "";

  setIsActiveNavLi(this);
  setImage(alt, src, nickNameData);
  setNameText(nickNameData);
  setBgColor(nickNameData);
}

// nav 버튼 클릭 이벤트 활성화
navButtons.forEach(function (navButton) {
  navButton.addEventListener("click", navButtonClickEvent);
});
