const user = {
  id: "asd@naver.com",
  pw: "spdlqj123!@",
};

// 로그인 버튼 클릭 시 발생하는 이벤트
function handlLogin(e) {
  const inputId = getNode("#userEmail");
  const inputPw = getNode("#userPassword");
  const loginState = getNode("#loginState");
  const loginIp = getNode("#loginIp");
  let isValid = false; // id(email), pw 유효한 값 입력 여부

  // email validation
  if (emailReg(inputId.value)) {
    inputId.classList.remove("is--invalid");
    isValid = true;
  } else {
    inputId.classList.add("is--invalid");
  }

  // pw validation
  if (pwReg(inputPw.value)) {
    inputPw.classList.remove("is--invalid");
  } else {
    isValid = false;
    inputPw.classList.add("is--invalid");
  }

  if (isValid) {
    // 통신
    try {
      if (submitData({ id: inputId.value, pw: inputPw.value, state: loginState.checked, ip: loginIp.checked })) {
        // 로그인 성공
        window.location.href = "welcome.html";
      } else {
        alert("로그인 실패...");
      }
    } catch (err) {
      alert("통신 에러 발생...");
    }
  }

  return false;
}

// 로그인 버튼에 이벤트 적용
const loginBtn = getNode(".login-form .btn-login");
loginBtn.onclick = handlLogin;

// 서버 통신
function submitData(data) {
  console.log(data);
  if (data.id != user.id) return false;
  if (data.pw != user.pw) return false;

  return true;
}

// validation -------------------------------------
// email 정규표현식을 사용한 validation
function emailReg(text) {
  const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

  return re.test(String(text).toLowerCase());
}

// pw 정규표현식을 사용한 validation
function pwReg(text) {
  const re = /^(?=.*[a-zA-Z])(?=.*[0-9])(?=.*[!@#$%^*+=-]).{6,16}$/;
  return re.test(String(text).toLowerCase());
}
