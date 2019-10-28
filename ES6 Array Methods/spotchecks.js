// let people = [
//     { salary: 1300, goodPerformance: false },
//     { salary: 1500, goodPerformance: true },
//     { salary: 1200, goodPerformance: true },
//     { salary: 1700, goodPerformance: false },
//     { salary: 1600, goodPerformance: true },
// ]

// let increaseSalary = function(person){
//      if(person.goodPerformance){
//         person.salary += 300
//     }
// }

// people.forEach(increaseSalary)
// people.forEach(p => console.log(p.salary)) //should print 1300, 1800, 1500, 1700, 1900 (on separate lines)


// let messagesFromDad = ["HI HONEY", "HOW WAS SCHOOL??", "DID YOU EAT TODAY?",
//  "I CAN'T FIND THE REMOTE CONTROL"]


//  let MFD = messagesFromDad.map( m => m.toLocaleLowerCase())

//  console.log(MFD);


// let users = [
//     {
//     "name": "Leanne Graham",
//     "address": {
//         "street": "Kulas Light", "suite": "Apt. 556", "city": "Gwenborough", "zipcode": "92998-3874",
//         "geo": { "lat": "-37.3159", "lng": "81.1496" }
//     }
// }, {
//     "name": "Ervin Howell",
//     "address": {
//         "street": "Victor Plains", "suite": "Suite 879", "city": "Wisokyburgh", "zipcode": "90566-7771",
//         "geo": { "lat": "-43.9509", "lng": "-34.4618" }
//     }
// }
// ]

// let usersNandC = users.map( u => {return { name: u.name, city: u.address.city}} );

// console.log(usersNandC);

// let posts = [
//     {
//         id: 0, text: "I'm not here",
//         comments: [{ id: 0, text: "support that" }]
//     },
//     {
//         id: 1, text: "Find me",
//         comments: [
//             { id: 0, text: "here I am" },
//             { id: 1, text: "rock you like a hurricane" },
//             { id: 2, text: "dum dum" }]
//     },
//     {
//         id: 2, text: "Where's waldo anyway",
//         comments: [
//             { id: 0, text: "who's waldo" },
//             { id: 1, text: "he's called Effi" }]
//     },
//     {
//         id: 3, text: "Poof",
//         comments: [{ id: 0, text: "like magic" }]
//     }
// ]

const findById = id => posts.find(p => p.id === id)
let findCommentById = (postID, commentID) => {
    let post = findById(postID)
    return post.comments.find(c => c.id == commentID)
}
    console.log(findCommentById(1, 0)) // should print - {id: 0, text: "here I am"}

let movies = [
    { title: "Dareangel", studio: "Marvel", year: 2023 },
    { title: "Batterfly", studio: "Fox", year: 2021 },
    { title: "League of Ordinary People", studio: "Blizzard", year: 2025 },
    { title: "Thor: Ragnarok", studio: "Marvel", year: 2017 },
]

    if (movies.some(m => m.studio === "marvel")) {
        console.log("Let's go watch some movies")
    } else {
        console.log("Let's stay home");

    }
    
    if (movies.every(m => m.year > 2020)) {
        console.log("Futuristic stuff")
    } else {
        console.log("Yawn")
    }



