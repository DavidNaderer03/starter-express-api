function Load(url) {
    fetch(url)
        .then(response => response.text())
        .then(response => {
            document.getElementById('content').innerHTML = response;
        });
}

function Login() {
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;
    fetch(`/api/authorize?username=${username}&password=${password}`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
    })
        .then(response => response.text())
        .then(response => {
            document.getElementById('content').innerHTML = response;
        })
}
function Input(text) {
    fetch(`/api/input?input=${text}`, {
        method: 'POST'
    })
        .then(response => response.text())
        .then(response => {
            Load('./pages/Next.html');
        })
}

function Next() {
    fetch('/api/isready')
        .then(response => response.text())
        .then(response => {
            if(response !== 'Wait') {
                document.getElementById('content').innerHTML = response;
            }
        });
}