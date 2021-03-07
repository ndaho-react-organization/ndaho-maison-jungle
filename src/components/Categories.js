const Categories = ({ cats, selectedCat, searchCategorie }) => {

    return (
        <div className='lmj-categories'>
            <select id="cats"
                onChange={(e) => searchCategorie(e.target.value)}
                value={selectedCat}
                className='lmj-categories-select'
            >
                <option value="">selectionez votre categorie</option>
                {
                    cats.map((cat) => (
                        <option key={cat} value={cat} > {cat} </option>
                    ))
                }
            </select>
            <button onClick={() => searchCategorie("")}>Réinitialiser</button>
        </div>
    );
}

export default Categories