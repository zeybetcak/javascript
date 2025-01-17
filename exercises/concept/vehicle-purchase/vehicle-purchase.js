// @ts-check
//
// The line above enables type checking for this file. Various IDEs interpret
// the @ts-check directive. It will give you helpful autocompletion when
// implementing this exercise.

/**
 * Determines whether or not you need a licence to operate a certain kind of vehicle.
 *
 * @param {string} kind
 * @returns {boolean} whether a license is required
 */
 export function needsLicense(kind) {
  let result;
    if (kind === 'car')
    result = true;  
    else if (kind === 'truck')
    result = true;
    else
    result = false;
  return result
  } 
  
  /**
   * Helps choosing between two options by recommending the one that
   * comes first in dictionary order.
   *
   * @param {string} option1
   * @param {string} option2
   * @returns {string} a sentence of advice which option to choose
   */
  export function chooseVehicle(option1, option2) {
  let result;
    option1.toLowerCase() 
    option2.toLowerCase()
    if (option1 < option2) 
     result = option1
    else
     result = option2 
  return result + " is clearly the better choice."
  }
  
  /**
   * Calculates an estimate for the price of a used vehicle in the dealership
   * based on the original price and the age of the vehicle.
   *
   * @param {number} originalPrice
   * @param {number} age
   * @returns expected resell price in the dealership
   */
  export function calculateResellPrice(originalPrice, age) {
  let result;
  if (age < 3)
  result = originalPrice * 80/100
  else if (age > 10)
  result = originalPrice * 50/100
  else 
  result = originalPrice * 70/100
  return result
  }