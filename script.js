///////////////////////////////////////////////////////////
// Thiết lập năm tự động
const yearEl = document.querySelector(".year");
const currentYear = new Date().getFullYear();
console.log(currentYear);
yearEl.textContent = currentYear;

///////////////////////////////////////////////////////////
// Nút trở lại đầu trang
const backToTopBtn = document.getElementById("back-to-top-btn");

window.addEventListener("scroll", () => {
  if (window.scrollY > 300) {
    backToTopBtn.style.display = "block";
  } else {
    backToTopBtn.style.display = "none";
  }
});

backToTopBtn.addEventListener("click", () => {
  window.scrollTo({
    top: 0,
    behavior: "smooth", // Thêm hiệu ứng cuộn mượt
  });
});
