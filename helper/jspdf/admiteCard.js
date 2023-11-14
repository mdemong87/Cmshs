import jsPDF from 'jspdf';

function admiteCard(data) {

    console.log(data);

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
    img.src = 'https://res.cloudinary.com/dmo0gctub/image/upload/v1697983797/Site%20Helper/Red_Minimalist_Membership_Form_A4_mdvdqb.png'; // file template path

    //add the image file in the js-pdf
    doc.addImage(img, 'PNG', 0, 0, 210, 297);

    //set font size and text color
    doc.setFontSize(13);
    doc.setTextColor("black");

    // id
    doc.text(85, 66.5, '15466');
    //name
    doc.text(85, 80, 'Md Emon Hossen');
    // father's name
    doc.text(85, 94, 'Md Emon Hossen');
    // date of brith
    doc.text(85, 107, 'Md Emon Hossen');
    //gander
    doc.text(85, 120, 'Md Emon Hossen');
    //brith registration nimber
    doc.text(85, 133.5, 'Md Emon Hossen');
    //admitted class
    doc.text(85, 147, 'Md Emon Hossen');
    // full address
    doc.text(85, 160, 'Md Emon Hossen');
    //phone number
    doc.text(85, 175.8, 'Md Emon Hossen');




    // // Add prant information value
    // doc.setFontSize(fieldFontSize);
    // doc.setTextColor(textColor);
    // doc.text(`${data.student.faterName}`, 52, 160);
    // doc.text(`${data.student.fpNumber}`, 52, 170);
    // doc.text(`${data.student.moterName}`, 52, 180);
    // doc.text(`${data.student.mpNumber}`, 52, 190);





    // //address section
    // doc.setFont(fontStyle, 'bold');
    // doc.setFontSize(labelFontSize);
    // doc.setTextColor(labelColor);
    // doc.text('Present Address', 10, 200);
    // doc.setFontSize(fieldFontSize);
    // doc.setTextColor(textColor);
    // doc.text('Village:', 10, 210);
    // doc.rect(50, 205, inputWidth, inputHeight);
    // doc.text('Post Office:', 10, 220);
    // doc.rect(50, 215, inputWidth, inputHeight);
    // doc.text('City or Upazila:', 10, 230);
    // doc.rect(50, 225, inputWidth, inputHeight);
    // doc.text('District:', 10, 240);
    // doc.rect(50, 235, inputWidth, inputHeight);
    // doc.text('Division:', 10, 250);
    // doc.rect(50, 245, inputWidth, inputHeight);




    // // Add address value
    // doc.setFontSize(fieldFontSize);
    // doc.setTextColor(textColor);
    // doc.text(`${data.student.psVillage}`, 52, 210);
    // doc.text(`${data.student.psPost}`, 52, 220);
    // doc.text(`${data.student.psUpazila}`, 52, 230);
    // doc.text(`${data.student.psDistrict}`, 52, 240);
    // doc.text(`${data.student.psDivision}`, 52, 250);


    // Save PDF
    doc.save(`School Admission Form.pdf`);
}



export default admiteCard;