// Filter method Example

// Example 1 Filter Method with Static Data
// Filter method Example

// Example 1 Filter Method with Static Data

import teams from"./data/teams.js";
console.log(teams);

// Seleact the class for team container
const teamContainer = document.querySelector(".team-container");
// Select the class for search
const  search = document.querySelector(".search");
// creat a variable for the array teams
let teamsToRender = teams;
// creat a for loop
function renderTeams(someArr){
    // clear the team container
    teamContainer.innerHTML = "";
    for(let j = 0; j < someArr.length; j++){
        console.log(someArr[j]);
        teamContainer.innerHTML += ` <div class="team"><h3>${someArr[j].full_name}</h3></div>`
    }
}
renderTeams(teamsToRender);


search.onkeyup = function (event) {
    console.log(event);
    console.log(event.target.value);
    const searchValue = event.target.value.trim().toLowerCase();
    console.log(searchValue);

    const filteredTeams = teamsToRender.filter(function (team){
        if(team.full_name.toLowerCase().startsWith(searchValue)){
            return true;
        }
    })
    console.log(filteredTeams)
    // teamsToRender = filteredTeams;
    console.log("teams to render" , teamsToRender);
    renderTeams(filteredTeams);
}


