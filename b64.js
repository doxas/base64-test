
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

    static toDataURLFromImage(img){}
}
