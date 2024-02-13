import { ClothSchema } from "entities/Cloth";
import { TipSchema } from "entities/Tip/model/types/tip";

export interface StateSchema {
    cloth: ClothSchema;
    tip: TipSchema;
}
