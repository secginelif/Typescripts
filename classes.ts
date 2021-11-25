class Home {
    _roomno:number;
    _windowno:number;
    _floorno:number;

    constructor(roomno:number,windowno:number,floorno:number){
        this._roomno = roomno;
        this._windowno = windowno;
        this._floorno = floorno;
    }

    eatTo(){
        console.log(this._floorno+"katlı evde"+"yemek yiyildi")
    }

}

let home = new Home(3,4,5)
console.log(home._floorno)
console.log(home.eatTo())


// extends
class Kisi{

    get isim():string{
        return "Sayın : " + this.isim;
    }

    set isim(ad:string){
        this.isim=ad    
    }

    kaydet(){
        console.log("Kişi kaydedildi.")
    }
}
class Musteri extends Kisi{
    satisYap(){
        console.log("Satış Yapıldı.")
    }
}
class Personel extends Kisi{
    maasOde(){
        console.log("Maaş ödendi.")
    }
}

let musteri= new Musteri()
musteri.isim = "Ali"
console.log(musteri.isim)
musteri.satisYap()

let personel = new Personel()
personel.maasOde()

