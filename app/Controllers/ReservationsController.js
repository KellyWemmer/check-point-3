import { reservationsService } from "../Services/ReservationService.js"

export class ReservationsController {
    constructor(){
        console.log("Res controller loaded")
    }

    createReservation(tripId){   
        window.event.preventDefault()
        console.log("creating a res for Trip", tripId);
        let form = window.event.target
        let newReservation = {
            type: form.type.value,
            name: form.name.value,
            confirmation: form.confirmation.value,
            address: form.address.value,
            date: form.date.value,
            price: form.price.value,
            tripId: tripId
        }
        console.log(newReservation);
        reservationsService.createReservation(newReservation)
    }
}