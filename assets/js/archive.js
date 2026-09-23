document.addEventListener("DOMContentLoaded", () => {

    const modal = document.getElementById("archiveModal");
    const modalImages = document.getElementById("archiveModalImages");
    const modalType = document.getElementById("archiveModalType");
    const modalTitle = document.getElementById("archiveModalTitle");
    const modalDescription = document.getElementById("archiveModalDescription");
    const modalLink = document.getElementById("archiveModalLink");
    const modalClose = document.getElementById("archiveModalClose");

    const cards = document.querySelectorAll(".archive-card-button");


    /* 카드 클릭 */

    cards.forEach(card => {

        card.addEventListener("click", () => {

            /* 이미지 데이터 */
            const images = JSON.parse(
                card.getAttribute("data-images")
            );

            /* 기존 이미지 제거 */
            modalImages.innerHTML = "";


            /* 이미지 생성 */
            images.forEach(imageSrc => {

                const img = document.createElement("img");

                img.src = imageSrc;
                img.alt = card.getAttribute("data-title") || "";

                modalImages.appendChild(img);

            });


            /* 정보 */
            modalType.textContent =
                card.getAttribute("data-type") || "";

            modalTitle.textContent =
                card.getAttribute("data-title") || "";

            modalDescription.textContent =
                card.getAttribute("data-description") || "";


            /* 외부 링크 */
            const link = card.getAttribute("data-link");

            if (link) {

                modalLink.href = link;
                modalLink.style.display = "inline-flex";

            } else {

                modalLink.removeAttribute("href");
                modalLink.style.display = "none";

            }


            /* 모달 열기 */
            modal.classList.add("active");

            modal.setAttribute("aria-hidden", "false");

            document.body.style.overflow = "hidden";

        });

    });


    /* 닫기 버튼 */

    modalClose.addEventListener("click", closeModal);


    /* 모달 바깥쪽 클릭 */

    modal.addEventListener("click", event => {

        if (event.target === modal) {
            closeModal();
        }

    });


    /* ESC 키 */

    document.addEventListener("keydown", event => {

        if (event.key === "Escape") {
            closeModal();
        }

    });


    /* 모달 닫기 */

    function closeModal() {

        modal.classList.remove("active");

        modal.setAttribute("aria-hidden", "true");

        document.body.style.overflow = "";

    }

});