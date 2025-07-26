# tree-sitter-qmet

A Tree-sitter grammar for QMet.

This project provides an implementation of the QMet grammar for the incremental parser [Tree-sitter](https://tree-sitter.github.io/tree-sitter/), enabling efficient syntax analysis and integration with various languages and tools.

## Installation

Clone the repository and follow the instructions for your desired language:

### Node.js
```bash
npm install
```

## Build

To build and generate the parser, you can use:

```bash
node-gyp rebuild
```

```bash
tree-sitter generate
```

## Usage

```js
const Parser = require('tree-sitter');
const Qmet = require('tree-sitter-qmet');
const parser = new Parser();
parser.setLanguage(Qmet);
```

## Examples

Here are some example queries supported by this grammar:

```
row>column>rectangle
row>column+rectangle
row>3*column
row>column>3*rectangle
row+column+rectangle
3*row+rectangle
3*rectangle
3*rectangle>row>rectangle
```

## License

See the LICENSE file for more information.
