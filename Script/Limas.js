const rumusLimas = () => {
    const la = document.getElementById('la').value
    const ls = document.getElementById('ls').value
    const t = document.getElementById('t').value

    const hitungLuasLimas = (la, ls) => la * la + ls
    const hitungVolumeLimas = (la, t)=> 1/3 * la * la * t

    let luas = hitungLuasLimas(la, ls)
    let volume = hitungVolumeLimas(la, t)

    const textLuas = document.getElementById('text-luas')
    textLuas.innerHTML = luas
    const textVolume = document.getElementById('text-volume')
    textVolume.innerHTML = volume.toFixed(2)
    
}

const button = document.getElementById('btn').addEventListener('click', rumusLimas)