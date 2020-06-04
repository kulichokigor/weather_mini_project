const axios = require ('axios');

import {KEY} from './safety/keys'

const box = document.querySelector('#box');

const city = 'Khorol';

const url = `http://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${KEY}&units=imperial`

axios.get(url)
    .then(resp=>{
        const celsius = 5/9*(resp.data.main.temp - 32)
        console.log(resp)
        console.log(`${resp.data.name}: ${celsius.toFixed(0)}`)
        box.style.background=`url( http://openweathermap.org/img/wn/${resp.data.weather[0].icon}.png)no-repeat`
        box.style.width = '50px'
        box.style.height = '50px'
    })
    .catch(err=>console.error(err))
