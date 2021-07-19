const apiBaseUrl = "https://api.edamam.com/api/food-database/v2/parser";
const appId = "a1fa9480";
const appKey = "fba8e90ad09d8cdc82794ffd61d58967";

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

searchProducts("avocado");

searchProducts("chocolate");

function drawProducts(data) {
    console.log(data);
    let foodContainerDiv = document.createElement("div");
    foodContainerDiv.classList.add("radio");
    
    data.hints.forEach(elem => {

        let foodDiv = document.createElement("div");
        foodDiv.classList.add("foodBorder");
        foodContainerDiv.appendChild(foodDiv);
        

        let foodNameParagraph = document.createElement("p");

        foodNameParagraph.textContent = elem.food.label;

        foodDiv.appendChild(foodNameParagraph);

        let foodImage = document.createElement("img");



        foodImage.src = elem.food.image;

        foodImage.alt = elem.food.label;

        foodDiv.appendChild(foodImage);
    });

    document.body.appendChild(foodContainerDiv);
}

