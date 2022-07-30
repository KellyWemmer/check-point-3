import { ProxyState } from "../AppState.js";
import { Reservation } from "../Models/Reservation.js";

class ReservationsService {
    createReservation(newReservation){
        console.log("creating res in service", newReservation);
        ProxyState.reservations = [...ProxyState.reservations, new Reservation(newReservation)]
        console.log(ProxyState.reservations)
    }
}


export const reservationsService = new ReservationsService()