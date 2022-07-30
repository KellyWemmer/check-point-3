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
      name: "Yosemite",
      id: '62e54c2ed63fc1baa323b7e9'
    }),

    new Trip({
      name: "DisneyLand",
      id: '62e54c2ebd11980e5cd0ce91'
    })
  ]
  /** @type {import('./Models/Reservation').Reservation[]} */
  reservations = [
    new Reservation({
      type: "vehicle",
      name: "Rent-a-car",
      confirmation: "123456A",
      address: "1234 Rocky Road, Moose, CA",
      date: new Date('2022-12-02'),
      price: "$456",
      tripId: '62e54c2ed63fc1baa323b7e9'
    }), 
    new Reservation({
      type: "hotel",
      name: "Hilton",
      confirmation: "123456A",
      address: "1234 Rocky Road, Moose, CA",
      date: new Date('2022-12-31'),
      price: "$345",
      tripId: '62e54c2ebd11980e5cd0ce91'
    }),   
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
