let words: string[] = [
    'COMPUTADORA',
    'AGUACATE',
    'PAPAYA',
    'ANIME',
    'MUSICA',
    'VETERINARIO',
    'CELULAR',
    'VEHICULO',
    'TELEFONO'
]

export function getRandomWord(){
    const randomIndex = ( Math.floor( Math.random() * words.length ) );
    return words[randomIndex];
}