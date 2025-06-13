// defining variables 
const addNoteBtn = document.querySelector('.Add-Note-Btn');
const addNoteModal = document.querySelector('.addNoteModal');
const closeNoteBtn = document.querySelector('.addNoteModal i');
const overlay = document.querySelector('.overlay')

// Add Note Popup Modal 
addNoteBtn.addEventListener('click', function () {
    addNoteModal.classList.add('show');
    overlay.classList.add('show')
})
//Close Popup Modal
closeNoteBtn.addEventListener('click', function () {
    addNoteModal.classList.remove('show')
    overlay.classList.remove('show')
})