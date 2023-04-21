import React from 'react'

const Fetch = () => {

    const [data, setData] = React.useState([])

    const[other, setOther] = React.useState([])


    React.useEffect(function(){
        showData()
        getData()
        
    },[])

    // function showData(){
    //     fetch("https://jsonplaceholder.typicode.com/users")
    //     .then(res => res.json())
    //     .then(item => setData(item))
        
    // }

    const getData = async () =>{
        const api = ("https://jsonplaceholder.typicode.com/todos")   
        const result = await fetch(api)
        const getResult= result.json()
        setOther(getResult)
        console.log(getResult)

    }
    const showData = async() =>{
        await fetch("https://jsonplaceholder.typicode.com/users")
        .then(res => res.json())
        .then(item => setData(item))
        
    }

    const ele =  data.map(function(item){
        return(
            <div key={item.id}>
                {item.address.street}
            </div>
        )
    })

    const show = other.map(function(item){
        return(
            <div key={item.id}>
                {item.title}
            </div>
        )
    })
console.log(other)


  return (
    <div>
        {ele}
        {show }
    </div>
  )
}

export default Fetch