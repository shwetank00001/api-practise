import React from 'react'

const Effect = () => {
    const [count, setCount] = React.useState(0)

    const [checkEffect, setEffect] = React.useState(['Effect ran '])

    React.useEffect(function(){
        setEffect(function(item){
            return (
                [...item,`Effect ${checkEffect.length} ran `]
            )
        })
    }, [count])


    function add(){
        setCount(function(item){
            return (item+1)
            
        })
    }



  return (
    <div>
        <div>
        <h3>{count}</h3>
        <button onClick={add}>+</button>
        </div>
        <div>
            <h3>{checkEffect} </h3>
        </div>
    </div>
  )
}

export default Effect