import StudentCard from './StudentCard.jsx';
import ProfileCard from './ProfileCard.jsx'
import Navigation from './Navigation.jsx';
import ProfileCardWithMap from './ProfileCardWithMap.jsx';
function DisplayCard(props) {
    return (
        <>
           
            
            {/* 
             <ProfileCard image={"https://www.pngitem.com/pimgs/m/404-4042710_circle-profile-picture-png-transparent-png.png"} name="Salman" nickname="Bhai" age="20" contact_number="99999999" summary="abcd"/>
            <ProfileCard image={"https://www.pngitem.com/pimgs/m/404-4042710_circle-profile-picture-png-transparent-png.png"} name="Shahrukh" nickname="Badshah" age="20" contact_number="99999999" summary="xyxz" />
            <ProfileCard image={"https://www.pngitem.com/pimgs/m/404-4042710_circle-profile-picture-png-transparent-png.png"} name="Avni" nickname="Gungun" age="20" contact_number="99999999" summary="pqrs" />
            <ProfileCard image={"https://www.pngitem.com/pimgs/m/404-4042710_circle-profile-picture-png-transparent-png.png"} name="Poonam" nickname="Poornima" age="20" contact_number="99999999" summary="jkhi" />
            <ProfileCard image={"https://www.pngitem.com/pimgs/m/404-4042710_circle-profile-picture-png-transparent-png.png"} name="Amisha" nickname="Ammu" age="20" contact_number="99999999" summary="lmno" />
            <ProfileCard image={"https://www.pngitem.com/pimgs/m/404-4042710_circle-profile-picture-png-transparent-png.png"} name="Shraddha" nickname="Bablee" age="20" contact_number="99999999" summary="efgh" />
            */}
            {/*React 2nd way*/}
            {/*<ProfileCard></ProfileCard>*/}
            {/*ProfileCard()*/}
           
           
            {/*[{ num: 4 }, { num: 5 }, { num: 6 }]}.map(element=>console.log(element.num))*/} {/*In react we always use array of objects*/ }
            {<ProfileCardWithMap/>}
            <br/>
            {console.log(props)}
            <StudentCard/>
        </>
    )
}
export default DisplayCard;