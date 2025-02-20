class Teacher {
    constructor(name, subject){
        this.name = name
        this.subject = subject
    }
    
    //method
    study(read){
        console.log(`Read ${read} daily`);//Read Quran daily
    }
//using function and variable without mentioning them
}

//creates a new object
const person = new Teacher('Imam Bukhari', 'Hadid')
console.log(person);//Teacher { name: 'Imam Bukhari', subject: 'Hadid' }

const person2 = new Teacher('Assim Al Hakeem', 'Answerer')
console.log(person2);//Teacher { name: 'Assim Al Hakeem', subject: 'Answerer' }
person2.study('Quran')