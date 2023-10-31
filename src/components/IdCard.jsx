function IdCard(props){

    const weekday = ["Sun","Mon", "Tue","Wed","Thu","Fri","Sat"]

    return(
        <div className="info">
            <img className="profileImg" src={props.picture} alt="" />
            <ul className = "infoList">
                <li><b>First name</b> : {props.firstName}</li>
                <li><b>Last name</b> : {props.lastName}</li>
                <li><b>Gender</b> : {props.gender}</li>
                <li><b>Height</b> : {props.height}cm</li>
                <li><b>Birth</b>: {props.birth.toLocaleString('default', {month : 'short'})} {weekday[props.birth.getDay()]} {props.birth.getDate()} {props.birth.getFullYear()}</li>
            </ul>
        </div>
    );
}
export default IdCard;