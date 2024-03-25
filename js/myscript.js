// Function to dynamically add student ID and name to the page
function addStudentInfo() {
    const studentInfo = document.getElementById('studentInfo');
    const studentId = '1221340'; // Replace with your student ID
    const studentName = 'Tobi'; // Replace with your name
    studentInfo.textContent = `Student ID: ${studentId} - Student Name: ${studentName}`;
}

// Function to create Pizza object and display the order
function createPizza() {
    const size = document.getElementById('size').value;
    const toppings = document.querySelectorAll('input[name="topping"]:checked');
    const instructions = document.getElementById('instructions').value;
    
    // Creating Pizza object
    class Pizza {
        constructor(size, toppings, instructions) {
            this.size = size;
            this.toppings = toppings;
            this.instructions = instructions;
        }
        
        describe() {
            return `Size: ${this.size}, Toppings: ${this.toppings.join(', ')}, Instructions: ${this.instructions}`;
        }
    }
    
    const pizza = new Pizza(size, Array.from(toppings).map(topping => topping.value), instructions);
    
    // Displaying pizza order
    const pizzaOutput = document.getElementById('pizzaOutput');
    pizzaOutput.innerHTML = `<h2>Your Pizza Order</h2>
                             <p>${pizza.describe()}</p>`;
}

// Call functions when the page loads
window.onload = function() {
    addStudentInfo();
};
function validateForm() {
  var x = document.forms["myForm"]["fname"].value;
  if (x == "") {
    alert("Name must be filled out");
    return false;
  }
}