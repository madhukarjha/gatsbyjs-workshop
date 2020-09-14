- About Gatsby, static site generator and JAMstack
- Install and setup dev server
- Understanding project structure
    - Folder structure
    - Basic configs,
    - Build and life cycle
    - Bootstrap process
    - Configuring webpack
- Demo Sample project with MarkDown

------

## **About Gatsby**
Gatsby is a React and GraphQL enabled static site generator. As per offical documentation:
"Gatsby is a React-based open source framework for creating websites and apps. Build anything you can imagine with over 2000 plugins and performance, scalability, and security built-in by default."

GraphQL is an open-source data query and manipulation language for APIs, and a runtime for fulfilling queries with existing data. GraphQL was developed internally by Facebook in 2012 before being publicly released in 2015.

### JAMStack
JAMstack is a architecture guidelines that stands for JavaScript, APIs, and Markup.
    - JavaScript for handling dynamic funtionalities
    - APIs for server side APIs and operations
    - Static HTMLs generated from source files like: Markdown, CMSs, APIs using a Static site generator

Benefits:
 - Faster performance
 - Secure
 - Cheaper and easier to scale
 - Easier to integrate with existing CMSs

 Best Practices:
  - Entire project on CDN
  - Automated Builds
  - Everything on git
  - Automic Deploys
  - Modern build tools
  - Instant cache invalidation

## **Isomorphic web apps**
Isomorphic means similar in form or relations. It means Server and client has similar capabilities and responosibilities for rendering application.
- Server rendered: server would render data and then send it pre-rendered to the client, very similar to asp.net, php etc.
- Isomorphic React or Angular: means server would render first time and send HTML to the client for rendering

## **Static site generator**
The greatest difference between a static site generator and a traditional web application stack, is that instead of waiting until a page is requested and then generating its view on demand each time, a static site generator does this in advance so that the view is ready to serve ahead of time. And it does so for every possible view of a site at build time.

## **Install and setup dev server**
Gatsby relies on Nodejs and use node package manager (npm) to install gatsby and get it up and running and ready to go.
1. Visit Nodejs.org and download nodejs for your operating system.
2. Install
3. check evrything installed correctly
4. Install gatsby command line interface
npm install --global gatsby-cli
5. Check its installed: gatsby --version

## **Understanding project structure**

### Folder structure

    /
    |-- /.cache
    |-- /plugins
    |-- /public
    |-- /src
        |-- /pages
        |-- /templates
        |-- html.js
    |-- /static
    |-- gatsby-config.js
    |-- gatsby-node.js
    |-- gatsby-ssr.js
    |-- gatsby-browser.js

- Plugins: Store for any unpublished local plugins.
- Public: Automatically generated, to store build output.
- Src: Source code
    - pages: Store for view components
    - templates: Stores templates for programmatically creating pages.
    - html.js: onfiguration of default .cache/default_html.js. Check out the <a href="https://www.gatsbyjs.com/docs/custom-html/">custom HTML docs</a> for more detail.
- Static: Anything that static in nature that is not/should not be part of webpack build
- gatsby-browser.js: Config file to have any usage of the <a href="https://www.gatsbyjs.com/docs/browser-apis/">gatsby browser APIs</a>. configs for customization of default gatsby settings for browsers.
- gatsby-config.js: This stores config for plugins and site related static metadata like: site title or description etc.
- gatsby-node.js: Config file for <a href="https://www.gatsbyjs.com/docs/node-apis/">Gatsby node API</a>, These allow customization/extension of default Gatsby settings affecting pieces of the site build process.
- gatsby-ssr.js: Usages of Gatsby <a href="https://www.gatsbyjs.com/docs/ssr-apis/">Server side rendering</a> APIs. 

### Basic configs
    Demo
### Build and life cycle
Gatsby has following modes for compilation:
    - gatsby develop:
        gatsby develop is usually used for development purpose, it runs a webserver in background, watch code changes and reloads. This can be used for debugging the site.
    - gatsby build
        build command does production-ready optimizations like packaging site’s config, data, code and static HTMLs and hydrates it into a React application.
    - gatsby serve
        It builds production-ready code and serves for testing locally. If you need to verify any changes you should re-run gatsby serve command. 
    - gatsby clean
        It can be used to clean local build if it shows some issues. It deletes .cache and public folders. 
        Usually can be used for any stale data, intermediate errors, dependency issues, plugin issues.
### Bootstrap process
    Demo
### Configuring webpack
    Demo