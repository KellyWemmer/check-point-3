import { ProxyState } from "../AppState.js";
// import { tripsService } from "../Services/TripsService.js";
import { Pop } from "../Utils/Pop.js";
import {loadState, saveState} from "../Utils/LocalStorage.js"

function _draw(){
    let template= ''
    let trips = ProxyState.trips
    console.log(trips)
    trips.forEach(t => template += t.Template)
    console.log(template);
    document.getElementById('trip').innerHTML = template
}


export class TripsController{
    constructor(){
       console.log("trips controller loaded") 
       ProxyState.on('trips', _draw)
       ProxyState.on("reservations", _draw)
       ProxyState.on("trips", saveState)
       ProxyState.on("reservations", saveState)
       loadState()
       _draw()
    }
}
