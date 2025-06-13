// Recuperare la ricetta da https://dummyjson.com/recipes/{id}
// Estrarre la proprietà userId dalla ricetta
// Usare userId per ottenere le informazioni dello chef da https://dummyjson.com/users/{userId}
// Restituire la data di nascita dello chef
// Note del docente
// Scrivi la funzione getChefBirthday(id), che deve:
// Essere asincrona (async).
// Utilizzare await per chiamare le API.
// Restituire una Promise con la data di nascita dello chef.
// Gestire gli errori con try/catch


async function getChefBirthday(id) {
  try {
    const recipeResponse = await fetch(`https://dummyjson.com/recipes/${id}`)
    const recipe = await recipeResponse.json()
    const chefResponse = await fetch(`https://dummyjson.com/users/${recipe.userId}`)
    const chef = await chefResponse.json()

    return chef.birthDate;
  } catch(error) {
    throw new Error("Errore recupero data di nascita dello chef")
  }
}

(async () => {
  try {
    const birthday = await getChefBirthday(1)
    console.log("Data di nascita dello chef:", birthday)
  } catch (error) {
    console.error(error)
  }
  console.log("fine codice");
  
})();