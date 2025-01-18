let text = document.getElementById('hello');
let darkMode = document.getElementById('dark_mode');


function toggleDarkmode(){
if(document.body.classList.toggle('dark-mode')){
}

}      
darkMode.addEventListener('onclick', toggleDarkmode);  