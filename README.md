# Simple Web

A chrome extension to simplify a site's web experience.

## What does it do?

It removes all `style` and `<link rel="stylesheet">` tags. It then adds a style
tag to the head of the document with the following contents:

```css
body {
  max-width: 768px;
  font-family: 'Helvetica Neue', Helvetica, Arial, sans-serif;
  color: #333;
  background: #eee;
  margin: 0 auto;
  font-size: 16px;
  padding: 0 6px;
}

img {
  max-width: 100%;
}
```

## Developing

1. Install dependencies with `npm install`.

2. Run tests with `npm test`.

3. Build the output with `npm run build`.
