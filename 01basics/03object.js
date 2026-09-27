let JsUser={
    name:"Hitesh",
    age:18,
    email: "harshit@chatgpt.com",
    loggedIn:false,
    lastlogindays : ["monday","Friday"]
}

console.log(JsUser["name"])

JsUser.gretting=function() {
    console.log("Hello Js User")
}

JsUser.grettingsix=function(){
console.log(`Hello Js User, ${this.name}`)
}

console.log(JsUser.gretting())
console.log(JsUser.grettingsix())