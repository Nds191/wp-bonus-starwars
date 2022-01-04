import axios from 'axios';

const characterService = {
    baseURI: 'https://swapi.dev/api',

    async loadCharacters(){
        console.log('on est das la méthode loadCharacters, YATAA')
        const response = await axios.get(characterService.baseURI + '/people');

        return response.data.results;

    }

};

export default characterService;