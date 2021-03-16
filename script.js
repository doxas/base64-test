
import {B64} from './b64.js';

window.addEventListener('DOMContentLoaded', () => {
    const input = document.createElement('input');
    input.setAttribute('type', 'file');
    document.body.appendChild(input);

    input.addEventListener('change', (evt) => {
        const file = input.files[0];
        if(file == null){return;}
        // B64.toDataURLFromImage(img);
        B64.toDataURLFromFile(file)
        .then((dataURL) => {
            console.log(dataURL);
            const json = JSON.stringify({dataURL: dataURL});

            const parsed = JSON.parse(json);
            const img = new Image();

            img.addEventListener('load', () => {
                const url = B64.toDataURLFromImage(img);
                const img2 = new Image();
                img2.src = url;
                document.body.appendChild(img2);
            }, false);

            img.src = parsed.dataURL;
            document.body.appendChild(img);
        });
    }, false);
}, false);

