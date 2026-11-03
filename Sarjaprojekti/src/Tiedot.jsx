import {useParams, Link} from "react-router-dom";

function Tiedot() {
    const {id} = useParams();

    return(
        <main className="normaali">
            <h1>Sarjan tiedot</h1>
            <p>Valitun sarjan tunniste: {id}</p>
            <Link to="/">Takaisin hakuun</Link>
        </main>
    );

}

export default Tiedot;