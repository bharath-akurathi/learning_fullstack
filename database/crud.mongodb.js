// https://www.mongodb.com/docs/manual/reference/operator/query/

use('crudDb');

//create collection

// db.createCollection('courses');

//insert data

// db.courses.insertOne(
//   {
//     name: "NodeJS",
//     price: 15000,
//     instructor: "John Doe"
//   }
// );

// db.courses.insertMany([
//   {
//     name: "ReactJS",
//     price: 18000,
//     instructor: "Jane Smith"
//   },
//   {
//     name: "MongoDB",
//     price: 20000,
//     instructor: "Mike Johnson"
//   },
//     {
//     name: "Angular",
//     price: 17000,
//     instructor: "Emily Davis"
//   },
//     {
//     name: "VueJS",
//     price: 16000,
//     instructor: "David Wilson"
//   }
// ]
// );

// read data

// let a = db.courses.find({ price: 16000 })
// let a = db.courses.find({ price: 18000 }).toArray();
// console.log(a);
// console.log(db.courses.countDocuments());
// let b = db.courses.getDB() // crudDb
// console.log(b);

//update data
// db.courses.updateOne({price:16000}, {$set:{price:18000}})
// db.courses.updateMany({price:18000}, {$set:{price:18000}})


//delete data
// db.courses.deleteOne({price:18000})
// db.courses.deleteMany({price:18000})

console.log(db.courses.find({price:18000}).toArray());