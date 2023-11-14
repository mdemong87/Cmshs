import jsPDF from "jspdf";


function paymentRecipt(data) {


    const sl = "1";
    const id = data[0].value3 || "";
    const name = data[0].name;
    const orderId = data[0].order_id;
    const status = data[0].value4;
    const number = data[0].phone_no;
    const title = `${data[0].value1}(${data[0].value2 == "0" ? "fee" : data[0].value2})`;
    const amount = data[0].amount;
    const address = data[0].address;

    const utcDate = new Date(data[0].date_time);
    const datestring = utcDate.toLocaleDateString();
    const date = datestring;



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
    const imgOne = new Image();
    imgOne.src = 'https://res.cloudinary.com/dmo0gctub/image/upload/v1699461327/Site%20Helper/Red_Minimalist_Membership_Form_A4_1_iu1nl5.png'; // file template path

    //add the image file in the js-pdf
    doc.addImage(imgOne, 'PNG', 0, 0, 212, 298);

    //set font size and text color
    doc.setFontSize(13);
    doc.setTextColor("black");



    // student id
    doc.text(47, 46, id);
    // name
    doc.text(47, 56, name);
    doc.text(47, 65.5, orderId);
    doc.text(47, 74.3, address);
    doc.text(165, 45.5, status);
    doc.text(165, 55, number);
    doc.text(165, 65.5, date);

    doc.setFontSize(16);
    // sl
    doc.text(26, 121, sl);
    doc.text(43, 121, title);
    doc.text(160, 121, `${amount} /-`);
    doc.text(160, 210.6, `${amount} /-`);
    doc.text(160, 219.3, "00 /-");
    doc.text(160, 228.5, `${amount} /-`);




    // Save PDF
    doc.save(`Payment Recipt.pdf`);
}



export default paymentRecipt;