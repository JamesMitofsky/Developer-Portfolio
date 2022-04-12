# Developer Portfolio

This is the point of truth for the work, passions, and code-related pursuits of James Tedesco.

## Installing / Getting Started

This project requires NPM; install it by [following these directions](https://docs.npmjs.com/downloading-and-installing-node-js-and-npm).

Then run this script to install all packages and start a local server.

```console
npm i && npm run serve
```

> [Tip](https://stackoverflow.com/a/39172660/5395435): The double-ampersand indicates sequential executation, whereas a single ampersand would run these scripts in parallel.

## Technologies

### MX Improv — Email

Create email addresses matching the domain using [Improv MX](https://improvmx.com). This allows for receiving from any address type, but can also permit sending if [integrated with Gmail](https://improvmx.com/guides/send-emails-using-gmail/).

### Netlify Forms

Use [Netlify form submissions](http://xahlee.info) for collecting user responses.

### Eleventy — SSG

Use [Eleventy](https://www.11ty.dev/docs/getting-started/) for building a Statically Generated Site.

#### Ignoring Files

Eleventy has its own system for ignoring files called `.eleventyignore`. It's like `.gitignore` but will only prevent files from entering the build step, not from actually being committed to git.

However, any file in your `.gitignore` file will likewise not be processed in the build step.

### Nunjucks — Templating

[Find the docs here.](https://mozilla.github.io/nunjucks/) Nunjucks aren't required by Eleventy, but they're my preferred templating language.

I enjoyed reading [this article](https://css-tricks.com/killer-features-of-nunjucks/) by CSS Tricks for a few quick tips.

## License

MIT
