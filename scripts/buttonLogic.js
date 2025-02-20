//Waits for the document to fully load
document.addEventListener("DOMContentLoaded", function () {
    //Makes the constant to check for a click
    const button = document.getElementById("clickMeBTN");
    //gets value from storage
    let count = parseInt(localStorage.getItem("counter"));
    //Sets count to 0 if there is nothing in local storage
    if (isNaN(count)) {
        count = 0;
    }
    //Sets the number in the button to whatever count is
    button.textContent = count;
    //Checks for a click
    button.addEventListener("click", function () {
        //adds one to the counter
        count++;
        //Changes the number of the button to reflect the new value
        button.textContent = count;
        //Saves the new value to local storage.
        localStorage.setItem("counter", count);
    });
    
});
