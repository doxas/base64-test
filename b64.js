
export class B64 {
    static toDataURLFromFile(file){
        return new Promise((resolve) => {
            const reader = new FileReader();
            reader.addEventListener('load', (evt) => {
                resolve(evt.target.result);
            });
            reader.readAsDataURL(file);
        });
    }

    static toDataURLFromImage(img){
        const canvas = document.createElement('canvas');
        const ctx = canvas.getContext('2d');
        canvas.width = img.naturalWidth;
        canvas.height = img.naturalHeight;
        ctx.drawImage(img, 0, 0);
        return canvas.toDataURL();
    }
}
