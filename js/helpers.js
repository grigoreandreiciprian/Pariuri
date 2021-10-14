//functie ce primeste ca parametru numele echipei si returneaza  un obiect


function echipa(team){

  for(let i=0;i<teams.length;i++){
     
       if(teams[i].name==team){

        return teams[i];
       }
  }

  return  null;


}

//functie ce primeste ca parametru un obiect de tip echipa si seteaza echipa din stanga


function setLeftTeam(team){
    let stanga=document.querySelector(".echipa1")
    stanga.innerHTML=`
     <h1 class="team2">${team.name}</h1>
        <img src="${team.url}">
        <p>${team.cota}</p>
        <div class="scor"></div>
    </div>`
}
//functie                                                            echipa din dreapata

function setRightTeam(team){
    let dreapta=document.querySelector(".echipa2")
    dreapta.innerHTML=`
    <h1 class="team2">${team.name}</h1>
    <img src="${team.url}">
    <p>${team.cota}</p>
    <div class="scor"></div>`
}

//functie ce genereaza o cota random

//functie ce genreaza  numarul de goluri random



function choseTeams(){

    let team1=prompt("Introduceti prima echipa")

    let team2=prompt("Introduceti a doua echipa")

   echipe=echipa(team1)
   echipe2=echipa(team2)

   setLeftTeam(echipe)

   setRightTeam(echipe2)
}


function randomCota(){
    cota=(Math.random()*3+1).toFixed(2)
    return cota
}

function randomScor(){
    scor=Math.floor(Math.random()*5+1)
    return scor
}






