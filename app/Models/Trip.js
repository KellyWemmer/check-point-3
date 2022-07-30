import { ProxyState } from "../AppState.js";
import { generateId } from "../Utils/generateId.js";

export class Trip {
    constructor(data){
        this.id = data.id || generateId()
        this.name = data.name
    }

    get Template(){
        return `
    <section class="trip-card">            
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
    //   TODO Replace below div with {this.Reservations}
        // <div class="row bg-primary rounded m-2 p-3">
        //   <div class="col-2">Type</div>
        //   <div class="col-2">Name</div>
        //   <div class="col-2">Confirmation</div>
        //   <div class="col-2">Address</div>
        //   <div class="col-2">Date</div>
        //   <div class="col-2">Price</div>
        // </div>
      </section>
    </section> 
        `
    }

    // TODO get Reservations()
    
}