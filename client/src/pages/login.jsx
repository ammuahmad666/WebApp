import {useState} from 'react';
import './styles.css';
import './styles2.css';
import { Link } from 'react-router-dom';
import useLogin from '../hooks/useLogin';
import { useNavigate } from 'react-router-dom';
export default function LoginPage(){
    const [user,setUser]=useState({name:"",password:""});
    const {error,loading,login}=useLogin();
    const navigate = useNavigate();
    async function handleSubmit(e){
      e.preventDefault();
      await login(user);
      if(!error){
        navigate("/home");
      }
    }
    return (<form onSubmit={handleSubmit}>
    <h3>Login Here</h3>
    {error && <div className="erro">{error}</div>}
    <label htmlFor="username">Username</label>
    <input type="text" placeholder="Username" name="username" id="username" onChange={(e)=>{setUser({...user,name:e.target.value})}}>
    </input>
    <label htmlFor="password">Password</label>
    <input type="password" placeholder="Password" id="password" onChange={(e)=>{setUser({...user,password:e.target.value})}}>
    </input>
    <button type="submit" disabled={loading}>Log In</button>
    <div class="social">
      <div class="go"><i class="fab fa-google"></i>  Google</div>
      <div class="fb"><i class="fab fa-facebook"></i>  Facebook</div>
    </div>
    <div class="signup">
        <h2 class="signup_divider"><span>Not a user! Register</span></h2>
        <Link to="/signup">
        <button type="button" class="signup_button">SignUp</button>
        </Link>
    </div>
</form>)


}