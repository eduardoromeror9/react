export const generateId = () => {
  return Math.random().toString(36).substring(2, 15) + Math.random().toString(36).substring(2, 15);
}


// export const generateId = () => {
//   const random = Math.random().toString(36).substring(2)
//   const fecha = Date.now().toString(36)

//   return random + fecha
// }


