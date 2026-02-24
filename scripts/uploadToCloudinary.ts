import { v2 as cloudinary } from 'cloudinary';
import fs from 'fs';
import path from 'path';

cloudinary.config({
    cloud_name: 'dzuua38cd',
    api_key: '547389926285277',
    api_secret: 'S8zrvo_MfcBl5vjx_hQJeXI4AQU'
});

const imagesDir = path.join(process.cwd(), 'public/images');
const files = fs.readdirSync(imagesDir);

async function uploadAll() {
    for (const file of files) {
        const filePath = path.join(imagesDir, file);
        const fileName = path.parse(file).name;

        try {
            const result = await cloudinary.uploader.upload(filePath, {
                folder: 'srivari-restaurant',
                public_id: fileName,
                overwrite: true
            });
            console.log(`✅ Uploaded: ${file} → ${result.secure_url}`);
        } catch (error) {
            console.error(`❌ Failed: ${file}`, error);
        }
    }
    console.log('🎉 All images uploaded!');
}

uploadAll();
