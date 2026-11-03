function Lista({katselulista, poistaSarja}) {

    return(
        <main className="normaali">
            <h1>Katselulista</h1>
            <br></br>
            {katselulista.length === 0 ? (
            <p>Ei lisättyjä sarjoja</p>
            ) : (
            <ul className="katselulista">
                {katselulista.map((sarja) => (
                    <li key={sarja.id} className="katselulistan-alkio">
                        <h2>{sarja.name}</h2>
                        <button type="button" className="yleinennappi" onClick={() => poistaSarja(sarja.id)}>Poista</button>
                    </li>
                    ))}
            </ul>
            )}
        </main>
    );

}

export default Lista;