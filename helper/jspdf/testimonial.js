import jsPDF from 'jspdf';
import localdate from "../localdateConvartet";


function testimonial(data) {


    console.log(data);


    // Create the main PDF document
    const mainDoc = new jsPDF({
        orientation: 'landscape', // Set the orientation to 'landscape'
        unit: 'mm', // You can change the unit to 'pt', 'mm', 'cm', or 'in'
        format: 'a4', // You can change the format to other paper sizes like 'letter', 'legal', etc.
    });


    // Create an Image object with your PNG file (replace with your image path)
    const img = new Image();
    const sinnature = new Image();
    img.src = 'https://res.cloudinary.com/dmo0gctub/image/upload/v1698636896/Site%20Helper/Beige_Border_High_School_Diploma_Certificate_sqvgoa.png'; // Replace with your image path
    sinnature.src = 'https://res.cloudinary.com/dmo0gctub/image/upload/v1699462170/Site%20Helper/WhatsApp_Image_2023-11-08_at_20.28.08_f161176d-removebg-preview_itykcq.png';



    mainDoc.addImage(img, 'PNG', 0, 0, 300, 210);
    mainDoc.addImage(sinnature, 'PNG', 229, 173, 30, 20);

    mainDoc.setFontSize(13);
    mainDoc.setFont(undefined, "bold");


    //frist of all set the bangla font

    const name = `${data.fName} ${data.lName}`;
    const fatherName = `${data.faterName}`;
    const motherName = `${data.moterName}`;
    const villege = `${data.psVillage}`;
    const postoffice = `${data.psPost}`;
    const thana = `${data.psUpazila}`;
    const registration = `${data.registration}`;
    const date = `${localdate(data)}`;


    // Add content to the main PDF (if needed)
    mainDoc.text(154, 79, name);
    mainDoc.text(234, 79, fatherName);
    mainDoc.text(88, 86, motherName);
    mainDoc.text(176, 86, villege);
    mainDoc.text(27, 93, postoffice);
    mainDoc.text(94, 93, thana);
    mainDoc.text(210, 93, registration);
    mainDoc.text(59, 174, date);


    // Save or display the main PDF
    mainDoc.save('Testimonial.pdf');
}





export default testimonial;