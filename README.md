# node-mongo-test

A way to quickly test a mongodb connection in node.js

## Usage

Copy `config.json.dist` to a new file named `config.json`

Fill in config.json with your relevent information

- `host` is required
- `port` will default to 27017
- `username` and `password` are optional
- `db` is optional

Then run

    node main.js
