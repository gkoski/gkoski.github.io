# Portfolio — Gabriel de Carvalho Joukoski

Site de portfólio pessoal desenvolvido com HTML, CSS e JavaScript puro, com design responsivo (mobile first) e tema claro/escuro.

## 🔗 Deploy

[gkoski.github.io](https://gkoski.github.io)

---

## 📋 Seções

- **Bem vindo** — apresentação com foto de perfil, texto e links para redes sociais
- **Sobre mim** — resumo da trajetória e formação
- **Habilidades** — linguagens, frameworks e idiomas
- **Experiências** — experiência profissional e acadêmica
- **Projetos** — cards com preview em vídeo e link para o repositório
- **Contato** — formulário de contato via Formspree e redes sociais

---

## 🛠️ Tecnologias

- HTML5
- CSS3 (Mobile First, Media Queries)
- JavaScript (vanilla)
- [Font Awesome](https://fontawesome.com/) — ícones
- [Ion Icons](https://ionic.io/ionicons) — ícones de linguagens
- [Google Fonts — Montserrat](https://fonts.google.com/specimen/Montserrat) — tipografia
- [Formspree](https://formspree.io/) — envio de formulário

---

## 📱 Responsividade

O layout foi construído com a abordagem **mobile first**, com breakpoints para:

| Breakpoint | Dispositivo |
|---|---|
| `min-width: 300px` | Mobile |
| `min-width: 760px` | Tablet |
| `min-width: 1000px` | Laptop |
| `min-width: 1440px` | Wide / Desktop grande |

---

## 🎨 Tema claro/escuro

O site possui suporte a tema claro e escuro, alternado pelo botão na topbar. As cores são controladas via variáveis CSS:

```css
:root {
    --color-1: #E91E8C;
    --color-2: #f88ac6;
    --bg-topbar: black;
}

body.light-mode {
    --color-1: #AD1457;
    --color-2: #880E4F;
    --bg-topbar: white;
}
```

---

## 📁 Estrutura de arquivos

```
├── index.html
├── script.js
├── css/
│   ├── reset.css
│   └── style.css
├── assets/
│   ├── banner.mp4
│   ├── inverted-banner.mp4
│   └── profile.jpeg
├── gifs/
│   ├── calendar.mp4
│   ├── registration.mp4
│   └── jogo.mp4
└── favicon/
    ├── favicon.ico
    ├── favicon-32x32.png
    ├── favicon-16x16.png
    ├── apple-touch-icon.png
    └── site.webmanifest
```

---

## 🚀 Como rodar localmente

```bash
git clone https://github.com/gkoski/portfolio.git
cd portfolio
```

Abra o `index.html` no navegador ou use uma extensão como **Live Server** no VS Code.

---

## 📬 Contato

- GitHub: [github.com/gkoski](https://github.com/gkoski)
- LinkedIn: [linkedin.com/in/gabriel-de-carvalho-joukoski-532228354](https://www.linkedin.com/in/gabriel-de-carvalho-joukoski-532228354)
- Instagram: [@aboutmegab](https://www.instagram.com/aboutmegab/)

---

> Desenvolvido por Gabriel de Carvalho Joukoski — 2026