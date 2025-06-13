// defining variables 
const addNoteBtn = document.querySelector('.Add-Note-Btn');
const addNoteModal = document.querySelector('.addNoteModal');
const closeNoteBtn = document.querySelector('.addNoteModal i');

// Add Note Popup Modal 
addNoteBtn.addEventListener('click', function () {
    addNoteModal.classList.add('show')
})
//Close Popup Modal
closeNoteBtn.addEventListener('click', function () {
    addNoteModal.classList.remove('show')
})