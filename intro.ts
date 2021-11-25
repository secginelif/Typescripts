function greeting(isim:string){
    return "Merhaba " + isim
}

let message = greeting("Elif")

console.log(message)

let sayi:number
sayi=10
sayi=10.5

let sehir:string
sehir="İstanbul"

let dogruMu:boolean
dogruMu =true

let sayilar:number[]=[1,2,3]
let sayilar2:Array<number>=[1,2,3]

let dizi:[number,string] = [2,"Ankara"]

enum Renk {Kırmızı=1,Siyah}
let renk:Renk =Renk.Kırmızı
let renk2:Renk =Renk.Siyah

let deger: any
deger=2
deger = {}

let deger2 : void = undefined

function greeting2():void{
    console.log("hi")
}

// undefined null

let age:number


