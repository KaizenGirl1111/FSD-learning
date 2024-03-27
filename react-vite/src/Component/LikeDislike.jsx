import {useState} from "react";
function LikeDislike(){
     const [like,setLike] = useState(0)
     const [dislike,setDislike] = useState(0)
     const myStyle={
           marginLeft: "5px",
    fontSize: "25px",
    borderRadius: "8%",
    textAlign: "center",
    padding: "5px 10px 5px 10px"
     }
    return(
   
        <>
        
        <br/>
        <span>
        <button style={myStyle} onClick={()=>setLike(like+1)} >👍{like}</button>
           

        <button className="btn-social" onClick={()=>setDislike(dislike+1)}>👎{dislike}</button>
   
     </span>
        </>
    )
    }
export default LikeDislike;