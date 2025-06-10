function convert() {
    let rupiah = document.getElementById('rp').value;
    let mataUang = document.getElementById('mu').value;

    let uang = 0;
    if (mataUang === 'Dollar') {
        uang = 14901
    } else if (mataUang === 'Yen') {
        uang = 107
    } else if (mataUang === 'Poundsterling') {
        uang = 18553
    }

    let hasil = rupiah / uang;
    document.getElementById('Konversi').value = hasil.toFixed(2) + " " + mataUang;
}
