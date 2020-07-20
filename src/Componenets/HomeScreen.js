import React,{useState,useEffect} from 'react'
const HomeScreen=()=>{
    const [loading,setLoadig]=useState(true)
    const [images,setImages]=useState([])

    useEffect(()=>{
        fetchLogo()
            
    },[])
    const fetchLogo=()=>{
        fetch('https://api.thedogapi.com/v1/images/search?limit=100')
          .then((data) => {
            if(!data.ok)
            {
                      throw Error("not found")
            }
               
            return data.json()
            .then(allImages=>{
                setImages(allImages)
                setLoadig(false)
            })
            .catch(err=>{
                throw Error(err.message)
            })
            
       
            })

    }
    
        return( loading?<h1>....loading</h1>:
         <div>  
             <div className="SearchInputContainer">
                 <input type="text"placeholder="Search"/>
             </div> 
        <ui className="Products">
                     
                       {
                           images.map((image,index)=>
                             <li key={index}>
                              <div className="Product">
                              <img src={image.url} 
                                alt="DOGS IMAGES" className="DogImage">
                              </img>    
                              </div>
                             </li>
                             )
                                           
                       }
             </ui>
             </div>
        )






}
export default HomeScreen