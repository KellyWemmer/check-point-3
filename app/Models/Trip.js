import { ProxyState } from "../AppState.js";
import { generateId } from "../Utils/generateId.js";

export class Trip {
    constructor(data){
        this.id = data.id || generateId()
        this.name = data.name
        this.accommodations = data.accommodations
    }

    get Template(){
        return `
    <div class="col-12 bg-white rounded elevation-2 m-2 p-3">
        <section class="trip-card justify-content-space-between">            
          <h3>${this.name}<i class="mdi mdi-delete-forever px-2 unselectable selectable d-flex justify-content-end" onclick="app.tripsController.deleteTrip('${this.id}')"></i></h3>
                      
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
        <div class="row" id="reservation-form">
        <div class="col-12">
          <form class="row p-3 d-flex justify-content-space-around" onsubmit="app.reservationsController.createReservation('${this.id}')">
            <select name="type" id="type" class="col-1" required placeholder="Type">
              <option value="✈">✈</option>
              <option value="🏩">🏩</option>
              <option value="🎡">🎡</option>
              <option value="🚗">🚗</option>
            </select>
            <input name="name" id="name" required class="col-2 m-2" type="text" placeholder="Name">
            <input name="confirmation" id="confirmation" required class="col-2 m-2" type="text" placeholder="Confirmation #">
            <input name="address" id="address" required class="col-2 m-2" type="text" placeholder="Address">
            <input name="date" id="date" type="date" required class="col-2 m-2" type="text" placeholder="Date">
            <input name="price" id="price" type="number" minlength="1" required class="col-1 m-2"  placeholder="Price">
            <div class="row d-flex justify-content-end">
              <button class="btn btn-secondary col-1">Add</button>
            </div>
          </form>
        </div>
      </div>
      <h3>Notes</h3>
            <textarea name="" id="" cols="40" rows="5"></textarea>
        </section>      
        </div>
    </div>
        `
    }

    // TODO get Reservations()
    get Reservations(){
        let template = ''
        let reservations = ProxyState. reservations.filter(r => r.tripId == this.id).sort((a, b) => new Date(a.date) - new Date(b.date))

        reservations.forEach(r => template += r.Template)
        if(template){
            return template
        } else {
            return '<p> no reservations yet </p>'
        }
    }
    
}