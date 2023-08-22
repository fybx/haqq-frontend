const loginModal = document.getElementById("loginModal");
const theDeal = document.getElementById("theDeal");

function toggleModal() {
    loginModal.classList.toggle("visible");
    theDeal.classList.toggle("visible");
    document.body.classList.toggle("modal_open");
}