function sum (x:number,y:number):number{
    return x+y;
}

let sum2 = function(x:number,y:number):number {
    return x+y;
}

function sum3(x:number,y?:number){
    if(y){
        return x+y;
    }
    return x;
}
console.log(sum3(3))


//string dizisi
function invite(first:string,...others:string[]):string {
    return first +" "+ others.join(" ");
}

console.log(invite("Ahmet"," Mehmet","Ahmetsu"))