import { ProxyState } from "../AppState.js";
import { tripsService } from "../Services/TripsService.js";
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

    createTrip() {
        
        window.event.preventDefault()
        console.log('creating Trip!');
        let form = window.event.target
        let newTrip = {
            name: form.name.value,
            accommodations: ''
        }
        console.log(newTrip);
        tripsService.createTrip(newTrip)
        Pop.toast('Trip Created', 'success')
        form.reset()
    }

    deleteTrip(id){
        if(window.confirm("Are you sure you want to delete this trip?")){
            tripsService.deleteTrip(id)
        }
    }

    addTripNote(id) {
        let trip = ProxyState.trips.find(t => t.id == id)        
        let newText = window.event.target.value        
        trip.accommodations = newText
        console.log(ProxyState.trips)
        saveState()
    }

    toggleCollapse(tripId){

        tripsService.toggleCollapse(tripId)
    
      }
    
}
