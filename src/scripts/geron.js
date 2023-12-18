"use strict";
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
var EColors;
(function (EColors) {
    EColors[EColors["black"] = 0] = "black";
    EColors[EColors["red"] = 1] = "red";
    EColors[EColors["green"] = 2] = "green";
})(EColors || (EColors = {}));
const color = EColors.black;
console.log(color);
function getColorText(color) {
    switch (color) {
        case EColors.black:
            return "черный";
        case EColors.red:
            return "зеленый";
        default:
            return "такого цвета нет";
    }
}
console.log(getColorText(EColors.black));
console.log(getColorText(EColors.red));
console.log(getColorText(EColors.green));
function getName(callback) {
    let name = "Ilya";
    callback(name);
}
function sayHi(name) {
    console.log("Привет " + name);
}
function sayBye(name) {
    console.log("Пока " + name);
}
getName(sayBye);
getName(sayHi);
var EOperators;
(function (EOperators) {
    EOperators["Tele2"] = "Tele2";
    EOperators["Beeline"] = "Beeline";
    EOperators["Kcell"] = "Kcell";
    EOperators["Activ"] = "Activ";
})(EOperators || (EOperators = {}));
function getPrice(operatorName) {
    switch (operatorName) {
        case EOperators.Kcell:
            return 0;
        case EOperators.Beeline:
            return 2400;
        case EOperators.Tele2:
            return 1800;
        case EOperators.Activ:
            return 1000;
    }
}
let operatorName = EOperators.Tele2;
console.log(`Цена подключения тарифа для оператора ${operatorName} - составляет ${getPrice(operatorName)} тенге`);
let orderCost = 4500;
let promocode = "promocode";
if (orderCost >= 4000) {
    console.log("Доставка бесплатная");
}
else if (promocode == "promocode") {
    console.log("Стоимость заказа с учетом скидки " + orderCost * 0.15 + "тенге");
}
const company = {
    income: 3200000,
    total: 416,
    quit: 60,
    new: 45
};
console.log(company);
company.total = 400;
company.quit = 44;
company.new = 64;
