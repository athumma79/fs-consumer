export class Property {
    public id: number;
    public name: string;
    public location: string;
    public imageUrl: string;
    public price: string;
    public providerId: number;

    constructor() {
        this.id = 0;
        this.name = "";
        this.location = "";
        this.imageUrl = "";
        this.price = "";
        this.providerId = 0;
    }
}