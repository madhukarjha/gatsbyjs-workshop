- Routing
- Layout
- Linking between pages
    - Navigation
    - Passing props as states
    - Read query string
    - Multi-level component

## Routing

Gatsby sites are so fast because a lot of the work is done at build time and the running site is using mostly static content. During that process, Gatsby creates paths to access that content, handling routing for us. 
So there are two ways to generate roots:
    - At build time using rehydration.
    - client only routes using @reach/router
    
### At build time: There are two ways we can create auto routes:
    
    - Creating component inside src/pages folder, gatsby automatically creates routes/pages for it.
        
    - Using createPages API in gatsby-node.js.

### Client only routes:

    Demo

#### At build time - auto routes

All .js files inside src/pages will generate its own page in your Gatsby site. It matches and mantain same file/folder structure of it's found in.

### Using createPage action.

    Demo

## Layout
    Demo
## Linking between pages

    - Navigation
    Navigate in-application/local routes: Gatsby's Link component can be used for it.
    External links: anchor tag, <a href="url" />
    - Passing props as states
    - Read query string
