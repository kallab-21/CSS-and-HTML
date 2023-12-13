// commenting here! 
// console.log('I am here to race');
// let a = 'red';
// let b = 'blue';
// let c = 'empty';
// c = a ;
// a = b;
// b = c;
// console.log(a);
// console.log(b);

// function isLandscape(width , height){
//     return (width > height);
// }
// console.log(isLandscape(10, 80));

// function showStars(rows)
// {
//      for(let row=1; row<=rows; row++)
//      {
//         let pattern= '';
//         for(let i=0; i<row; i++)
//             pattern +='*';
//         console.log(pattern);
//      }
// }
// showStars(5);

const house = {
    tv: 'sony',
    fridge: 2,
    paint(){
        console.log('red');
    }
};
// house.phone = 'five';
// house.kids = 3;
// // house.paint= function(){ 
// //     console.log('red');
// // };
 console.log(house.paint());

let address = {
    street: 'adiabun',
    city: 'adwa',
    zipcode: '7056'
};

function showAddress(address) {
    for(let key in address)
        console.log(key,address[key]);
}

showAddress(address);