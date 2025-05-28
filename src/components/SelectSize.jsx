export default function SelectSize( { setDifficulty, setScore, setCardsClicked } ) {
    
    function handleSelect(event) {
        setDifficulty(event.target.value);
        setScore(0);
        setCardsClicked([]);
    }
    
    return (
        <select className='select-size' onChange={handleSelect}>
            <option value="12">Hard</option>
            <option value="8">Medium</option>
            <option value="4">Easy</option>
        </select>
    )
}