const assert = require('assert');
const jsdom = require('jsdom');

const resetStyles = require('../src/reset-styles').resetStyles;

describe('resetStyles', () => {
  let doc;

  beforeEach((done) => {
    jsdom.env(
      `<html>
        <head>
          <link rel="stylesheet" href="styles.css">
          <link rel="other" href="thing.other">
          <style>
            body {
              min-width: 1000px;
            }
          </style>
        </head>
        <body></body>
      </html>`,
      [],
      (err, win) => {
        doc = win.document;
        done();
      }
    );
  });

  it('removes stylesheet links', () => {
    resetStyles(doc);
    assert.equal(doc.querySelectorAll('link[rel=stylesheet]').length, 0);
  });

  it('leaves alone non-stylesheet links', () => {
    resetStyles(doc);
    assert.equal(doc.querySelectorAll('link[rel=other]').length, 1);
  });

  it('removes existing styles and adds a new one', () => {
    resetStyles(doc);
    assert.equal(doc.querySelectorAll('style').length, 1);
    assert.ok(!doc.querySelector('style').innerHTML.match(/1000px/));
    assert.ok(doc.querySelector('head style').innerHTML.match(/margin: 0 auto/));
  });
});
