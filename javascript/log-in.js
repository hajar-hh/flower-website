const URL = "https://66546c801c6af63f4677ddf2.mockapi.io/admission";

const signInForm = document.querySelector("form");
signInForm.addEventListener("submit", async (e) => {
  e.preventDefault();


  try {
    const data = await getData();
    console.log(data);
    const user = data.filter((obj) => {
      console.log(obj);
      if (
        obj.email === e.target.email.value &&
        obj.password === e.target.password.value
      ) {
        return obj;
      }
    });

    console.log(user);

    if (user.length > 0) {
      alert(`Welcome ${user[0].firstName}`);
      document.location.href = "../index.html";
    } else {
      alert(`username or password was incorrect`);
    }
  } catch (error) {
    console.log(error);
  }
});

async function getData() {
  try {
    const response = await fetch(URL);
    const data = await response.json();
    return data;

    console.log(data);
  } catch (error) {
    console.log(error);
  }
}

