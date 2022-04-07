import axios from 'axios';
import React, { Component } from 'react';
import { useState, useEffect  } from 'react'

export default function Products(props) {

const baseURL = `https://jsonplaceholder.typicode.com/posts`;
const [products, setProducts] = useState(null)

 useEffect(() => {   
     axios.get(`${baseURL}/${props.count}`).then((response) => {
        setProducts(response.data);
      });
    
}, []);

if (!products) return null;


        return (
            <div >
               
            <h1>{products.title}</h1>
            <p>{products.body}</p>
            </div>
        );

        }