console.log("test");

document.getElementById("yg1").innerHTML='Alhamdulillah';

var nama = "Angga";
console.log(nama);

var akhir = "sevi";
console.log(akhir);

var usia = "24";
console.log(usia);

var gabungan = nama +' '+ akhir;
console.log(gabungan);

var kerjaan = "programmer";
console.log(kerjaan);

var lengkap = "Nama Saya " + nama + " dan adik saya bernama " + akhir + " usia saya " + usia + " pekerjaan " + kerjaan;
console.log(lengkap);

//document.getElementById("yg2").innerHTML=lengkap;

var t = "total";
var a = parseInt('6');
var b = parseInt('3');
var hasil = t + b+a;
console.log(t);
console.log(hasil);
 var fix = t +' '+ hasil;
 console.log(fix);

 document.getElementById("yg3").innerHTML=fix;

 var umur = 59;
 if (umur <= 60 ? console.log("live") : console.log("die"));

 var laptop = prompt("Apa merk Laptop anda?")
 var ram = prompt("Berapa size RAM ny ?")
 alert("Merk Laptop anda adalah " + laptop + " dengan Ram " + ram + " GB");
 console.log(laptop);
 console.log(ram);

switch (ram) {
    case '1':
        console.log('sangat kurang');
        break;
    case '2':
        console.log('kurang');
        break;
    case '4':
        console.log('cukup');
        break;
    case '8':
        console.log('baik');
        break;
    default:
        console.log('not define');
}