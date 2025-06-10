//Berat Badan Ideal

document.getElementById('BMI').addEventListener('submit', function(e) {
    e.preventDefault()

    const weight = parseFloat(document.getElementById('bb').value)
    const height = parseFloat(document.getElementById('tb').value)

    const hasilBMI = hitungBMI(weight, height)

    document.getElementById('result').innerHTML = 'Hasil BMI anda ' + hasilBMI.toFixed(2)
})
const hitungBMI = (bb, tb) => {
    tb = tb/100 //Konversi Tinggi Badan
    return bb / (tb*tb)
}
