window.addEventListener("load", () => {
  const check = document.querySelector("#shippingInfo");
  const submit = document.querySelector(".order");
  check.addEventListener("change", () => {
    if (check.checked) {
      // console.log("cccc");
      // document.querySelector("#shippingName").value = document.querySelector("#billingName").value
      // document.querySelector("#shippingTel").value = document.querySelector("#billingTel").value
      // document.querySelector("#shippingAdr").value = document.querySelector("#billingAdr").value
      document.ship.shippingName.value = document.order.billingName.value;
      document.ship.shippingTel.value = document.order.billingTel.value;
      document.ship.shippingAdr.value = document.order.billingAdr.value;
    } else {
      document.ship.shippingName.value = "";
      document.ship.shippingTel.value = "";
      document.ship.shippingAdr.value = "";
    }
  });
  submit.addEventListener("click", (e) => {
    e.preventDefault();
    console.log("submit");
    const allInput = document.querySelectorAll(".input-box");
    let isTrue = true;
    for (const input of allInput) {
      if (input.value.trim() === "") {
        isTrue = false;
        input.focus();
        alert("Please fill in the blanks !");
        break;
      }
    }
    if (isTrue) {
      if (confirm("Did you enter the correct info?")) {
        console.log("submit available");
        document.ship.submit();
      } else {
        console.log("submit not available");
      }
    }
  });
});
