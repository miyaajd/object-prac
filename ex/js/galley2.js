window.addEventListener("load", () => {
  const overlay = document.querySelector(".overlay");
  const thumbBar = document.querySelector(".thumb-bar");
  const mainImg = document.querySelector(".mainImg");
  const images = [
    { src: "pic1.jpg", desc: "Closeup of a human eye" },
    { src: "pic2.jpg", desc: "Rock that looks like a wave" },
    { src: "pic3.jpg", desc: "Purple and white pansies" },
    { src: "pic4.jpg", desc: "Section of wall from a pharoah's tomb" },
    { src: "pic5.jpg", desc: "Large moth on a leaf" },
  ];
  images.forEach((img) => {
    const newImg = document.createElement("img");
    newImg.src = `images/img/${img.src}`;
    newImg.alt = img.dscr;
    thumbBar.oppendChild(newImg);
    newImg.addEventListener("click", function (e) {
      mainImg.src = e.target.src;
      mainImg.alt = e.target.alt;
    });
  });
});
