
//function to watch form
    //capture and assign const user input
    //print user input
    //run api request function
function watchform() {
    $('#js-form').submit(e => {
        e.preventDefault();
        const user = $('#js-user').val();
        console.log(user);
        getUser(user);
    });
}

//function to send request to api
    //const endpoint using user input
    //print endpoint
    //api key?
    //run fetch
function getUser(user) {
    const endpoint = `https://api.github.com/users/:${user}/repos`;
    fetch(endpoint)
        .then(response => response.json())
        // .then(responseJson.articles => displayRepos(responseJson.articles))//fat arrow not working?
        .catch(error => console.log(error));
}

//function to handle response from api
    //print response
    //update html
function displayRepos(response) {
    console.log(response);
    $('#js-results').html(``);//complete this asap
}

//set page(watch form and print page ready)
$(setPage => {
    watchform();
    console.log('page ready')
});