

export interface Product {
    id : string;
    title: string;
    type: "products";
    image:{
        asset:{
            ref: string;
            type: "image";
            
        }
    };
    price: number;
    description: string;
    slug : {
    type: "slug";
        current: string;
    };
    inventory:number;
}