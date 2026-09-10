const modal = document.getElementById("archiveModal");

const modalImages = document.getElementById("archiveModalImages");

const modalTitle = document.getElementById("archiveModalTitle");

const modalType = document.getElementById("archiveModalType");

const modalDescription = document.getElementById("archiveModalDescription");

const modalLink = document.getElementById("archiveModalLink");

const modalClose = document.getElementById("archiveModalClose");

const cards = document.querySelectorAll(".archive-card-button");


/* =========================
   OPEN MODAL
========================= */

cards.forEach((card) => {

    card.addEventListener("click", () => {

const images = JSON.parse(card.dataset.images || "[]");

        const title = card.dataset.title;

        const type = card.dataset.type;

        const description = card.dataset.description;

        const link = card.dataset.link;


        /* 이미지 초기화 */

        modalImages.innerHTML = "";


        /* 이미지 생성 */

        images.forEach((imageSrc) => {

            const image = document.createElement("img");

            image.src = imageSrc;

            image.alt = title;

            modalImages.appendChild(image);

        });


        /* 정보 표시 */

        modalTitle.textContent = title;

        modalType.textContent = type;

        modalDescription.textContent = description || "";


        /* 링크 */

        if (link) {

            modalLink.href = link;

            modalLink.style.display = "inline-flex";

        } else {

            modalLink.style.display = "none";

        }


        /* 모달 열기 */

        modal.classList.add("active");

        modal.setAttribute("aria-hidden", "false");

        document.body.style.overflow = "hidden";

    });

});


/* =========================
   CLOSE MODAL
========================= */

function closeModal() {

    modal.classList.remove("active");

    modal.setAttribute("aria-hidden", "true");

    modalImages.innerHTML = "";

    document.body.style.overflow = "";

}


modalClose.addEventListener("click", closeModal);


/* =========================
   CLICK OUTSIDE
========================= */

modal.addEventListener("click", (event) => {

    if (event.target === modal) {

        closeModal();

    }

});


/* =========================
   ESC
========================= */

document.addEventListener("keydown", (event) => {

    if (event.key === "Escape") {

        closeModal();

    }

});