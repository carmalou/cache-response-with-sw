function fetchFayePI() {
    return window.fetch('https://fayepi.herokuapp.com/romcoms')
    .then(async function(response) {
        var jsonResponse = await response.json();
        document.getElementById('header').innerHTML = document.getElementById('header').innerHTML + ' (' + response.status + ')';
        document.getElementById('contents').appendChild(document.createTextNode(JSON.stringify(jsonResponse, null, 2)));
        return;
    })
    .catch(function(err) {
        console.log('err! ', err);
    });
}

fetchFayePI();

if(navigator.serviceWorker) {
    navigator.serviceWorker.register('./serviceworker.js')
    .catch(function(err) {
        console.log('err ', err);
    });
}
