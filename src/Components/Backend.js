import React from 'react'

const Backend = () => {

    const [value, setValue] = React.useState([])
    
    React.useEffect(function(){
        fetch('http://localhost:5000/api/v1/tasks')
        .then( res => res.json())
        .then(item => setValue(item))
        console.log('rendered fetch api')

    },[])
  return (
    <div>
        Adding my server data here

        <pre>{JSON.stringify(value, null, 2)}</pre>

    </div>
  )
}

export default Backend