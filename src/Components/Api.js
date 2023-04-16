import React from 'react'

const Api = () => {

    const [starWarsData, setStarWarsData] = React.useState({})
    const [count, setCount] = React.useState(1)
    
    console.log("Component rendered")

    React.useEffect(function(){
                fetch(`https://swapi.dev/api/people/${count}`)
                .then(res => res.json())
                .then(data => setStarWarsData(data))
                console.log("state rendered")
    }, [count])

    function addCounter(){
        setCount(function(item){
            return (count+1)
        })
    }

  return (
    <div>   
            <h1>The Count is {count}</h1>
            <button onClick={addCounter}>Add</button>
            <pre>{JSON.stringify(starWarsData, null, 2)}</pre>
    </div>
  )
}

export default Api