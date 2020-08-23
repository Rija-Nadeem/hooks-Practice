import React, {useState, useEffect} from 'react';
import axios from 'axios';

const useResources=(resource)=>{
    const [resources, setResources]= useState([])
    //way1
    // const fetchResource=async (resouce)=>{
    //     const response=await axios.get(`https://jsonplaceholder.typicode.com/${resource}`);
    //     setResources(response.data);
    // }
    // useEffect(()=>{
    //     fetchResource(resource)
    // },[resource])
   
//way2
    useEffect(()=>{
        (async (resouce)=>{
            const response=await axios.get(`https://jsonplaceholder.typicode.com/${resource}`);
            setResources(response.data);
        })(resource)
    },[resource])
    return resources;
}

const ResourceList =({resource})=>{
   const resources=useResources(resource)

    return(
        <div>
            {resources.map(record=>{
                return <li key={record.id} >{record.title}</li>
            })}
        </div>
    );
    
}
export default ResourceList;