# scratchx-template
A template project for rapid creation of scratchx extension.

## How to use

### 1. Register <http://ngrok.com> and configure

### 2. Clone it

```
$ git clone https://github.com/mactkg/scratchx-template.git your-ext
$ cd your-ext
$ npm install
```

### 3. Define blocks

Block descriptor and title informations are stored in `src/data.json`.  Edit there to define blocks.

### 4. Write codes

Core codes of an extension is located in `src/ext.js`.  Write some codes there.  You can use browserifiable node.js libraries.

### 5. Try it

```
$ gulp
```

## Deploy

### 1. Fork this repo

### 2. Add the repo as a remote

```
$ git remote add YOURID git@github.com:YOURID/your-ext.git
```

### 3. Push it

```
$ git push -u YOURID master
```

### 4. Add the following 2 lines to the `[remote YOURID]` section of `.git/config`

```
push = refs/heads/master:refs/heads/gh-pages
push = refs/heads/master:refs/heads/master
```

### 5. Re-push

```
$ git push
```

## License
MIT License
