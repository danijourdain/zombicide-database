export function filterCardsByType(cardList, type) {
    return !type ? cardList : cardList.filter(({type: cardType}) => cardType === type);
}

export function filterCardsByEdition(cardList, edition) {
    return !edition ? cardList : cardList.filter(({edition: cardEdition}) => cardEdition === edition);
}

export const sortCardsById = (cardList) => 
    cardList.sort((a,b) => compareNaively(a.id, b.id));


export const sortCardsByName = (cardList) => 
    cardList.sort((a,b) => compareNaively(a.name.toLowerCase(), b.name.toLowerCase()));


export const sortCardsByType = (cardList) => 
    cardList.sort((a,b) => compareNaively(a.type.toLowerCase(), b.type.toLowerCase()));


export const sortCardsByEdition = (cardList) => 
    cardList.sort((a,b) => compareNaively(a.edition.toLowerCase(), b.edition.toLowerCase()));

export function getUniqueList(cardList, field) {
    var list = [];
    var lookup = {};
    for (var card, i =0; card = cardList[i++];) {
        var item = card[field];
        if(!(item in lookup)) {
            lookup[item] = 1;
            list.push(item);
        }
    }

    return list;
}

function compareNaively(a, b)
{
    if (a < b) return -1;
    else if (a > b) return 1;
    return 0;
}