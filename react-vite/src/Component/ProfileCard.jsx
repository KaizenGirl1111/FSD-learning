import SummaryCard from './SummaryCard.jsx';
import {useState} from "react";
import LikeDislike from "./LikeDislike.jsx";
function ProfileCard({image,name,nickname,age,contact_number,summary}) {
     const [time,setTime] = useState(5)
     const [btnName,setbtnName] = useState("Given")
     const [like,setLike] = useState(0)
     const [dislike,setDislike] = useState(0)
    return (  
        <>
         <div className="border">
                <img className="profile-pic" src={image} />
                <h4>Welcome {name}</h4>
                <h5>Nickname {nickname}</h5>
                <p>Age {age}</p>
                <p>Contact {contact_number}</p>
                <SummaryCard summary={summary} />
                <h6>Time {btnName}:{time} mins</h6>
                <button onClick={()=>{
                    setTime(time+10)
                    setbtnName("Taken")
                }}>update Time</button>
                <br/>
               <LikeDislike/>
            </div>  
   
        </>

    )
}
export default ProfileCard;
//class for styling
//class="" || Classes are the reserved keyword ||OOPS> class classname
//className=""
//params and args is js
//user dependent > args > recive > params> display
//calling ut function > function()// traditions and params and args wont work.
// html tag > calling tag
// attribute ={"attribute value"}// args

// React > Properties > Props 

//hooks-function
//[state,setState] = useState(500)
//initial values:"" number [] null empty 
