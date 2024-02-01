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
            if(response.includes('Key')) {
                GetPeople();
            } else {
                GetLastQuest();
            }
        });
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
                GetLastQuest();
            }
        });
}

function AddQuestion() {
    const quest = document.getElementById('question').value;
    fetch(`/sudo/addQuest?question=${quest}` , {
        method: 'POST'
    });
}

function Restart() {
    fetch('/sudo/start', {
        method: 'POST'
    });
}

function GetLastQuest() {
    fetch('/api/getQuest')
        .then(response => response.text())
        .then(response => {
            document.getElementById('title').innerHTML = response;
        });
}

function GetPeople() {
    fetch('/sudo/player')
        .then(response => response.text())
        .then(response => {
            document.getElementById('count').innerHTML = response;
        });
}