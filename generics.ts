function deger(x:number):number {
    return x;
}

let sayi = deger(10)
console.log(sayi)

function deger3<T>(x:T):T{
    return x;
}

let sayi3 = deger3<number>(2)

class GenericClass<T>{
    degisken:T;
    fonksiyon(parametre:T):T{
        return parametre;
    }
}

let sinif = new GenericClass<number>()

sinif.fonksiyon()    //number istiyor
