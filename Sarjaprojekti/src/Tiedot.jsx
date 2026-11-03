import {useParams, Link} from "react-router-dom";
import {useState, useEffect} from "react";

function Tiedot({lisaaSarja}) {
    const {id} = useParams();
    const [sarja, setSarja] = useState(null);
    const [lataus, setLataus] = useState(false);
    const [virhe, setVirhe] = useState("");

    useEffect(() => {
        setSarja(null);
        setVirhe("");

        if (!id) {
            setLataus(false);
            return;
        }
        const controller = new AbortController();
        
        async function haeTiedot() {
            setLataus(true);
            try {
                const response = await fetch(`https://api.tvmaze.com/shows/${id}`, { signal: controller.signal });
                if (!response.ok) {
                    throw new Error("Tietojen haku epäonnistui.");
                }
                const data = await response.json();
                setSarja(data);
            } catch (error) {
                if (error.name !== "AbortError") {
                    setVirhe("Tietojen haku epäonnistui");
                }
            } finally {
                if (!controller.signal.aborted) {
                    setLataus(false);
                }
            }
        }

        haeTiedot();
        return () => {
            controller.abort();
        }
    }, [id]);

    function Tekstiksi(html) {
        const dokumentti = new DOMParser().parseFromString(html, "text/html");
        return dokumentti.body.textContent || "";
    }


    return(
        <main className="normaali">
            <h1>Sarjan tiedot</h1>
            {!id && (<p>Valitse sarja</p>)}
            {lataus && (<p role="status">Ladataan...</p>)}
            {virhe && (<p role="alert">{virhe}</p>)}
            {sarja && (
                <article>
                    <h2>{sarja.name}</h2>
                    {sarja.image && (
                        <img src={sarja.image.medium} alt={sarja.name} className="sarjan-kuva"/>
                    )}
                    <p>{sarja.summary? Tekstiksi(sarja.summary) : "Ei yhteenvetoa."}</p>

                    <p><strong>Genre:</strong>{sarja.genres.length>0 ? sarja.genres.join(", ") : "Ei tiedossa."}</p>
                    <button type="button" onClick={() => lisaaSarja(sarja)} className="yleinennappi">Lisää katselulistaan</button>
                </article>
            )}
            <Link to="/">Takaisin hakuun</Link>
        </main>
    );

}

export default Tiedot;