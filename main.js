fetch("https://api.edamam.com/api/food-database/v2/parser?app_id=a1fa9480&app_key=fba8e90ad09d8cdc82794ffd61d58967&ingr=chocolate&nutrition-type=cooking")
.then(response => {
    if (response.ok) {
        console.log("SUCCESS");
    }
    else {
        console.log("NOT SUCCESSFUL");
    }
    return response.json()
})
.then(data => console.log(data))
.catch(error => console.log("ERROR", error))