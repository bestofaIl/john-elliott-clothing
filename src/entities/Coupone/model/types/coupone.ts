export interface Coupone {
    id: string;
    amount: number;
    name: string;
    codeValue: string;

}

export interface CouponeSchema {
    entities: Coupone[];
    isLoading: boolean;
    error?: string;
}
