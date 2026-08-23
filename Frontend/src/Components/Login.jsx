import { useState } from "react"
import { useNavigate } from "react-router-dom"
import axios from "axios"

function Login(){

    const navigate=useNavigate()

    const[user,setuser]=useState("")
    const[pass,setpass]=useState()
    const[color,setcolor]=useState(true)
    const[showpass,setshow]=useState(false)
    const[para,setpara]=useState(false)
    const[option,setoption]=useState(false)
    const[error,seterror]=useState(false)
    const[arrow,setarrow]=useState(false)

    const handleUser=(e)=>{
        setuser(e.target.value)
    }

    const handlePass=(e)=>{
        setpass(e.target.value)
    }

    const handleShow=()=>{
        setshow(!showpass)
    }

    const handleArrow=()=>{
        setarrow(!arrow)
    }

    const handleOption=()=>{
        setoption(!option)
    }

    const handleSign=()=>{
        navigate("/signup")
    }

    const handleCheck=()=>{
        const emailRegex=/^[a-zA-Z0-9]+@gmail\.com$/

        if(emailRegex.test(user)){
            setcolor(true)
            setpara(false)
        } else{
            setcolor(false)
            setpara(true)
        }
        const logindetails=axios.post("http://localhost:3000/",{"emailid":user, "passid":pass})
        logindetails.then(function(data){
            if(data.data===true){
                navigate("/dash")
            } else{
                seterror(true)
            }
      })
    }
    return(
        <div className="min-h-screen w-full bg-[linear-gradient(to_bottom,#4e1016,#1a0508,#000000)] text-white text-center">
          <h1 className="text-3xl md:text-4xl lg:text-5xl md:ml-20 ml-5 mb-5 p-5 text-left text-red-600 font-bold">
  <span className="inline-block -rotate-3">N</span>
  <span className="inline-block -rotate-2">E</span>
  <span className="inline-block -rotate-1">T</span>
  <span className="inline-block translate-y-0">F</span>
  <span className="inline-block -rotate-0">L</span>
  <span className="inline-block -rotate-1">I</span>
  <span className="inline-block rotate-3">X</span>
            </h1>
            
            <h2 className="mt-5 font-bold text-2xl md:text-3xl">Enter your info to sign in</h2>
          <h2 className="m-2 mb-10 text-lg md:text-xl">Or get started with a new account.</h2>
          <div className="relative  w-80 md:w-96 mx-auto">
            <input onChange={handleUser} value={user}
            className={`peer border p-4 w-full outline-1
                 ${color? "outline-white" : "outline-red-600"}`} 
            placeholder=" " id="email" type="text" name="emailid"/>
            <label className={`absolute left-4  transition-all
             duration-200 ${user ? "top-0 text-sm" 
                : "top-4 text-lg peer-focus:top-0 peer-focus:text-sm"}`}
             htmlFor="email">Email Id</label>
              {
                para ? (<p className="text-red-600 mt-2 text-left">
                     <i className="fa-regular fa-circle-xmark text-red-600 font-light"> </i>
                Please enter a valid email</p>): null
             } 
          </div>

          <div className="relative w-80 md:w-96 mx-auto mt-5">
            <input onChange={handlePass} value={pass}
            type={showpass? "text" : "password"}
            className="peer border w-full p-4 outline-0"
             id="password" name="passid"/>
            <label className={`absolute left-4 
             ${ pass ? "top-0 text-sm" 
                : "top-4 text-lg peer-focus:top-0 peer-focus:text-sm"
             }  transition-all duration-200`}
             htmlFor="password">Password</label>
            {
                pass? (
             <i onClick={handleShow}  
             className={`fa-regular fa-eye text-white absolute right-3 bottom-5
                ${showpass ? "fa-regular fa-eye-slash" :"fa-regular fa-eye"}`}></i>
                ) : null
            }
          </div>
          
          <div className="relative w-80 md:w-96 mx-auto mb-5">
            {
                error ? (<p className="text-red-600 mt-2 text-left">
                     <i className="fa-regular fa-circle-xmark text-red-600 font-light"> 
                        </i>  Wrong email or password</p>): null
             }
             </div>

          <div className=" w-80 md:w-96 mx-auto mb-10">
            <button type="submit" onClick={handleCheck}
             className="bg-red-700 border text-lg w-full p-3 hover:bg-red-800 cursor-pointer">Continue</button>
          </div>

          <div className=" w-80 md:w-96 mx-auto text-left mb-5">
            <p className="mb-2">Get Help <span onClick={handleOption}>
                <i onClick={handleArrow} className={`fa-solid fa-angle-up cursor-pointer
            ${arrow ? "fa-solid fa-angle-down" : "fa-solid fa-angle-up"} `}></i></span></p>
                {
                option ? (<p className="underline mb-2">
                    <span className="cursor-pointer" onClick={handleSign}>Sign Up</span> <br />
                Forget email or password ?<br/>
                 Learn more about sign-in</p>) : null
                }
            </div>

            <div className=" w-80 md:w-96 mx-auto text-left">
            <p className="text-sm text-gray-500">This page is protected by Google reCAPTCHA to ensure you're not a bot.</p>
          </div>
        </div>
    )
}

export default Login