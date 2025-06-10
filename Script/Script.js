
const rumusBalok = () => {
    const p = document.getElementById('Panjang').value
    const l = document.getElementById('Lebar').value
    const t = document.getElementById('Tinggi').value

    const hitungKelilingBalok =  (p, l , t) => 2 * (p*l * l*t * p*t)
    const hitungVolumeBalok = (p,l,t) => p * l * t

    let keliling = hitungKelilingBalok(p, l, t)
    let volume = hitungVolumeBalok(p,l,t)

    const textKeliling = document.getElementById('text-keliling')
    textKeliling.innerHTML = keliling
    const textVolume = document.getElementById('text-volume')
    textVolume.innerHTML = volume

    
}

const button = document.getElementById('btn').addEventListener('click', rumusBalok)
