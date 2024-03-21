import SummaryCard from './SummaryCard.jsx'
function ProfileCard(props) {
    console.log(props)
    return (
        <>
         <div className="border">
                <img className="profile-pic" src={props.image} />
                <h4>Welcome {props.name}</h4>
                <h5>Nickname {props.nickname}</h5>
                <p>Age {props.age}</p>
                <p>Contact {props.contact_number}</p>
                <SummaryCard summary={props.summary} />
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