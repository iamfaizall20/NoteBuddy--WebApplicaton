const addNoteBtn = document.querySelector('.Add-Note-Btn')
const addNoteModal = document.querySelector('.addNoteModal')

addNoteBtn.addEventListener('click', function () {
    addNoteModal.classList.toggle('show')
})