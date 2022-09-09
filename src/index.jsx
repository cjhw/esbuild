import { render } from 'https://cdn.skypack.dev/react-dom'

// import { createRoot } from 'react-dom/client'

let Greet = () => <h1>Hello,Esbuild!</h1>

// createRoot(document.getElementById('root'), <Greet></Greet>)
render(<Greet />, document.getElementById('root'))
