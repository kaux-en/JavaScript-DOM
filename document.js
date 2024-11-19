let products = [
    { name: "Laptop", price: 999.99, description: "Powerful computing on the go" },
    { name: "Smartphone", price: 699.99, description: "Stay connected wherever you are" },
    { name: "Headphones", price: 149.99, description: "Immersive audio experience" }
];

function displayInfo() { 
    const div = document.getElementById("data")
    for (let i = 0; i < products.length; i++) {
        div.innerHTML += `<strong>Name:</strong> ${products[i].name}, <strong>Price:</strong> ${products[i].price}, <strong>Description:</strong> ${products[i].description} <br>`
        }
    };
    document.getElementById("data").addEventListener('click', function displayInfo() {
    console.log("Button clicked"); 
});


//Form Manipulation
function handleSubmit(event) {
    event.preventDefault();
    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;
    const message = document.getElementById("message").value;
    alert("Hello, " + name + "! Form Submitted.");
    document.getElementById("myForm").reset();
}

//Styling 
function changeColor() {
    document.getElementById('data').style.background = 'lightblue';
}

function mouseOver() {
    document.getElementById("submit").style.color = "darkred";
}
  
function mouseOut() {
    document.getElementById("submit").style.color = "black";
}


