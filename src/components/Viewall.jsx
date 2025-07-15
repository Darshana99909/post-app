import React, { useEffect, useState } from 'react'
import Navbar from './Navbar'
import axios from 'axios'

const Viewall = () => {
    const[addPost,setPost]=useState(
      []
    )

    const fetchData=()=>
    {
      axios.get("https://jsonplaceholder.typicode.com/posts").then(

        (response)=>{
               setPost(response.data)
        }
      ).catch()
    }
    useEffect(()=>{fetchData()},[])
       
  return (
    <div>
        <Navbar/>
        <br></br>
        <div className="container row">
            <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                <div className="row g-3">
                    <div className="row">
                      <div className="d-flex justify-content-center">
                        <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">

                            <table class="table table-success table-bordered table-striped-columns table-hover">
  <thead class="table-light">
    <tr>
      <th scope="col">User id</th>
      <th scope="col">id</th>
      <th scope="col">title</th>
      <th scope="col">body</th>
    </tr>
  </thead>
  
                    {addPost.map(

                        (value,index)=>{


                            return (

                                 <tbody>
    <tr>
      
      <td>{value.userId}</td>
      <td>{value.id}</td>
      <td>{value.title}</td>
      <td>{value.body}</td>
    </tr>
    
  </tbody>

                       
                            )
                        }
                    )}
</table>
                      
                    </div>
                </div>
            </div>
        </div>
    </div>
     </div>
     </div>
                    
  )
}

export default Viewall