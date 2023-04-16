import React from 'react'

const Practise = () => {

    const [data, setData] = React.useState()
    const [count,setCount] = React.useState(0)

    React.useEffect(function(item){
        fetch(`https://pokeapi.co/api/v2/pokemon/${count}`)
        .then(function(res){
            return res.json()
        })

        .then(function(value){
            return (setData(value))
        })

    },[count])

    function addCounter(){
        setCount(function(item){
            return (item = count + 1)
        })
    }

  return (
    <div>
        <button onClick={addCounter}>+</button>
        {count}

        <pre>{JSON.stringify(data,null,2)}</pre>
        
    </div>
  )
}

export default Practise