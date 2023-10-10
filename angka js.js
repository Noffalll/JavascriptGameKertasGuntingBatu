// const p = prompt('pilih: kertas, gunting, batu');

// const comp = Math.random();
// console.log(comp);

// var p = prompt('pilih: kertas, gunting, batu');

// var comp = Math.random();
 
// if(comp < 0.38){
//     comp = 'kertas';
// }else if (comp>=0.38 && comp < 0.67){
//     comp = 'gunting';
// }else{
//     comp = 'batu';
// }

// console.log(comp);

// var hasil = '';
// if (p == comp){
//     hasil = 'SERI';
// }else if(p == 'kertas'){
//     if(comp == 'batu'){
//         hasil ='MENANG';
//     }else{
//         hasil = 'KALAH';
//     }
// }else if(p == 'gunting'){
//     if(comp == 'kertas'){
//         hasil = 'MENANG';
//     }else{
//         hasil = 'KALAH';
//     }
// }else if(p == 'batu'){
//     if(comp == 'kertas'){
//         hasil = 'KALAH';
//     }else{
//         hasil = 'MENANG';
//     }
// } else{
//     hasil = 'Masukkan pilihan yang BENAR';
// }

// alert('Kamu memilih : ' + p + ' dan komputer memilih : ' + comp + '\nMaka hasilnya : Kamu ' + hasil);



let chance = 3;

while (0 <= chance) {
  //input player's gues
  let computer = Math.floor(Math.random() * 10 + 1);
  let playerGuess = prompt("Kamu harus Pilih angka 1-10 " +computer);
  //computer number

  

  let result = "";
  let hasil = 1;

  //rules
  if (playerGuess == computer) {
    result = "MENANG" + hasil;
  } else if (playerGuess > computer) {
    hasil++;
    result = "Terlalu Rendah";
  } else {
    hasil++;
    result = "Terlalu Tinggi";
  }

  alert(`${result}\nKesempatan anda ${chance}`);

  if (chance == 0) {
    alert(`Maaf, kesempatan anda sudah habis\nJawaban Yang benar adalah ${computer}`);
  }

chance--;
}