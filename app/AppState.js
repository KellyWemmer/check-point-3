import { Reservation } from "./Models/Reservation.js"
import { Trip } from "./Models/Trip.js"
import { EventEmitter } from "./Utils/EventEmitter.js"
import { isValidProp } from "./Utils/isValidProp.js"

class AppState extends EventEmitter {
  /** @type {import('./Models/Value').Value[]} */
  values = []


  /** @type {import('./Models/Trip').Trip[]} */
  trips = [
    new Trip({
      name: "Yosemite"
    }),

    new Trip({
      name: "DisneyLand"
    })
  ]
  /** @type {import('./Models/Reservation').Reservation[]} */
  reservations = [
    new Reservation({
      
    })
  ]

}

export const ProxyState = new Proxy(new AppState(), {
  get(target, prop) {
    isValidProp(target, prop)
    return target[prop]
  },
  set(target, prop, value) {
    isValidProp(target, prop)
    target[prop] = value
    target.emit(prop, value)
    return true
  }
})
