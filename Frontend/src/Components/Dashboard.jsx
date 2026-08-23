import netflix from "../assets/images/Netflix-Image.webp"

function Dashboard(){

    return(
        <div className="relative min-h-screen">
    
    <div className="absolute inset-0">
        <img src={netflix} alt="" className=" bg-cover bg-center" />
    </div>

    <div className="absolute inset-0 bg-black/75"></div>

    <div className="relative z-10">
        <h1 className="text-3xl md:text-4xl lg:text-5xl md:ml-20 ml-5 mb-5 p-5 text-left text-red-600 font-bold">
          <span className="inline-block -rotate-3">N</span>
          <span className="inline-block -rotate-2">E</span>
          <span className="inline-block -rotate-1">T</span>
          <span className="inline-block translate-y-0">F</span>
          <span className="inline-block -rotate-0">L</span>
          <span className="inline-block -rotate-1">I</span>
          <span className="inline-block rotate-3">X</span>
            </h1>  
        </div> 
            <div className="relative translate-y-40 flex flex-col items-center justify-center">
                <div className=" text-center text-white">
                <h1 className="text-3xl md:text-4xl lg:text-5xl mb-2 font-bold">Unlimited movies, shows, <br /> and more</h1>
                <p  className="md:text-lg lg:text-xl">Starts at $10. Cancel at any time.</p>
                </div>
            </div>
        </div>
    )
}

export default Dashboard