import React from 'react'

const Window = () => {

    const [windowWid, setWindowWidth] = React.useState(window.innerWidth)

    React.useEffect(function(){
        window.addEventListener("resize", function(){
            setWindowWidth(window.innerWidth)
            console.log("resize done")
        })
    },[])
  return (
    <div>
        <h1> The width is : {windowWid}
        </h1>
    </div>
  )
}

export default Window