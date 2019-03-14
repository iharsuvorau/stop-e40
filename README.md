# stop-e40

## Introduction

The project is a `vue.js` project which uses `webpack` to run and build the final output. The output (`./docs/`) are static files so the site can be hosted anywhere. It's generated using `vue cli` (https://cli.vuejs.org/).

For development you need to run `npm dev` to run the site and autocompile all dependent source files. 

## Build Setup

``` bash
# install dependencies
npm install

# serve with hot reload at localhost:8080
npm run dev

# build for production with minification
npm run build

# build for production and view the bundle analyzer report
npm run build --report
```

For detailed explanation on how things work, checkout the [guide](http://vuejs-templates.github.io/webpack/) and [docs for vue-loader](http://vuejs.github.io/vue-loader).

## Internalization and translations

The project contains two types of content to translate:

* UI content
* Main content

*UI content* is located at `src/assets/content` folder and each file corresponds to a component in the Vue application.

*Main content* is located at

* `src/assets/content/articles`
* `src/assets/content/pages`

There is a folder for *draft translations* at `./translations/`. These documents used only to generate the final JSON-files for the website.

## Deployment

- Upload `./docs` folder to a server.
- Setup a proxy server to serve it.
- Setup the domain to point to the server.
- Acquire an SSL-certificate.

Below is the example configuration for caddy:

```
stope40.org {
    root /path/to/stope40
    rewrite {
        regexp .*
        to {path} /
    }
    log access.log {
        rotate {
            size 50  # Rotate after 50 MB
            age  30  # Keep log files for 30 days
            keep 20  # Keep at most 20 log files
        }
    }
    errors {
        log error.log {
            size 50  # Rotate after 50 MB
            age  30  # Keep rotated files for 30 days
            keep 20  # Keep at most 20 log files
        }
    }
}
```
