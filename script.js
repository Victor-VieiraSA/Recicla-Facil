// Dados dos materiais. Para incluir ou editar um material, mexa só nesta lista.
// cor = cor da lixeira | texto = cor do texto sobre essa cor (contraste)
const materiais = [
    {
        nome: "Plástico", cor: "#D13B32", texto: "#FFFFFF", rotulo: "Lixeira vermelha",
        preparar: [
            "Esvazie a embalagem e enxágue rapidamente, sem desperdiçar água.",
            "Amasse garrafas e potes para ocupar menos espaço.",
            "Deixe secar antes de colocar no saco da coleta seletiva."
        ],
        nao: [
            "Embalagens metalizadas, como as de salgadinho.",
            "Fita adesiva.",
            "Embalagens com muita gordura ou restos de comida."
        ],
        destino: "Segue para cooperativas ou centros de triagem e depois para indústrias que transformam o plástico em novos produtos.",
        reuso: "Garrafas PET viram vasos e porta-lápis. Potes viram organizadores."
    },
    {
        nome: "Papel e Papelão", cor: "#1E63C9", texto: "#FFFFFF", rotulo: "Lixeira azul",
        preparar: [
            "Mantenha o papel seco e limpo.",
            "Desmonte caixas de papelão e dobre para ocupar menos espaço."
        ],
        nao: [
            "Papel engordurado ou sujo de comida, como o fundo de caixas de pizza.",
            "Guardanapos e papel higiênico usados.",
            "Clipes de papel, fita adesiva e papéis plastificados."
        ],
        destino: "É separado nos centros de triagem e vendido para indústrias que fazem papel novo.",
        reuso: "Folhas usadas viram rascunho ou bloco de anotações. Caixas viram organizadores."
    },
    {
        nome: "Vidro", cor: "#267A44", texto: "#FFFFFF", rotulo: "Lixeira verde",
        preparar: [
            "Enxágue potes e garrafas.",
            "Retire tampas de metal ou plástico.",
            "Se quebrar, embrulhe os cacos em jornal ou numa caixa e avise na embalagem, para proteger quem faz a coleta."
        ],
        nao: [
            "Espelhos.",
            "Cerâmica e louças, como xícaras e pratos.",
            "Lâmpadas e vidros de janela."
        ],
        destino: "Depois da triagem, o vidro pode ser fundido e usado para fazer novas embalagens.",
        reuso: "Potes viram porta-mantimentos, copos ou vasos."
    },
    {
        nome: "Metal", cor: "#F2B705", texto: "#1A1A1A", rotulo: "Lixeira amarela",
        preparar: [
            "Lave latas e potes.",
            "Amasse as latas para ocupar menos espaço."
        ],
        nao: [
            "Clipes de papel e grampos.",
            "Latas de tinta ou de aerossol com sobra de produto.",
            "Esponja de aço."
        ],
        destino: "O metal é separado na triagem e fundido pela indústria para virar novos produtos.",
        reuso: "Latas viram porta-lápis ou vasos."
    },
    {
        nome: "Orgânicos", cor: "#7A4B2A", texto: "#FFFFFF", rotulo: "Lixeira marrom",
        preparar: [
            "Separe cascas, restos de frutas e legumes, borra de café e cascas de ovo.",
            "Guarde em um recipiente com tampa e escorra o excesso de líquido."
        ],
        nao: [
            "Carnes, ossos e laticínios na composteira caseira.",
            "Óleo e gordura.",
            "Fezes de animais domésticos."
        ],
        destino: "Onde há coleta de orgânicos, o material segue para compostagem. Em casa, também dá para compostar.",
        reuso: "O composto serve como adubo para plantas e hortas."
    },
    {
        nome: "Óleo de cozinha", cor: "#5B6B7A", texto: "#FFFFFF", rotulo: "Ponto de entrega",
        preparar: [
            "Espere o óleo esfriar e coe os restos de comida.",
            "Guarde em uma garrafa PET bem fechada.",
            "Leve a um ponto de coleta. Pergunte em supermercados, ecopontos ou cooperativas da sua cidade."
        ],
        nao: [
            "Jogar na pia, no ralo ou no vaso sanitário.",
            "Misturar com água ou detergente.",
            "Colocar no lixo comum em embalagem aberta."
        ],
        destino: "Em geral, o óleo coletado é usado para fazer sabão e biodiesel.",
        reuso: "Pode virar sabão caseiro."
    },
    {
        nome: "Pilhas e baterias", cor: "#E8731A", texto: "#1A1A1A", rotulo: "Descarte especial",
        preparar: [
            "Guarde as usadas em um pote seco e fechado, longe de crianças.",
            "Leve a pontos de entrega em lojas, supermercados ou assistências técnicas que recebem esse material."
        ],
        nao: [
            "Jogar no lixo comum.",
            "Queimar ou perfurar.",
            "Misturar com os recicláveis."
        ],
        destino: "Passam por tratamento adequado, porque contêm substâncias que prejudicam o ambiente e a saúde quando descartadas de forma errada.",
        reuso: "Prefira pilhas recarregáveis, que geram menos resíduo."
    },
    {
        nome: "Eletrônicos", cor: "#5B6B7A", texto: "#FFFFFF", rotulo: "Ponto de entrega",
        preparar: [
            "Antes de descartar, veja se dá para consertar ou doar.",
            "Apague seus dados pessoais de celulares e computadores.",
            "Leve a pontos de coleta de lixo eletrônico, a lojas ou a fabricantes que recebem o aparelho."
        ],
        nao: [
            "Jogar no lixo comum.",
            "Desmontar o aparelho em casa.",
            "Deixar em terrenos ou calçadas."
        ],
        destino: "As peças são separadas, e metais e outros materiais podem ser reaproveitados.",
        reuso: "Doar, consertar ou comprar usado prolonga a vida do aparelho."
    }
];

const picker = document.getElementById("picker");
const panel = document.getElementById("panel");

// Monta uma lista com ícone (Font Awesome) na frente de cada item
function lista(itens, icone) {
    return itens.map(function (t) {
        return '<li class="d-flex gap-2 mb-2">' +
               '<i class="fa-solid ' + icone + ' mt-1" aria-hidden="true"></i>' +
               '<span>' + t + '</span></li>';
    }).join("");
}

// Mostra o conteúdo do material escolhido
function mostrar(i) {
    const m = materiais[i];

    picker.querySelectorAll("button").forEach(function (b, k) {
        b.classList.toggle("active", k === i);
        b.setAttribute("aria-pressed", k === i ? "true" : "false");
    });

    panel.innerHTML =
        '<div class="card-header border-0 d-flex align-items-center gap-3 p-4" style="background:' + m.cor + ';color:' + m.texto + '">' +
            '<i class="fa-solid fa-trash-can fa-3x" aria-hidden="true"></i>' +
            '<div>' +
                '<h2 class="fw-bolder mb-0">' + m.nome + '</h2>' +
                '<p class="fw-bold mb-0">' + m.rotulo + '</p>' +
            '</div>' +
        '</div>' +
        '<div class="card-body p-4">' +
            '<div class="row g-4">' +
                '<div class="col-md-6">' +
                    '<h3 class="h5 fw-bold mb-3">Como preparar</h3>' +
                    '<ul class="list-unstyled mb-0">' + lista(m.preparar, "fa-circle-check text-success") + '</ul>' +
                '</div>' +
                '<div class="col-md-6">' +
                    '<h3 class="h5 fw-bold mb-3">O que não pode</h3>' +
                    '<ul class="list-unstyled mb-0">' + lista(m.nao, "fa-circle-xmark text-danger") + '</ul>' +
                '</div>' +
                '<div class="col-md-6">' +
                    '<h3 class="h5 fw-bold mb-3">Para onde vai</h3>' +
                    '<p class="mb-0">' + m.destino + '</p>' +
                '</div>' +
                '<div class="col-md-6">' +
                    '<h3 class="h5 fw-bold mb-3">Dá para reaproveitar</h3>' +
                    '<p class="mb-0">' + m.reuso + '</p>' +
                '</div>' +
            '</div>' +
        '</div>';
}

// Cria um botão (com a lixeira colorida) para cada material
materiais.forEach(function (m, i) {
    const col = document.createElement("div");
    col.className = "col";
    col.innerHTML =
        '<button type="button" class="btn pick w-100 h-100 d-flex flex-column align-items-start gap-2 p-3 text-start fw-bold" ' +
        'style="--c:' + m.cor + '" aria-pressed="false">' +
            '<i class="fa-solid fa-trash-can fa-2x" style="color:var(--c)" aria-hidden="true"></i>' +
            '<span>' + m.nome + '</span>' +
        '</button>';
    col.querySelector("button").addEventListener("click", function () { mostrar(i); });
    picker.appendChild(col);
});

// Começa mostrando o primeiro material
mostrar(0);
