function Greetings(props){
        if(props.lang === "en"){
            return(
                <div>
                    <p>Hello {props.name}</p>
                </div>
            );
        }
        else if(props.lang === "de"){
            return(
                <div>
                    <p>Hallo {props.name}</p>
                </div>
            );
        }
        else if(props.lang === "es"){
            return(
                <div>
                    <p>Hola {props.name}</p>
                </div>
            );
        }
        else if(props.lang === "fr"){
            return(
                <div>
                    <p>Bonjour {props.name}</p>
                </div>
            );
        }
        else{
            return(
                <div>
                    <p>Terve</p>
                </div>
            );
        }
}
export default Greetings;