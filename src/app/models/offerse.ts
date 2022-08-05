export class Offerse {
    offerse_id?:number;
    price_value:number;
    description:string;
    name:string;
    
    constructor(price_value:number,description:string,name:string){
        this.name = name;
        this.price_value = price_value;
        this.description = description;

    }
}
