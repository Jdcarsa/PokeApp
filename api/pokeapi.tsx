export const pokemonSprite = 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork';
export const baseUrlPokeAPI = 'https://pokeapi.co/api/v2';

// Función para obtener un Pokémon por su ID
export const getPokemonById = async (id: number) => {
    try {
        const response = await fetch(`${baseUrlPokeAPI}/pokemon/${id}`);
        if (!response.ok) {
            throw new Error(`Error HTTP: ${response.status}`);
        }
        const data = await response.json();
        return data; 
    } catch (error) {
        console.error('Error al obtener el Pokémon por ID:', error);
        throw error;
    }
};

// Función para obtener un Pokémon por su nombre
export const getPokemonByName = async (name: string) => {
    try {
        const response = await fetch(`${baseUrlPokeAPI}/pokemon/${name}`);
        if (!response.ok) {
            throw new Error(`Error HTTP: ${response.status}`);
        }
        const data = await response.json();
        return data; 
    } catch (error) {
        console.error('Error al obtener el Pokémon por nombre:', error);
        throw error;
    }
};

// Función para obtener todos los Pokémon 
export const getAllPokemons = async (limit: number = 20, offset: number = 0) => {
    try {
        const response = await fetch(`${baseUrlPokeAPI}/pokemon?limit=${limit}&offset=${offset}`);
        if (!response.ok) {
            throw new Error(`Error HTTP: ${response.status}`);
        }
        const data = await response.json();
        return data.results
    } catch (error) {
        console.error('Error al obtener todos los Pokémon:', error);
        throw error;
    }
};

// Función para obtener el sprite de un Pokémon por su ID
export const getPokemonSprite = (id: number) => {
    return `${pokemonSprite}/${id}.png`; 
};
