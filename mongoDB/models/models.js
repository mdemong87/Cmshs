import { model, models, Schema } from "mongoose";
import { employeeSchema, gsSchema, librarySchema, mSchema, nSchema, paymentController, paymentHistory, resultstudent, routingSchema, sSchema, sylabusSchema } from "./schema";

// studentd Schema
const StudentSchema = new Schema(sSchema);

//payment controller schema
const PaymentControllerSchema = new Schema(paymentController);


// gallery Schema
const GallerysSchema = new Schema(gsSchema);

// gallery Schema
const MarqueeSchema = new Schema(mSchema);

// notice schema
const NoticeSchema = new Schema(nSchema);

//routing schema
const ReutingSchema = new Schema(routingSchema);

//sylabus schema
const SylabusSchema = new Schema(sylabusSchema);

//employee schema
const EmployeeSchema = new Schema(employeeSchema);

//library schema
const LibrarySchema = new Schema(librarySchema);


//result schema
const ResultSchema = new Schema(resultstudent)



//payment History schema
const paymentHistorySchema = new Schema(paymentHistory);











// model declired from here


// student model
export const Student = models.Student || model("Student", StudentSchema);

//gallery model
export const Gallery = models.Gallery || model("Gallery", GallerysSchema);

//marquee model
export const Marquee = models.Marquee || model("Marquee", MarqueeSchema);

//notice model
export const Notice = models.Notice || model("Notice", NoticeSchema);


//routing model
export const Routing = models.Routing || model("Routing", ReutingSchema);


//sylabus model
export const Sylabus = models.Sylabus || model("Sylabus", SylabusSchema);


//employee model
export const Employee = models.Employee || model("Employee", EmployeeSchema);


//library model
export const Library = models.Library || model("Library", LibrarySchema);

//result model
export const ResultStudent = models.ResultStudent || model("ResultStudent", ResultSchema)


//paymentController model
export const PaymentController = models.PaymentController || model("PaymentController", PaymentControllerSchema);


//paymentHistory model

export const PHistory = models.PHistory || model("PHistory", paymentHistorySchema);