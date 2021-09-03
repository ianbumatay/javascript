
//tripleAdd(10)(20)(30);
// returns total of all 3 numbers added together  

const tripleAdd =(a)=> {

    return (b)=>{
        return (c)=>{
            return a + b + c
        }
    }
} 

console.log(tripleAdd(10)(20)(30)) //=> 60
