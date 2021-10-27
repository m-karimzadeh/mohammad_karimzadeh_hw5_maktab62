let personData = [{
        uid: 1,
        firstName: "Ali",
        lastName: "Mahdavi"
    },
    {
        uid: 2,
        firstName: "Reza",
        lastName: "Shahmardan"
    },
    {
        uid: 3,
        firstName: "Hassan",
        lastName: "Qolami"
    },
    {
        uid: 4,
        firstName: "Morteza",
        lastName: "Hamedani"
    },
    {
        uid: 5,
        firstName: "Sina",
        lastName: "Hejazi"
    },
    {
        uid: 6,
        firstName: "Hadi",
        lastName: "Sadri"
    }
]

let additionalPersonData = [{
        uid: 3,
        position: "UI Designer",
        city: "Biarjmand"
    },
    {
        uid: 1,
        position: "Back-End Develope",
        city: "Taleqan"
    },
    {
        uid: 2,
        position: "Front-End Developer",
        city: "Behbahan"
    },
    {
        uid: 4,
        position: "Devops",
        city: "Shiraz"
    },
    {
        uid: 6,
        position: "Server Admin",
        city: "Tehran"
    },
    {
        uid: 5,
        position: "Product Manager",
        city: "Hamedan"
    }
];




let result = personData.map(subject => {
    let otherSubject = additionalPersonData.find(element => element.uid === subject.uid)
    return {...subject, ...otherSubject }
})
console.log(result);

//create
let state = prompt("enter your operation :(create, read, deleted, update)");
switch (state) {
    case "create":
        created(result);
        break;

    case "read":
        console.log(result);
        break;

    case "deleted":

    case "update":
        update(result);
}

function created(obj) {
    let len = result.length;
    result[len + 1] = {
        uid: getuid(obj),
        firstName: prompt("Enter firstName"),
        lastName: prompt("Enter lastName"),
        position: prompt("Enter position"),
        city: prompt("Enter city")
    };

};

function update(obj) {
    let result = personData.map(subject => {
        let otherSubject = additionalPersonData.find(element => element.uid === subject.uid)
        return {...subject, ...otherSubject }
    })

    let Newobj = {
        uid: prompt("Enter uid"),
        firstName: prompt("Enter firstName"),
        lastName: prompt("Enter lastName"),
        position: prompt("Enter position"),
        city: prompt("Enter city")
    }

}

function getuid(Obj) {
    let len = Obj.length
    let Uid = parseInt(prompt("Enter your uid :"))
    for (let j = 0; j < len; j++) {
        if (result[len + 1].uid === result[j].uid) {
            console.log("this uid is non uniq");
            getuid();
        } else
            return Uid;
    }
}