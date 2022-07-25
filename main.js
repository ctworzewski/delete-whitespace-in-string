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


    // let tt = 'czarek   tworz   ewski    ';
    // let tt2 = tt.split(' ').join('');

    