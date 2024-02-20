// URL = https://exercism.org/tracks/javascript/exercises/mixed-juices/solutions/pedroreimberg

/**
 * Determines how long it takes to prepare a certain juice.
 *
 * @param {string} name
 * @returns {number} time in minutes
 */
export function timeToMixJuice(name) {
    switch (name) {
      case "Pure Strawberry Joy":
        return 0.5
      case "Energizer":
      case "Green Garden":
        return 1.5
      case "Tropical Island":
        return 3
      case "All or Nothing":
        return 5
      default:
        return 2.5
    }
  }
  
  /**
   * Calculates the number of limes that need to be cut
   * to reach a certain supply.
   *
   * @param {number} wedgesNeeded
   * @param {string[]} limes
   * @returns {number} number of limes cut
   */
  export function limesToCut(wedgesNeeded, limes) {
    let wedges = 0;
    let limesUsed = 0;
    if (wedgesNeeded == 0) {
      return limesUsed
    }
    for (let i = 0; wedges <= wedgesNeeded; i++, limesUsed++) {
      switch (limes[i]) {
        case "small":
          wedges += 6
          break;
        case "medium":
          wedges += 8
          break;                
        case "large":
          wedges += 10
          break;
        default:
          return limesUsed
      }        
    }    
    return limesUsed
  }
  
  /**
   * Determines which juices still need to be prepared after the end of the shift.
   *
   * @param {number} timeLeft
   * @param {string[]} orders
   * @returns {string[]} remaining orders after the time is up
   */
  export function remainingOrders(timeLeft, orders) {
    let timeUsed = 0;
    let remaining = orders;
    do {
      timeUsed += timeToMixJuice(remaining[0])
      remaining.shift()
    } while (timeUsed < timeLeft)
    return remaining
  }