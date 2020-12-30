alert('Selamat Datang di Program sederhana mengecek angka ganjil dan genap!')

var again = true;

while(again===true){
    let angka = prompt("Masukkan angka :");

    if (angka % 2 == 0) {
        alert(`${angka} adalah bilangan genap!`);
    }else{
        alert(`${angka} adalah bilangan ganjil!`);
    }
again = confirm('Mau coba lagi ?');
}

alert('Terima kasih!\nSelamat melanjutkan aktivitas kembali!');