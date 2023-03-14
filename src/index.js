import './css/styles.css';
import { fetchCountries } from "./js/fetchCountries";
import { generatingOneCountryInDom, generatingSomeCountryInDom  } from "./js/generatingDom";
import { Notify } from 'notiflix/build/notiflix-notify-aio';

const debounce = require('lodash.debounce');
const DEBOUNCE_DELAY = 300;

const refs = {
    input: document.querySelector('#search-box'),
    ul: document.querySelector('.country-list'),
    div: document.querySelector('.country-info'),
};

refs.input.addEventListener('keydown', debounce(onKeydown,DEBOUNCE_DELAY) )

function onKeydown(e) {    
    const countriName = e.target.value.trim();

    if (countriName === '') {
        return;
    }

    fetchCountries(countriName)
        .then(countries => {
            clearCountriesInDOM();

            if (countries.length > 10) {
                Notify.info('Too many matches found. Please enter a more specific name.');
                return;
            }
            if (countries.length === 1) {                
                refs.div.innerHTML = generatingOneCountryInDom(countries[0])
                return;
            }    
              
             refs.ul.innerHTML = generatingSomeCountryInDom(countries);
        })
        .catch(error =>{Notify.failure('Oops, there is no country with that name');})
    }

function clearCountriesInDOM() {
    refs.div.innerHTML = '';
    refs.ul.innerHTML = '';     
    }