window.addEventListener("load", () => {
  const form = document.querySelector("#signupForm");
  form.addEventListener("submit", (e) => {
    e.preventDefault();
    const name = document.querySelector("#userName").value.trim();
    const email = document.querySelector("#email").value.trim();
    const password = document.querySelector("#password").value.trim();
    const passwordConfirm = document
      .querySelector("#passwordConfirm")
      .value.trim();
    // Input  Validation
    if (!name || !email || !password || !passwordConfirm) {
      alert("Please fill in the blanks ! 🤷‍♂️");
      return;
    }
    if (!email.includes("@")) {
      alert("Your Email is wrong. 👻");
      return;
    }
    if (password !== passwordConfirm) {
      alert("Password do not match. 🤦‍♀️");
      return;
    }
    localStorage.setItem("username", name);
    localStorage.setItem("useremail", email);
    localStorage.setItem("userpassword", password);
    alert("Sing up successful. 🙌 Move to Login");
    window.location.href = "login.html";
  });
});
