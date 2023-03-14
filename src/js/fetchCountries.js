export const fetchCountries = (name) => {
    const LINK = 'https://restcountries.com/v2'
    const FILTER_RESPONSE = 'name,capital,population,flags,languages'

    return fetch(`${LINK}/name/${name}?fields=${FILTER_RESPONSE}`)
        .then(response => {
            if (!response.ok) {
            throw new Error(response.status);
        }
        return response.json();});    
}