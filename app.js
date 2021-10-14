
function afisare(team){


    for(let i=0;i<team.length;i++){
        console.log(team[i].name);
    }

}

afisare(teams);

function random(){
    return Math.floor(Math.random()*teams.length);
}



function generare(){
    let r=[];
    while(r.length<2){
        let t=random();
        if(r.includes(t)==false){
            r.push(t)
        }
    }
    return r
}


function randomScor(){
    return Math.floor(Math.random()*5+1)
}

function randomCota(){
    return Math.floor(Math.random()*100+1)/10;
}


function pariu(team1,team2){
    bet=prompt("Pe care echipa doriti sa pariati ?")

    if(bet==1){
        alert(` Ati pariat pe ${team1}`)
        bet=team1;
    }else if(bet==2){
        alert(`Ati pariat pe ${team2}`)
        bet=team2
    }else{
        alert("Nu ati pariat pe nici o echipa")
    }
    return bet
}

function castig(team1,team2){

    castig=""

    let scor1=randomScor();
    let scor2=randomScor();

    if(scor1>scor2){
        alert(`${team1} a castigat cu scorul de ${scor1} ${scor2}`)
        castig=team1;
    }else if(scor1<scor2){
        alert(`${team2} a castigat cu scorul de ${scor2} ${scor1}`)
        castig=team2
    }else if(scor1==scor2){
        alert(`Meciul sa terminat la egalitate cu scorul de ${scor1} ${scor2}`)
        castig="egal"
    }

    return castig

}

function win(suma,team1,team2,bets){
     castigg=castig(team1,team2)
     cota=randomCota()
     let castigare=0

     if(bets==castigg){
         castigare=suma*cota;
     }else{
         castigare=0
     }
     alert(`Ati castigat ${castigare} lei`)

     castigare=Math.floor(castigare)

     return castigare
}

function emblema(team1,team2,bets){

    sigla=""

    if(bets==team1){

        sigla=team1;

    }else if(bets==team2){
        sigla=team2
    }

    return sigla
}


let btn=document.querySelector(".btn")

let team1=document.querySelector(".echipa1")

let team2=document.querySelector(".echipa2")

let emblema1=document.querySelector(".sigla1")

let echipaP=document.querySelector(".pariata")

let pariata=document.querySelector(".Bagata")

let castigata=document.querySelector(".Castigata")

let bet=document.querySelector(".pariu")

let emblema2=document.querySelector(".sigla2")
btn.addEventListener("click", ()=>{

    let echipe=generare()

     let echipa1=teams[echipe[0]];

     let echipa2=teams[echipe[1]];

     let suma=prompt("Ce suma ati dorii sa pariati(lei) ?")

     let bets=pariu(echipa1.name,echipa2.name)

     let sigla=emblema(echipa1.url,echipa2.url,bets)

     console.log(sigla)


     let winnings=win(suma,echipa1.name,echipa2.name,bets)

     scor1=randomScor();

     scor2=randomScor();

     cota1=randomCota();

     cota2=randomCota();



    team1.innerHTML=`
    <div class="echipa">
        <h1 class="team1">${echipa1.name}</h1>
        <img src='${echipa1.url}'class="sigla1">
        <p>${cota1}</p>
        <div class="scor">${scor1}</div>
    </div>`

    team2.innerHTML=`
    <h1 class="team2">${echipa2.name}</h1>
            <img src="${echipa2.url}" class="sigla2">
            <p>${cota2}</p>
            <div class="scor">${scor2}</div>
        </div>`


        pariata.innerHTML=`
        <div class="suma Bagata">${suma} lei</div>`

        castigata.innerHTML=`
        <div class="suma Castigata">${winnings}</div>`


        echipaP.innerHTML=` <div class="pariata">
        <h1>Ati pariat pe</h1>
        <div class="pariu">
            <h1>${bets}</h1>
            <img src="${sigla}">
        </div>
    </div>`







})

