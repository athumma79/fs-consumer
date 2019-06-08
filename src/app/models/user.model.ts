export class User {
    public id: number;
    public firstname: string;
    public lastname: string;
    public email: string;
    public password: string;

    constructor() {
        this.id = 0;
        this.firstname = "";
        this.lastname = "";
        this.email = "";
        this.password = "";
    }
}