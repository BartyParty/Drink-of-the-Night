//The user will enter a cocktail. Get a cocktail name, photo, and instructions and place them in the DOM

document.querySelector('button').addEventListener('click', getDrink)

function getDrink(){

    let drink = document.querySelector('input').value

    fetch(`https://www.thecocktaildb.com/api/json/v1/1/search.php?s=${drink}`) //uses a url to grab a web API specific to the drink grabbed from the event listener and input above
    .then(res => res.json()) // parse response as JSON
    .then(data => { //this function displays what data has been grabbed with the API
        console.log(data.drinks[0]) 
        document.querySelector('h2').innerText = data.drinks[0].strDrink //sets the h2 to display the drink name
        document.querySelector('img').src = data.drinks[0].strDrinkThumb //image to drink image
        document.querySelector('h3').innerText = data.drinks[0].strInstructions //drink instructions in h3
    })
    .catch(err => { //this function logs an error if something goes wrong
        console.log(`error ${err}`)
    });
}




//make this a "what should I drink app" 