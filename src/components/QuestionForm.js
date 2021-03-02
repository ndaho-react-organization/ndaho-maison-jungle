import { useState } from 'react'

function QuestionForm() {
    const [inputValue, setInputValue] = useState('Posez votre question ici')

    const isInputError = inputValue.includes('f')

    //function pour  intercepter une mauvaise valeur entrée par l'utilisateur. 
    function checkValue(value) {
        if (!value.includes('f')) {
            setInputValue(value)
        }
    }

    return (
        <div>
            <textarea
                value={inputValue}
                onChange={(e) => checkValue(e.target.value)}
            />
            {
                //affiche l'erreur
                isInputError && (
                <div>🔥 Vous n'avez pas le droit d'utiliser la lettre "f" ici.</div>
            )}
            <button onClick={() => alert(inputValue)}>Alertez moi 🚨</button>
        </div>
    )
}

export default QuestionForm