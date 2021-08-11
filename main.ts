basic.forever(function () {
	
})

namespace Encryption {
    //% blockId=encrypt_with_substitution
    //% block
    function substitutionCipher(plaintext: string, key: number[]): string {
        let ciphertext: string = ""
        let startChar: number = 97
        let endChar: number = 122
        let currKey: number = 0
        let keyLength: number = key.length

        for (let c of plaintext.toLowerCase()) {
            // only convert if whitespace
            if (c != " ") {
            // get current charcode
            let currCharCodeOffset = c.charCodeAt(0) - startChar
            // calculate new charcode using the current digit of the key
            let newCharCodeOffset = (currCharCodeOffset + key[currKey % keyLength]) % 26
            // convert new charcode back to a char
            ciphertext += String.fromCharCode(newCharCodeOffset + startChar)
            // increment key counter
            currKey++
            }
            else {
                ciphertext += " "
            }
        }
        return ciphertext

    }

    /*export function encrypt (plaintext: string, ):string {
        let ciphertext: string;


        return ciphertext;
    }*/

}