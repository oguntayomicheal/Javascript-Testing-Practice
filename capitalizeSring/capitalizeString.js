const capitalizeString = (string) => {
   let stringArray = string.split("")
   stringArray[0] = stringArray[0].toUpperCase()
   for (let i = 1; i < stringArray.length; i++){
    stringArray[i] = stringArray[i].toLowerCase()
   }
   return stringArray.join("")
}

module.export = capitalizeString;