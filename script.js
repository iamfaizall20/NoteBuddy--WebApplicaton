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

//Event to Save Note
saveNoteBtn.addEventListener('click', function () {
    const Title = document.getElementById('title-field').value
    const Description = document.getElementById('description-field').value

    //Edge Case alert if Fields are Empty
    if (Title === "" || Description === "") {
        alert("Fill Field")
        return;
    }

    const NoteDiv = document.createElement('div') //Create a Div with 'note' class name
    NoteDiv.classList.add('note')

    //Creates Tags Elements in Note Class div
    const NoteTitle = document.createElement('h2')
    const NoteDescription = document.createElement('p')
    const NoteOptions = document.createElement('i')

    NoteOptions.className = 'ri-more-2-line' //Options icon

    //Filling Input Data into Notes 
    NoteDescription.innerHTML = Description;
    NoteTitle.innerHTML = Title;

    //Adding Childs to the Parent, NoteDiv is a 'note' class 
    NoteDiv.appendChild(NoteTitle)
    NoteDiv.appendChild(NoteDescription)
    NoteDiv.appendChild(NoteOptions)
    document.querySelector('.notes-section').appendChild(NoteDiv);

    //Clearing input fields
    document.getElementById('title-field').value = '';
    document.getElementById('description-field').value = '';

    //calling function to close the popup
    closeNoteModal();
})