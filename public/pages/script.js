async function log() {
    let username = document.getElementById('typeUsernameX-2').value;
    let password = document.getElementById('typePasswordX-2').value;
    let url = `/api/log?username=${username}&password=${password}`;
    await fetch(url)
        .then(data => data.json())
        .then(json => {
            if (json.valid) {
                window.location.href = './logged.html'
            }
        });
}