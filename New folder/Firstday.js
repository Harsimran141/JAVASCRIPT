// if (true){
//     var num = 10;
// }
// console.log(num);


// function value () {
//     if(true){
//     let number = 10
//     }
//     console.log(number)
// }

// value();


// let number = 20;
// function value (){
//     if(true){
//         let number = 30
//         console.log(number)
//     }

// }


// function x (){
//     if(true){
//         const value = 50;
//     }

// }
// console.log(x);

// let name = "Harsimran";
// let age = 28;
// let firstname = undefined;
// let selectedcolor = null;
// console.log(name.length)
// console.log( typeof age.toString())


// console.log({
//     'name' : typeof name,
//     'age' : typeof age,
//     'isApproved': typeof isApproved,
//     'firstname': typeof firstname,
//     'selecredcolor': typeof selectedcolor
// });

// var a = ["Harsimran","MCA","Roll"];
// console.log(a);
// a [0] = "singh";
// a [1] = "BCA";
// delete a[1]
// console.log(a);

// var a = ["Amit","Sumit","Aman","Mohan","sohan"];
// a.reverse ()
// console.log(a);

// var str = "Java script is a programming  language";

// var a = str.toLowerCase();
// console.log(a);
// var a = str.toUpperCase();
// console.log(a);
// var a = str.includes("greate");
// console.log(a);
// var a = str.concat("is")
// console.log(a);

// let Rec = {
//     firstname:"Mandeep",
//     lastname:"singh",
//     Rollno:"487654",
//     Weekdays:['sunday','monday','tuesday']

// }
// console.log(Rec.Weekdays);
// console.log

// console.log(Rec["firstname"]);

// Harsimran.firstname = "amit kumar";




// let Data = [
//     {

//       "student_id": "123456",
//       "name": "John Doe",
//       "age": 20,
//       "courses": [
//           {
//           "course_id": "CSCI101",
//           "course_name": "Introduction to Computer Science",
//           "credits": 3,
//           "grades": [
//             {
//               "semester": "Spring 2023",
//               "grade": "A"
//             },
//             {
//               "semester": "Fall 2023",
//               "grade": "B+"
//             }
//           ]
//         },
//         {
//           "course_id": "MATH201",
//           "course_name": "Calculus I",
//           "credits": 4,
//           "grades": [
//            {
//               "semester": "Spring 2023",
//               "grade": "A-"
//             },
//             {
//               "semester": "Fall 2023",
//               "grade": "A"
//             }
//           ]
//         }
//       ],
//       "address": {
//         "street": "123 Main St",
//         "city": "Anytown",
//         "state": "CA",
//         "zipcode": "12345"
//       },

//       "contact_info":
//        {
//         "email": "john.doe@example.com",
//         "phone": "123-456-7890"
//       }
//     },
//     {
//       "student_id": "789012",
//       "name": "Jane Smith",
//       "age": 22,
//       "courses": [
//         {
//           "course_id": "ENG101",
//           "course_name": "English Composition",
//           "credits": 3,
//           "grades": [
//             {
//               "semester": "Spring 2023",
//               "grade": "A-"
//             },
//            {
//               "semester": "Fall 2023",
//               "grade": "A"
//             }
//           ]
//         },
//         {
//           "course_id": "HIST201",
//           "course_name": "World History",
//           "credits": 4,
//           "grades": [
//             {
//               "semester": "Spring 2023",
//               "grade": "B+"
//             },
//             {
//               "semester": "Fall 2023",
//               "grade": "A-"
//             }
//           ]
//         }
//       ],
//       "address": {
//         "street": "456 Oak St",
//         "city": "Othertown",
//         "state": "NY",
//         "zipcode": "54321"
//       },
//       "contact_info": {
//         "email": "jane.smith@example.com",
//         "phone": "987-654-3210"
//       }
//     }
//   ]

//   console.log(Data[0].name);
// console.log(Data[0].courses[0].course_name);
// console.log(Data[0].courses[0].grades[0].semester);
// console.log(Data[0].courses[0].grades[0].grade);
// console.log(Data[0].contact_info.email);

//console.log(`${Data[0].name}, ${Data[0].courses[0].course_name}, ${Data[0].courses[0].grades[0].semester}, grades : ${Data[0].courses[0].grades[0].grade}, `)



// let student = {
//   "personalinfo": {
//     "id": {
//       "id_Number": "123456",
//       "Full_Name": "Vikas Kumar",
//     },
//     "Demographics": {
//       "Age": "24",
//       "Gender": "Male",
//       "Nationality": "Indian",
//     },
//   },
//   "Academic_Information": {
//     "Enrollment_Status": {
//       "Part_Time": "4 Hour",
//       "Full_Time": "8 Hour",
//     },
//     "Current_courses": [
//       {
//       "Course 1": "BCA",
//       },
//       {
//       "Course 2": "MCA",
//       },
//       {
//       "Course N": "",
//       }
    
//   ],
//     "GPA": {

//     },
//   },
//   "Extracurricular_activity": {
//     "Clubs": {
//       "Club 1": "",
//       "Club 2": "",
//     },
//     "Sports": {
//       "Sport 1": "",
//       "Sport 2": "",
//     },
//     "Volunteering": {
//       "Event 1": "",
//       "Event 2": "",
//     },
//   },
//   "Contact_Information": {
//     "Phone_Number": "123456789",
//     "Email":"Student@yahoo.com",
//     "Address": {
//       "Street": "",
//       "City": "Amritsar",
//       "Zip_Code": "143001",
//     },
//   },

// };
// console.log(student.Contact_Information.Email)




// let students = ["Harsimran","Amandeep","Rupinder","Mandeep"];

//for(let index = 3; index < student.length; index++)
    //console.log(student);

// let i = 0;
// let len = student.length;
// for(; i < len; i++){
//     console.log(student[i]);
// }

//for(let index = 0; index < students.length; index++){
  //  const element = students[index];
  //  console.table({
   //     index,
    //    element
   // })
//}

//let i =2;
//for (; index < students.length; index++) {
   // console.log(index, students[index]);
//}

// for  (let index = 0; ; index++){
//     console.log(index);
//     break
// }


