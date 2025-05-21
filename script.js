const modal = document.getElementById("modal");
const modalImg = document.getElementById("modal-img");
const closeBtn = document.getElementById("close");
const nextBtn = document.getElementById("next");
const prevBtn = document.getElementById("prev");
const galleryImgs = document.querySelectorAll(".gallery-grid img");

let currentIndex = 0;

function openModal(index) {
  modal.style.display = "flex";
  modalImg.src = galleryImgs[index].src;
  currentIndex = index;
}

closeBtn.onclick = () => modal.style.display = "none";

nextBtn.onclick = () => {
  currentIndex = (currentIndex + 1) % galleryImgs.length;
  modalImg.src = galleryImgs[currentIndex].src;
};

prevBtn.onclick = () => {
  currentIndex = (currentIndex - 1 + galleryImgs.length) % galleryImgs.length;
  modalImg.src = galleryImgs[currentIndex].src;
};

galleryImgs.forEach((img, index) => {
  img.addEventListener("click", () => openModal(index));
});

window.addEventListener("click", (e) => {
  if (e.target === modal) modal.style.display = "none";
});
