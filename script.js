// defining variables 
const addNoteBtn = document.querySelector('.Add-Note-Btn');
const addNoteModal = document.querySelector('.addNoteModal');
const closeNoteBtn = document.querySelector('.addNoteModal i');
const overlay = document.querySelector('.overlay')
const saveNoteBtn = document.querySelector('.saveNoteBtn')

// Add Note Popup Modal 
addNoteBtn.addEventListener('click', function () {
    addNoteModal.classList.add('show');
    overlay.classList.add('show')
})
//Close Popup Modal
function closeNoteModal() {
    addNoteModal.classList.remove('show')
    overlay.classList.remove('show')
}


saveNoteBtn.addEventListener('click', function () {
    const Title = document.getElementById('title-field').value
    const Description = document.getElementById('description-field').value

    if (Title === "" || Description === "") {
        alert("Fill Field")
        return;
    }
    const NoteDiv = document.createElement('div')
    NoteDiv.classList.add('note')

    const NoteTitle = document.createElement('h2')
    const NoteDescription = document.createElement('p')

    NoteDescription.innerHTML = Description;
    NoteTitle.innerHTML = Title;

    NoteDiv.appendChild(NoteTitle)
    NoteDiv.appendChild(NoteDescription)
    document.querySelector('.notes-section').appendChild(NoteDiv);

    Title.value = '';
    Description.value = '';

    closeNoteModal();
})