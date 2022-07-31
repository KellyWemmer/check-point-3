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
  
}
export const tripsService = new TripsService()