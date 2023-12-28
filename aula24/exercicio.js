function getDiaSemana(diaSemana) {
    let diaSemanaTexto;

    switch (diaSemana) {
        case 0:
            diaSemanaTexto = "Domingo"
            return diaSemanaTexto;
        case 1:
            diaSemanaTexto = "Segunda-feira"
            return diaSemanaTexto;
        case 2:
            diaSemanaTexto = "Terça-feira"
            return diaSemanaTexto;
        case 3:
            diaSemanaTexto = "Quarta-feira"
            return diaSemanaTexto;
        case 4:
            diaSemanaTexto = "Quinta-feira"
            return diaSemanaTexto;
        case 5:
            diaSemanaTexto = "Sexta-feira"
            return diaSemanaTexto;
        case 6:
            diaSemanaTexto = "Sabádo"
            return diaSemanaTexto;
    }
}

function getMes(mes) {
    let mesTexto;

    switch (mes) {
        case 0:
            mesTexto = "Janeiro"
            return mesTexto;
        case 1:
            mesTexto = "Fevereiro"
            return mesTexto;
        case 2:
            mesTexto = "Março"
            return mesTexto;
        case 3:
            mesTexto = "Abril"
            return mesTexto;
        case 4:
            mesTexto = "Maio"
            return mesTexto;
        case 5:
            mesTexto = "Junho"
            return mesTexto;
        case 6:
            mesTexto = "Julho"
            return mesTexto;
        case 7:
            mesTexto = "Agosto"
            return mesTexto;
        case 8:
            mesTexto = "Setembro"
            return mesTexto;
        case 9:
            mesTexto = "Outubro"
            return mesTexto;
        case 10:
            mesTexto = "Novembro"
            return mesTexto;
        case 11:
            mesTexto = "Dezembro"
            return mesTexto;
    }
}

    const data = new Date()
    let diaSemana = data.getDay()
    let diaSemanaTexto = getDiaSemana(diaSemana)

    let mes = data.getMonth()
    let mesTexto = getMes(mes)

    let minutos = data.getMinutes()
    minutos = minutos < 10 ? '0' + minutos : minutos;

    let res = document.querySelector(".data")

    console.log(`${diaSemanaTexto}, ${data.getDate()} de ${mesTexto} de ${data.getFullYear()} ${data.getHours()}:${minutos}`)

    res.innerHTML = `<p>${diaSemanaTexto}, ${data.getDate()} de ${mesTexto} de ${data.getFullYear()}</p>`
    res.innerHTML += `${data.getHours()}:${minutos}`


