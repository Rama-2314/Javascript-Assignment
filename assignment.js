//  14.3 Create a method to add background color to a DIV element 
function changeDivColor() {
    document.getElementById("myDiv").style.backgroundColor = "pink";
}

//    14.4. Write a function to generate random background color of body      
function randomBg() {
    let r = Math.floor(Math.random() * 256);
    let g = Math.floor(Math.random() * 256);
    let b = Math.floor(Math.random() * 256);

    document.body.style.backgroundColor = "rgb(" + r + "," + g + "," + b + ")";
}

// 14.5. Onload of webpage, display modal (Bootstrap 4/5)   
function openModal() {
            var modalElement = document.getElementById("welcomeModal");

            // Create a Bootstrap modal object
            var modal = new bootstrap.Modal(modalElement);

            modal.show();
        }
        
// 15.1. Check whether the given number is a multiple of 3 or not
function checkMultiple() {
    let num = 10900;

    if (num % 3 === 0) {
        document.getElementById("result").innerText =
            num + " is a multiple of 3";
    } else {
        document.getElementById("result").innerText =
            num + " is NOT a multiple of 3";
    }
}


// 15.2. Check whether a particular sub-word exists in a string or not    
function checkWord() {
    let str = "i am learning js";
    let word = "js";

    if (str.includes(word)) {
        document.getElementById("answer").innerText =
        "Word exists in the string";
    } else {
        document.getElementById("answer").innerText =
        "Word does not exist in the string";
    }
}


//   15.3. calculate complex interest ((p/r )* t) / 100 ): take principle, rate and time from user  
function calculate() {
    let p = Number(document.getElementById("p").value);
    let r = Number(document.getElementById("r").value);
    let t = Number(document.getElementById("t").value);

    if (p > 0 && r > 0 && t > 0) {
        let interest = (p * r * t) / 100;
        document.getElementById("ans").innerText =
        "Interest = " + interest;
    } else {
        document.getElementById("ans").innerText =
        "Enter valid values";
    }
}


//  16.1. Display even numbers up to n (user input)   
function showEven() {
    let n = Number(document.getElementById("num").value);
    let res = "";

    for (let i = 1; i <= n; i++) {
        if (i % 2 === 0) {
            res += i + " ";
        }
    }
    document.getElementById("evenOut").innerText = res;
}


//  16.2. Check whether a character is vowel or consonant
function checkChar() {
    let ch = document.getElementById("char").value.toLowerCase();
    let vowels = "aeiou";
    let found = false;

    for (let i = 0; i < vowels.length; i++) {
        if (ch === vowels[i]) {
            found = true;
        }
    }

    document.getElementById("outChar").innerText =
    found ? "Vowel" : "Consonant";
}


//  16.3. Count even and odd numbers from 1 to 999
function count() {
    let even = 0, odd = 0;

    for (let i = 1; i <= 999; i++) {
        if (i % 2 === 0) even++;
        else odd++;
    }

    document.getElementById("countOut").innerText =
    "Even: " + even + " Odd: " + odd;
}


//  16.4. Count occurrence of a character in a string
function findCount() {
    let str = "hello";
    let ch = "l";
    let count = 0;

    for (let i = 0; i < str.length; i++) {
        if (str[i] === ch) count++;
    }

    document.getElementById("countResult").innerText =
    "Count is " + count;
}


//  16.5. Find sum and average of array elements
function calculate() {
    let arr = [1, 9, 8];
    let sum = 0;

    for (let i = 0; i < arr.length; i++) {
        sum += arr[i];
    }

    let avg = sum / arr.length;
    document.getElementById("sumAvg").innerText =
    "Sum = " + sum + " Average = " + avg;
}


//  16.6. Find the largest number in an array (using loop)
function largest() {
    let arr = [4, 18, 6, 25, 9];
    let max = arr[0];

    for (let i = 1; i < arr.length; i++) {
        if (arr[i] > max) {
            max = arr[i];
        }
    }

    document.getElementById("largeOut").innerText =
    "Largest number is " + max;
}

 //  17 . Display 3 cards in a row through js
function createCards() {

    let container = document.getElementById("cards");
    container.innerHTML = "";   // clear previous cards

    for (let i = 1; i <= 3; i++) {

        let card = document.createElement("div");
        card.className = "card";

        card.innerHTML = 
            "<h4>Card " + i + "</h4>" +
            "<p>This is card number " + i + "</p>";

        container.appendChild(card);
    }
}


// 18: create a form and validate it: email, contact, name, age,designation,select multiple files, DOB and submit form
function validateForm() {

    // get values
    let name = document.getElementById("name").value.trim();
    let email = document.getElementById("email").value.trim();
    let contact = document.getElementById("contact").value.trim();
    let age = document.getElementById("age").value;
    let designation = document.getElementById("designation").value;
    let dob = document.getElementById("dob").value;
    let files = document.getElementById("files").files;

    // clear old errors
    document.querySelectorAll("span").forEach(e => e.innerText = "");

    let isValid = true;

    // name validation
    if (name === "") {
        document.getElementById("nameErr").innerText = "Name is required";
        isValid = false;
    }

    // email validation
    if (!email.includes("@")) {
        document.getElementById("emailErr").innerText = "Enter valid email";
        isValid = false;
    }

    // contact validation
    if (contact.length !== 10 || isNaN(contact)) {
        document.getElementById("contactErr").innerText = "Enter 10 digit number";
        isValid = false;
    }
 
    // age validation
    if (age < 18) {
        document.getElementById("ageErr").innerText = "Age must be 18 or above";
        isValid = false;
    }

    // designation validation
    if (designation === "") {
        document.getElementById("desErr").innerText = "Select designation";
        isValid = false;
    }

    // DOB validation
    if (dob === "") {
        document.getElementById("dobErr").innerText = "Select DOB";
        isValid = false;
    }

    // file validation
    if (files.length === 0) {
        document.getElementById("fileErr").innerText = "Select at least one file";
        isValid = false;
    }

    return isValid;
}

// 19.1 Look for an API and display movie records as cards in UI
async function loadMovies() {

    let response = await fetch("https://jsonplaceholder.typicode.com/posts?_limit=3");
    let data = await response.json();

    let container = document.getElementById("movies");
    container.innerHTML = "";

    data.forEach(movie => {
        let card = document.createElement("div");
        card.className = "card";

        card.innerHTML =
            "<h4>" + movie.title + "</h4>" +
            "<p>" + movie.body + "</p>";

        container.appendChild(card);
    });
}

//  19.2 Create a function to get data from user and display it using callback
function getData() {
    let name = document.getElementById("username").value;
    displayData(name, showResult);
}

function displayData(data, callback) {
    callback(data);
}

function showResult(value) {
    document.getElementById("output").innerText =
        "User entered: " + value;
}


// 20.1 Get the first element in an array that is greater than 20
function greaterThan20() {
    let arr = [5, 12, 18, 25, 30];
    let result = "Not found";

    for (let i = 0; i < arr.length; i++) {
        if (arr[i] > 20) {
            result = arr[i];
            break;
        }
    }
    document.getElementById("g20").innerText = result;
}

// 20.2 Get the first element in an array that is less than 20
function lessThan20() {
    let arr = [45, 33, 18, 10];
    let result = "Not found";

    for (let i = 0; i < arr.length; i++) {
        if (arr[i] < 20) {
            result = arr[i];
            break;
        }
    }
    document.getElementById("l20").innerText = result;
}

//20.3 Filter data based on ID in array of objects
function filterById() {
    let users = [
        {id: 1, name: "Asha"},
        {id: 2, name: "Ravi"},
        {id: 3, name: "Neha"}
    ];

    let searchId = 2;
    let result = "ID not found";

    for (let i = 0; i < users.length; i++) {
        if (users[i].id === searchId) {
            result = users[i].name;
            break;
        }
    }
    document.getElementById("objOut").innerText =
        "Name for ID 2: " + result;
}

//20.4 Check elements are odd or even in array [90, 89, 56, 45]
function oddEven() {
    let arr = [90, 89, 56, 45];
    let result = "";

    for (let i = 0; i < arr.length; i++) {
        result += arr[i] + " is " +
        (arr[i] % 2 === 0 ? "Even" : "Odd") + "<br>";
    }
    document.getElementById("oe").innerHTML = result;
}

//20.5 Create a class Book
class Book {
    constructor(pages, pageType, author) {
        this.pages = pages;
        this.pageType = pageType;
        this.author = author;
    }

    type_of_book() {
        return "Educational Book";
    }
}

function bookInfo() {
    let myBook = new Book(250, "White Pages", "APJ Abdul Kalam");

    document.getElementById("book").innerText =
        myBook.type_of_book() + ", Pages: " +
        myBook.pages + ", Author: " + myBook.author;
}


//20.6 Create a class Animal
class Animal {
    constructor(name, gender, disease) {
        this.name = name;
        this.gender = gender;
        this.disease = disease;
    }

    walk() { return "Walking"; }
    eat() { return "Eating"; }
    climb() { return "Climbing"; }
}

function animalInfo() {
    let dog = new Animal("Dog", "Male", "None");

    document.getElementById("animal").innerText =
        dog.name + " is " + dog.walk() + " and " + dog.eat();
}
