import React, { useState } from 'react';
import MiniContainer from '../../utils/MiniContainer';
import { Link } from 'react-router-dom';
import createLogo from '../../images/logo.svg';
import {FcGoogle} from 'react-icons/fc';
import { auth , provider} from '../../firebase/firebaseconfig';
import './Create.scss';
import instance from '../../api/instance'
import { useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom';
import CreateFooter from '../../components/footer/CreateFooter';
const Create = () => {
    const history = useHistory();
    const dispatch = useDispatch();

    const [formData,setFormData] = useState({
        email:"",
        name:"",
        password:"",
        avatar:""
    });

    function createAcountWithGoogle(){
        auth.signInWithPopup(provider)
         .then(response => console.log(response))
         .catch(err => console.log(err))
    }

    function createUserWithEmail(e){
        e.preventDefault();
        instance.post("/users", formData)
          .then(response => {
            if(response.data.name){
              dispatch(
                {
                    name: response.data.name, 
                    type:"CREATE_USER"
                }
                )
                history.push("/")
            }
          })
          .catch(err => console.log(err))
    }
    
    return (
        <section className='create'>
            <div className='logo-navbar'>
                <Link t0="/"><img src={createLogo} alt="" /></Link>
                <span>Already a member?<Link to="/login">Sing in</Link></span>
            </div>
            <MiniContainer>
                <h2>Create an account</h2>
                <div className='create-item'>
                    <form onSubmit={createUserWithEmail}>
                       <div>
                       <input className='form-input1' type="text" placeholder='Name' onChange={e => setFormData({...formData , name:e.target.value})} />
                       <input className='form-input1' type="email" placeholder='Email'  onChange={e => setFormData({...formData , email:e.target.value})}/>
                       </div>
                       <input className='form-input2' type="password" placeholder='Password'  onChange={e => setFormData({...formData , password:e.target.value})}/>
                       <input className='form-input2'  type="url" placeholder='Avatar' onChange={e => setFormData({...formData , avatar:e.target.value})}/>
                       <button className='input1' type='submit'>Create account</button>
                    </form>
                    <div className='create-item_google'>
                       <button onClick={createAcountWithGoogle}><FcGoogle/> Continue with Google</button>
                    </div>
                </div>
            </MiniContainer>
            <CreateFooter/>
        </section>
    );
}

export default Create;
