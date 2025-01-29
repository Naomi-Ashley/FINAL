// JavaScript Document
console.log("hi");

var MenuButton = document.querySelector("header nav button");
var Menu = document.querySelector("main > ul");
var headerItem = document.querySelector('header');
var likeButton = document.querySelector('main > article section button:nth-of-type(2)')
var dressItem = document.querySelector('main section:nth-of-type(1) ul li:nth-of-type(1) img')
var dressText = document.querySelector('main section:nth-of-type(1) ul li:nth-of-type(1) h2')

//Jurk geholden door Ali Mahmed 4de jaarsstudent
if(dressText){
dressText.textContent = 'RAYNE DRESS'
}

MenuButton.onclick = MenuOpen;
function MenuOpen() {
    console.log("hi");
    Menu.classList.toggle("open");
    headerItem.classList.toggle('active');
} 

//Like knop v/ de lesstof
if(likeButton){

likeButton.addEventListener('click', function () {
    likeButton.classList.toggle('liked');
});

}

//Geluid v/ oude CSS map, geholpen door Sanne 't hoofd
var audio = new Audio ("./audio/Guitar90s.mp3")
audio.loop = true

var button = document.querySelector ("#button")

if(button){
button.addEventListener ("click", ()=> {
    
    if (audio.duration > 0 && !audio.paused) {
        audio.pause() 
    }

    else {console.log("test2")
        audio.play()}
})
}

//Jurk oranje
if(dressItem){
    dressItem.addEventListener('click', ()=>{
        dressItem.classList.toggle('other-color')
        dressText.textContent = "RAYNE ORANGE DRESS"
    if(!dressItem.classList.contains('other-color')){
        dressText.textContent = "RAYNE DRESS"
    }
    })
}