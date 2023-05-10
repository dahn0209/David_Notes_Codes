function increasingSequence(arr){
    
    //////lopp throught arr with while loop//

    ///starting variable//
    let start=0;
    
    

    while(start<arr.length){
        ///delete element from this index///
        let newArr=arr.slice(0,start).concat(arr.slice(start+1));

        for(let i=0;i<newArr.length;i++){
            if(newArr[i]< newArr[i+1]){
                return true
            }else{
                ///increment start to see if the next one will work 
                start++;
            }
        }
    }

    return false

}




function increasingSequence(arr){

    for(let i=0;i<arr.length;i++){
      let newArr=arr.slice(0,i).concat(arr.slice(i+1));
      let start=0;
      
      while(start<newArr.length){
        if(newArr[start]<newArr[start+1]){
           start++;
        }
  
        if((newArr[start]>=newArr[start+1])){
          break
        }
  
        if(start===newArr.length-1){
          return true;
        }
      }
    
    }
   return false
  }