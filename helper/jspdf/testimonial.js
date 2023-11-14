import jsPDF from 'jspdf';
import "../../public/SolaimanLipi-normal";



function testimonial() {
    // Create the main PDF document
    const mainDoc = new jsPDF({
        orientation: 'landscape', // Set the orientation to 'landscape'
        unit: 'mm', // You can change the unit to 'pt', 'mm', 'cm', or 'in'
        format: 'a4', // You can change the format to other paper sizes like 'letter', 'legal', etc.
    });


    // Create an Image object with your PNG file (replace with your image path)
    const img = new Image();
    img.src = 'https://res.cloudinary.com/dmo0gctub/image/upload/v1698636896/Site%20Helper/Beige_Border_High_School_Diploma_Certificate_sqvgoa.png'; // Replace with your image path


    mainDoc.addImage(img, 'PNG', 0, 0, 300, 210);


    //frist of all set the bangla font
    // Set the font for text in the PDF
    mainDoc.setFont('SolaimanLipi');
    // Add content to the main PDF (if needed)
    mainDoc.text(125, 90, "মাইক্রোসফট আফিস ট্রেনিং গাইড");


    // Save or display the main PDF
    mainDoc.save('Testimonial.pdf');
}





export default testimonial;