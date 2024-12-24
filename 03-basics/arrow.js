const user = {
    name: "Talha",
    price: 500,

    welcomeMessage : function(){
        console.log(`Welcome ${this.name} to Our Website!`);
    }
}
 user.welcomeMessage()
 user.name = "Usman"
 user.welcomeMessage()