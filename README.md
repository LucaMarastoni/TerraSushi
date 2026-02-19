# Terra Sushi Landing (React + Vite)

Landing page one-page moderna e responsive per **Terra Sushi Verona**.

## Requisiti

- Node.js 18+ (consigliato 20)
- npm

## Installazione

```bash
npm i
```

## Avvio in locale

```bash
npm run dev
```

## Build produzione

```bash
npm run build
npm run preview
```

## Configurazione GitHub Pages (base path)

Apri `vite.config.js` e sostituisci:

```js
base: '/<REPO_NAME>/'
```

con il nome del tuo repository, ad esempio:

```js
base: '/TerraSushi/'
```

## Link placeholder da aggiornare

In `src/App.jsx` trovi l'oggetto `LINKS` con i placeholder per:

- menù
- poké
- senza glutine
- telefono
- WhatsApp
- ordine

## Deploy su GitHub Pages

### Opzione A: GitHub Actions (consigliata)

Workflow già incluso in:

- `.github/workflows/deploy-pages.yml`

Passi:

1. Push su `main`
2. In GitHub: `Settings > Pages`
3. `Build and deployment` -> `Source: GitHub Actions`

### Opzione B: script `gh-pages`

```bash
npm run deploy
```

Nota: lo script esegue automaticamente la build (`predeploy`).

## Struttura progetto

```text
/src
  /components
    Navbar.jsx
    Hero.jsx
    CtaButtons.jsx
    Reviews.jsx
    Delivery.jsx
    Footer.jsx
    Section.jsx
  /styles
    globals.css
    theme.css
  App.jsx
  main.jsx
```
