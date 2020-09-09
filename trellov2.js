let mytodos = {
day: 'monday',
meetings:0,
meetdone:0,
}

let addmeeting = function(todo, meet =0){
    todo.meetings =todo.meetings + meet
}

let meetdone = function(todo,meet =0){
    todo.meetdone = todo.meetdone - meet
}

let resetday = function(todo){
    todo.meetings =0
    todo.meetdone =0
}
 
let getsummary =function(todo)
{
    let meetleft =todo.meetings + todo.meetdone
    return `you have ${meetleft} meetings today`
}
addmeeting(mytodos,4)

addmeeting(mytodos,3)

meetdone(mytodos,5)

console.log(getsummary(mytodos))


