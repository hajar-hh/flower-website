const URL = "https://66546c801c6af63f4677ddf2.mockapi.io/admission";

const signUpForm = document.querySelector("form");

signUpForm.addEventListener("submit", (e) => {
  e.preventDefault();

  const firstName = e.target.firstname.value;
  const lastName = e.target.lastname.value;
  const email = e.target.email.value;
  const password = e.target.pass.value;
  const rePassword = e.target.repass.value;

  if (!(password === rePassword)) {
    alert("The passwords you entered does not match");
    return;
  } else {
    sendData({ firstName, lastName, email, password });
  }
});

async function sendData(data) {
  try {
    const response = await axios.post(URL, data);
    modal();
    const father = document.querySelector(".god-father");
    father.style.display = "none";
  } catch (error) {
    console.log(error);
  }
}

function modal() {
  const modal = document.createElement("div");
  modal.classList.add("modal");
  document.body.append(modal);
  modal.innerHTML = `<p>✅</p>
      <h1>Data sent successfully</h1>
      <button type="submit"><a href="../index.html">HOME</a></button>
`;
  return modal;
}
