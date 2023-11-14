import jsPDF from 'jspdf';

function admissinForm(data) {


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
    const singnature = new Image();
    img.src = 'https://res.cloudinary.com/dmo0gctub/image/upload/v1697983797/Site%20Helper/Red_Minimalist_Membership_Form_A4_mdvdqb.png'; // file template path
    singnature.src = "https://res.cloudinary.com/dmo0gctub/image/upload/v1699462170/Site%20Helper/WhatsApp_Image_2023-11-08_at_20.28.08_f161176d-removebg-preview_itykcq.png";

    //add the image file in the js-pdf
    doc.addImage(img, 'PNG', 0, 0, 210, 297);
    doc.addImage(singnature, 'PNG', 150, 228, 35, 25);

    //set font size and text color
    doc.setFontSize(13);
    doc.setTextColor("black");

    // id
    doc.text(85, 66.5, data.student.customid);
    //name
    doc.text(85, 80, `${data.student.fName} ${data.student.lName}`);
    // father's name
    doc.text(85, 94, `${data.student.faterName}`);
    // date of brith
    doc.text(85, 107, `${data.student.dateOFbrith}`);
    //gander
    doc.text(85, 120, `${data.student.gender}`);
    //brith registration nimber
    doc.text(85, 133.5, `${data.student.brithregi}`);
    //admitted class
    doc.text(85, 147, `${data.student.wadmit}`);
    // full address
    doc.text(85, 160, `${data.student.psVillage}, ${data.student.psPost}, ${data.student.psUnion}, ${data.student.psUpazila}, ${data.student.psDistrict}`);
    //phone number
    doc.text(85, 175.8, `${data.student.familyCall}`);


    // Save PDF
    doc.save(`School Admission Form.pdf`);
}



export default admissinForm;