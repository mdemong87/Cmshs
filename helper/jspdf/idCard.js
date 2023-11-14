import jsPDF from 'jspdf';

function idCard(data) {


    // Create a new PDF document
    const doc = new jsPDF({
        orientation: 'landscape', // Set the orientation to 'landscape'
        unit: 'mm', // You can change the unit to 'pt', 'mm', 'cm', or 'in'
        format: 'a4', // You can change the format to other paper sizes like 'letter', 'legal', etc.
    });

    // Define styling
    const fontStyle = 'Helvetica';
    const textColor = '#000000';



    // Create an Image object with your PNG file (replace with your image path)
    const imgOne = new Image();
    const imgTwo = new Image();
    imgOne.src = 'https://res.cloudinary.com/dmo0gctub/image/upload/v1699461616/Site%20Helper/1_byptdi.png'; // file template path
    imgTwo.src = 'https://res.cloudinary.com/dmo0gctub/image/upload/v1698734937/Site%20Helper/2_tq6pvy.png'; // file template path

    //add the image file in the js-pdf
    doc.addImage(imgOne, 'PNG', 50, 40, 80, 135);
    doc.addImage(imgTwo, 'PNG', 170, 40, 80, 135);

    //set font size and text color
    doc.setFontSize(13);
    doc.setTextColor("black");


    const studentimage = new Image();
    studentimage.src = data[0].file.secure_url;
    doc.addImage(studentimage, 'PNG', 74.8, 65, 30, 30);


    doc.setFontSize(20);
    //name
    doc.text(64, 110, `${data[0].fName} ${data[0].lName}`);
    doc.setFontSize(13);
    // id
    doc.text(90, 134, data[0].customid);
    // father's name
    doc.text(90, 142, data[0].faterName);
    // class
    doc.text(90, 149.5, data[0].wadmit.toString());


    const date = new Date();
    const year = date.getFullYear();
    const currentDate = date.getDate();
    const month = date.getMonth();
    // join
    doc.text(207, 126, `${currentDate}/${month}/${year}`);
    // ends
    doc.text(207, 133, `31/11/${year}`);

    // Save PDF
    doc.save(`Student ID Card.pdf`);
}



export default idCard;