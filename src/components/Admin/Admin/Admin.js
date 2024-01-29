import axios from 'axios';
import React, { useContext, useEffect } from 'react';
import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { UserContext } from '../../../App';
import DeleteProduct from '../DeleteProduct/DeleteProduct';
import SideBar from '../SideBar/SideBar';

import './admin.css'
const Admin = () => {
  const [loggedInUser, setLoggedInUser] = useContext(UserContext);
  const [admin, setAdmin] = useState([]);
  const imgApi = '7bb7d090f59fadc4402c1878c34f21f9';
  const { register, handleSubmit, watch } = useForm();
  const [imageUrl, setImageUrl] = useState()

  const url2 = `http://localhost:5000/adminEmail`
  useEffect(() => {
    fetch('http://localhost:5000/adminEmail?eml=' + loggedInUser.email, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',

      }
    })
      .then(res => res.json())
      .then(data => {
        setAdmin(data)
    })
  }, [loggedInUser.email])
  console.log("admin length" ,admin.length)

  const [allServices, setAllServices] = useState([])
  const url1 = `http://localhost:5000/services`;
  useEffect(() => {
    fetch(url1)
      .then(res => res.json())
      .then(data => setAllServices(data))

  }, [])

  const onSubmit = data => {
    let name = document.getElementById('name').value;
    let about = document.getElementById('about').value;
    let price = document.getElementById('price').value;

    const serviceData = {
      name: name,
      price: price,
      about: about,
      img: imageUrl
    }
    const url2 = `http://localhost:5000/admin`
    fetch(url2, {
      method: 'POST',
      headers: {
        'content-type': 'application/json'
      },
      body: JSON.stringify(serviceData)
    }).then(res => alert('Service added successfully'))

  };
  const handleImage = (event) => {
    console.log(event.target.files);
    const imageData = new FormData()
    imageData.set('key', '7bb7d090f59fadc4402c1878c34f21f9')
    imageData.append('image', event.target.files[0])
    axios.post('https://api.imgbb.com/1/upload', imageData)
      .then(function (response) {
        setImageUrl(response.data.data.display_url);
      })
      .catch(function (error) {
        console.log(error);
      });
  }


  return (

    <div >
      {admin.length>0 ? 
    <div style={{ backgroundColor: "#008CBA", height: "1000px" }} className="row justify-content-around">
     
      <div className="col-2">
        <SideBar></SideBar>
      </div>
   
      <div className="col-5 formDiv text-center">
        <h2 className="text-light">Add Service </h2>
        <form className="formCls" onSubmit={handleSubmit(onSubmit)}>
          <input id="name" {...register("name")} name="name" defaultValue="" placeholder="service" />
          <br />
          <input id="about" {...register("about")} type="text" name="about" placeholder="about" />
          <br />
          <input id="price" {...register("price")} type="number" name="price" placeholder="price" />
          <br />
          <input name="image" type="file" defaultValue="" onChange={handleImage} />

          <br />
          <input type="submit" />
        </form>
      </div>
     
     
      <div className="col-5">

        <table className="table table-hover mt-5">
          <thead>
            <tr className="text-light">
              <th scope="col">Name</th>
              <th scope="col">Price</th>
              <th scope="col">Action</th>
            </tr>
          </thead>
          <tbody>
            {
              allServices.map(service => <DeleteProduct service={service} key={service._id}></DeleteProduct>)
            }
          </tbody>
        </table>

      </div> 
    </div>:
     <div className="text center"> 
       <h3 className="text-danger">Sorry!!! it's not your cup of tea. You aren't an admin</h3>
       </div> }
    </div>

  )
};

export default Admin;