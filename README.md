# 🚀 Roteiro de 7 Dias para Relembrar Desenvolvimento Web (JS + Python)

Este guia é um **manual rápido** para reativar a memória em **JavaScript, Python, Git e ambiente de desenvolvimento**, sem precisar refazer cursos inteiros.  
A ideia é praticar um pouco **todos os dias** com mini-projetos.

---

## 📅 Dia 1 – Configuração do Ambiente
### Objetivo: preparar as ferramentas básicas.

- Instalar [WSL]: E download do Ubuntu pela loja Microsoft
```
     wsl --install
```
- Instalar [VS Code](https://code.visualstudio.com/)  
- Instalar [Node.js](https://nodejs.org/)  
- Instalar [Python](https://www.python.org/downloads/)  
- Revisar perfil no [GitHub](https://github.com)

### Testes rápidos:
```bash
# Verificar versões
node -v
npm -v
python --version
git --version
```

---

## 📅 Dia 2 – Git Básico
### Objetivo: relembrar versionamento.
```bash
# Configuração inicial
git config --global user.name "Seu Nome"
git config --global user.email "seuemail@example.com"

# Criar repositório
mkdir projeto-git && cd projeto-git
git init
echo "# Projeto Git" > README.md
git add .
git commit -m "primeiro commit"

# Conectar ao GitHub
git branch -M main
git remote add origin https://github.com/usuario/projeto-git.git
git push -u origin main
```

---

## 📅 Dia 3 – JavaScript Backend Básico
### Objetivo: relembrar Node.js + Express.
```bash
mkdir projeto-node && cd projeto-node
npm init -y
npm install express

# Criar servidor simples
echo "const express = require('express');
const app = express();
app.get('/', (req, res) => res.send('Hello JS!'));
app.listen(3000, () => console.log('Servidor rodando em http://localhost:3000'));" > index.js

node index.js
```

---

## 📅 Dia 4 – Python Backend Básico
### Objetivo: relembrar Flask.
```bash
mkdir projeto-python && cd projeto-python
python -m venv venv
source venv/bin/activate   # Linux/Mac
venv\Scripts\activate      # Windows
pip install flask

# Criar app Flask
echo "from flask import Flask
app = Flask(__name__)

@app.route('/')
def home():
    return 'Hello Python!'

if __name__ == '__main__':
    app.run(debug=True)" > app.py

python app.py
```
Acesse http://localhost:5000

---

## 📅 Dia 5 – Frontend Simples
### Objetivo: relembrar HTML + CSS + JS.
```bash
mkdir projeto-frontend && cd projeto-frontend
echo "<!DOCTYPE html>
<html>
<head><title>ToDo</title></head>
<body>
  <h1>Lista de Tarefas</h1>
  <input id='tarefa'><button onclick='add()'>Adicionar</button>
  <ul id='lista'></ul>
  <script>
    function add() {
      const item = document.getElementById('tarefa').value;
      const li = document.createElement('li');
      li.innerText = item;
      document.getElementById('lista').appendChild(li);
    }
  </script>
</body>
</html>" > index.html
```

---

## 📅 Dia 6 – Integração Front + Backend
### Objetivo: conectar frontend ao backend.

### 1. No backend Python, crie rota que retorna JSON:
```python
from flask import Flask, jsonify
app = Flask(__name__)

@app.route('/tarefas')
def tarefas():
    return jsonify(["Estudar", "Praticar", "Revisar"])
```
### 2. No frontend JS, consuma a API:
```html
<script>
  fetch("http://localhost:5000/tarefas")
    .then(r => r.json())
    .then(dados => {
      dados.forEach(t => {
        const li = document.createElement('li');
        li.innerText = t;
        document.getElementById('lista').appendChild(li);
      });
    });
</script>
```

---

## 📅 Dia 7 – Projeto Final + README
### Objetivo: unir tudo em um mini-projeto.

- Backend: API em Python ou Node.js.
- Frontend: HTML + JS consumindo a API.
- Versionar no Git.
- Criar **README.md** explicando como rodar.

Exemplo de README do projeto:
```markdown
# ToDo App
Mini aplicação Fullstack com Python + HTML/JS.

## Rodar o backend
python app.py

## Abrir o frontend
Abra index.html no navegador.
```

### 🎯 Dicas finais

Sempre que esquecer, volte neste guia.
Use este repositório como cola rápida.
Depois, vá incrementando (DB, autenticação, etc).

---

✍️ Criado para ajudar na revisão rápida de JS, Python e Git.


```yaml
👉 Esse README pode ser o **primeiro repositório** do seu “reaprendizado”, funcionando como sua **documentação de sobrevivência**.  

Quer que eu já prepare também um **segundo README modelo** para o seu primeiro projeto final (ToDo List Fullstack), pronto para você colar no GitHub?
```
