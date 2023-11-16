const privateConstructorKey =  'a';
module.exports = class Singleton {
    static #instance = null;
    constructor(dbName, userName, password, constructorKey) {
        if (constructorKey !== privateConstructorKey) {
            console.log('You must use the PrivateConstructorClass.create() to construct an instance.')
        } else {
            this.dbName = dbName;
            this.userName = userName;
            this.password = password;
        }
    }

    static create(dbName, userName, password) {
        if (this.#instance === null) {
            this.#instance = new Singleton(dbName, userName, password,  'a');
            return this.#instance;

        } else {
            console.log("already have instance create failed!");
            return this.#instance;
        }

    }
}