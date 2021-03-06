const Categories = ({ cats, selectedCat, searchCategorie }) => {

    return (
        <>
            <select id="cats"
                onChange={(e) => searchCategorie(e.target.value)}
                value={selectedCat}>
                <option value="">selectionez votre categorie</option>
                {
                    cats.map((cat) => (
                        <option key={cat} value={cat} > {cat} </option>
                    ))
                }
            </select>
            <button onClick={() => searchCategorie("")}>Réinitialiser</button>
        </>
    );
}

export default Categories