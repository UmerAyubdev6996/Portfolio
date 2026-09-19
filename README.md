# Umer Ayub — Portfolio

A responsive, Apple-inspired portfolio built with plain HTML, CSS, and JavaScript. No build step or third-party JavaScript dependencies.

## Preview

Open `index.html` in a browser, or serve the directory:

```sh
python3 -m http.server 8000
```

Then visit http://localhost:8000. Clipboard access works on localhost and HTTPS; other contexts display a manual-copy fallback.

## Edit

- `index.html`: page content, contact links, and featured CENTROPIX project.
- `css/portfolio.css`: responsive layouts and animations.
- `js/portfolio.js`: project dialogs, scroll reveals, skill category filters, and clipboard interaction.
- `new/Untitled design.png`: original profile portrait.
- `images/centropix/`: downloaded official project imagery and source notes.

Existing template assets are retained, but the redesigned homepage only loads the new portfolio stylesheet and script. Deploy the directory as a static site, including the `new` and `images` folders.

Animations respect the operating system's reduced-motion preference. Project dialogs support keyboard focus, Escape to close, and focus restoration.
