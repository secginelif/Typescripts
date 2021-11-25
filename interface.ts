interface Product {
    id:number;
    name:string;
    unitPrice:number;
}

function save (product:Product){
    console.log(product.name +  " kaydedildi")
}

save({id:1,name:"Laptop", unitPrice:10})

interface PersonService{
    save();
}

class CustomService implements PersonService {
    save() {
        
    }
    
}