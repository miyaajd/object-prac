window.addEventListener("load", () => {
  const form = document.getElementById("loginForm");
  const message = document.getElementById("message");
  form.addEventListener("submit", (e) => {
    e.preventDefault();
    const email = document.getElementById("loginEmail").value.trim();
    const password = document.getElementById("loginPassword").value.trim();
    const savedEmail = localStorage.getItem("useremail");
    const savedPassword = localStorage.getItem("userpassword");
    const savedName = localStorage.getItem("username");
    //
    if (email === savedEmail && password === savedPassword) {
      message.innerHTML = `User ${savedName} , Login successful!`;
      message.style.color = "green";
      setTimeout(()=>{
        window.location.href = "main.html"
      },2000)
      form.reset()
    }else{
        message.innerHTML = `email or password is wrong.`
        message.style.color = "red"
        message.style.fontsize = "12px"
    }
  });
});
