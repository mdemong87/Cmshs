

// student schema
export const sSchema = {


    customid: String,
    fName: String,
    lName: String,
    bName: String,
    bloodGroup: String,
    dateOFbrith: String,
    brithregi: Number,
    gender: String,
    file: Object,
    quata: String,
    wadmit: Number,
    sContact: String,
    faterName: String,
    moterName: String,
    religion: String,
    residance: String,


    fOccupation: String,
    mOccupation: String,
    fmIncome: Number,
    mmIncome: Number,
    fpNumber: String,
    mpNumber: String,
    fEmail: String,
    mEmail: String,
    familyCall: String,

    prCountry: String,
    prDistrict: String,
    prDivision: String,
    prPost: String,
    prUnion: String,
    prUpazila: String,
    prVillage: String,


    psCountry: String,
    psDistrict: String,
    psDivision: String,
    psPost: String,
    psUnion: String,
    psUpazila: String,
    psVillage: String,



    //aditional info add from here
    registration: {
        default: 0,
        type: Number,
    },

    roll: {
        default: 0,
        type: Number,
    },

    status: {
        default: false,
        type: Boolean,
    },
    Paymentstatus: {
        default: 0,
        type: Number,
    },
    createdAt: { type: Date, default: Date.now() }


}


//gallery scheama
export const gsSchema = {
    file: Object,
    createdAt: { type: Date, default: Date.now() }
}

//notice scheama
export const nSchema = {
    title: String,
    file: Object,
    createdAt: { type: Date, default: Date.now() }
}


//marquee scheama
export const mSchema = {
    marquee: String
}




//routing schema
export const routingSchema = {
    catagory: String,
    classNumber: Number,
    file: Object,
    createdAt: { type: Date, default: Date.now() }
}



//sylabus schema
export const sylabusSchema = {
    title: String,
    classNumber: Number,
    file: Object,
    createdAt: { type: Date, default: Date.now() }
}



//employee schema
export const employeeSchema = {
    name: String,
    age: Number,
    catagory: String,
    position: String,
    edu: String,
    phone: String,
    email: String,
    address: String,
    file: Object,
    customid: String,
    createdAt: { type: Date, default: Date.now() }
}


//library schema 
export const librarySchema = {

    title: String,
    author: String,
    catagory: String,
    publisher: String,
    classes: Number,
    subject: String,
    language: String,
    discription: String,
    thumnals: Object,
    books: Object,
    createdAt: { type: Date, default: Date.now() }

}



//result schema
export const resultstudent = {
    year: Number,
    examtype: String,
    classnum: Number,
    file: Object,
    createdAt: { type: Date, default: Date.now() }
}



//payment controller schema
export const paymentController = {
    classes: Number,
    Monthly: Number,
    Exam: Number,
    Section: Number,
    Course: Number,
    Markshit: Number,
    Registrations: Number,
    Testimonial: Number,
    DepartmentChange: Number,
    Admission: Number,
    AdmissionFrom: Number,
    Others: Number,
    OralExam: Number,
    Central: Number,
    InternalSports: Number,
    NationalSports: Number,
    commonRoom: Number,
    Magagin: Number,
    InstituteDepartment: Number,
    Library: Number,
    Labratory: Number,
    Fine: Number,
    utility: Number,
    WelcomeFree: Number,
    EducationlTravel: Number,
    Delay: Number
}



//payment history schema
export const paymentHistory = {
    uid: String,
    name: String,
    fName: String,
    pTitle: String,
    pType: String,
    amount: String,
    option: String,
    order_id: String,
    status: Boolean,
    createdAt: { type: Date, default: Date.now() }
}

