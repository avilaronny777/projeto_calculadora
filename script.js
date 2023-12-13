// tema dark e light
const lightTheme = "light.css"
const darkTheme = "dark.css"
// display
const res = document.getElementById("result")


// Funcao alterando theme do app
function changeTheme() {
    const theme = document.getElementById("theme")
    if (theme.getAttribute("href" === lightTheme)){
        theme.setAttribute("href", darkTheme)
    } else {
        theme.setAttribute("href", lightTheme)
    }
}

// manipulação de display
function liveScreen(valueDeEntrada) {
    if (!res.value) {
        res.value = ""
    }
    res.value += valueDeEntrada
}

// calcula resultados
function calculate(value){
    const calculateValue = eval(value || null)
    if (isNaN(calculateValue)) {
        res.value = "nao e possivel dividir por zero"
    } else {
        res.value = calculateValue
    }
}