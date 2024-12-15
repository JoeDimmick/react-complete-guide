export let person = {
    age : 69,
    name: "Mike Hunt",
    favoriteNumber: 42,
    logObjName(bool) {
        if(bool) console.log(this.name);
        return console.log('chose not to log');
    }
}