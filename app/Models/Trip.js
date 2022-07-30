import { ProxyState } from "../AppState.js";
import { generateId } from "../Utils/generateId.js";

export class Trip {
    constructor(data){
        this.id = data.id || generateId()
        this.name = data.name
    }

    get Template(){
        return `
        <div class="col-12 bg-white rounded elevation-2 m-3 p-3">
        <section class="trip-card" >            
          <h3>${this.name}</h3>            
        <div class="row p-3">
          <div class="col-2">Type</div>
          <div class="col-2">Name</div>
          <div class="col-2">Confirmation</div>
          <div class="col-2">Address</div>
          <div class="col-2">Date</div>
          <div class="col-2">Price</div>                
        </div>
        <section id="reservation">          
            ${this.Reservations}
        </section>          
      </section>      
    </div>
        `
    }

    // TODO get Reservations()
    get Reservations(){
        let template = ''
        let reservations = ProxyState. reservations.filter(r => r.tripId == this.id)
        reservations.forEach(r => template += r.Template)
        if(template){
            return template
        } else {
            return '<p> no reservations yet </p>'
        }
    }
    
}