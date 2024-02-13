
export enum ClothCategory {
    "footwear" = "FOOTWEAR",
    "bottoms" = "BOTTOMS",
    "tops" = "TOPS"
}
export interface Cloth {
    id: string;
    name: string;
    img: number;
    category: ClothCategory;
    isTodayFashion?: Boolean;
    isYesterdayFashion?: Boolean;
}

// export interface StrictCloth<T extends ClothCategory> {
//     id: string;
//     name: string;
//     img: number;
//     category: T;
//     isTodayFashion?: Boolean;
//     isYesterdayFashion?: Boolean;
// }

export interface ClothSchema {
    entities: Array<Cloth>;
    isLoading?: boolean;
    error?: string;
}
