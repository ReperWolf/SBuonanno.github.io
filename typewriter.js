var characterName = 'Sierra Buonanno';
var pos = 0;
var speed = 50;

let typeWriter = () => {
   let innerHTML = characterName.substring(0, pos);
   document.getElementById("character-name").innerHTML = innerHTML;

   if (pos < characterName.length){
        pos++;
        setTimeout(typeWriter, 300);
   }
};

window.addEventListener('load', typeWriter);
