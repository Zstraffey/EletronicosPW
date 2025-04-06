let produtosVisiveis = false;

function loadProducts() {
    const produtosDiv = document.getElementById("produtos");

    if (produtosVisiveis) {

        produtosDiv.innerHTML = "";
        produtosVisiveis = false;
        return;
    }

    fetch("../data/produtos.json")
        .then(response => response.json())
        .then(data => {
            produtosDiv.innerHTML = "";

            const estruturaHTML = `
                <div class="col-md-12">
                    <div class="row">
                        <div class="products-tabs">
                            <div id="tab1" class="tab-pane active">
                                <div class="products-slick" data-nav="#slick-nav-1" id="produtos-lista"></div>
                                <div id="slick-nav-1" class="products-slick-nav"></div>
                            </div>
                        </div>
                    </div>
                </div>
            `;

            produtosDiv.innerHTML = estruturaHTML;

            const listaProdutos = document.getElementById("produtos-lista");

            data.forEach((produto, index) => {
                const produtoHTML = `
                    <div class="product" style="width:70%;display: block; margin: 0 auto;  margin-bottom: 100px; margin-top: 50px">
                        <div class="product-img">
                            <img src="${produto.imagem}" alt="${produto.nome}" style="width:25%; height: 25%; display: block; margin: 0 auto;">
                            <div class="product-label">
                                ${produto.categoria === "Celular" ? '<span class="new">NEW</span>' : ''}
                                ${produto.preco < 1000 ? '<span class="sale">-10%</span>' : ''}
                            </div>
                        </div>
                        <div class="product-body" id="produto_fundo${index}">
                            <p class="product-category">${produto.categoria}</p>
                            <h3 class="product-name"><a href="#">${produto.nome}</a></h3>
                            <h4 class="product-price">R$${produto.preco.toFixed(2)}</h4>
                            <div class="product-btns">
                                <button class="add-to-wishlist"><i class="fa fa-heart-o"></i><span class="tooltipp">Favoritar</span></button>
                                <button class="add-to-compare"><i class="fa fa-exchange"></i><span class="tooltipp">Comparar</span></button>
                                <button class="quick-view"><i class="fa fa-eye"></i><span class="tooltipp">Descrição</span></button>
                            </div>
                        </div>
                        <div class="add-to-cart">
                            <button class="add-to-cart-btn"><i class="fa fa-shopping-cart"></i> Adicionar ao carrinho</button>
                        </div>
                    </div>
                `;
                listaProdutos.insertAdjacentHTML("beforeend", produtoHTML);
            });

            produtosVisiveis = true;
        })
        .catch(error => console.error("Erro ao carregar produtos:", error));
}

let isBackgroundChanged = false;

function changeBackground() {
    const nav = document.getElementById("navigation");
    const titulo_produtos = document.getElementById("titulo_produtos");
    const titulo_link = document.getElementById("titulo_link");
    const titulo_link2 = document.getElementById("titulo_link2");
    const titulo_link3 = document.getElementById("titulo_link3");
    const produto_fundo0 = document.getElementById("produto_fundo0");
    const produto_fundo1 = document.getElementById("produto_fundo1");
    const produto_fundo2 = document.getElementById("produto_fundo2");
    const produto_fundo3 = document.getElementById("produto_fundo3");
    const produto_fundo4 = document.getElementById("produto_fundo4");
    const produto_fundo5 = document.getElementById("produto_fundo5");
    const produto_fundo6 = document.getElementById("produto_fundo6");
    const produto_fundo7 = document.getElementById("produto_fundo7");
    const produto_fundo8 = document.getElementById("produto_fundo8");


    if (!isBackgroundChanged) {

        document.body.style.backgroundColor = "#61636d";
        nav.style.backgroundColor = "#15161D";
        titulo_produtos.style.color = "#ffffff";
        titulo_link.style.color = "#ffffff";
        titulo_link2.style.color = "#ffffff";
        titulo_link3.style.color = "#ffffff";
        produto_fundo0.style.backgroundColor = "#15161D";
        produto_fundo1.style.backgroundColor = "#15161D";
        produto_fundo2.style.backgroundColor = "#15161D";
        produto_fundo3.style.backgroundColor = "#15161D";
        produto_fundo4.style.backgroundColor = "#15161D";
        produto_fundo5.style.backgroundColor = "#15161D";
        produto_fundo6.style.backgroundColor = "#15161D";
        produto_fundo7.style.backgroundColor = "#15161D";
        produto_fundo8.style.backgroundColor = "#15161D";

    } else {

        document.body.style.backgroundColor = "";
        nav.style.backgroundColor = "";
        titulo_produtos.style.color = "";
        titulo_link.style.color = "";
        titulo_link2.style.color = "";
        titulo_link3.style.color = "";
        produto_fundo0.style.backgroundColor = "";
        produto_fundo1.style.backgroundColor = "";
        produto_fundo2.style.backgroundColor = "";
        produto_fundo3.style.backgroundColor = "";
        produto_fundo4.style.backgroundColor = "";
        produto_fundo5.style.backgroundColor = "";
        produto_fundo6.style.backgroundColor = "";
        produto_fundo7.style.backgroundColor = "";
        produto_fundo8.style.backgroundColor = "";
    }

    // Troca o estado
    isBackgroundChanged = !isBackgroundChanged;
}
