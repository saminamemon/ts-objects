  //nested object
  type author= {
    
           firstname:string,
            lastname:string,
        }
        
    
    type book1={
        Author:author;
        name:string;
    }
    let Book:book1={
        Author:{
        firstname:"Hakeem",
        lastname :"Mohammad saeed"},
    name:"nounehaal"
    };
    console.log(Book.Author.lastname);
    console.log(Book);
