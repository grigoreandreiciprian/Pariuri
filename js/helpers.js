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

    team.cota=randomCota();
    team.scor=randomScor();
    stanga.innerHTML=`
     <h1 class="team2">${team.name}</h1>
        <img src="${team.url}">
        <p>${team.cota}</p>
       
    </div>`
}
//functie                                                            echipa din dreapata

function setRightTeam(team){
    let dreapta=document.querySelector(".echipa2")

    team.cota=randomCota();
    team.scor=randomScor();
    dreapta.innerHTML=`
    <h1 class="team2">${team.name}</h1>
    <img src="${team.url}">
    <p>${team.cota}</p>
   `
}

//functie ce genereaza o cota random

//functie ce genreaza  numarul de goluri random



function choseTeams(){

    let team1=prompt("Introduceti prima echipa");

    let team2=prompt("Introduceti a doua echipa");

   echipa1=echipa(team1);
   echipa2=echipa(team2);

   setLeftTeam(echipa1)

   setRightTeam(echipa2)


   return [echipa1,echipa2];
}

function randomCota(){
    cota=(Math.random()*3+1).toFixed(2)
    return cota
}

function randomScor(){
    scor=Math.floor(Math.random()*5+1)
    return scor
}




function pariu(team1 ,team2){

   let obj={

        numele:"",
        sumaPariata:0,
        cota:0,
        sumaCastigata:0
   }

   let scor1=team1.scor

   let scor2=team2.scor


   obj.numele=prompt("Introduceti numele echipei pe care pariati");

   obj.sumaPariata=prompt("Ce suma doriti sa pariati ?");

  if(obj.numele==team1.name){
      obj.cota=team1.cota

      if(scor1>scor2){
          obj.sumaCastigata= obj.sumaPariata * obj.cota
      }
  }else if(obj.numele==team2.name){
      obj.cota=team2.cota
      obj.sumaCastigata= obj.sumaPariata * obj.cota
  }



  return obj
}


function setHome(){

    let body=document.querySelector("body");

    body.innerHTML=`
    <div class="title">
        <img src="/images/clover2.jpg" id="minge">
        <h1>Mega Bets </h1>
        <img src="/images/minge2.jpg" id="trifoi">
    </div>


    <section class="main">

        <div class="shadow">

             <div class="text">
                <h1>Welcome to Mega bets !</h1>
                <h2>PREDICTION ON THE GREAT SPORTS.</h2>
                 <p>We're football fanatics and inside our prediction hub you'll find all manner of game prediction, aids and insights on everything the game has to offer.</p>
                <button class="bet">Start bet!</button>
            </div>  
        </div>
    </section>
    
    `

    let btn=document.querySelector(".bet");

    btn.addEventListener('click',()=>{

        play();
    })
}

function  play(){

    let body=document.querySelector("body")


    body.innerHTML=`
    
    
    <div class="main">
    <div class="shadow">



<div class="echipe">
    <div class="echipa echipa1">
        <p>0.50</p>
        <img src="/images/dinamo.png" class="sigla1">
        <h1 class="team1">Numele echipei</h1>
        <div class="scor"></div>

    </div>

<div class="middle">
    <h1>FRI 09 OCT 2019</h1>
    <h2>09:00 AM</h2>
    
    <div class="design">
        <div class="line"></div>
        <div>
            <p class="vs">VS</p>
        </div>
        <div class="line"></div>
    </div>

    <button class="bet2">Bet Now !</button>
</div>


<div class="echipa echipa2">
    <p>0.50</p>
    <img src="/images/dinamo.png" class="sigla1">
    <h1 class="team1">Numele echipei</h1>
    <div class="scor"></div>
</div>
</div>
</div>
</div>
    
    
    `
    let teams=choseTeams();


  let btn2=document.querySelector(".bet2")

  btn2.addEventListener('click',()=>{
    

            sfarsit(teams);

  })

   
}


function sfarsit(teams){

   let solutie=pariu(teams[0],teams[1]);
   console.log(solutie)

    let body=document.querySelector("body")


    



    body.innerHTML=`
    <div class="main">
    <div class="shadow">

<div class="castig">
   <div class="pariu">
       <!-- <h1>You bet on</h1> -->
       <div class="echipa team">
            <img src="${teams[0].url}">
            <h1 class="nume">${teams[0].name}</h1>
            <div class="scor">${teams[0].scor}</div>
       </div>




       <div class="echipa team">
           <img src="${teams[1].url}">
           <h1 class="nume">${teams[1].name}</h1>
           <div class="scor">${teams[1].scor}</div>
      </div>

   </div>
   </div>

   

   <div class="suma">
       <div class="cutiuta">
           <h1>The sum you bet was</h1>
           <h2>${solutie.sumaPariata} lei</h2>
       </div>
   </div>

   <div class="suma">
       <div class="cutiuta">
           <h1>The sum you won is</h1>
           <h2>${solutie.sumaCastigata} lei</h2>
       </div>
   </div>

   <button id="reset">Reset bet</button>
</div>
</div>
</div>
    `

    let btn3=document.querySelector("#reset")

    btn3.addEventListener('click',()=>{
        setHome()
    })
}








