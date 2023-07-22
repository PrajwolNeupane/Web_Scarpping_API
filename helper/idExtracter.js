
const idExtracter = (id) => {

    const startIndex = string.indexOf("/details/") + "/details/".length;
    const endIndex = string.indexOf("/", startIndex);

    if (startIndex !== -1 && endIndex !== -1) {
        const number = parseInt(id.substring(startIndex, endIndex));
        return number;
    } else {
        console.log("Number not found.");
        return "0";
    }
}
export default idExtracter;


