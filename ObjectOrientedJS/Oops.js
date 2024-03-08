function User(username,logInCount,isLoggedIn){
    this.username = username;
    this.logInCount = logInCount;
    this.isLoggedIn = isLoggedIn;

    return this;
}

const userOne = new User("Ram",15,true);
const userTwo = new User("Shyam",5,false);
console.log(userOne);
//console.log(userTwo);