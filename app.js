// const fs = require('fs')
// fs.writeFileSync('notes.txt','clap ')
//

// console.log(fs.readFileSync('notes.txt').toString())


// const y = require('./data')
// console.log(y)
// console.log(y.firstName)
// console.log(y.lastName)
// console.log(y.sum(5,5))

// const validator = require('validator')
// console.log(validator.isEmail('alzahraa'))
// console.log(validator.isEmail('alzahraa@gmail.com'))
//  const { demandOption, alias } = require('yargs')
// const yargs = require('yargs')
//  yargs.command({
//      command:'add',
//      describe:'Add note',
//      builder:{
//         title:{
//             describe: 'title description for delete command',
//             demandOption:true,
//             type:'string'
//         },
//         body:{
//             describe: 'body description for delete command',
//             demandOption:true,
//             type:'string'
//         },
// }, 
//      handler:()=>{
//          console.log('add notesss')
//      }
//  })
//  yargs.command({
//     command:'delete',
//     describe:'delete note',
//     builder:{
//             title:{
//                 describe: 'title description for delete command',
//                 demandOption:true,
//                 type:'string'
//             }
//     },
//     handler:()=>{
//         console.log('delete notesss')
//     }
// })
// yargs.command({
//     command:'list',
//     describe:'list note',
//     handler:()=>{
//         console.log('list notesss')
//     }
// })
// yargs.command({
//     command:'read',
//     describe:'read note',
//     builder:{
//         title:{
//             describe: 'title description for delete command',
//             demandOption:true,
//             type:'string'
//         }
//     },
//     handler:()=>{
//         console.log('read notesss')
//     }
// })
// console.log(yargs.argv)
// /**
//  * Task
//  * 1) Create object person name age
//  * 2) change object --> json 
//  * 3) store in file
//  * 4) read file (json)
//  * 5) convert to object 
//  * 6) update data change value of object
//  * 7)object to json 
//  * 8) writeFileSync
//  */
// ////////////Create object person name age//////
// const person= {
//     Name:'ali',
//     Age:'24'
//               }
// console.log(person)
// //////////////change object --> json //////
// const personJSON = JSON.stringify(person)
// console.log(personJSON)
// /////////////store in file/////
// const fs = require('fs')
// fs.writeFileSync('trial.json',personJSON)
// ///////////////read file (json)//////////
// const z =fs.readFileSync('trial.json').toString()
// console.log(z)
// /////////////convert to object///////
// const personObject = JSON.parse(personJSON)
// console.log(personObject)
// ///////// update data change value of object
//  /////////
// personObject.Name='alzahraa'
// personObject.Age='25'
// console.log(personObject)
// /////////7object to json//////////
// const NewJson=JSON.stringify(personObject)
// console.log(NewJson)
// ////////////  writeFileSync////////
// fs.writeFileSync('trial.json',NewJson)

// Version 3
const notes = require('./notes')
yargs.command({
    command:'add',
    describe:'Add note',
    // Options command deal with
    builder:{
        title:{
            describe:'This is title dsecription in add command',
            demandOption:true,
            type:'string'
        },
        body:{
            describe:'This is body dsecription in add command',
            demandOption:true,
            type:'string'
        }
    },
    handler:(x)=>{
        //console.log(x) // object
      notes.addNote(x.title,x.body)
    }
})
// delete
yargs.command({
    command:'delete',
    describe:'Delete note',
    builder:{
        title:{
            describe:'This is title desc in delete command',
            demandOption:true,
            type:'string'
        }
    },
    handler:()=>{
        console.log('Delete notees')
    }
})

// list
yargs.command({
    command:'list',
    describe:'List note',
    handler:()=>{
        console.log('List notees')
    }
})

// read

yargs.command({
    command:'read',
    describe:'Read noteeeeeeeee',
    builder:{
        title:{
            describe:'This is title desc in read command',
            demandOption:true,
            type:'string'
        }
    },
    handler:()=>{
        console.log('Read notees')
    }
})
// console.log(yargs.argv) // handler & object
yargs.parse() // handler
