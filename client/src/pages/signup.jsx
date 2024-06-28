import {useState} from 'react';
import './styles.css'
import useSignUp from '../hooks/useSignUp';


export default function SignUpPage(){
    const [userProfile,setUserProfile]=useState({fname:"",lname:"",name:"",email:"",password:""});
    const [imgSrc,setImgSrc]=useState("img/visible.png");
    const [passwordType,setPasswordType]=useState("text");
    const {loading,error,signup}=useSignUp();
async function handleSubmit(e){
    e.preventDefault();
    await signup(userProfile);
}

    return (<form onSubmit={handleSubmit}>
    <h3>Register</h3>
    {error && <div className="error">{error}</div>}
    <label htmlFor="fname">First Name</label>
    <input name="fname" type="text" placeholder="First Name" id="fname" required onChange={(e)=>setUserProfile({...userProfile,fname: e.target.value})}>
    </input>
    <label htmlFor="lname">Last Name</label>
    <input name="lname" type="text" placeholder="Last Name" id="lname" required onChange={(e)=>setUserProfile({...userProfile,lname: e.target.value})}>
    </input>
    <label htmlFor="username">Username</label>
    <input name="name" type="text" placeholder="Name" id="name"  required onChange={(e)=>setUserProfile({...userProfile,name: e.target.value})}>
    </input>
    <label htmlFor="email">Email</label>
    <input name="email" type="email" placeholder="Email" id="email" required onChange={(e)=>setUserProfile({...userProfile,email: e.target.value})}>
    </input>
    
    
    <div className="password">
        <label htmlFor="password">Password</label>
    <input type={passwordType} name="password" id="password"  required onChange={(e)=>setUserProfile({...userProfile,password: e.target.value})}/>
    <img id="vis" alt="passwordhide/vis" src={imgSrc} onClick={()=>{if(imgSrc==="img/visible.png"){
        setImgSrc("img/hide.png");
        setPasswordType("text");
    }
    else {setImgSrc("img/visible.png");
    setPasswordType("password");
    }
    }}/>
    </div>
    
    <button className="register_button" type="submit" disabled={loading}>Register</button>
    
    
  
</form>)
}