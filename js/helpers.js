//functie ce primeste ca parametru numele echipei si returneaza  un obiect


function echipa(team){

  for(let i=0;i<teams.length;i++){
     
       if(teams[i].name==team){

        return teams[i];
       }
  }

  return  null;


}
