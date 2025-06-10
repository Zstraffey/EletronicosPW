# 📦 API de Produtos Eletrônicos

Esta API permite gerenciar um catálogo de notebooks com funcionalidades para listar, adicionar, editar e remover produtos.

---

## 🔧 Tecnologias Utilizadas

* Node.js
* Express.js
* Postman (para testes)

---

## ▶️ Como executar

### 1. Clone o repositório

```bash
git clone https://github.com/Zstraffey/EletronicosPW.git
cd EletronicosPW
```

### 2. Instale as dependências

```bash
npm install
```

### 3. Execute o servidor

```bash
node app.js
```

O servidor será iniciado em:

```
http://localhost:3000
```

---

## 🌐 Endpoints da API

### 🔍 GET `/produtos`

Lista todos os produtos.

**Exemplo de resposta:**

```json
[
  {
    "id": 1,
    "nome": "Notebook Dell XPS 13",
    "categoria": "Notebook",
    "marca": "Dell",
    "preco": 7999.99,
    "estoque": 10
  },
  ...
]
```

---

### ➕ POST `/produtos`

Adiciona um novo produto.

**Requisição (JSON):**

```json
{
  "nome": "Notebook Lenovo IdeaPad 3",
  "categoria": "Notebook",
  "marca": "Lenovo",
  "preco": 2899.90,
  "estoque": 20
}
```

**Resposta (201 Created):**

```json
{
  "id": 6,
  "nome": "Notebook Lenovo IdeaPad 3",
  "categoria": "Notebook",
  "marca": "Lenovo",
  "preco": 2899.90,
  "estoque": 20
}
```

---

### ✏️ PUT `/produtos/:id`

Atualiza um produto existente.

**Exemplo:**

```
PUT /produtos/2
```

**Corpo da requisição:**

```json
{
  "nome": "Notebook Acer Aspire 5 (Atualizado)",
  "categoria": "Notebook",
  "marca": "Acer",
  "preco": 2999.99,
  "estoque": 15
}
```

---

### ❌ DELETE `/produtos/:id`

Remove um produto pelo ID.

**Exemplo:**

```
DELETE /produtos/3
```

**Resposta:**

```json
{
  "message": "Produto removido com sucesso."
}
```

---

## 🧪 Testando com o Postman

### 1. Abra o Postman

### 2. Crie uma nova coleção chamada `API Eletrônicos`

### 3. Crie as requisições:

#### GET - Listar produtos

* **Método:** GET
* **URL:** `http://localhost:3000/produtos`

---

#### POST - Criar produto

* **Método:** POST
* **URL:** `http://localhost:3000/produtos`
* Vá em **Body > raw > JSON**, e cole:

```json
{
  "nome": "Novo Notebook",
  "categoria": "Notebook",
  "marca": "HP",
  "preco": 4599.99,
  "estoque": 12
}
```

---

#### PUT - Atualizar produto

* **Método:** PUT
* **URL:** `http://localhost:3000/produtos/1`
* **Body > raw > JSON:**

```json
{
  "nome": "Notebook Dell Atualizado",
  "categoria": "Notebook",
  "marca": "Dell",
  "preco": 6999.99,
  "estoque": 5
}
```

---

#### DELETE - Remover produto

* **Método:** DELETE
* **URL:** `http://localhost:3000/produtos/1`

---

## 💾 Observações

* A API armazena os produtos em memória. Ao reiniciar o servidor, os dados voltam ao estado inicial.
* Ideal para fins didáticos ou protótipos.

---

## 👨‍💻 Autor

Desenvolvido por **Zstraffey** (Miguel Zimmermann Martins Silva) e **Yslan De Jesus**(Yslan de Jesus Santos da Costa)
🔗 [Repositório GitHub](https://github.com/Zstraffey/EletronicosPW)
