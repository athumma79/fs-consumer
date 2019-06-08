export class Booking {
    public id: number;
    public dateFrom: Date;
    public dateTo: Date;
    public status: string;
    public userId: number;
    public propertyId: number;

    constructor() {
        this.id = 0;
        this.dateFrom = new Date();
        this.dateTo = new Date();
        this.status = "";
        this.userId = 0;
        this.propertyId = 0;
    }
}