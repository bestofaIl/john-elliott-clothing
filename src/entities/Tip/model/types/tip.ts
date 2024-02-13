export interface Tip {
    id: string;
    img: number;
    header: string;
    textSections: Array<string>;
}

export interface TipSchema {
    entities: Array<Tip>;
    isLoading: boolean;
    error?: string;
}
