function Character({ name, imgUrl, birth, death, race, realm, spouse }) {
    return (
        <div>
            <h2>{name}</h2>
            <img src={imgUrl} alt={name} />
            <ul>
                <li>Date of Birth: {birth}</li>
                <li>Date of Death: {death}</li>
                <li>Race: {race}</li>
                <li>Realm: {realm}</li>
                <li>Spouse: {spouse}</li>
            </ul>
        </div>
    );
}

export default Character;



// function Character({name, imgUrl, birth, death, race, realm, spouse}){
//     return(
//         <div>
//             <h2>{name}</h2>
//             <img src={imgUrl} alt={name} />
//             <ul>
//                 <li>Date of Birth: {birth}</li>
//                 <li>Date of Death: {death}</li>
//                 <li>Race: {race}</li>
//                 <li>Realm: {realm}</li>
//                 <li>Spouse: {spouse}</li>
//             </ul>
//         </div>
//     )
// }

// export default Character;


// THIS IS WHEN YOU ARE USING PROPS
// function Character(props) {
//     return (
//         <div>
//             <h2>{props.name}</h2>
//             <img src={props.imgSrc} alt={props.name} />
//             <ul>
//                 <li>Date of Birth: {props.dob}</li>
//                 <li>Date of Death: {props.dod}</li>
//                 <li>Race: {props.race}</li>
//                 <li>Realm: {props.relam}</li>
//                 <li>Spouse: {props.spouse}</li>
//             </ul>
//         </div>
//     )
// }