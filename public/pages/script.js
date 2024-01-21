async function log() {
    let username = document.getElementById('typeUserX').value;
    let password = document.getElementById('typePasswordX').value;
    let url = `/api/log?username=${username}&password=${password}`;
    await fetch(url)
        .then(data => data.json())
        .then(json => {
            if (json.valid) {
                window.location.href = './logged.html'
            }
        });
}