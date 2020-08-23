import React,{useState} from 'react';
import ResourceList from './ResourceList';

const App=()=>{
    const [resource,setResource]=useState('posts')
    return(
        <div>
            <div>
                <button onClick={()=>setResource('posts')}>POSTS</button>
                <button onClick={()=>setResource('todos')}>TODOS</button>
            </div>
          <ResourceList resource={resource} />
        </div>
    );
}
export default App;