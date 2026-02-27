export function filterCardsByType(cardList, type) {
    return !type ? cardList : [...cardList].filter(({ type: cardType }) => cardType === type);
}

export function filterCardsByEdition(cardList, edition) {
    return !edition ? cardList : [...cardList].filter(({ edition: cardEdition }) => cardEdition === edition);
}

export const sortCardsById = (cardList) =>
    [...cardList].sort((a, b) => compareNaively(a.id, b.id));


export const sortCardsByName = (cardList) =>
    [...cardList].sort((a, b) => compareNaively(a.name.toLowerCase(), b.name.toLowerCase()));

export function getUniqueList(cardList, field) {
    let list = [];
    let lookup = {};
    for (let card, i = 0; card = cardList[i++];) {
        const item = card[field];
        if (!(item in lookup)) {
            lookup[item] = 1;
            list.push(item);
        }
    }

    return list;
}

export function buildSearchResultsSection(cardList, searchString) {
    searchString = searchString.toLowerCase();

    // check for name segment matches
    const nameSegmentMatches = cardList.filter(({ name }) => {
        return name.toLowerCase().includes(searchString);
    });

    return [
        { entries: nameSegmentMatches }
    ].filter(
        ({ entries }) => entries?.length > 0
    );
}

function compareNaively(a, b) {
    if (a < b) return -1;
    else if (a > b) return 1;
    return 0;
}