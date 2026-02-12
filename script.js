const modal = document.getElementById("editModal");
const closeBtn = document.querySelector(".close");
const saveBtn = document.getElementById("saveChanges");
const editButtons = document.querySelectorAll(".btn-edit");

const editName = document.getElementById("editName");
const editCourse = document.getElementById("editCourse");
let currentCard = null;
// Abrir modal
editButtons.forEach(button => {
    button.addEventListener("click", function () {
        currentCard = this.closest(".student-card");

        const name = currentCard.querySelector(".student-name").innerText;
        const course = currentCard.querySelector(".project-name span").innerText;

        editName.value = name;
        editCourse.value = course;

        modal.style.display = "flex";
    });
});

// Fechar modal
closeBtn.addEventListener("click", () => {
    modal.style.display = "none";
});

document.addEventListener('DOMContentLoaded', () => {
    const searchInput = document.getElementById('searchInput');
    const studentCards = document.querySelectorAll('.student-card');

    searchInput.addEventListener('input', (e) => {
        const searchTerm = e.target.value.toLowerCase();

        studentCards.forEach(card => {
            // Pega o nome do aluno dentro do card atual
            const studentName = card.querySelector('.student-name').textContent.toLowerCase();

            // Verifica se o termo pesquisado está contido no nome
            if (studentName.includes(searchTerm)) {
                card.classList.remove('hidden');
            } else {
                card.classList.add('hidden');
            }
        });
    });
});