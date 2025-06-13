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

/* Attualmente, se la prima richiesta non trova una ricetta, la seconda richiesta potrebbe comunque essere eseguita causando errori a cascata.

Modifica getChefBirthday(id) per intercettare eventuali errori prima di fare la seconda richiesta.
🎯 Bonus 2
Utilizza la libreria dayjs per formattare la data di nascita nel formato giorno/mese/anno. */


async function getChefBirthday(id) {

  let recipe
  try {
    const recipeResponse = await fetch(`https://dummyjson.com/recipes/${id}`)
    recipe = await recipeResponse.json()


  } catch (error) {
    throw new Error(`Non recupero recipe id ${id}`)
  }
  if (recipe.message) {
    throw new Error(recipe.message)
  }

  let chef
  try {
    const chefResponse = await fetch(`https://dummyjson.com/users/${recipe.userId}`)
    chef = await chefResponse.json()
  } catch (error) {
    throw new Error(`Non recupero lo chef id ${iaa}`)
  }
  if (chef.message) {
    throw new Error(chef.message)
  }

  return chef.birthDate;
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