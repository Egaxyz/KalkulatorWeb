const rumusBola = () => {
    const r = document.getElementById('Jari-Jari').value

    const phi = 3.14

    const hitungLuasBola =  r => 4 * phi * r**2
    const hitungVolumeBola = r => 4/3 * phi * r**3

    let luas = hitungLuasBola(r)
    let volume = hitungVolumeBola(r)

    const textLuas = document.getElementById('text-luas')
    textLuas.innerHTML = luas.toFixed(2)
    const textVolume = document.getElementById('text-volume')
    textVolume.innerHTML = volume.toFixed(2)

    
}

const button = document.getElementById('btn').addEventListener('click', rumusBola)
