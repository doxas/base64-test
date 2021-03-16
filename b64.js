
/**
 * @class
 */
export class B64 {
    /**
     * @static
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
     * @static
     * @param {File} file
     * return {Promsise}
     */
    static toDataURLFromFile(file){
        return new Promise((resolve) => {
            const reader = new FileReader();
            reader.addEventListener('load', () => {
                resolve(reader.result);
            });
            reader.readAsDataURL(file);
        });
    }
    /**
     * @static
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
