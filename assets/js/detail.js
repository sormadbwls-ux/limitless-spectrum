document.addEventListener("DOMContentLoaded", () => {

    /* ========================================
       Image Modal
    ======================================== */

    const modal = document.getElementById("imageModal");
    const modalImage = document.getElementById("modalImage");
    const modalClose = document.getElementById("imageModalClose");

    const detailImages = document.querySelectorAll(
        ".detail-image, .detail-page-images img"
    );

    if (modal && modalImage) {

        detailImages.forEach(image => {

            image.addEventListener("click", () => {

                modalImage.src = image.src;
                modalImage.alt = image.alt || "";

                modal.classList.add("active");
                document.body.style.overflow = "hidden";

            });

        });

        if (modalClose) {

            modalClose.addEventListener("click", () => {
                closeModal();
            });

        }

        modal.addEventListener("click", event => {

            if (event.target === modal) {
                closeModal();
            }

        });

        document.addEventListener("keydown", event => {

            if (event.key === "Escape") {
                closeModal();
            }

        });

        function closeModal() {

            modal.classList.remove("active");
            modalImage.src = "";
            document.body.style.overflow = "";

        }

    }


    /* ========================================
       TOP Button
    ======================================== */

    const topButton = document.querySelector(".top-btn");

    if (topButton) {

        topButton.addEventListener("click", () => {

            window.scrollTo({
                top: 0,
                behavior: "smooth"
            });

        });

    }

});