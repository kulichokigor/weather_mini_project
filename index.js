const axios = require ('axios');

import {KEY, apiUrl} from './safety/keys';

const city = document.querySelector('#city');
const form = document.querySelector('form');
const cityBox = document.querySelector('#name-city');
const tempBox = document.querySelector('#temp');
const weatherIcoBox = document.querySelector('#weather-ico');
const weatherBox = document.querySelector('.app_temp-box');
const startBox = document.querySelector('.app__start-box');
const errorBox = document.querySelector('.error-box');
const dataOutput = document.querySelector('#data-output__box')

    form.addEventListener('click',(event)=>{
        event.preventDefault()
        if(city !=null && city.value.length!=0){
            const url = `${apiUrl}?q=${city.value}&appid=${KEY}&units=imperial`;
            axios.get(url)
            .then(resp=>{
                startBox.classList.add('remove')
                weatherBox.classList.remove('remove')
                errorBox.classList.add('remove')

                const celsius = 5/9*(resp.data.main.temp - 32)
                console.log(resp)
                console.log(`${resp.data.name}: ${celsius.toFixed(0)}`)
                cityBox.textContent = resp.data.name;
                celsius.toFixed(0)>=0?tempBox.textContent = `+${celsius.toFixed(0)}`:tempBox.textContent = celsius.toFixed(0)
    
                cityBox.style.color = 'inherit';
                tempBox.style.color = 'inherit';
                weatherIcoBox.style.background=`url( http://openweathermap.org/img/wn/${resp.data.weather[0].icon}.png)no-repeat`;


            })
            .catch(err=>{
                weatherBox.classList.add('remove');
                startBox.classList.add('remove');
                errorBox.classList.remove('remove');
                dataOutput.style.background = '#5effc8';        // зміни стилів добавити через class!!!
                dataOutput.style.border = '4px solid #0b4a3d'; // зміни стилів добавити через class!!!
                console.error(err.message)})
        }
    })
