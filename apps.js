// import { saygoodbye, hi } from "./module1.js"  
import * as say from "./module1.js"  
import sayHey from "./module2.js"


let sayhi = ()=> console.log("Hi")

sayhi()


say.sayhello()
say.saygoodbye()
sayHey()