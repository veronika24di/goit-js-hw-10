export const generatingOneCountryInDom = (country) => {
    const languages = country.languages.map(language => { return language.name }).join(', ')
  
    return `<h2><img src="${country.flags.svg}" alt="${country.name}" width = 40px class="country-flag"> ${country.name}</h2> 
          <p><b>Capital:</b> ${country.capital}</p>
          <p><b>Population:</b> ${country.population}</p>
          <p><b>Languages:</b> ${languages}</p>`;
}


export const generatingSomeCountryInDom = (countries) => {
    return countries.map(generatingCountryHTML).join('');    
}

function generatingCountryHTML (country) {
     return `<li><img src="${country.flags.svg}" alt="${country.name}" width = 40px class="country-flag"> ${country.name}</li>`
}