function pesquisar() {

    let section = document.getElementById("resultados-pesquisa");
    let campoPesquisa = document.getElementById("campo-pesquisa").value.toLowerCase();

    if(!campoPesquisa){
        section.innerHTML = "<div class=item-resultado><p style='text-align:center;' class='descricao-meta'>Pesquisa vazia</p></div>"
        return

    }

    let resultados = "";

    

    let nome = "";
    let descricao = "";
    let tags = "";
    let cientifico = "";


    for (let itens of dados) {
        nome = itens.nome.toLowerCase(); 
        descricao = itens.descricao.toLowerCase();
        tags = (typeof itens.tags === 'string') ? itens.tags.toLowerCase() : "";
        cientifico = itens.cientifico ? itens.cientifico.toLowerCase() : "";


        if(nome.includes(campoPesquisa) || descricao.includes(campoPesquisa) || tags.includes(campoPesquisa) || cientifico.includes(campoPesquisa)) {
            resultados +=
                `
                    <div class="item-resultado">
                        <div class="img-container">
                            <img src="${itens.imagem}" alt="imagem da ave">
                            <h2>${itens.nome}</h2>
                        </div>
                        <h3>${itens.cientifico}</h3>
                        <p class="descricao-meta">${itens.descricao}</p>
                        <a href="${itens.link}" target="_blank">Mais informações</a>
                    </div>

                `
        };
    };

    if(!resultados){
        resultados = "<div class=item-resultado><p class='descricao-meta' style='text-align:center;'>Nada encontrado na base de dados</p></div>"
    };
    section.innerHTML = resultados;
};
