import Profile  from "./components/Profile";
import Contact from "./components/Contact";
export default function MyProfile(){
    return (
        <>
    <Profile/>
    <h2 className="text-xl text-center text-red-900">Contact</h2>

    <div className="flex items-center m-5 w-1/2 mx-auto">
    <div className="grid grid-cols-3 gap-3 mx-auto">
       <Contact 
        label="OrcA IG." 
        link="https://www.instagram.com/we_p.n?igsh=eG84NnZ2aDR2NHJ6&utm_source=qr" 
        icon="/imges/img IG.avif"

        
        />
        </div>
    </div>
    
   
    
    
     <div className="ps-5 pe-5 pt-1 pb-1 bg-amber-300 rounded w-16 flex justify-crnter mt-5">
            <a href="/">Back</a>
    </div>
     
        </>
        
    );

}