import React, {useEffect, useState} from 'react'
import axios from 'axios'
import bootstrap from 'bootstrap/dist/css/bootstrap.min.css'
import './body.css'
function Body() {

const [items, setItems] = useState([]);
useEffect(()=>{
    axios.get('https://www.themealdb.com/api/json/v1/1/filter.php?c=Seafood')
    .then( res => {
            console.log(res.data);
            setItems(res.data.meals);
        }
    ).catch(err =>{
        console.log(err);
    })
}, []);
    const itemLists = items.map( (item) => {
        return <div className='col-md-4'>
            <p>{item.strMeal}</p>
            <img src={item.strMealThumb}  className='img-fluid'/>
            <p> {item.idMeal}</p>

        </div>
    })

  return (
    <div>
        
    <div className='row'>
        {itemLists}

    </div>


    </div>
  )
}

export default Body