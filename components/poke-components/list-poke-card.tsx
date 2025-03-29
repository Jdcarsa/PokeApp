import { FlatList, View } from "react-native";
import PokeCard from "./poke-card";
import { myPokemonsIds } from "@/types/pokemonList";
export default function ListPokeCard() {

    return (
        <FlatList
            data={myPokemonsIds}
            numColumns={2}
            keyExtractor={(item, index) => `${item}-${index}`}
            contentContainerStyle={{ padding: 16 }}
            renderItem={({ item }) => (
                <View style={{ flex: 1, padding: 8 }}>
                    <PokeCard pokemonId={item} />
                </View>
            )}
        />
    )
}