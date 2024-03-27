import LikeDislike from "./LikeDislike.jsx";
function StudentProfileCard({pic,nickName}){ //over the fly destructuring

    return(
        <>
        <div className="border1">
        <img className="profile-pic" src={pic}/>
        <h5> Nickname {nickName} </h5>
        <LikeDislike/>
        </div>
        </>
    )
}
export default StudentProfileCard;