export async function getCocktailsByName(name: string) {
    const response = await fetch(`https://thecocktaildb.com/api/json/v1/1/search.php?s=${name}`)
    return response.json()
}