leagues = ["PL", "BL1", "PD", "SA", "FL1"]
leagues.forEach(league => {
    // Fetch the .json file and store its contents in a variable
    fetch(`./standings/${league}.json`)
      .then(response => {
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        return response.json(); // Parse the JSON from the response
      })
      .then(data => {
        const tableBody = document.querySelector(`#${league} tbody`);
        const teams = data.standings[0].table;
        teams.forEach(team => {
            const row = document.createElement('tr')
            row.innerHTML = `
                    <td>${team.position}</td>
                    <td>
                        <img src="${team.team.crest}" alt="${team.team.name} crest" width="20"> 
                        ${team.team.name}
                    </td>
                    <td>${team.points}</td>
                    <td>${team.won} - ${team.draw} - ${team.lost}</td>
                    <td>${team.playedGames}</td>
            `;
            // Append the row to the table body
            tableBody.appendChild(row);
        });
      })
      .catch(error => {
        console.error('Error fetching the JSON file:', error);
      });
});
