import React from 'react'

const Fetch = () => {

    const [data, setData] = React.useState([])

    React.useEffect(function(){
        showData()
        
    },[])

    function showData(){
        fetch("https://jsonplaceholder.typicode.com/users")
        .then(res => res.json())
        .then(item => setData(item))
        
    }

    const ele =  data.map(function(item){
        return(
            <div key={item.id}>
                {item.name}
            </div>
        )
    })
    console.log(data)
  return (
    <div>{ele}</div>
  )
}

export default Fetch