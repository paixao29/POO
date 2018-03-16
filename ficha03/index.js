function output (texto){
    console.log(texto)
    let elemento = document.getElementById('output')
    elemento.innerHTML +=texto + " ";
}
function h() {
    let palavra = prompt("Escreva a palavra a codificar")
    let vezes = parseInt(prompt("Quantas vezes"))
    let cifra = []
    let abc = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","x","y","z"]
    for (let i = 0; i<palavra.length;i++)
    {
        for(let j = 0 ; j<abc.length;i++)
        {
            if(palavra == abc)
            {
                cifra = abc[i+j]
            }
        }
    }
    output(abc)
   

}