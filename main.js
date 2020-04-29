// Loop through this array of objects and console.log "name's job title is title."



const array = [
    // array position 0
    {
        name: "Bob",
        department: "sales",
        title: "sales manager"
    },
    // array position 1
    {
        name: "Tina",
        department: "finance",
        title: "director of finance"
    },
    // array position 2
    {
        name: "Randy",
        department: "IT",
        title: "hardware guy"
    },
    // array position 3
    {
        name: "Glenda",
        department: "C-suite",
        title: "CEO"
    }
]


// let index = 0; index is less than array length; index plus 1
for (let i = 0; i < array.length; i++) {
    console.log(`${array[i].name}'s job title is ${array[i].title}.`)

}
