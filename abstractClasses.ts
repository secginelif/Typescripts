abstract class KrediBase {
    constructor() {
        
    }

    kaydet():void{
        console.log("Kaydedildi")
    }
    
    abstract hesapla():void;
    
}

class TuketiciKredi extends KrediBase {
    constructor() {
        super();
        
    }

    hesapla():void{
        console.log("Tüketici Kredisine göre hesap yapıldı")
    }
}

class MortgageKredi extends KrediBase {
    constructor() {
        super();
        
    }

    hesapla():void{
        console.log("Tüketici Kredisine göre hesap yapıldı")
    }