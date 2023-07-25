window.addEventListener('load', function() {

    async function getData() {
        let response = await fetch('https://handlers.education.launchcode.org/static/astronauts.json');
        let data = await response.json();

        //cool trick I found online!
        data.sort((a,b) => b.hoursInSpace - a.hoursInSpace)
        // console.log(data);

        const container = document.getElementById('container')
            for (let i = 0; i < data.length;i++){
                //dynamically adds hmtl to page!
                container.innerHTML += `
                <div class="astronaut">
                    <div class="bio">
                        <h3>${data[i].firstName} ${data[i].lastName}</h3>
                        <ul>
                            <li>Hours in space: ${data[i].hoursInSpace}</li>
                            <li class=${data[i].active ? 'active' : ''}>Active: ${data[i].active}</li>
                            <li>Skills: ${data[i].skills.join(', ')}</li>
                        </ul>
                    </div>
                <img class="avatar" src="${data[i].picture}">
                </div>`
                
            //end of for loop
            }
const counter = document.getElementById('counter')
counter.innerHTML = `Showing ${data.length} Astronauts`

//end of function for async
}

getData();


//window listener function and full ender
});


// active: false
// firstName: "Mae"
// hoursInSpace: 190
// id: 1
// lastName: "Jemison"
// picture: "https://handlers.education.launchcode.org/static/images/mae-jemison.jpg"
// skills: