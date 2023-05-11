document.addEventListener("DOMContentLoaded", function() {

    // DEFINE VARIABLES
        const MainDiv = document.querySelector('.dvMain');
        const MainButton = document.querySelector('#startButton');
        const PauseButton = document.querySelector('#pauseButton');
        const score = document.querySelector('.scoreBox');
        const grid = document.querySelector(".grid");
        const music = document.querySelector("#music");
        const ddMusic = document.querySelector("#music-select");

        //speed of music
        let musicSpeed = 5;

        //define points for selected song
        let points = 0;

        //reset current score
        let currentScore = 0;

        //create variable for music note interval
        let musicNoteInterval;

 
    // CREATE GAME GRID
    fnCreateGrid(348);
 
 
 
    //A FUNCTION THAT creates a grid that alternates colors every 3 squares
    function fnCreateGrid(squares) {
        for(let i = 0; i < squares/6; i++) {
            for(let j = 0; j < 3; j++) {
                let gridSquare = document.createElement("div");
                gridSquare.classList.add("darkgridSquare");
                if(j===0 && (i===0||i===1)){
                    gridSquare.classList.add("darkMiddle")
                }

                //add class for rows that generate points
                if(i>= 48){
                    gridSquare.classList.add("pointRow")
                }

                // gridSquare.textContent = i;
                grid.appendChild(gridSquare);
            
            }
            for(let k = 0; k < 3; k++) {
                let gridSquare = document.createElement("div");
                gridSquare.classList.add("lightgridSquare");
                if(k===0 && (i===0||i===1)){
                    gridSquare.classList.add("lightMiddle")
                }

                //add class for rows that generate points
                if(i>= 48){
                    gridSquare.classList.add("pointRow")
                }

                // gridSquare.textContent = i;
                grid.appendChild(gridSquare);
            }
        }
    }
    
 
 // function to create music note and start dropping
 function  fnCreateNote(){
    const musicNote = document.createElement("div");

    //get array of darkMiddle/lightMiddle columns
    const arrDarkColumns = document.querySelectorAll(".darkMiddle")
    const arrLightColumns = document.querySelectorAll(".lightMiddle")

    //push array of darkMiddle/lightMiddle columns into a new array
    const arrAllColumns = [...arrDarkColumns, ...arrLightColumns]

    //pick a random column from the new array
    const randomColumn = arrAllColumns[Math.floor(Math.random() * arrAllColumns.length)]

 
 
    //pick a random coumn based on the darkMiddle/lightMiddle class and create a new note to append there
    //const musicColumn = document.querySelector(".lightMiddle")
   
   
    musicNote.classList.add("musicNote", "moveNote")
    randomColumn.appendChild(musicNote)
 
 
 }
 
 
 //remove element when animation completes
 grid.addEventListener('animationend', function(e){
    if (e.target.classList.contains('moveNote')) {
        e.target.remove();
   }
 })
 
 
 // add event listeners
 MainButton.addEventListener('click', function() {
    fnListenForClick();
 });
 
PauseButton.addEventListener('click', function() {

    //activate start button
    MainButton.disabled = false;

    //clear interval
    clearInterval(musicNoteInterval);

    //pause music
    music.pause();
});

 
 window.addEventListener('keydown', function(e) {
    //console.log(e.code + ' was pressed');
 
    fnListenForKeyPress(e.code);
 });
 

 
 
 // a function to listen for a click on a button
 function fnListenForClick(){
    //console.log('Button was clicked');
 
    let musicSelected = ddMusic.value

    //update music speed with the speed attribute of the selected song
    musicSpeed = ddMusic.options[ddMusic.selectedIndex].getAttribute("speed")
 
    //set the points for the selected song
    points = parseInt(ddMusic.options[ddMusic.selectedIndex].getAttribute("points"))

    console.log(points)

    music.src = musicSelected;
    music.play();
 
 
    fnCreateNote();
 
 
    //create a new note every 1 second
    musicNoteInterval = 
        setInterval(() => {
            //create a random number of notes between 1 and 3
            let randomNum = Math.floor(Math.random() * 3) + 1;
            for(let i = 0; i < randomNum; i++){
                //add a class based on the random number
                document.querySelector(".musicNote").classList.add(`note${i+1}`)

                fnCreateNote();
            }
        }, 1000 * musicSpeed);
    
    //prevent button from being clicked again
    MainButton.disabled = true;
 
    //play selected song

 
    // add an event listener to the button
 
 
 
 
    // write a text to the console when the button is clicked
 
 
 
 
 }
 
 
 // a function to listen for a key press
 function fnListenForKeyPress(keyPressed){
    //find the oldest music note in the array of all music notes
    const arrMusicNotes = document.querySelectorAll(".musicNote")

    //get the first music note in the array
    const musicNote = arrMusicNotes[0]

    switch (keyPressed) {
        case 'KeyA':
            console.log('A was pressed');
            // if musicNote has class note1 and pointRow, remove it and update score
            if(musicNote.classList.contains("note1") && musicNote.parentElement.classList.contains("pointRow")){
                console.log("score")
                currentScore += 10;
            }

            console.log(currentScore)
            musicNote.remove();

            break;
        case 'KeyS':
            console.log('S was pressed');
            break;
        case 'KeyD':
            console.log('D was pressed');
            break;
        case 'KeyF':
            console.log('F was pressed');
            break;

        // case 'Space':
        //     console.log('Spacebar was pressed');
        //     fnCreateNote();
 
 
            setInterval(() => {
                fnCreateNote();
            }, 5000);
            break;
        default:
            console.log('Some random Key was pressed');
            break;
    }
 }
 
 
 
 
 // a function to move the tiles down the board
 function fnMoveTilesdown(){}
 //dvMain.appendText('Start Game');
 
 
   
 });
 
 
// SELECT MUSIC FROM DROPDOWN
 
// CLICK START TO START GAME

// MUSIC STARTS PLAYING

// CLICK A S D F TO HIT NOTES IN THE CORRESPONDING COLUMNS

 
 
 
 /*
 const music = document.querySelector('#music');
    const MainDiv = document.querySelector('.divMain');
    const ddMusic = document.querySelector('#music-select');
    const redSquare = document.querySelector('.divSquare');
 
 
    // the queryselector finds values using the id of the element or the class of the element or the tag name of the element or the name of the element
    // when using the id of the element, you have to use the # sign before the id name
    // when using the class of the element, you have to use the . sign before the class name
    // when using the tag name of the element, you have to use the tag name of the element
 
 
    let SelectMusicFile = "";
 
 
    ddMusic.addEventListener('change', function() {
        SelectMusicFile = this.value;
        //assign that value to the source of my audio element
        music.src = SelectMusicFile;
        music.play();
    });
 
 
    music.addEventListener('timeupdate', function() {
        const y = (redSquare.parentNode.offsetHeight - 24) * (this.currentTime / this.duration);
        redSquare.style.top = y + "px";
    });
 
 
    */
 