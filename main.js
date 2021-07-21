const apiBaseUrl = "https://api.edamam.com/api/food-database/v2/parser";
const appId = "a1fa9480";
const appKey = "fba8e90ad09d8cdc82794ffd61d58967";

let input = document.getElementById("inputSearch");
let button = document.getElementById("buttonSearch");

// SEARCH 
input.addEventListener("keyup", (e) => {
    if (e.key !== "Enter") {
        e.preventDefault();

        return;
    }

    let searchString = e.target.value;
    
    searchProducts(searchString);  
});

function searchProducts(keyword) {
    fetch(`${apiBaseUrl}?app_id=${appId}&app_key=${appKey}&ingr=${keyword}&nutrition-type=cooking`)
    .then(response => {
        if (response.ok) {
            console.log("SUCCESS");
        }
        else {
            console.log("NOT SUCCESSFUL");
        }
        return response.json();
    })
    .then(data => drawProducts(data))
    .catch(error => console.log("ERROR", error));
}

function drawProducts(data) {
    // container div for food elements
    let foodContainerDiv = document.getElementById("foodList");

    if (foodContainerDiv.childElementCount > 0) {
        foodContainerDiv.innerHTML = ""; 
    }
    
    data.hints.forEach(elem => {
        // // container div for each food element
        let foodDiv = document.createElement("div");

        foodDiv.classList.add("foodBorder");

        foodContainerDiv.appendChild(foodDiv);

        // paragraph: label: name of the product
        let foodNameParagraph = document.createElement("p");

        foodNameParagraph.textContent = elem.food.label;

        foodDiv.appendChild(foodNameParagraph);

        let foodImage = document.createElement("img");

        // img of the food
        foodImage.src = elem.food.image;

        foodImage.alt = elem.food.label;

        foodDiv.appendChild(foodImage);
    });
}
