function convert() {
    let celcius = document.getElementById('c').value;
    let konversiSuhu = document.getElementById('ks').value;

    if (konversiSuhu === 'Farenheit') {
        hasil = (celcius*9/5)+32
    } else if (konversiSuhu === 'Kelvin') {
        hasil = Number(celcius) + 273.15
    } else if (konversiSuhu === 'Reamur') {
        hasil = celcius*4/5
    }

    document.getElementById('Konversi').value = hasil + ' ' + konversiSuhu
}