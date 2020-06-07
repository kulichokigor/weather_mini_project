const axios = require ('axios');

import {KEY, apiUrl} from './safety/keys';

const city = document.querySelector('#city');
const form = document.querySelector('form');
const cityBox = document.querySelector('#name-city');
const tempBox = document.querySelector('#temp');
const weatherBox = document.querySelector('#weather-ico');

    form.addEventListener('click',(event)=>{
        event.preventDefault()
        if(city !=null && city.value.length!=0){
            const url = `${apiUrl}?q=${city.value}&appid=${KEY}&units=imperial`;
            axios.get(url)
            .then(resp=>{
                const celsius = 5/9*(resp.data.main.temp - 32)
                console.log(resp)
                console.log(`${resp.data.name}: ${celsius.toFixed(0)}`)
                cityBox.textContent = resp.data.name;
                celsius.toFixed(0)>=0?tempBox.textContent = `+${celsius.toFixed(0)}`:tempBox.textContent = celsius.toFixed(0)
    
                cityBox.style.color = 'inherit';
                tempBox.style.color = 'inherit';
                weatherBox.style.background=`url( http://openweathermap.org/img/wn/${resp.data.weather[0].icon}.png)no-repeat`
                // box.style.background=`url( http://openweathermap.org/img/wn/${resp.data.weather[0].icon}.png)no-repeat`
            })
            .catch(err=>{
                cityBox.textContent = 'Problem';
                cityBox.style.color = 'red';
                tempBox.textContent = ':)'
                tempBox.style.color = 'red';
                weatherBox.style.background = 'inherit'
                console.error(err.message)})
        }
    })
