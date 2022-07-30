import { generateId } from "../Utils/generateId.js";

export class Reservation{
    constructor(data){
        this.id = data.id || generateId()
        this.type = data.type,
        this.name = data.name,
        this.confirmation = data.confirmation,
        this.address = data.address,
        this.date = data.date,
        this.price = data.price,
        //tripId connects to appropriate trip
        this.tripId = data.tripId
    }

    get Template(){
        return `
        <div class="row bg-primary rounded m-2 p-3">
          <div class="col-2">${this.type}</div>
          <div class="col-2">${this.name}</div>
          <div class="col-2">${this.confirmation}</div>
          <div class="col-2">${this.address}</div>
          <div class="col-2">${this.date}</div>
          <div class="col-2">${this.price}</div>
        </div>
        `
    }
}