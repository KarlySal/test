// let bread1: string = "московский ";
// let bread2: string = "бородинский ";
// if (bread1 == "московский " && bread2 == "бородинский ") {
//   console.log("Молодец");
// }
// // опреатор и &&
// if(bread1 == "московский " && bread2 == "бородинский"){
//   console.log("Молодец")
// }
// // оператор или ||
// if (bread1 == "московский " || bread2 == "бородинский ") {
//   console.log("Молодец");
// }
// // оператор не !
// if (bread1 != "московский ") {
//   console.log("Молодец");
// }

// let experienct: number = 10;
// let projects: number = 50;
// let qualityOfWorking: number = projects / experienct;

// if (qualityOfWorking >= 4) {
//   console.log("Сотрудник эффективен");
// } else if (qualityOfWorking >= 3) {
//   console.log("Сотрудник должен улучшить результаты");
// } else {
//   console.log("Сотруднику необходимо пройти переквалификацию");
// }

// type TStudentPlace = "школа" | "колледж";
// let studentPlace: TStudentPlace = "колледж";
// type TStringOrNumber = string | number;
// let student: TStringOrNumber = 20;
// student = "Иван";

// type TStudent = "college" | "school";
// let student: TStudent = "college"
// let resultExam:number = 200

// if (resultExam >=200){
//   if(student == "college"){
//     console.log("Вы поступите на второй курс")
//   }
// else{
//   console.log("Вы поступите на первый курс")
// }
// }
// else{
//   console.log("Вы не набрали проходнолй балл")
// }

// function getName(humanName:string){
//   console.log (humanName)
// }
// getName("Karlygash")
// getName("name")
// getName("какое-то слово")

// function work(num1:number, num2:number){
//   console.log(num1*num2)
// }
// work(2,5)

// function priv(num1:number, num2:number){
//   if(num2 == 0){
//     return "Ошибка. На ноль делить нельзя"
//   }
//  else{
//   return num1/num2
//  }
// }
// priv(18,9)

// function getBonus(sallary: number) {
//   if (sallary > 400000) {
//     console.log(sallary, sallary + sallary * 0.1);
//   } else if (sallary > 300000) {
//     console.log(sallary, sallary + sallary * 0.15);
//   } else {
//     console.log(sallary, sallary + sallary * 0.2);
//   }
// }

// enum EColors {
//   black,
//   red,
//   green,
// }
// const color = EColors.black;
// console.log(color);
// function getColorText(color: EColors) {
//   switch (color) {
//     case EColors.black:
//       return "черный";
//     case EColors.red:
//       return "зеленый";
//     default:
//       return "такого цвета нет";
//   }
// }
// console.log(getColorText(EColors.black))
// console.log(getColorText(EColors.red))
// console.log(getColorText(EColors.green))

// function getName(callback:(name:string) => void){
//   let name:string = "Ilya"
//   callback (name)
// }
// function sayHi(name:string){
//   console.log("Привет " + name)
// }
// function sayBye(name:string){
//   console.log("Пока " + name)
// }
// getName(sayBye)
// getName(sayHi)

// enum EOperators {
// Tele2 = "Tele2" ,
// Beeline = "Beeline",
// Kcell = "Kcell",
// Activ = "Activ"
// }
// function getPrice(operatorName:EOperators){
//   switch(operatorName){
//     case EOperators.Kcell:
//       return 0
//       case EOperators.Beeline:
//         return 2400;
//         case EOperators.Tele2:
//       return 1800;
//       case EOperators.Activ:
//       return 1000;
//   }
// }
// let operatorName:EOperators = EOperators.Tele2
// console.log(`Цена подключения тарифа для оператора ${operatorName} - составляет ${getPrice(operatorName)} тенге`)

// let orderCost: number = 4500
// let promocode: string = "promocode"
// if (orderCost >=4000) {
//   console.log("Доставка бесплатная")
// }
// else if (promocode == "promocode") {
//   console.log("Стоимость заказа с учетом скидки " + orderCost*0.15 + "тенге")
// }

// type TCompany = {
//   income:number,
// total: number,
// quit: number,
// new:number}
// const company: TCompany = {
//   income:3200000,
//   total: 416,
//   quit: 60,
//   new:45
// }
// console.log(company)
// company.total = 400
// company.quit = 44
// company.new = 64

// type TYears = number[]
// type TSeasons = string[]
// const Years = [2019, 2020, 2021, 2022, 2023, 2024]
// const Seasons = ["winter", "spring", "summer", "autumn"]
// console.log (Years[3])
// console.log (Seasons[2])
// console.log(Seasons[3])
// console.log(Years[0])

// type TPerson = {
//   name:string,
//   age:number
// }
// const People:TPerson[] = [
//   {
//     name:"name",
//     age:44
//   },
//   {
//     name:"name1",
//     age:31
//   },
//   {
//     name:"name2",
//     age:28
//   },
// ]
// console.log(People[1].age)
// console.log(People[0].name)
// console.log(People[2])

let monthes = [
{
  title: "Январь",
  days:31
},
{
  title: "Февраль",
  days:28
},
{
  title: "Март",
  days:21
},
{
  title: "Апрель",
  days:25
},
{
  title: "Май",
  days:17
},
]
monthes.push({
  title:"Июнь",
days:31
})
for(let i = 0; i < monthes.length; i++){
  if(monthes[i].days < 30){
    console.log(monthes[i])
}
}
let sumOfDays = 0
let minDays = monthes[0].days
for(let i = 0; i < monthes.length; i++){
  if(monthes[i].days < 30){
    console.log(monthes[i])
    sumOfDays += monthes[i].days
  }

  for(let i = 0; i < monthes.length; i++){
  if(monthes[i].days < minDays){
    minDays = monthes[i].days
  }
}

