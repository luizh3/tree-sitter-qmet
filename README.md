# tree-sitter-qmet

A Tree-sitter grammar for QMet.

This project provides an implementation of the QMet grammar for the incremental parser [Tree-sitter](https://tree-sitter.github.io/tree-sitter/), enabling efficient syntax analysis and integration with various languages and tools.

## Case os uses

Now it's only used on [qmet](https://github.com/luizh3/qmet), for mor details check the project.

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

---

> Nested

```
row>column>rectangle
```

```
(source_file [0, 0] - [1, 0]
  (expression [0, 0] - [0, 20]
    (component_group [0, 0] - [0, 20]     
      (component_unit [0, 0] - [0, 20]    
        name: (identifier [0, 0] - [0, 3])
        (component_group [0, 4] - [0, 20] 
          (component_unit [0, 4] - [0, 20]
            name: (identifier [0, 4] - [0, 10])
            (component_group [0, 11] - [0, 20]
              (component_unit [0, 11] - [0, 20]
                name: (identifier [0, 11] - [0, 20])))))))))
```

---

> Nested more sum

```
row>column+rectangle
```

```
(source_file [0, 0] - [1, 0]
  (expression [0, 0] - [0, 20]
    (component_group [0, 0] - [0, 20]
      (component_unit [0, 0] - [0, 20]
        name: (identifier [0, 0] - [0, 3])
        (component_group [0, 4] - [0, 20]
          (component_unit [0, 4] - [0, 10]
            name: (identifier [0, 4] - [0, 10]))
          (component_unit [0, 11] - [0, 20]
            name: (identifier [0, 11] - [0, 20])))))))
```

---

> Nested with multiplication

```
row>3*column
```

```
(source_file [0, 0] - [1, 0]
  (expression [0, 0] - [0, 12]
    (component_group [0, 0] - [0, 12]
      (component_unit [0, 0] - [0, 12]
        name: (identifier [0, 0] - [0, 3])
        (component_group [0, 4] - [0, 12]
          (component_unit [0, 4] - [0, 12]
            repeat: (number [0, 4] - [0, 5])
            name: (identifier [0, 6] - [0, 12])))))))
```

---

> Only sum

```
row+column+rectangle
```

```
(source_file [0, 0] - [1, 0]
  (expression [0, 0] - [0, 20]
    (component_group [0, 0] - [0, 20]
      (component_unit [0, 0] - [0, 3]
        name: (identifier [0, 0] - [0, 3]))
      (component_unit [0, 4] - [0, 10]
        name: (identifier [0, 4] - [0, 10]))
      (component_unit [0, 11] - [0, 20]
        name: (identifier [0, 11] - [0, 20])))))
```

---

> Multiplication and sum

```
3*row+rectangle
```

```
(source_file [0, 0] - [1, 0]
  (expression [0, 0] - [0, 15]
    (component_group [0, 0] - [0, 15]
      (component_unit [0, 0] - [0, 5]
        repeat: (number [0, 0] - [0, 1])
        name: (identifier [0, 2] - [0, 5]))
      (component_unit [0, 6] - [0, 15]
        name: (identifier [0, 6] - [0, 15])))))
```

---

> Nested multiplication

```
3*rectangle>row>rectangle
```

```
(source_file [0, 0] - [1, 0]
  (expression [0, 0] - [0, 25]
    (component_group [0, 0] - [0, 25]
      (component_unit [0, 0] - [0, 25]
        repeat: (number [0, 0] - [0, 1])
        name: (identifier [0, 2] - [0, 11])
        (component_group [0, 12] - [0, 25]
          (component_unit [0, 12] - [0, 25]
            name: (identifier [0, 12] - [0, 15])
            (component_group [0, 16] - [0, 25]
              (component_unit [0, 16] - [0, 25]
                name: (identifier [0, 16] - [0, 25])))))))))
```
---

## License

See the LICENSE file for more information.
