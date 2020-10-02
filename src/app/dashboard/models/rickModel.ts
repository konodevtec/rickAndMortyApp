export class RickModel {
    id: number;
    name: string;
    description: string;
    image: string;
    dimension: string;
    navigation: string;
    morty: MortyModel[];
}

export class MortyModel {
    nome: string;
    image: string;
    points: number;
}

