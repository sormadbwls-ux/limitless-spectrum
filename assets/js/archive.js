const modal = document.getElementById("archiveModal");
const modalImage = document.getElementById("archiveModalImage");
const modalTitle = document.getElementById("archiveModalTitle");
const modalType = document.getElementById("archiveModalType");
const modalDescription = document.getElementById("archiveModalDescription");
const modalLink = document.getElementById("archiveModalLink");
const modalClose = document.getElementById("archiveModalClose");
const cards = document.querySelectorAll(".archive-card-button");

cards.forEach((card) => {
    card.addEventListener("click", () => {

        const image = card.dataset.image;
        const image2 = card.dataset.image2;
        const title = card.dataset.title;
        const type = card.dataset.type;
        const description = card.dataset.description;
        const link = card.dataset.link;

        modalImage.src = image;
        modalImage.alt = title;

        modalTitle.textContent = title;
        modalType.textContent = type;
        modalDescription.textContent = description || "";

        if (link) {
            modalLink.href = link;
            modalLink.style.display = "inline-flex";
        } else {
            modalLink.style.display = "none";
        }

        // 두 번째 이미지가 있으면 추가
        let secondImage = document.getElementById("archiveModalImage2");

        if (image2) {
            if (!secondImage) {
                secondImage = document.createElement("img");
                secondImage.id = "archiveModalImage2";
                secondImage.className = "archive-modal-image";
                modal.querySelector(".archive-modal-inner").prepend(secondImage);
            }

            secondImage.src = image2;
            secondImage.alt = title + " 추가 이미지";
            secondImage.style.display = "block";

        } else if (secondImage) {
            secondImage.style.display = "none";
        }

        modal.classList.add("active");
        modal.setAttribute("aria-hidden", "false");
        document.body.style.overflow = "hidden";
    });
});

function closeModal() {
    modal.classList.remove("active");
    modal.setAttribute("aria-hidden", "true");

    modalImage.src = "";

    const secondImage = document.getElementById("archiveModalImage2");

    if (secondImage) {
        secondImage.src = "";
        secondImage.style.display = "none";
    }

    document.body.style.overflow = "";
}

modalClose.addEventListener("click", closeModal);

modal.addEventListener("click", (event) => {
    if (event.target === modal) {
        closeModal();
    }
});

document.addEventListener("keydown", (event) => {
    if (event.key === "Escape") {
        closeModal();
    }
});