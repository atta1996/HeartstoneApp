export interface Card{
    text: string;
    cardId: string;
    cardSet: string;
    collectible: string;
    img: string;
    imgGold: string;
    name: string;

    cost: number;
    attack: number;
    health: number;
    rarity: string;
    type: string;

    dbfId: string;
    faction: string;
    playerClass: string;
    locale: string;
}