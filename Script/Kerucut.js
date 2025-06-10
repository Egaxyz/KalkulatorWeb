const rumusKerucut = () => {
    const t = document.getElementById('Tinggi').value
    const r = document.getElementById('Jari-Jari').value
    const s = document.getElementById('s').value

    const phi = 3.14
    const hitungLuasKerucut = (t, r) => 1/3 * phi * r**2 * t
    const hitungVolumeKerucut = (r, s)=> (phi * r**2) + (phi * r * s)

    let luas = hitungLuasKerucut(t, r)
    let volume = hitungVolumeKerucut(r, s)

    const textLuas = document.getElementById('text-luas')
    textLuas.innerHTML = luas.toFixed(2)
    const textVolume = document.getElementById('text-volume')
    textVolume.innerHTML = volume.toFixed(2)
    
}

const button = document.getElementById('btn').addEventListener('click', rumusKerucut)