//Cette fonction exécute le code à l'intérieur de la fonction fléchée toutes les 1000 millisecondes (soit toutes les secondes),
//assurant ainsi que l'horloge est mise à jour en temps réel.
setInterval(()=>{
//Cela sélectionne l'élément avec l'ID time qui est à l'intérieur d'un élément avec la classe display. 
//Cet élément est celui qui affiche l'heure dans l'horloge.
    const time = document.querySelector(".display #time");
//Crée un nouvel objet Date qui représente l'instant actuel.
    let date = new Date();
//Ces lignes récupèrent respectivement l'heure, 
//les minutes et les secondes actuelles à partir de l'objet Date.
    let hours = date.getHours();
    let minutes = date.getMinutes();
    let seconds = date.getSeconds();
//Initialise la variable day_night à "AM" (matin).
    let day_night = "AM";
//Vérifie si l'heure est supérieure à 12. 
//Si c'est le cas, cela signifie que c'est l'après-midi ou le soir (PM). 
//Donc, la variable day_night est mise à "PM" et l'heure est ajustée pour être affichée au format 12 heures.
    if(hours > 12){
      day_night = "PM";
      hours = hours - 12;
    }
//Les blocs if suivants ajoutent un zéro devant les chiffres si les minutes,
//les secondes ou les heures sont inférieurs à 10, 
//afin de maintenir une présentation cohérente de l'heure (par exemple, "09" au lieu de "9").
    if(seconds < 10){
      seconds = "0" + seconds;
    }
    if(minutes < 10){
      minutes = "0" + minutes;
    }
    if(hours < 10){
      hours = "0" + hours;
    }
//Cette ligne met à jour le contenu textuel de l'élément time avec l'heure formatée.
    time.textContent = hours + ":" + minutes + ":" + seconds + " "+ day_night;
  });