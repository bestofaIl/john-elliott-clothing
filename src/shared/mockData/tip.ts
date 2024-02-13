import { Tip } from "entities/Tip/model/types/tip";

export const mockDataTip: Array<Tip> = [
    {
        id: "123",
        header: "How to properly\n"
            + "wash cotton \n"
            + "products?",
        img: require("../assets/images/wool.png"),
        textSections: [
            "The wizard of the stars and constellations, your "
            + "faithful astrological guide, is always near you - right in your smartphone",
            "The wizard of the stars and constellations, your "
            + "faithful astrological guide, is always near you - right in your smartphone",
            "The wizard of the stars and constellations, your "
            + "faithful astrological guide, is always near you - right in your smartphone",
        ],
    },
    {
        id: "124",
        header: "Do to found\n"
            + "wash wool \n"
            + "aims?",
        img: require("../assets/images/jeans.png"),
        textSections: [
            "The wizard of the stars and constellations, your "
            + "faithful astrological guide, is always near you - right in your smartphone",
            "The wizard of the stars and constellations, your "
            + "faithful astrological guide, is always near you - right in your smartphone",
            "The wizard of the stars and constellations, your "
            + "is simply dummy text of the printing and typesetting industry. Lo"
            + "rem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown",
        ],
    },
];
