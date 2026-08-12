const topBtn = document.querySelector(".top-btn");

if (topBtn) {
    topBtn.addEventListener("click", () => {
        window.scrollTo({
            top: 0,
            behavior: "smooth"
        });
    });
}


// 이미지 클릭시 미리보기 기능
const workImage = document.querySelector(".detail-image");
const imageModal = document.querySelector("#imageModal");
const modalImage = document.querySelector("#modalImage");
const imageModalClose = document.querySelector("#imageModalClose");

if (workImage && imageModal && modalImage && imageModalClose) {

    workImage.addEventListener("click", () => {
        modalImage.src = workImage.src;
        imageModal.classList.add("active");
        document.body.style.overflow = "hidden";
    });

    imageModalClose.addEventListener("click", () => {
        imageModal.classList.remove("active");
        document.body.style.overflow = "";
    });

 imageModal.addEventListener("click", () => {
    imageModal.classList.remove("active");
    document.body.style.overflow = "";
});

}