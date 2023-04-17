export type Products = {
    id: number;
    title:string,
    price:number,
    category:string,
    description:string,
    image:string
}
export type Token = {
    token: string
}

export type Chart = {
    id:number;
    userId:number;
    date:string;
    product:object;
}