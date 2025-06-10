const rumusKubus = () => {
    const sisi_1 = document.getElementById('Sisi_1').value
    const sisi_2 = document.getElementById('Sisi_2').value
    const sisi_3 = document.getElementById('Sisi_3').value

    const hitungKelilingKubus = sisi_1 => 12*sisi_1
    const hitungVolumeKubus = (sisi_1, sisi_2, sisi_3) => sisi_1*sisi_2*sisi_3

    let keliling = hitungKelilingKubus(sisi_1)
    let volume = hitungVolumeKubus(sisi_1, sisi_2, sisi_3)

    const textKeliling = document.getElementById('text-keliling')
    textKeliling.innerHTML = keliling
    const textVolume = document.getElementById('text-volume')
    textVolume.innerHTML = volume
    
}

const button = document.getElementById('btn').addEventListener('click', rumusKubus)