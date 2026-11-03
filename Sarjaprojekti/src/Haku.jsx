import {useState} from "react";
import {Link} from "react-router-dom";

function Haku(){

    const [hakusana, setHakusana] = useState("");
    const [esitieto, setEsitieto] = useState("");
    const [sarjat, setSarjat] = useState([]);
    const [lataus, setLataus] = useState(false);

    async function handleSubmit(event) {
    event.preventDefault();

    if (hakusana.trim() === "") {
        setEsitieto("Anna sarjan nimi.");
        setSarjat([]);
        return;
    }

    setLataus(true);
    setSarjat([]);
    setEsitieto("Haetaan sarjaa: " + hakusana.trim());

    try {
        const response = await fetch(`https://api.tvmaze.com/search/shows?q=${encodeURIComponent(hakusana.trim())}`);
        if (!response.ok) {
            throw new Error("Haku epäonnistui.");
        }
        const data =await response.json();
        if (data.length === 0) {
            setEsitieto("Sarjaa ei löytynyt.");
        } else {
            setSarjat(data);
            setEsitieto(`Löydettiin ${data.length} sarjaa.`);
        }
    } catch (error) {
        setEsitieto("Haku epäonnistui: " + error.message);
    } finally {
        setLataus(false);
    }
}

    return(
     <main className="normaali">
        <h1 id="Otsikko">Sarjahaku</h1>
        <p id="esittely">Hae sarjoja ja kokoa katselu listasi!</p>
    
        <form onSubmit={handleSubmit}>
            <label htmlFor="hakusana" className="labeli">Sarjan nimi:</label>
            <input type="text" id="hakusana" name="hakusana" value={hakusana} onChange={(event) => setHakusana(event.target.value)} placeholder="esim: Game of Thrones"/>
            <button type="submit" disabled={lataus} className="yleinennappi">{lataus ? "Haetaan..." : "Hae sarjoja! 🔍"}</button>
        </form>

        <p className="esitieto">{esitieto}</p>
        <div className="row g-3 mt-3">
                {sarjat.map((tulos) => (
                    <div
                        className="col-12 col-sm-6 col-md-4"
                        key={tulos.show.id}
                    >
                        <article className="card h-100">
                            {tulos.show.image ? (
                                <img src={tulos.show.image.medium}alt={`${tulos.show.name} -juliste`} className="sarjan-kuva"/>
                            ) : (
                                <p className="mt-3">Kuvaa ei saatavilla </p>
                            )}

                            <div className="kortin-sisalto">
                                
                                <h2 className="otsikko5">
                                    <Link to={`/tiedot/${tulos.show.id}`} className="sarjanlinkki">
                                        {tulos.show.name}
                                    </Link>
                                </h2>
                            </div>
                        </article>
                    </div>
                ))}
            </div>
        
    </main>
    );

}

export default Haku;