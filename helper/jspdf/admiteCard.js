import jsPDF from 'jspdf';
import localdate from "../localdateConvartet";

function admiteCard(data, type) {


    const id = data.customid;
    const name = `${data.fName} ${data.lName}`;
    const exmatype = type;
    const address = `${data.psVillage},${data.psPost},${data.psUnion},${data.psUpazila}`;
    const number = data.familyCall;
    const clas = data.wadmit.toString();
    const date = localdate(data);

    // Create a new PDF document
    const doc = new jsPDF({
        orientation: 'portrait', // Set the orientation to 'landscape'
        unit: 'mm', // You can change the unit to 'pt', 'mm', 'cm', or 'in'
        format: 'a4', // You can change the format to other paper sizes like 'letter', 'legal', etc.
    });

    // Define styling
    const fontStyle = 'Helvetica';
    const textColor = '#000000';



    // Create an Image object with your PNG file (replace with your image path)
    const img = new Image();
    img.src = 'https://res.cloudinary.com/dmo0gctub/image/upload/v1700748539/Site%20Helper/Copy_of_Red_Minimalist_Membership_Form_A4_gqizyp.png'; // file template path

    //add the image file in the js-pdf
    doc.addImage(img, 'PNG', 0, 0, 212, 298);

    //set font size and text color
    doc.setFontSize(13);
    doc.setTextColor("black");



    // student id
    doc.text(47, 46, id);
    // name
    doc.text(47, 56, name);
    doc.text(47, 68, address);
    doc.text(47, 78.3, exmatype);
    doc.text(160, 45.5, clas);
    doc.text(160, 55.4, number);
    doc.text(160, 65.3, date);


    // Save PDF
    doc.save(`Admite Card.pdf`);
}



export default admiteCard;