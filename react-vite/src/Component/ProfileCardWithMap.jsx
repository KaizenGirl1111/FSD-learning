import ProfileCard from './ProfileCard'; // Assuming you have a separate component for rendering individual profile cards

function ProfileCardWithMap() { 
    const profiles = [
        {   
            name: "Avni",
            nickname: "Gungun",
            age:21,
            contant_number:8788787867,
            summary:"Hello world",
            image: "https://www.pngitem.com/pimgs/m/404-4042710_circle-profile-picture-png-transparent-png.png"
        }, {
            name: "Poonam",
            nickname: "Poornima",
            age:20,
            contact_number:8632404213,
            summary:"Hello world",
            image: "https://www.pngitem.com/pimgs/m/404-4042710_circle-profile-picture-png-transparent-png.png"
        },
        {
            name: "Amisha",
            nickname: "Ami",
            age:18,
            contact_number:9876324525,
            summary:"Hello world",
            image: "https://www.pngitem.com/pimgs/m/404-4042710_circle-profile-picture-png-transparent-png.png"
        }
    ];

    return (
        <>
            {profiles.map((profile,index) => (
                <ProfileCard key={index}{...profile}/>
            ))}
        </>
    );
}

export default ProfileCardWithMap;
