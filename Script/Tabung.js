const rumusTabung = () => {
    const t = document.getElementById('Tinggi').value
    const r = document.getElementById('Jari-Jari').value

    const phi = 3.14
    const hitungLuasTabung = (r, t) => 2 * phi * r * (r + t)
    const hitungVolumeTabung = (r, t) => phi * r**2 * t 

    let luas = hitungLuasTabung(r, t)
    let volume = hitungVolumeTabung(r, t)

    const textLuas = document.getElementById('text-luas')
    textLuas.innerHTML = luas.toFixed(1)
    const textVolume = document.getElementById('text-volume')
    textVolume.innerHTML = volume.toFixed(1)
    
}

const button = document.getElementById('btn').addEventListener('click', rumusTabung)