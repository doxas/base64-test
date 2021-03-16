
export class B64 {
    static toDataURLFromImage(img){
        const canvas = document.createElement('canvas');
        const ctx = canvas.getContext('2d');
        canvas.width = img.naturalWidth;
        canvas.height = img.naturalHeight;
        ctx.drawImage(img, 0, 0);
        return canvas.toDataURL();
    }
    static toDataURLFromFile(file){
        return new Promise((resolve) => {
            const reader = new FileReader();
            reader.addEventListener('load', (evt) => {
                resolve(evt.target.result);
            });
            reader.readAsDataURL(file);
        });
    }
    static toDataURLFromPath(path){
        return new Promise((resolve) => {
            const img = new Image();
            img.addEventListener('load', () => {
                resolve(B64.toDataURLFromImage(img));
            }, false);
            img.src = path;
        });
    }
}
