import { ClothSchema } from "entities/Cloth";
import { TipSchema } from "entities/Tip/model/types/tip";
import { CouponeSchema } from "entities/Coupone";

export interface StateSchema {
    cloth: ClothSchema;
    tip: TipSchema;
    coupone: CouponeSchema;
}
