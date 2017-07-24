# Babel lib kit based - djb2 npm **joke** module

**NOT FUNCTIONAL**
======

Basic djb2 non-cypto hash function build with Babel and Webpack.

## Citation
> djb2
>
> This algorithm (k=33) was first reported by dan bernstein many years ago in comp.lang.c.
> another version of this algorithm (now favored by bernstein) uses xor:
> `hash(i) = hash(i - 1) * 33 ^ str[i];`
> the magic of number **33**
> why it works better than many other constants, prime or not) has never been adequately explained.
```
    unsigned long
    hash(unsigned char *str)
    {
        unsigned long hash = 5381;
        int c;

        while (c = *str++)
            hash = ((hash << 5) + hash) + c; /* hash * 33 + c */

        return hash;
    }
```

## Reference

http://www.cse.yorku.ca/~oz/hash.html
https://github.com/contra/djb2

# Getting started

1. run `yarn`
2. Edit `package.json` default values like : name and version.
2. Change `README.md`
3. Add and edit content in `src/` and `resources/` directories.
4. Write tests in `test/` directory.

## Run tests

`npm test`

## Creating module build

1. Inspect name and version in `package.json`, edit if necessary.
2. Run `npm run build`
3. Output will be placed in `dist/` directory, which can be published as NPM module.

# Results

## #1

* index.js size 614
* bundle size 4056
* factor 6.6
