import { bags } from "./productDetail/bags";
import { gadgets } from "./productDetail/gadgets";
import { giftSets } from "./productDetail/giftSets";
import { hats } from "./productDetail/hats";
import { sustainable } from "./productDetail/sustainable";
import { stationery } from "./productDetail/stationery";
import { tumblers } from "./productDetail/tumblers";
import { umbrellas } from "./productDetail/umbrellas";
import { wellness } from "./productDetail/wellness";

export interface Product {
    id: string;
    name: string;
    description: string;
    price: string;
    image: string;
    features: string[];
    materials: string[];
    customization: string[];
    minOrder: number;
    category: string;
    images?: string[];
}

export const productDetails: Record<string, Product[]> = {
    tumblers: tumblers,
    umbrellas: umbrellas,
    bags: bags,
    hats: hats,
    gadgets: gadgets,
    'gift-sets': giftSets,
    sustainable: sustainable,
    stationery: stationery,
    wellness: wellness
}; 