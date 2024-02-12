export interface Cloth {
    id: string;
    name: string;
    img: number;
    category: string;
}

export interface ClothSchema {
    entities?: Array<Cloth>;
    isLoading?: boolean;
    error?: string;
}
