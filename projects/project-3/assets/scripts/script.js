const cookieBanner = document.querySelector(".cookie-banner");
const acceptCookie = document.querySelector(".accept");
const rejectCookie = document.querySelector(".reject");

acceptCookie.addEventListener("click", () => {
  cookieBanner.style.display = "none";
});

rejectCookie.addEventListener("click", () => {
  cookieBanner.style.display = "none";
});
