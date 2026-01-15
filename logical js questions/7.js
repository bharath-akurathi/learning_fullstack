// The Local Storage Manager: You are working on a note-taking app, 
// and you want to implement a function named saveNoteToLocalStorage 
// that takes a note object and saves it to the browser's 
// local storage.

document.body.innerHTML = `<button>Add Note</button><div class="note"></div>`

function saveNoteToLocalStorage(note) {
    localStorage.setItem("note", note);
}

let note = localStorage.getItem("note")
if (note) {
    document.getElementsByClassName("note")[0].innerHTML = note
}

document.querySelector("button").addEventListener("click", () => {
    let note = prompt("Enter your note")
    saveNoteToLocalStorage(note)
    document.getElementsByClassName("note")[0].append(note)
})