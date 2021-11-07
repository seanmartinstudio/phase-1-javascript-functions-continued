function saturdayFun(activity="roller-skate") {
  return `This Saturday, I want to ${activity}!`
}
console.log(saturdayFun())

let mondayWork = function(activity="go to the office") {
  return `This Monday, I will ${activity}.`
}
console.log(mondayWork());

// let wrapAdjective = function(style="*") {
//   return function(adjective="special") {
//     return `You are ${style}${adjective}${style}!`
//   }
// }


 function wrapAdjective(style="*") {
  return function(adjective="special") {
    return `You are ${style}${adjective}${style}!`
  }
}
console.log(wrapAdjective());













// function wrapAdjective() {
//   return function(adjective = "special") {
//     return `You are ${adjective}`
//   }
// }











