import { useEffect, useState } from 'react'

import './App.css'
import { Col, Container, Row } from 'react-bootstrap'
import axios from 'axios';

function App() {


  
  let [product,setProduct] = useState([]);
  let getData = ()=>{
    axios.get("https://dummyjson.com/products").then((response)=>{
     setProduct(response.data.products);
     
    })
  };
  console.log(product);
  
 useEffect(()=>{
   getData()
  
 },[]);
  return (
  
    <Container>

      <Row>
        {product.map((item,i) => (
        <Col key={i} lg = {4}>
         <div className='products'>
            <img src={item.thumbnail} alt="" />
            <div className="product_texts">
            <span> <span>Id:</span> {item.id}</span>
            <h4> <span>Title:</span> {item.title}</h4>
            <p><span>Description:</span>{item.description}</p>
            <p><span>Price:  $</span>{item.price}</p>
            <p><span>Discoun :</span>{item.discountPercentage}</p>
            <p><span>Rating:</span>{item.rating}</p>
            </div>
         </div>
            </Col>
  ))}
      </Row>
    </Container>
  
  )
}

export default App
