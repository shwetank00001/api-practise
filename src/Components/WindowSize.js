import React from 'react'

const WindowSize = () => {

    const [widthWin, setWidthWin] = React.useState(window.innerWidth)

    React.useEffect(function(){
        window.addEventListener("resize", function(){
            setWidthWin(window.innerWidth)
        })
    }, [])
    
  return (
    <div>
        <h1>Window size is: {widthWin}</h1>
    </div>
  )
}

export default WindowSize