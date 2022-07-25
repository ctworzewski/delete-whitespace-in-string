// // // function noSpace(x) {
// // //     if (x == ' ') {
// // //         x.trim();
        
// // // return x
// // //     }
// // //     else {
// // //         console.log('dupa')
// // //     }
// // //     // noSpace.x.trim();
// // //     return x;
// // // }

// // // console.log(noSpace('test'));

// // // noSpace('test ');

// // // let txt1 = 'cezary tworzewski     ';
// // // console.log(txt1)

// // // let txt2 = txt1.trim();
// // // console.log(txt2)



// // // noSpace('czarek i');

// // // function tekst() {
// // //     let tekst = 'czarek ninja ';

// // //     let arr = [...tekst];
// // //     console.log(arr);

// // //     for (let i=0; i <= arr.length; i++) {
// // //         if (arr[i] === ' ') {
// // //             console.log('są puste znaki')
// // //         }
// // //         else {
// // //             console.log('nie ma znaków bialych');
// // //         }
// // //     }
// // // }


// // // if (txt2 === '') {
// // //     console.log('są');
// // // } else {
// // //     console.log('not has');
// // // }

// // //  function checkEmpty() {
// //     let txt1 = ' czarek  tworzewski   ';
// //     // let txt2 = txt1.split("");

// //     let arrTmp = []
    
// //     let txtarr = [...txt1];
// //     // for (let i = 0; i<=txtarr.length; i++) {
// //         if (txtarr === " ") {
            
// //             // console.log(txtarr);
// //             // arrTmp.push(txtarr)
// //             console.log('jest ok');
// //         }else {
// //             console.log('nie jest ok');
// //         }
// //     // }
// // //  }

// // let testtxt = txtarr;
// // let tt = txt1.split('-').join('');
// // console.log('tt', tt)
// // for (let s=0; s<= testtxt.length; s++) {
// //     if (testtxt[s] == ' ' ) {
// //         console.log('super');
// //     }else {
// //         console.log('no super');
// //     }

// // }

// let myName = ' cezary tworzewski ';
// let myArr = [...myName];
// var filtered = myArr.filter(el => {
//     return el !== '';
//   });
// // let ttt = myArr.join().split(' ');
// console.log(myName);
// console.log(myArr);

// for (let i=0; i<=myArr.length - 1; i++){
//     console.log('element o indeksie ' ,i, ' to: ', myArr[i]);

//     if (myArr[i]=== ' ') {
//         // myArr.push(myArr[i]);
        
//         // console.log(checkArr);
//     } else {
//         console.log('nie ma whitespaces');
//     }
// }



    let txt = ' cezary  tworzewski';
    
    const arr = [...txt];
    // for (let i = 0; i<=arr.length-1; i++) {
    //     for (let j=0; j<=arr.length;j++) {

        
    //         if (arr[j] !== ' ') {
    //             return arr[j];
    //         }
    //         else {
    //             console.log('dupa');
    //         }
    //     }
    // }

    let arr1 = arr.join('');

    let arr3 = ['p','i','e','s','e','k'];

    let arr4 =['', 'k','o','t','e','k',''];
    let arr5 = arr4.indexOf('');

    let arr6 = arr4.sort();

    if (arr4 === ''){
        
    }

    let c = 'Ala ma kota ';
    let cc = c.split(' ');

    // cc.forEach(function(el) {
    //    console.log(el) 
    // });

    

    function testStr() {
        let str = ' cezary tworzewski  ';
        let str2='';
        console.log('Ilość znaków przed zmianą: ', str.length);
        for (let i=0; i<= str.length - 1; i++) {        
            if (str[i] !== ' ') {
                str2 =  str2 + str[i];
            }else {
                console.log('blad');
            }
        }
        console.log('Ilość znaków po zmianie: ', str2.length);
        console.log('Oczekiwana wartość to: ', str2);
    }


    let tt = 'czarek   tworz   ewski    ';
    let tt2 = tt.split(' ').join('');

    let bb = ' monika  tworzew  ska     ';
    let bb2 = bb.replaceAll('o', '');

    let kot = 'Ala ma kota';
    