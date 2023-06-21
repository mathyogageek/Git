console.log("Ready----");

// VARIABLES /////
//Variables (aka Objects) for the <form>
let elFmSaveAlbum =document.getElementById("fmSaveAlbum");
let elFmShowAlbum =document.getElementById("fmShowAlbum");
// Variable for the placeholder<div>
let elDvShowAlbum =document.getElementById("divShowAlbum");

// Create an Array to store data, and make it empty
let arrAlbums =[];
// Object Constructor Notation Variable for an Album
function Album(artist, name, year, notes){
    //Map the external data to the internal processing
    this.artist =artist;
    this.name =name;
    this.year=year;
    this.notes=notes;
    // Define a Method (a command) to calculate how oled the album is
    this.getAge=function(){
        // Check the current year
        let currentYear = new Date();
        // subtract the album year from the urrent year to show on screen eventually

        return currentYear.getFullYear()-this.year;
    }  // End .getAge()

} // End Album 
function Movie(name, director , runtime, year, action){} //End Movie

// FUNCTION!/////////////////
// Get the Album data
function fnSaveAlbum(event){
    event.preventDefault();
    console.log("fnSaveAlbum(event) is running...");
    // Read the values of the <input>
    let valInAlbumArtist = document. getElementById("inAlbumArtist").value;
    let valInAlbumName = document.getElementById("inAlbumTitle").value;
    let valInAlbumYear = document.getElementById("inAlbumYear").value;
    let valInAlbumNote =document.getElementById("inAlbumNotes").value;

    console.log(valInAlbumArtist, valInAlbumName, valInAlbumYear, valInAlbumNote);

    // Bundle all the 4 bits of data into one Album (object)
let tmpAlbum = new Album(valInAlbumArtist, valInAlbumName, valInAlbumYear, valInAlbumNote);
console.log(tmpAlbum);

// Add the newest album to the Array ( the CD WALLET; database)
arrAlbums.push(tmpAlbum);
console.log(arrAlbums, arrAlbums.length);
//Pop-up to show saved
window.alert("Save album!");

// Rest the form to add a new album
elFmSaveAlbum.reset();
} // END FnSaveAlbum(event)


function fnShowAlbum(event){ 
    event.preventDefault();
    console.log("fnShowAlbum(event) is running...");

    //First, check it there are any albums saved before proceeding
    // Using an IF -Else Satament , check if emepyt Array (Empty Array Collection)
    if (!arrAlbums.length){
        //Array is emepty ,say a message
        window.alert("Please save an album first! ")
    }else{
        // Or Else, there is at least 1 album,show it
        console.log("Current albums: " + arrAlbums.length )

        // First randomly pick an Album
        let randomAlbum = Math.floor(Math.random()* arrAlbums.length);

        // On -Screen, show the album
        elDvShowAlbum.innerHTML= "<p><strong>Album Artist:</strong>" + arrAlbums[randomAlbum].artist +
         "<br><strong> Album Name : </strong>" + arrAlbums[randomAlbum].name +
         "<br><strong> Album Year : </strong>" + arrAlbums[randomAlbum].year +
         "<br><strong> Album Notes : </strong>" + arrAlbums[randomAlbum].notes +
         "<br><strong> Album Age : </strong>" + arrAlbums[randomAlbum].getAge() +"</p>"
        
        
        // End IF--Else
    }
}// END FnShowAlbum(event)
// EVENT LISTENERS ////////////
// Listen for clickng Submit on the Save Form
elFmSaveAlbum.addEventListener("submit", function(event){fnSaveAlbum(event);});
// Listen for clicking the Show an album button
elFmShowAlbum.addEventListener("submit", function(event){fnShowAlbum(event);});