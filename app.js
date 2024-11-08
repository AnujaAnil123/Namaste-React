const reactHeading = React.createElement("h1",{id:"heading"},"Hello World from React!!💕💕💕")
    const reactRoot = ReactDOM.createRoot(document.getElementById("root"))
    reactRoot.render(reactHeading)

    console.log(reactHeading)
    console.log(reactRoot)