//bt1
// let a = +prompt("Nhap so bat ky");
// let kq = binhphuong(a);
// document.write(kq);
// function binhphuong(b){
//     return b**2;
// }
//bt2
// let a = +prompt("Nhap duong kinh hinh tron");
// chuvi(a);
// dientich(a);
// function chuvi(b){
//     let cV = 2*b*3.14;
//     alert(cV);
// }
// function dientich(b){
//     let dT = Math.pow(b,2)*3.14;
//     alert(dT);
// }
//bt3
// let a = +prompt("Nhap so nguyen");
// giaithua(a);
// function giaithua(b){
//     let sum = 1;
//     for(var i = 1;i<b;i++){
//         sum*=i;
//     }
//     alert(sum);
// }
//bt4
// let a = prompt("Nhap ky tu");
// alert(checkNumer(a));
// function checkNumer(b){
//     let c = !isNaN(b);
//     return c;
// }
//bt5
// let a = +prompt("so 1: ");
// let b = +prompt("so 2: ");
// let c = +prompt("so 3: ");
// alert("So nguyen nho nhat la: "+ findMin(a,b,c));
// function findMin(a,b,c){
//     let min = a<b?a:b;
//     min = min<c?min:c;
//     return min;
// }
//bt6
// let a = +prompt("so 1: ");
// let kq = checkNumber(a);
// function checkNumber(a){
//     if(a>=0){
//         return true;
//     }else{
//         return false;
//     }
// }
//bt7
// let a = +prompt("Nhap vao so 1");
// let b = +prompt("Nhap vao so 2");
// switchNumber(a,b);
// function switchNumber(a,b){
//     let c = a;
//     a = b;
//     b = c;
//     alert("So a " + a + ", so b: "+b);
// }
// bt8
// reverseNum();
// function reverseNum(){
//     let a = +prompt("Nhap so luong phan tu");
//     let arr=[];
//     for(var i = 0; i<a; i++){
//         var b = +prompt("Nhap so");
//         arr.push(b);
//     }
//     arr.reverse();
// }
//bt9
// let a = checkchar();
// alert(a);
// function checkchar(){
//     let flag = -1
//     var a = prompt("Nhập vào mảng ký tự");
//     var b = prompt("Nhap ky tu");
//     let count = 0;
//     let arr = a.split("");
//     for(var i =0; i<arr.length; i++){
//         if(b == arr[i]){
//             count++;
//         }
//     }
//     if(count==0){
//         return flag;
//     }else{
//         return count;
//     }
// }
