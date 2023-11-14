// Require the Cloudinary library
const cloudinary = require('cloudinary').v2



cloudinary.config({
    cloud_name: process.env.NEXT_PUBLIC_CLOUD_NAME,
    api_key: process.env.NEXT_PUBLIC_CLOUD_KEY,
    api_secret: process.env.NEXT_PUBLIC_CLOUD_SECRECT,
    secure: true
});



export async function photoUpload(file, destination, size, crop) {
    const cloudresult = await cloudinary.uploader.upload(file, {
        folder: destination,
        resource_type: "auto",
        width: size,
        crop: crop
    })
    return cloudresult;
}


export async function fileDelete(singleData) {

    if (singleData) {
        try {
            const result = await cloudinary.uploader.destroy(singleData.file.public_id);
            return true;
        } catch (error) {
            console.log(error);
            return false;
        }
    } else {
        console.error('Unable to extract public_id from secure_url:');
    }
}




export async function multipulfileDelete(publicIds) {
    if (publicIds && Array.isArray(publicIds) && publicIds.length > 0) {

        try {
            const result = await cloudinary.api.delete_resources(publicIds);
            return true;
        } catch (error) {
            return false;
        }

    } else {
        return false;
    }
}

