
//function to watch form
    //clear current html and input box
    //capture and assign const user input
    //print user input
    //run api request function
function watchform() {
    $('#js-form').submit(e => {
        e.preventDefault();
        const user = $('#js-user').val();
        console.log(user);
        $('#js-results').html('');
        $('#js-user').val('');
        getUser(user);
    });
}

//function to send request to api
    //const endpoint using user input
    //print endpoint
    //api key?
    //run fetch
function getUser(user) {
    const endpoint = `https://api.github.com/users/${user}/repos`;
    fetch(endpoint)
        .then(response => response.json())
        .then(responseJson => displayRepos(responseJson))
        .catch(error => console.log(error));
}

//function to handle response from api
    //print response
    //for loop to update html with each item in the array
function displayRepos(response) {
    console.log(response);
    $('#js-results').html(`
        <h3>Repos for user: ${response[0].owner.login}</h3>
        <p>Click a link below to see more!</p>
    `);
    for (let i = 0; i < response.length; i++) {
        $('#js-results').append(`
            <li>
                <a href=${response[i].html_url} target="_blank">${response[i].name}</a>
            </li>
        `);
    }
}

//set page(watch form and print page ready)
$(setPage => {
    watchform();
    console.log('page ready')
});