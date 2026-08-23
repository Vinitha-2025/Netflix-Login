import { useState } from "react"
import { useNavigate } from "react-router-dom"
import axios from "axios"

function Signup(){

    const navigate=useNavigate()

    const[user,setuser]=useState("")
    const[pass,setpass]=useState("")
    const[conpass,setconpass]=useState("")
    const[color,setcolor]=useState(true)
    const[showpass,setshow]=useState(false)
    const[showconpass,setshowcon]=useState(false)
    const[para,setpara]=useState(false)
    const[wrongpass,setwrong]=useState(true)
    const[empty,setempty]=useState(false)

    const handleUser=(e)=>{
        setuser(e.target.value)
    }

    const handlePass=(e)=>{
        setpass(e.target.value)
    }

    const handleConfirm=(e)=>{
        setconpass(e.target.value)
    }

    const handleShow=()=>{
        setshow(!showpass)
    }

    const handleShowcon=()=>{
        setshowcon(!showconpass)
    }

    const handleCheck=()=>{
        const emailRegex=/^[a-zA-Z0-9]+@gmail\.com$/

        if(emailRegex.test(user)){
            setcolor(true)
            setpara(false)
        } else{
            setcolor(false)
            setpara(true)
            return
        }

        if (pass === "" || conpass === "") {
           setempty(true)
           return
        } else{
            setempty(false)
        }

        if(pass!== conpass){
            setwrong(false)
            return
        } else{
            setwrong(true)
        }

        const signupdetails=axios.post("https://netflix-login-theta-swart.vercel.app/signup",{"emailid":user, "passid":pass})
        signupdetails.then(function(data){
                navigate("/")
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

            <h2 className="m-5  font-bold text-2xl md:text-3xl">Signup to start Watching</h2>
          <div className="relative w-80 md:w-96 mx-auto">
            <input onChange={handleUser} value={user}
            className={`peer border p-4 w-full outline-1
                 ${color? "outline-white" : "outline-red-600"}`} 
            placeholder=" " id="email" type="text" name="emailid" required/>
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

          <div className="relative  w-80 md:w-96 mx-auto m-5">
            <input onChange={handlePass} value={pass}
            type={showpass? "text" : "password"}
            className="peer border w-full p-4 outline-0"
             id="password" name="passid" required/>
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

          <div className="relative w-80 md:w-96 mx-auto mb-3 mt-5">
            <input onChange={handleConfirm} value={conpass}
            type={showconpass? "text" : "password"}
            className="peer border w-full p-4 outline-0"
             id="conpassword" name="passid" required/>
            <label className={`absolute left-4 
             ${ conpass ? "top-0 text-sm" 
                : "top-4 text-lg peer-focus:top-0 peer-focus:text-sm"
             }  transition-all duration-200`}
             htmlFor="confirmpass">Confirm Password</label>
            {
               conpass? (
             <i onClick={handleShowcon}  
             className={`fa-regular fa-eye text-white absolute right-3 bottom-5
                ${showconpass ? "fa-regular fa-eye-slash" :"fa-regular fa-eye"}`}></i>
                ) : null
            } 
          </div>

          <div className=" w-80 md:w-96 mx-auto m-5">
          {
                wrongpass ? null : (<p className="text-red-600 mt-2 text-left">
                     <i className="fa-regular fa-circle-xmark text-red-600 font-light"> </i>
                Passwords do not match</p>)
             }
            {
                empty ? (<p className="text-red-600 mt-2 text-left">
                     <i className="fa-regular fa-circle-xmark text-red-600 font-light"> </i>
                Please enter a password</p>) : null
            }
             </div>

          <div className=" w-80 md:w-96 mx-auto">
            <button type="button" onClick={handleCheck}
             className="bg-red-700 w-full text-lg p-3 hover:bg-red-800 cursor-pointer">Continue</button>
        </div>

          <p className="m-5">Or</p>

          <div className=" w-80 md:w-96 mx-auto">
            <p className="border w-full p-3">
                <i className="fa-brands fa-google text-white"></i>  Continue
                 with Google</p>
          </div>
        </div>
    )
}

export default Signup