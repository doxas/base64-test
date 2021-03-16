
/**
 * @class
 */
export class B64 {
    /**
     * @param {HTMLImageElement} image
     * return {string}
     */
    static toDataURLFromImage(image){
        const canvas = document.createElement('canvas');
        const context = canvas.getContext('2d');
        canvas.width = image.naturalWidth;
        canvas.height = image.naturalHeight;
        context.drawImage(image, 0, 0);
        return canvas.toDataURL();
    }
    /**
     * @param {File} file
     * return {Promsise}
     */
    static toDataURLFromFile(file){
        return new Promise((resolve) => {
            const reader = new FileReader();
            reader.addEventListener('load', (evt) => {
                resolve(evt.target.result);
            });
            reader.readAsDataURL(file);
        });
    }
    /**
     * @param {string} path
     * return {Promise}
     */
    static toDataURLFromPath(path){
        return new Promise((resolve) => {
            const image = new Image();
            image.addEventListener('load', () => {
                resolve(B64.toDataURLFromImage(image));
            }, false);
            image.src = path;
        });
    }
}
