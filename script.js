
const noteSounds = {
    "C": "notes/C.mp3",
    "Db": "notes/Db.mp3",       
    "D": "notes/D.mp3",
    "Eb": "notes/Eb.mp3",
    "E": "notes/E.mp3",
    "F": "notes/F.mp3",
    "Gb": "notes/Gb.mp3",
    "G": "notes/G.mp3",
    "Ab": "notes/Ab.mp3",
    "A": "notes/A.mp3",
    "Bb": "notes/Bb.mp3",
    "B": "notes/B.mp3"
    
  };
  
  const keys = document.querySelectorAll(".key");
  const noteDisplay = document.getElementById("note-display");
  
  let currentNote = "";
  
  //play the note sound
  function playNoteSound(note) {
    const audio = new Audio(noteSounds[note]);
    audio.play();
  }
  
  //generate a random note
  function generateRandomNote() {
    const notes = ['C', 'Db', 'D', 'Eb', 'E', 'F', 'Gb', 'G', 'Ab', 'A', 'Bb', 'B'];
    currentNote = notes[Math.floor(Math.random() * notes.length)];
    noteDisplay.textContent = `Match the note: ${currentNote}`;
    playNoteSound(currentNote);
  }
  
  // Event listener
  keys.forEach(key => {
    key.addEventListener("click", () => {
      const clickedNote = key.getAttribute("data-note");
      if (clickedNote === currentNote) {
        noteDisplay.textContent = "Correct! Well done!";
      } else {
        noteDisplay.textContent = "Oops! Try again.";
      }
      setTimeout(generateRandomNote, 1000);
    });
  });
  
  // Start the game
  generateRandomNote();