document.addEventListener("DOMContentLoaded", function() {


    // define variables
    const MainDiv = document.querySelector('.dvMain');
    const MainButton = document.querySelector('.btnMain');
    const grid = document.querySelector(".grid");
    const music = document.querySelector("#music");
    const ddMusic = document.querySelector("#music-select");
 
 
    // let arrDarkColumns = [];
    // let arrLightColumns = [];
 
 
    // create game grid
    fnCreateGrid(348);
 
 
 
 
 //creates a grid that alternates colors every 3 squares
 function fnCreateGrid(squares) {
    for(let i = 0; i < squares/6; i++) {
        for(let j = 0; j < 3; j++) {
            let gridSquare = document.createElement("div");
            gridSquare.classList.add("darkgridSquare");
            if(j===0 && (i===0||i===1)){
                gridSquare.classList.add("darkMiddle")
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
            // gridSquare.textContent = i;
            grid.appendChild(gridSquare);
        }
    }
 }
 
 
 // function to create music note and start dropping
 function  fnCreateNote(){
    const musicNote = document.createElement("div")
 
 
    //pick a random coumn based on the darkMiddle/lightMiddle class and create a new note to append there
    const musicColumn = document.querySelector(".darkMiddle")
   
   
    musicNote.classList.add("musicNote", "moveNote")
    musicColumn.appendChild(musicNote)
 
 
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
 
 
 
 
 window.addEventListener('keydown', function(e) {
    //console.log(e.code + ' was pressed');
 
 
 
 
    fnListenForKeyPress(e.code);
 });
 
 
 
 
 
 
 
 
 // a function to listen for a click on a button
 function fnListenForClick(){
    console.log('Button was clicked');
 
 
    let musicSelected = ddMusic.value
 
 
    music.src = musicSelected;
    music.play();
 
 
    fnCreateNote();
 
 
    setInterval(() => {
        fnCreateNote();
    }, 5000);
 
 
 
 
    //play selected song
 
 
 
 
 
 
 
 
    // add an event listener to the button
 
 
 
 
    // write a text to the console when the button is clicked
 
 
 
 
 }
 
 
 
 
 
 
 
 
 
 
 
 
 // a function to listen for a key press
 function fnListenForKeyPress(keyPressed){
    switch (keyPressed) {
        case 'KeyA':
            console.log('A was pressed');
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
        case 'Space':
            console.log('Spacebar was pressed');
            fnCreateNote();
 
 
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
 