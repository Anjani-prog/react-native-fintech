export default function capitalizeFirstLetter(string) {
    if (Boolean(string) && string === '') {
        return string.charAt(0).toUpperCase() + string.slice(1);
    } else {
        return string
    }
}
