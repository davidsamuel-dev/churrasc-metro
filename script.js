
// Carne - 400 gr por pessoa + de 6 horas - 650
// Cerveja - 1200ml por pessoa + 6 horas - 2000ml
// Refrigerante/agua - 1000ml por pessoa + 6 horas 1500ml

// crianças valem por 0,5


function loated() {

    var carne_pp = 400
    var cerveja_pp = 1200
    var refri_agua_pp = 1000

    var carne = document.getElementById("carne")
    var cerveja = document.getElementById("cerveja")
    var bebida = document.getElementById("bebida")

    var calc = document.getElementById("calcular")
    var limp = document.getElementById("limpar")

    var resultado = document.getElementById("resultado")


    calc.addEventListener("click", calcular)

    function calcular() {

        var qtd_adultos = document.getElementById("adultos").value
        var qtd_criancas = document.getElementById("criancas").value
        var duracao = document.getElementById("duracao").value

        if (parseInt(qtd_adultos) > 0 & parseInt(qtd_criancas) >= 0 & parseInt(duracao) > 0) {

            calc.style.cursor = "pointer"
    

            calc.style.display = "none"
            limp.style.display = "block"
            resultado.style.display = "block"




            if (duracao >= 6) {
                carne_pp = 650
                cerveja_pp = 2000
                refri_agua_pp = 1500
            }

            carne.innerText = (((qtd_adultos * carne_pp) + (qtd_criancas * carne_pp) / 2) / 1000)
            cerveja.innerText = Math.ceil((qtd_adultos * cerveja_pp) / 355)
            bebida.innerText = Math.ceil(((qtd_adultos * refri_agua_pp + (qtd_criancas * carne_pp) / 2)) / 2000)
        } else {
            alert("Insira os dados corretamente")
        }

    }
    limp.addEventListener("click", limpar)

    function limpar() {
        calc.style.display = "block"
        limp.style.display = "none"
        resultado.style.display = "none"

        document.getElementById("adultos").value = null
        document.getElementById("criancas").value = null
        document.getElementById("duracao").value = null
    }
}

// projeto churrascometro  prog BR


