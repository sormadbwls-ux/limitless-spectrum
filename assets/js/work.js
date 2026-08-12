const snsImages = document.querySelectorAll(".sns-preview-image");

const snsModal = document.querySelector("#snsModal");
const snsModalImage = document.querySelector("#snsModalImage");
const snsModalClose = document.querySelector("#snsModalClose");


snsImages.forEach((image) => {

    image.addEventListener("click", () => {

        snsModalImage.src = image.src;

        snsModal.classList.add("active");

        document.body.style.overflow = "hidden";

    });

});


snsModalClose.addEventListener("click", () => {

    snsModal.classList.remove("active");

    document.body.style.overflow = "";

});


snsModal.addEventListener("click", (e) => {

    if (e.target === snsModal) {

        snsModal.classList.remove("active");

        document.body.style.overflow = "";

    }

});