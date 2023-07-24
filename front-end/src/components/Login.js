import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';

export default function Login() {
    
    const navigateTo = useNavigate();

    const [state, setState] = useState({
        username: null,
        password: null,
        client_id: "client123",
        client_secret: "Jttdcri6zz6wHpyVnW0KjXzgCIDkhUNB",
        grant_type: "password",
        login: false
    });

    
    const authKeyCloak = ()=>{
               
        const params = new URLSearchParams();
        params.append('username', state.username);
        params.append('password', state.password);
        params.append('client_id', state.client_id);
        params.append('client_secret', state.client_secret);
        params.append('grant_type', state.grant_type);
        

        fetch("/auth/realms/springrealm/protocol/openid-connect/token",{
            method: 'POST',
            
            headers: {
                'Content-Type': 'application/x-www-form-urlencoded;charset=UTF-8'
            },
            body: params
            
        }).then((response)=>{
            response.json().then((result)=>{
                console.log(result);

                // saving in local-storage
                if(response.status === 200){
                    localStorage.setItem("token", 
                    result.access_token)
                    localStorage.setItem("login", 
                    true)
                    

                    setState({...state, login: true});
                }
                else
                    alert("Un-Authorized");      

                let status = localStorage.getItem("login");
            
                if(response.status === 200 && status){
                    navigateTo("/home");
                    alert("login successful")
                }
                
            })

        }, (error)=>{
            console.log(error); 
        })
    }


    const logout = ()=>{
               
       
                    localStorage.setItem("token", 
                    null)
                    localStorage.setItem("login", 
                    false)
                    

                    setState({...state, login: false});
                
                    navigateTo("/login");
                    
                }
                
           
    




  
    return (
    <div className='text-center my-5'>
      <h1>Music App</h1>

      <div className='text-center my-4'>
        <label htmlFor="fname" className='mx-2'>Username </label>
        <input type="text" onChange={(event)=>{setState({...state, username: event.target.value })}}/> 
        <br/> <br/>

        <label htmlFor="fname" className='mx-2'>Password </label>
        <input type="password" onChange={(event)=>{setState({...state, password: event.target.value })}}/> 
        <br/> <br/>

        <button onClick={()=>{authKeyCloak()}}> Login </button>
        <button onClick={()=>{logout()}}> LogOut </button>

      </div>
    </div>
  )
}