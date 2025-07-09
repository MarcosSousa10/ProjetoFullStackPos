# Encurtador de URL

Este é um projeto simples de encurtador de URL feito com Node.js, Express e MongoDB.

## 🔧 Como rodar o projeto

1. Clone ou extraia o projeto
2. Instale as dependências:

```bash
npm install
```

3. Certifique-se de que o MongoDB está rodando localmente (na porta padrão).
4. Inicie o servidor:

```bash
npm start
```

O servidor irá rodar em `http://localhost:5000`.

---

## 🔗 Endpoints da API

### 1. Encurtar uma URL

**POST** `/api/shorten`  
**Body (JSON):**
```json
{
  "originalUrl": "https://exemplo.com/alguma-pagina-muito-grande"
}
```  
**Resposta:**  
```json
{
  "originalUrl": "https://exemplo.com/alguma-pagina-muito-grande",
  "shortUrl": "4k8d2s"
}
```

---

### 2. Buscar uma URL por ID

**GET** `/api/url/:id`  
Exemplo: `/api/url/64a1b1a3f67e320f9a8a0b1d`

**Resposta:**
```json
{
  "_id": "64a1b1a3f67e320f9a8a0b1d",
  "originalUrl": "https://exemplo.com",
  "shortUrl": "abc123",
  "createdAt": "2024-07-01T14:30:00.000Z"
}
```

---

### 3. Buscar URLs por data de criação

**GET** `/api/urls/date/:date`  
Formato da data: `YYYY-MM-DD`  
Exemplo: `/api/urls/date/2024-07-01`

**Resposta:** Array de URLs criadas na data especificada.

---

### 4. Buscar por código curto (shortUrl)

**GET** `/api/short/:shortUrl`  
Exemplo: `/api/short/abc123`

**Resposta:**
```json
{
  "_id": "64a1b1a3f67e320f9a8a0b1d",
  "originalUrl": "https://exemplo.com",
  "shortUrl": "abc123",
  "createdAt": "2024-07-01T14:30:00.000Z"
}
```

---

## 📬 Testando com Postman

1. Abra o Postman
2. Crie uma requisição para cada rota acima
3. Use o método e body adequados (vide exemplos acima)

---

## 📂 Estrutura de Pastas

```
url-shortener/
├── controllers/
│   └── urlController.js
├── models/
│   └── Url.js
├── routes/
│   └── urlRoutes.js
├── server.js
├── package.json
└── README.md
```

---

Feito para fins educacionais. 🚀
