# React Router - Introduction to v4
*Alternative titles*
* 

### Purpose - What's the transformation I want to foster in my audience?
- Explain How to switch from v2
- Why was there a change

## Abstract
-- TODO

## Overview / Raw Notes
- About me
- Comparision at high level
  - Sr Dev at NFIB
  - Leading UI Devs and React Advocate
  - Web Dev gone full stack and back again
- Simplicity of Switch
  - We no longer have `Route` just just need to render a `Match`
  - Router Options
    - Static 
      - Base router used for Hash & Browser
    - Hash 
      - same as we know and potentially love
    - Browser
      - same as before backed by `history`
    - Memory
      - as name state is uses memory
      - use case is for React-Native or other browser-less routing needs
    - Server
      - used for server side rendering and has accounts for needs of rendering at the server
      - not going to go deep into this since I don't use it and my knowledge is limited
    - Connected
      - *Not Complete* - used with redux
  - Components
    - `Match` - render new component for when url matches pattern
    - `Miss` - render component prop when no matches
    - This does not work nested so if anywhere in the tree there has been a match `miss` will not render
    - `Link` - same as before use in all transition cases
    - `Redirect` - used to move to new url replacing current in browser history
    - `NavigationPrompt` - use in place of onExit confirm transition
  - Gotchas of switch
    - `react-router-redux` switch with routing-actions
    - Stay away from `context` unless you really need it favor built-ins `Redirect` & `Link`
    - It is still alpha - with that there are kinks
- Demo registration workflow / nesting
- How it changed my approach
  - Showed me the power and use case of context, with great power comes great responsibility
    - Bug with `shouldComponentUpdate` & introduction of `react-broadcast`
  - Function... all the things
    - using functions as children and attributes helpful and potentially necessary to remain functional
