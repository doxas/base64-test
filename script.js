
import {B64} from './b64.js';

window.addEventListener('DOMContentLoaded', () => {
    const input = document.createElement('input');
    input.setAttribute('type', 'file');
    document.body.appendChild(input);

    input.addEventListener('change', (evt) => {
        const file = input.files[0];
        if(file == null){return;}

        B64.toDataURLFromFile(file)
        .then((dataURL) => {
            // stringify
            const json = JSON.stringify({dataURL: dataURL});

            // parse
            const parsed = JSON.parse(json);

            // insert
            const image = new Image();
            image.src = parsed.dataURL;
            document.body.appendChild(image);
        });
    }, false);
}, false);

