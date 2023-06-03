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
        const pointsRowPosition = 40;
        for(let i = 0; i < squares/6; i++) {
            for(let j = 0; j < 3; j++) {
                let gridSquare = document.createElement("div");
                gridSquare.classList.add("darkgridSquare");
                if(j===0 && (i===0||i===1)){
                    gridSquare.classList.add("darkMiddle")
                }

                //add class for rows that generate points
                if(i>= pointsRowPosition){
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
                if(i>= pointsRowPosition){
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
    const randomColumn = Math.floor(Math.random() * arrAllColumns.length)

    //get the column from the array
    const column = arrAllColumns[randomColumn]

    //add a class to the column based on the randomColumn variable
    musicNote.classList.add(`note${randomColumn + 1}`)

    //add points attribute to the note
    musicNote.setAttribute("points", points)

    musicNote.classList.add("musicNote", "moveNote")
    column.appendChild(musicNote)
 
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
 
    //create a new note every 1 second
    musicNoteInterval = 
        setInterval(() => {
            //create a random number of notes between 1 and 3
            let randomNum = Math.floor(Math.random() * 2) + 1;
            for(let i = 0; i < randomNum; i++){

                // wait 1 second before creating the next note
                setTimeout(() => {
                    fnCreateNote();
                }, 2000);

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
    const pointRowLine = document.querySelectorAll(".pointRow")[0].getBoundingClientRect().top

    //get the first music note in the array
    const musicNote = arrMusicNotes[0]

    
    //get current y position of music note and return the class list of the closest div
    const currentTop = musicNote.getBoundingClientRect().top

    // console.log(currentTop + " > " + pointRowLine)
    
    if( currentTop >= pointRowLine - 10){
        //switch statement to check which key was pressed
        switch (keyPressed) {
            case 'KeyA':
                if(musicNote.classList.contains("note1")){
                    currentScore += parseInt(musicNote.getAttribute("points"))
                    score.textContent = currentScore
                    musicNote.remove();
                }
                // console.log('A was pressed ' + musicNote.classList);
                break;
            case 'KeyS':
                if(musicNote.classList.contains("note3")){
                    currentScore += parseInt(musicNote.getAttribute("points"))
                    score.textContent = currentScore
                    musicNote.remove();
                }
                // console.log('S was pressed ' + musicNote.classList);
                break;
            case 'KeyD':
                if(musicNote.classList.contains("note2")){
                    currentScore += parseInt(musicNote.getAttribute("points"))
                    score.textContent = currentScore
                    musicNote.remove();
                }                
                // console.log('D was pressed ' + musicNote.classList);
                break;
            case 'KeyF':
                if(musicNote.classList.contains("note4")){
                    currentScore += parseInt(musicNote.getAttribute("points"))
                    score.textContent = currentScore
                    musicNote.remove();
                }
                // console.log('F was pressed ' + musicNote.classList);
                break;

            // case 'Space':
            //     console.log('Spacebar was pressed');
            //     fnCreateNote();
            //     break;
            // default:    
            //     setInterval(() => {
            //         fnCreateNote();
            //     }, 5000);
            //     break;
        }
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

// AS MUSIC NOTES FALL DOWN SCORE GOES UP DEPPEDING IF YOU HIT THEM IN THERE COLLUM AT THE RIGHT TIME

//AFTER SONG ENDS SCORE APPERS IN BIG FONT AND MUSIC NOTES STOP FALLING

//MUSIC NOTES RESET

//PICK NEW SONG AND PLAY AGAIN

 
 
 
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
 