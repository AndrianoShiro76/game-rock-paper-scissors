function getPilihanComputer() {
    const comp = Math.random() ;
    if( comp < 0.34 ) return 'rock';
    if( comp >= 0.34 && comp < 0.67 ) return 'scissors';
    return 'paper';
    
}

function getHasil(comp, player) {
    if( player == comp ) return 'DRAW!';
    if( player == 'rock' ) return ( comp == 'scissors' ) ? 'WIN!' : 'LOSE!';
    if( player == 'scissors' ) return ( comp == 'rock' ) ? 'LOSE!':'WIN';
    if( player == 'paper' ) return ( comp == 'scissors' ) ? 'LOSE!':'WIN!';
}

function putar() {
    const imgComputer = document.querySelector('.img-komputer');
    const gambar = ['rock', 'paper', 'scissors'];
    let i = 0;
    const waktuMulai = new Date().getTime();
    setInterval(function() {
        if( new Date().getTime() - waktuMulai > 1000 ) {
            clearInterval;
            return;
        }
        imgComputer.setAttribute('src', 'img/' + gambar[i++] +'.png');
        if( i == gambar.length ) i = 0;
    }, 100)
    
}


const pilihan = document.querySelectorAll('li img');
pilihan.forEach(function(pil) {
    pil.addEventListener('click', function(){
        const pilihanComputer = getPilihanComputer()
        const pilihanPlayer = pil.className ;
        const hasil = getHasil(pilihanComputer, pilihanPlayer);

        putar();

        setTimeout(function() {
        const imgComputer = document.querySelector('.img-komputer')
        imgComputer.setAttribute('src', 'img/' + pilihanComputer + '.png');

        const infoHasil = document.querySelector('.info');
        infoHasil.innerHTML = hasil;
        
        }, 1000)
    });
});























// var tanya = true;
// while( tanya ) {
//     // menangkap pilihan player
//     var p = prompt('pilih : gajah, semut, orang');

//     // menangkap pilihan computer
//     // membangkitkan bilangan random
//     var comp = Math.random();

//     if( comp < 0.34 ) {
//         comp = 'gajah';
//     } else if( comp >= 0.34 && comp < 0.67 ) {
//         comp = 'orang';
//     } else {
//         comp = 'semut';
//     }

//     // menentukan rules
    // var hasil = '';
    // if( p == comp ) {
    //     hasil = 'SERI!';
    // } else if( p == 'gajah' ) {
    //     hasil = ( comp == 'orang' ) ? 'MENANG!' : 'KALAH!';
    // } else if( p == 'orang' ) {
    //     hasil = ( comp == 'gajah' ) ? 'KALAH!' : 'MENANG!';
    // } else if( p == 'semut' ) {
    //     hasil = ( comp == 'orang' ) ? 'KALAH' : 'MENANG!';
    // } else {
    //     hasil = 'memasukkan pilihan yang salah!';
    // }

//     // tampilkan hasilnya
//     alert('Kamu memilih : ' + p + ' dan Komputer memilih : ' + comp + '\nMaka hasilnya : Kamu ' + hasil);

//     tanya = confirm('lagi?');
// }

// alert('terimakasih sudah bermain.');
