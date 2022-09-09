// import { render } from 'https://cdn.skypack.dev/react-dom'

import React from 'react'
import { createRoot } from 'react-dom/client'

let Greet = () => <h1>Hello,Esbuild!</h1>

let root = createRoot(document.getElementById('root'))
root.render(<Greet />)

// render(<Greet />, document.getElementById('root'))
