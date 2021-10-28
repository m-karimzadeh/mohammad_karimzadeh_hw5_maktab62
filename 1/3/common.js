
let testVariable1 = {
    uid: 5,
    country: "iran"
}
let testVariable2 = {
    uid: 9,
    country: "iran"
}
let testVariable3 = {
    uid: 3,
    firstName: `hhhhhhhhhhhh`,
    country: "iran"
}
let testVariable4 = {
    uid: 10,
    firstName: `saeed`
}

//main function
function mergeByUid(array1, array2) {
    let res = [];
    for (let i = 0; i < array1.length; i++) {
        for (let j = 0; j < array2.length; j++) {
            if (array1[i].uid === array2[j].uid) {
                res.push({ ...array1[i], ...array2[j] });
            }
        }
    };
    return res;
}
let result = mergeByUid(additionalPersonData, personData);

//read function exclusive for result
function read() {
    console.log(result);
}
read();

//create function
function create(obj) {
    for (let i in result) {
        if (result[i].uid === obj.uid) {
            console.log(`uid is not unique`);
            return;
        }
    }
    result.push(obj);
}
create(testVariable1);
read();
create(testVariable2);


//update function
function update(obj) {
    let i = result.findIndex(x => x.uid === obj.uid);
    if (i >= 0) {
        for (const [key, value] of Object.entries(obj)) {
            if (result[i].hasOwnProperty(key))
                result[i][key] = obj[key];
            else
                result[i][key] = obj[key];
        }
    }
    else
        console.log("object with this UID does not exist!");
}
update(testVariable3);
read();
update(testVariable4);

//delete function
function deleteFu(uid) {
    let index = result.findIndex(x => x.uid === uid);
    if (index >= 0) {
        result.splice(index, 1);
    }
    else
        console.log(`couldnt find uid ${uid}`)
}
deleteFu(1);
read();
deleteFu(100)