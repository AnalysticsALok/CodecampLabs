// class House {
//   constructor(_name, _color, _floor) {
//     this.name = _name
//     this.color = _color
//     this.floor = _floor
//   }
//   openWindow() {
//     console.log(`${this.name} Open window`)
//   }
//   openTheDoor() {
//     console.log(`${this.name} Open The Door`)
//   }
// }
// let house1 = new House('Home 1', 'white', 2)
// console.log(`Name : ${house1.name} color: ${house1.color} have floor : ${house1.floor}`)
// house1.openWindow()
// house1.openTheDoor()



// class User{
//   constructor(_name){
//     this.name = _name;
//   }
//   sayHi(){
//     console.log(this.name + " GOOD JOB!");
//   }
// }

// let user1 = new User('John');
// let user2 = new User('Alok');

// console.log(user1.name)

// user2.sayHi()

// console.log(user2)


// class User {
//   constructor(_name){
//     this.name = _name
//   }

//   sayHi(){
//     console.log(`Hello ${this.name}`)
//   }
// }

// let userFirst =  new User('ALOK')
// let userSecound =  new User('MICKEY')
// let userThird =  new User('BOBBY')

// console.log(userFirst)
// console.log(userSecound)
// console.log(userThird)
// userFirst.sayHi()
// userSecound.sayHi()
// userThird.sayHi()


// class User {
//   login(){
//     console.log('User login');
//   }
// }

// // let user1 = new User()

// // user1.login()


// class Admin extends User {
//   updatePrice(){
//     console.log('Admin update price');
//   }
// }

// let admin1 = new Admin()
// admin1.login();
// admin1.updatePrice()


// class User {
//   login(){
//     console.log('user login')
//   }
// }
// class Admin extends User {
//   login(){
//     console.log('admin login')
//   }
// }

// const admin = new Admin();
// admin.login();

// let user1 = new User();
// user1.login()


// class User {
//   login(){
//     console.log('user login')
//   }
// }

// class Admin extends User {
//   constructor(){}
// }

// const admin = new Admin();


// class User {
//   login() {
//     console.log('user login');
//   }
// }
// class Admin extends User {
//   constructor() { super(); }
// }
// const admin = new Admin(); // No Error


// class User {
//   login(){
//     console.log('user login')
//   }
// }

// class Admin extends User {
//   constructor() { super(); }
// }
// const admin1 = new Admin()

// admin1.login()










// class Calculartor {
//   constructor(_inint = 0){
//     this.value = _inint
//   }
//   add(num){
//     this.value += num
//     return this
//   }

//   subtract(num){
//     this.value -= num
//     return console.log(this)
//   }
//   multiply(num) {
//     this.value *= num
//     return console.log(this)
//   }
//   divide(num) {
//     this.value /= num
//     return console.log(this)
//   }

//   show(){
//     console.log(`Value = ${this.value}`)
//   }
// }

// let restult = new Calculartor(10)
// restult.show()
// console.log(restult.add(5))
// restult.show()
// restult.subtract(5)
// restult.show()
// restult.multiply(5)
// restult.show()
// restult.divide(2)
// restult.show()



// class Sale {
//   constructor(_name,_amount,_price){
//     this.name = _name
//     this.amount = _amount
//     this.price = _price
//   }
//   calcPrice(){
//     return  this.price * this.amount 
//   }
// }

// class Beverange extends Sale {
//   constructor(_discount, _name, _amount, _price){
//     super(_name, _amount, _price)
//     this.discount = _discount
//   }
// }
// let beverage = new Beverange('Pepsi',2,24)

// console.log(beverage.name)
// console.log(`Amount is ${beverage.amount}`)
// console.log(`Price is ${beverage.price}`)
// console.log(beverage.calcPrice())



// let arr = [1,2,3,4]
// let  = {
//   name : "alok"
// }

// // console.log(Array.isArray(arr))
// // console.log(Array.isArray())


// // function isArray(input){
// //  return Array.isArray(input)
// // }

// // let isArray = (input) => Array.isArray(input)

// console.log(isArray(arr))
// console.log(isArray())


// let user = {
//   name : 'John',
//   age: 27
// };

// console.log(Object.keys(user))
// console.log(Object.values(user))
// console.log(Object.entries(user))


// let user = { name: 'John', age: 27 };


// for (let key of Object.keys(user)){
//   console.log(key)
// }
// for (let value of Object.values(user)){
//   console.log(value)
// }
// for (let pair of Object.entries(user)){
//   console.log(pair)
// }


// let salaries = {
//   John: 100,
//   Ann: 160,
//   Pete: 130
// };


// let value = Object.values(salaries)
// // for(let key of Object.keys(salaries)){
// //   console.log(key)}

// // totalSalaries = 0
// // for ( let value of Object.values(salaries)){
// //    totalSalaries += value
// // }

// totalSalaries = value.reduce((acc,cur)=> acc += cur)
// console.log(totalSalaries)

// console.log(`Total Salaries are ${totalSalaries}`)


// const myEmptyObj = {key:"value",
//     key2:"value2"
// };

// // Works best with new browsers
// function checkEmptyObj(Obj){
// if(Object.keys(Obj).length === 0)
// {console.log("it's empty")}
// else{console.log("it's not empty")}
// }

// checkEmptyObj(myEmptyObj)

// --------------------------------------------------------------------

// Rest parameters ...
// let func = (...rest)=>{
//   console.log(rest[0])
//   console.log(rest[1])
//   console.log(rest[2])
//   console.log(rest[3])
//   console.log(rest[4])
//   console.log(rest[5])
//   console.log(rest[6])
//   console.log(rest[7])
//   console.log(rest[8])
// }


// func(1,'Hello','Codecamp',"ALOK",5,6,7,8,9)



// function sum(...args){
//   let result = 0;
//   for(let arg of args) result += arg;
//   return result;
// }
// console.log(sum(1));
// console.log(sum(1,2));
// console.log(sum(1,2,3));

// function sum(...args) {
//   let result = 0;
//   for (let arg of args) result += arg;
//   return result
// }
// console.log(sum(1,2,3,4,5,6,7,8,9,10))

// function showName(firstName, lastName, ...titles) {
//   console.log(firstName + ' ' + lastName); // Julius Caesar
//   // the rest go into titles array
//   // i.e. titles = ["Consul", "Imperator"]
//   console.log(titles); // Consul
//   console.log(titles[0]); // Consul
//   console.log(titles[1]); // Imperator
//   console.log(titles.length); // 2
// }
// showName('Julius', 'Caesar', 'Consul', 'Imperator');


// let arr = [3,5,1];

// console.log(Math.max(arr));

// console.log(Math.max(arr[0],arr[1],arr[2]));

// console.log(Math.max(...arr))


// let str = 'Hello'

// console.log([...str])



// let arr = [1,2,3]

// let arrCopy = [...arr]

// console.log(arrCopy)
// console.log(arr === arrCopy)

// let  = { a: 1, b: 2, c: 3 };
// // spread the object into a list of parameters
// // then return the result in a new object
// let objCopy = { ... };
// // are the objects equal?
// console.log( === objCopy); // false (not same reference)

// lab1

// let multiply = (...nums) => {
//     return nums.reduce((acu,cur)=> acu += cur,0)
// }

// let result = multiply(1,2,3,4,5)
// console.log(result)

// lab2
// let filteroutodds = (...nums) => nums.filter(element => element % 2 === 0);
// console.log(filteroutodds(1,2,3,4,5,6))
// lab 3
// const obj1 = { a: 1, b: 3 };
// const obj2 = { b: 2, c: 4 };
// const obj3 = { d: 5 };
// function mergeObjects(...objects) {
//     return Object.assign({}, ...objects);
// }

// const merged = mergeObjects(obj1, obj2, obj3);
// console.log(merged); 
// Lab 3
// จงเขียนฟังก์ชัน mergeObjects โดยพารามิเตอร์ของฟังก์ชันสามารถรับ Object ได้ไม่จำกัด 
// และให้ return ค่าเป็น Object ที่เกิดจาก Object ในพารามิเตอร์มา merge กัน

// let mergeObj = (...) => {
//   let empty = {}
//   for (let i = 0; i < .length; i++) {
//     Object.assign(empty, [i])
//   }
//   return empty
// }
// let obj1 = {
//   fname: 'phongpaht',
//   lname: 'japhichom'
// }
// let obj2 = {
//   nickName: 'tam'
// }
// let result = mergeObj(obj1, obj2)


// lab 4
// const nums1 = [1, -2, 3, 4];
// const nums2 = [8, 3, -8, 1];

// let newNums = [5,...nums1,-6,-1,...nums2]

// totalNums = newNums.reduce((acc,curr)=> acc += curr,0)
// console.log(totalNums)
// console.log(newNums)

// lab5
// let arrconverter = (array1)=> {
//     array2 = [...array1]
//     array2[3] = array2[3]**2
//     return array2
// }

// // newArr[3] = newArr[3] ** 2
// array1 = [1,2,3,4,5,6]
// console.log(arrconverter(array1))

// lab6
// จงเขียนฟังก์ชันที่รับค่า ชื่อ นามสกุล และ งานอดิเรก ซึ่งงานอดิเรกอาจมี 1 หรือมากกว่า 1 ก็ได้ แล้วคืนค่าเป็น ชื่อ, นามสกุล, งานอดิเรก และจำนวนงานอดิเรก โดยใช้คุณสมบัติของ spread parameter

// let profile = (fname,lname,...hobby)=> {
//     console.log(`${fname} ${lname} ${[...hobby]} ${hobby.length} `)
// }


// profile("faris","cuteboy","football","Badminton","Basketball")


// function showName(firstName, lastName, ...titles) {
//     console.log(firstName + ' ' + lastName); // Julius Caesar
//     // the rest go into titles array
//     // i.e. titles = ["Consul", "Imperator"]
//     console.log(titles[0]); // Consul
//     console.log(titles[1]); // Imperator
//     console.log(titles.length); // 2
//   }
//   showName('Julius', 'Caesar', 'Consul', 'Imperator');


// จงเขียนฟังก์ชัน doubleAndReturnArgs โดยรับพารามิเตอร์มาเป็น Array และตัวเลขกี่ตัวก็ได้ และ return ค่าเป็น Array ที่ประกอบด้วยค่าเดิมในพารามิเตอร์ที่เป็น Array และค่าพารามิเตอร์ที่เป็นตัวเลขคูณสอง
// doubleAndReturnArgs([1, 2, 3], 4, 4); 
// expexted result: [1, 2, 3, 8, 8]
// doubleAndReturnArgs([2], 10, 4); 
// expexted result: [2, 20, 8]

// lab7
// let doubleAndReturnArgs = (arr,...num) => {
//     console.log(arr)
//     console.log(num)
//     let doublenum = num.map((item) => item*2)
//     return arr.concat(...doublenum)
// }
// let result = doubleAndReturnArgs([1,2,3],4,5,6,7)
// console.log(result)

// lab9
// จงเขียนฟังก์ชัน cloneArray โดยรับพารามิเตอร์มาเป็น Array และ return ค่าเป็น Array ที่มี element เหมือนกับพารามิเตอร์ที่รับเข้ามาทุกตัว

// let cloneArray = (arr)=> newarr = [...arr]

// arr = ["A","B","C","D"]

// console.log(cloneArray(arr))


// lab10
// จงเขียนฟังก์ชัน cloneObject โดยรับพารามิเตอร์มาเป็น Object และ return ค่าเป็น Object ที่มี key-value เหมือนกับพารามิเตอร์ที่รับเข้ามาทุกตัว

// let cloneArray = ()=> newobj = {...}

//  = {key:"A",key1:"B",key2:"C",key3:"D"}

// console.log(cloneArray())
// console.log(newobj)






// let doubleArr = (arr, ...num) => {
//     console.log(arr)
//     console.log(num)
//     let doubleArr = num.map((item) => item * 2)
//     console.log(doubleArr)
//     return arr.concat(...doubleArr)
//   }
  
//   let result = doubleArr([1, 2, 3], 4, 4, 5, 6, 7)
//   console.log(result)



// ------------------------------------------------------------
  
// let arr = ['John','Doe']

// let [firstName, surname] = arr;
// console.log(firstName);
// console.log(surname)

// console.log(arr)


// let [firstName, , age, , country] = ['John', 'Doe', 27, 'Male', 'Thailand']

// console.log(firstName)
// console.log(age)
// console.log(country)


// let[name1,name2,...rest] = ['John', 'Erik', 'Michael', 'Joshua','Faris'];

// console.log(rest[0]);
// console.log(rest[1]);
// console.log(rest[2]);
// console.log(rest.length)


// let [name = "Guest", surname = "someonelastname"] = ["John"];
// console.log(name)
// console.log(surname)



// let [surname = "someonelastname", name = "guest"] = ["John"];
// console.log(surname)
// console.log(name)





// let user = {
//   username: 'Faris',
//   email: "farismail@mail.com",
//   password: "741837463123749drv68465"
// }

// let {username,email,password}= user;
//   console.log(username)
//   console.log(email)
//   console.log(password)


// let user = {
//   username: 'Faris',
//   email: "farismail@mail.com",
//   password: "741837463123749drv68465"
// }

// let { username:u, email:e, password:p } = user;
// console.log(u)
// console.log(e)
// console.log(p)


// let user = {username:'john', email:'john@gmail', password:"12345"};

// let {password, username , email} = user;
// console.log(username)
// console.log(email)
// console.log(password)

// let user = {
//   username: 'john',
//   password: '123456'
// };
// let {username, email = 'guest@gmail.com',password} = user;
// console.log(username);
// console.log(email);
// console.log(password);

// let options = {
//   size: {
//     width: 100,
//     height: 200
//   },
//   items: ['Cake', 'Donut'],
//   extra: true
// };


// let {
//   size: {
//     width, // 100
//     height // 200
//   },
//   items: [item1, item2], // Cake then Donut
//   extra // true
// } = options;


// console.log(item2)

// function showName(user){
//   console.log(`${user.firstName} ${user.lastName}`);
// }
// showName({firstName:'John',lastName:'Doe'})


// function showName({firstName,lastName}){
//   console.log(`${firstName} ${lastName}`)
// }

// showName({firstName:'John',lastName:'Doe'})


// lab 11
// let [first, second, third] = ['Maya', 'Marisa', 'Chi'];
// console.log(first); //Maya
// console.log(second); //Marisa 
// console.log(third); //Chi

// lab12
// let [raindrops, whiskers, ...aFewOfMyFavoriteThings] = [
//   'Raindrops on roses',
//   'whiskers on kittens',
//   'Bright copper kettles',
//   'warm woolen mittens',
// ];
// console.log(raindrops); // 'Raindrops on roses'
// console.log(whiskers); // 'whiskers on kittens'
// console.log(aFewOfMyFavoriteThings); // 'Bright copper kettles','warm woolen mittens'

// labs 13
// let numbers = [10, 20, 30];
// [numbers[1], numbers[2]] = [numbers[2], numbers[1]];
// console.log(numbers); // *

// lab14
// let facts = { numPlanets: 8, yearNeptuneDiscovered: 1846 };
// let { numPlanets, yearNeptuneDiscovered } = facts;
// console.log(numPlanets); // *
// console.log(yearNeptuneDiscovered); // **

// lab15
// let planetFacts = {
//     numPlanets: 8,
//     yearNeptuneDiscovered: 1846,
//     yearMarsDiscovered: 1659
//   };
//   let { numPlanets, ...discoveryYears } = planetFacts;
//   console.log(discoveryYears); // *
  

// lab16
// function getUserData({ firstName, favoriteColor = 'green' }) {
//     return `Your name is ${firstName} and you like ${favoriteColor}`;
//   }
//  console.log( getUserData({ firstName: 'Alejandro', favoriteColor: 'purple' })); // *
//  console.log( getUserData({ firstName: 'Melissa' })); // **
//  console.log( getUserData({})); // ***
  

// lab17


// let guest = 'Jane';
// let admin = 'Pete';
// [guest,admin] = [admin,guest]

// console.log(guest)
// console.log(admin);

// lab18
// จงเขียนฟังก์ชันตรวจสอบอายุ โดยรับข้อมูล user ที่อยู่ใน object ที่มี keys เป็น firstName lastName และ age โดยถ้า user มีอายุมากกว่า 18 ให้แสดงผลเป็นการทักทายแล้วตามด้วยชื่อ-นามสกุล 
// ในกรณีที่มีอายุน้อยกว่าหรือเท่ากับ 18 ให้แสดงผลว่า ไม่มีสิทธิ์เข้าใช้งาน (ใช้ destructuring)


// let ageValidation = ({fname,lname,age})=> age > 18 ? console.log(`greeting ${fname} ${lname}`): age <= 18 ?console.log("invalid access"):null

// ageValidation({fname:"Faris",lname:"CC",age:18})
// ageValidation({fname:"Bobby",lname:"CC",age:19})
// ageValidation({fname:"Alok",lname:"CC",age:15})


// function getUserData({ firstName, favoriteColor = 'green' }) {
//     return `Your name is ${firstName} and you like ${favoriteColor}`;
//   }
//   getUserData({ firstName: 'Alejandro', favoriteColor: 'purple' }); // *
//   getUserData({ firstName: 'Melissa' }); // **
//   getUserData({}); // ***


// lab19
// จงเขียน Object destructuring โดยกำหนดให้
// ตัวแปร name เก็บค่า name property
// ตัวแปร age เก็บค่า years property
// ตัวแปร isAdmin เก็บค่า isAdmin property หากไม่มีค่าให้ default value เป็น false

// let user = {
//     name: 'John',
//     years: 27
//   };

  
// let {
//     name,
//     years:age,
//     isadmin = false
// } = user


// console.log(name);
// console.log(age);
// console.log(isadmin);

// lab21
// let arr = [1, [2, [[[3, 4], 5], 6]]];
// let[a, [b, [[[c, d], e], f]]] = arr
// console.log(a);
// console.log(b);
// console.log(c);
// console.log(d);
// console.log(e);
// console.log(f);

// lab22
// const  obj = { prop: 5, prop2: 10 };

// let { prop: a, prop2: b } =obj

// console.log(a);
// console.log(b);

// lab 23
// let a, b;
// let { a, b } = {a: 1, b: 2};


// console.log(a)
// console.log(b)

// lab 24
// const [, , , a, b] = [1, 2, 3];

// console.log(a)
// console.log(b)


// lab25
// const q = { prop: 5, prop2: [10, 100] };


// let { prop: x, prop2: [, y] } = q

// console.log(x);
// console.log(y);


// lab26
// const q = {
//     prop: 'Hello',
//     prop2: {
//       prop2: {
//         nested: ['a', 'b', 'c']
//       }
//     }
//   };

//   let   {
//     prop: x,
//     prop2: {
//       prop2: {
//         nested: [, y, ]
//       }
//     }
//   } = q

//   console.log(x);
//   console.log(y);
  
// lab27
// const names = [
//     { firstName: 'John', lastName: 'Doe' },
//     { firstName: 'Jack', lastName: 'Dann' },
//     { firstName: 'Joe', lastName: 'Dunne' }
//   ];

  

// for (let key of names){
//     let{firstName , lastName} = key
//     fullname = `${firstName}  ${lastName}`
//     console.log(fullname)
// }



// lab28
// const users = [
//     { user: "Name1" },
//     { user: "Name2", age: 2 },
//     { user: "Name2" },
//     { user: "Name3", age: 4 }
//   ];

  
//   for (let i of users){
//     let {user,age="unknown"} = i
//     console.log(user,age);
    
//   }

