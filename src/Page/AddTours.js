import React, { useState } from 'react'
import { ImagetoBase64 } from '../utility/ImagetoBase64';
import { toast } from 'react-hot-toast';
import { IoCloudUploadOutline } from "react-icons/io5";

function Addtours() {
    const [data,setData] = useState({
            name: "",
            city: "",
            address: "",
            distance: "",
            price: "",
            maxGroupSize: "",
            desc: "",
            image: ""
          });
          const handleOnchange = (e)=>{
            const {name,value} = e.target
            setData((preve)=>{
              return{
                ...preve,
                [name]: value
              }
        
            })
        
          }

  
   
  
    const handleOnChange = (e) => {
      const { name, value } = e.target;
      setData((prev) => ({
        ...prev,
        [name]: value
      }));
    };
  
 
    const uploadImage = async (e)=>{
        const data = await ImagetoBase64(e.target.files[0])
            // console.log(data);
            setData((preve)=>{
              return{
                ...preve,
                image : data
              }
    
            })
    
      }
  
      const handleSubmit = async(e)=>{
        e.preventDefault()
        console.log(data)
    
        const {name,
        city,
        address,
        distance,
        price,
        maxGroupSize,
        desc,
        image}=data
        if( name &&  city &&  address  &&  distance  &&   price && maxGroupSize &&  desc  && image){
    
          const fetchData = await fetch(`${process.env.REACT_APP_SERVER_DOMIN}/uploadtour`,{
            method : "POST",
            headers:{
              "Content-Type":"application/json"
            },
            body:JSON.stringify(data)
          })
          const fetchRes = await fetchData.json()
          console.log(fetchRes)
          toast(fetchRes.message)
          setData(()=>{
            return{
                name: "",
                city: "",
                address: "",
                maxGroupSize: "",
                distance: "",
                price: "",
                desc: "",
                image: ""
    
    
            }
          })
        }
        else{
          toast.error("Enter Required Fields")
        }
    
    
     
      }
    
  return (
    <div className="p-3">
    <form className='m-auto w-full max-w-md  shadow flex flex-col p-1 bg-white' onSubmit={handleSubmit}>
      <label htmlFor="name">Name of the place</label>
      <input type="text" name='name' onChange={handleOnChange}  className='bg-slate-300 rounded p-1 my-1 p-1' value={data.name}/>



     

      <label htmlFor='city'>State</label>
      <select id='city' name='city' onChange={handleOnChange} className='bg-slate-300 rounded p-1 my-1 p-1' value={data.city}>
      <option value="" disabled selected>Select State</option>
  <option value="Andhra Pradesh">Andhra Pradesh</option>
  <option value="Arunachal Pradesh">Arunachal Pradesh</option>
  <option value="Assam">Assam</option>
  <option value="Bihar">Bihar</option>
  <option value="Chhattisgarh">Chhattisgarh</option>
  <option value="Goa">Goa</option>
  <option value="Gujarat">Gujarat</option>
  <option value="Haryana">Haryana</option>
  <option value="Himachal Pradesh">Himachal Pradesh</option>
  <option value="Puducherry">Jammu & Kashmir</option>
  <option value="Jharkhand">Jharkhand</option>
  <option value="Karnataka">Karnataka</option>
  <option value="Kerala">Kerala</option>
  <option value="Madhya Pradesh">Madhya Pradesh</option>
  <option value="Maharashtra">Maharashtra</option>
  <option value="Manipur">Manipur</option>
  <option value="Meghalaya">Meghalaya</option>
  <option value="Mizoram">Mizoram</option>
  <option value="Nagaland">Nagaland</option>
  <option value="Odisha">Odisha</option>
  <option value="Punjab">Punjab</option>
  <option value="Rajasthan">Rajasthan</option>
  <option value="Sikkim">Sikkim</option>
  <option value="Tamil Nadu">Tamil Nadu</option>
  <option value="Telangana">Telangana</option>
  <option value="Tripura">Tripura</option>
  <option value="Uttar Pradesh">Uttar Pradesh</option>
  <option value="Uttarakhand">Uttarakhand</option>
  <option value="West Bengal">West Bengal</option>
  <option value="Andaman and Nicobar Islands">Andaman and Nicobar Islands</option>
  <option value="Chandigarh">Chandigarh</option>
  <option value="Dadra and Nagar Haveli">Dadra and Nagar Haveli</option>
  <option value="Daman and Diu">Daman and Diu</option>
  <option value="Lakshadweep">Lakshadweep</option>
  <option value="Delhi">Delhi</option>
  <option value="Puducherry">Puducherry</option>

      </select>

      <label htmlFor="address">Address</label>
      <input type="text" name='address' onChange={handleOnChange}  className='bg-slate-300 rounded p-1 my-1 p-1' value={data.address}/>

      <label htmlFor="distance">Distance</label>
      <input type="number" name='distance' onChange={handleOnChange} className='bg-slate-300 rounded p-1 my-1 p-1' value={data.distance}/>

      <label htmlFor="price">Price</label>
      <input type="number" name='price' onChange={handleOnChange} className='bg-slate-300 rounded p-1 my-1 p-1' value={data.price}/>

      <label htmlFor="maxGroupSize">Max Group Size</label>
      <input type="number" name='maxGroupSize' onChange={handleOnChange} className='bg-slate-300 rounded p-1 my-1 p-1' value={data.maxGroupSize}/>

      <label htmlFor='desc'>Description</label>
      <textarea  rows={2} name='desc' onChange={handleOnChange} className='rounded text-sm  bg-slate-300 my-1 p-1 resize-none' value={data.desc}></textarea>

      <label htmlFor='image'>Photo
        <div  className='h-40 w-full bg-slate-300 rounded flex items-center  justify-center cursor-pointer'>
          {
                    data.image ?  <img src={data.image} className='h-full'/> :  <span className='text-7xl'><IoCloudUploadOutline /></span>
    
          }
          <input type="file" accept='image/*' id='image' onChange={uploadImage} className='hidden'/>
        </div>
      </label>

      <button className='bg-blue-500 hover:bg-orange-500 rounded text-white text-lg font-medium my-4 drop-shadow'>UPLOAD</button>
    </form>
  </div>
);
}



export default Addtours