const fs = require('fs');

const imageFileNames = () => {
    const array = fs
        .readdirSync('src/assets/images')
        .filter((file) => file.endsWith('.png'))
        .map((file) =>
            file.replace('@1x.png', '').replace('@2x.png', '').replace('@3x.png', ''),
        );
    return Array.from(new Set(array));
};

const generate = () => {
    const properties = imageFileNames()
        .map((name) => {
            const filename = name.replace('.png', '');
            return `${filename}: require('../assets/images/${filename}.png')`;
        })
        .join(',\n  ');
    const string = `const Images = {
  ${properties}
};

export default Images;
`;
    fs.writeFileSync('src/config/Images.js', string, 'utf8');
};
generate();
