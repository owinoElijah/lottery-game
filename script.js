let users = [];
let currentUser = null;

function showRegistration() {
    document.getElementById("registrationForm").style.display = "block";
    document.getElementById("loginForm").style.display = "none";
}

function showLogin() {
    document.getElementById("registrationForm").style.display = "none";
    document.getElementById("loginForm").style.display = "block";
}

function register() {
    const username = document.getElementById("registerUsername").value;
    const password = document.getElementById("registerPassword").value;

    
    if (users.find(user => user.username === username)) {
        alert("Username already exists.");
        return;
    }

    
    users.push({ username, password, balance: 0 });
    alert("Registration successful!");
    showLogin();
}

function login() {
    const username = document.getElementById("loginUsername").value;
    const password = document.getElementById("loginPassword").value;

    
    const user = users.find(user => user.username === username && user.password === password);
    if (user) {
        currentUser = user;
        document.getElementById("userDisplay").innerText = user.username;
        document.getElementById("balance").innerText = user.balance;
        document.getElementById("formContainer").style.display = "none";
        document.getElementById("gameContainer").style.display = "block";
    } else {
        alert("Invalid username or password.");
    }
}

function deposit() {
    const amount = parseFloat(document.getElementById("amount").value);
    if (amount > 0) {
        currentUser.balance += amount;
        document.getElementById("balance").innerText = currentUser.balance;
        document.getElementById("amount").value = '';
    } else {
        alert("Enter a valid amount!");
    }
}

function withdraw() {
    const amount = parseFloat(document.getElementById("amount").value);
    if (amount > 0 && amount <= currentUser.balance) {
        currentUser.balance -= amount;
        document.getElementById("balance").innerText = currentUser.balance;
        document.getElementById("amount").value = '';
    } else {
        alert("Insufficient balance or enter a valid amount!");
    }
}

function playLottery() {
    const lotteryNumber = parseInt(document.getElementById("lotteryNumber").value);
    const randomNumber = Math.floor(Math.random() * 10) + 1; 

    if (lotteryNumber < 1 || lotteryNumber > 10) {
        alert("Please enter a number between 1 and 10.");
        return;
    }

    if (lotteryNumber === randomNumber) {
        document.getElementById("lotteryResult").innerText = "Congratulations! You won! The number was " + randomNumber;
        currentUser.balance += 10; 
    } else {
        document.getElementById("lotteryResult").innerText = "Sorry, you lost. The number was " + randomNumber;
    }
    document.getElementById("balance").innerText = currentUser.balance; 
}