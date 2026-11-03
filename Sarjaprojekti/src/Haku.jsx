import {useState} from "react";


function Haku(){

    const [hakusana, setHakusana] = useState("");
    const [esitieto, setEsitieto] = useState("");

    function handleSubmit(event) {
    event.preventDefault();

    if (hakusana.trim() === "") {
        setEsitieto("Anna sarjan nimi.");
        return;
    }

    setEsitieto("Haetaan sarjaa: " + hakusana.trim());
}

    return(
     <main className="normaali">
        <h1 id="Otsikko">Sarjahaku</h1>
        <p id="esittely">Hae sarjoja ja kokoa katselu listasi!</p>
    
        <form onSubmit={handleSubmit}>
            <label htmlFor="hakusana" className="labeli">Sarjan nimi:</label>
            <input type="text" id="hakusana" name="hakusana" value={hakusana} onChange={(event) => setHakusana(event.target.value)} placeholder="esim: Game of Thrones"/>
            <button className="yleinennappi">Hae sarjoja! 🔍</button>
        </form>

        <p className="esitieto">{esitieto}</p>

        
    </main>
    );

}

export default Haku;