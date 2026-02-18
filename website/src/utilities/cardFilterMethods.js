export function filterCardsByType(cardList, type) {
    console.log("filter by type");
    return cardList;
}

export function filterCardsByEdition(cardList, edition) {
    console.log("filter by edition");
    return cardList;
}

export const sortCardsById = (cardList) => 
    cardList.sort((a,b) => compareNaively(a.id, b.id));


export const sortCardsByName = (cardList) => 
    cardList.sort((a,b) => compareNaively(a.name.toLowerCase(), b.name.toLowerCase()));


export const sortCardsByType = (cardList) => 
    cardList.sort((a,b) => compareNaively(a.type.toLowerCase(), b.type.toLowerCase()));


export const sortCardsByEdition = (cardList) => 
    cardList.sort((a,b) => compareNaively(a.edition.toLowerCase(), b.edition.toLowerCase()));



function compareNaively(a, b)
{
    if (a < b) return -1;
    else if (a > b) return 1;
    return 0;
}