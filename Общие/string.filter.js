const string = "Привет! Как дела?";
 const vowels = ["и","е","а","е"] ;

 const getVolwels = stringToFilter => {
   let newVolwels = "";

   for (let i=0; i<stringToFilter.length; i++) {
     const letter = stringToFilter[i].toLowerCase();
     
     if (vowels.includes(letter)) {
       newVolwels = newVolwels+letter;
     }
   } 
   return newVolwels;
 }
console.log(getVolwels(string));