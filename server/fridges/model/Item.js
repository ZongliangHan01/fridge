export default class Item {
    constructor(name, quantity, expDate, buyDate, owner, location) {
        this.name = name;
        this.quantity = quantity;
        this.buyDate = buyDate;
        this.expDate = expDate;
        this.owner = owner;
        this.location = location;
    }
}