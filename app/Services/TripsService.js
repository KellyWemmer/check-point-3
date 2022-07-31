import { ProxyState } from "../AppState.js";
import { Trip } from "../Models/Trip.js";

class TripsService {

    createTrip(newTrip){
        console.log('creating trip in service', newTrip);
        ProxyState.trips = [...ProxyState.trips, new Trip(newTrip)]
        console.log(ProxyState.trips);
    }

    deleteTrip(id) {
        console.log('deleting', id)
        ProxyState.trips = ProxyState.trips.filter(t => t.id != id)
    }

    toggleCollapse(tripId){

        let trip = ProxyState.trips.find(t => t.id == tripId)
        // @ts-ignore
        trip.collapsed = !trip.collapsed
  
        ProxyState.trips = ProxyState.trips
    }
}
export const tripsService = new TripsService()