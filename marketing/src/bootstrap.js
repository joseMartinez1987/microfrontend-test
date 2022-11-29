import React from 'react'
import ReactDOM from 'react-dom'
import App from './app'


//Mount function to start up the app

const mount = el => {
    ReactDOM.render(
        <App/>,
        el
    )
}

//* If we are in development mode and in isolation, call mount immediately

if(process.env.NODE_ENV === 'development') {
    const devRoot = document.querySelector('#_marketing-dev-root')

    if(devRoot){ 
        mount(devRoot)
    }
}

//* we are running throgh container
//* and  we should export the mount function

export {mount}