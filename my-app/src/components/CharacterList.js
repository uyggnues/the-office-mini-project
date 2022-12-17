import Character from './Character'

const CharacterList = ({characters}) => {

    const characterList = characters.map(character => 
        <Character key={character.id} {...character} />)

    return (
        <div>
            <ul>
                {characterList}
            </ul>
        </div>
    )
}
export default CharacterList;