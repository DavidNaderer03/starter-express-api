function Load(url) {
    fetch(url)
        .then(response => response.text())
        .then(response => {
            document.getElementById('content').innerHTML = response;
        });
}