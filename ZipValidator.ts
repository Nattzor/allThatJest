const zipValidator = (zip: string) => {
if (zip.length != 5) {
    throw "zip should be 5 characters long'"
}
for (let character of zip) {
if (!/\d/.test(character)) {
    throw "zip must be numbers"
        }
    }
    return 'ok'
}



export default zipValidator