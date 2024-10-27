module.exports = function check(str, bracketsConfig){
  if(str.length % 2 !==0){
    return false
  }else{
    function removePaar(str, bracets){
 
      const paar = bracets[0]+ bracets[1]
 
      for (let index = 0; index <= str.length/2; index++) {
        str = str.replace(paar, '');
      }
      return str;
      }


    let count = str.length/2;
    while(count>=0){
      for (let index = 0; index < bracketsConfig.length; index++) {
        const brack = bracketsConfig[index];
        str = removePaar(str, brack)
        if(str.length === 0){
          return true
        }
      }
      count --;
    }
      return false;

  }
}






