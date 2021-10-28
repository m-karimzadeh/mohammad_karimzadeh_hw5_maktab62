function mergeByUid(array1, array2) {
    let result = [];
    for (const i in array1) {
        for (const j in array2) {
            if (array1[i].uid === array2[j].uid) {
                result.push({ ...array1[i], ...array2[j] });
                break;
            }
        }
    }
    return result;
}
console.log(mergeByUid(personData, additionalPersonData));



// used map and find method for merging
let mergedByMap = personData.map(t1 => ({ ...t1, ...additionalPersonData.find(t2 => t2.uid === t1.uid) }));
console.log(mergedByMap);