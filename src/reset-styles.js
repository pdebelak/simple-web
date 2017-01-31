'use strict';

const STYLES = `
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
`

function removeNodes(nodes) {
  const nodesList = Array.from(nodes);
  const nodesLength = nodesList.length;
  for (let i = 0; i < nodesLength; i++) {
    const node = nodesList[i];
    node.parentNode.removeChild(node);
  }
}

function resetStyles(doc) {
  const stylesheets = doc.querySelectorAll('link[rel=stylesheet]');
  const styles = doc.getElementsByTagName('style');
  removeNodes(stylesheets);
  removeNodes(styles);

  const head = doc.getElementsByTagName('head')[0];
  const newStyles = doc.createElement('style');
  newStyles.appendChild(doc.createTextNode(STYLES));
  head.appendChild(newStyles);
}

if (typeof document !== 'undefined') {
  resetStyles(document);
}

module.exports = {
  removeNodes: removeNodes,
  resetStyles: resetStyles,
};
