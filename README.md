# esdoc-var-plugin

[ESDoc](http://esdoc.org) Plugin to add support for the `@var`-tag to document
module variables that are not exported.

## Usage

Install it:

```sh
npm install esdoc-var-plugin
```

And include it in the ``plugin`` property of ``esdoc.json``:

```json
{
  "source": "./src",
  "destination": "./doc",
  "plugins": [
    { "name": "esdoc-var-plugin" }
  ]
}
```

## License: [MIT](http://bbuecherl.mit-license.org)
