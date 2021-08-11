
/**
* Use this file to define custom functions and blocks.
* Read more at https://makecode.microbit.org/blocks/custom
*/

enum EncryptionMethod {
    //% block="substitution"
    SubtitutionCipher
}

/**
 * Custom blocks
 */
//% color="#AA278D"
namespace encryption {
    class Key {
        _key: (number|string)[]
    }
    
    /**
     * TODO: describe your function here
     * @param n describe parameter here, eg: 5
     * @param s describe parameter here, eg: "Hello"
     * @param e describe parameter here
     */
    //% block="encrypt message $plaintext|with number key $key|using $method"
    //% plaintext.defl="beep boop"
    //% inlineInputMode=inline
    export function encrypt_num(plaintext: string, key: number[], method: EncryptionMethod): string {
        let ciphertext
        // Add code here
        switch (method) {
            case EncryptionMethod.SubtitutionCipher:
            default:
                ciphertext = substitutionCipher(plaintext, key)
        }

        return ciphertext
    }

    //% block="decrypt message $plaintext|using $method|with number key $key|"
    //% plaintext.defl=""
    //% inlineInputMode=inline
    export function decrypt_num(plaintext: string, key: number[], method: EncryptionMethod): string {
        let ciphertext
        // Add code here
        switch (method) {
            case EncryptionMethod.SubtitutionCipher:
            default:
                ciphertext = substitutionCipher(plaintext, key.map(v => v * -1 ))
        }

        return ciphertext
    }

    //% block="encrypt message $plaintext|with string key $key|using $method"
    //% plaintext.defl="beep boop"
    //% inlineInputMode=inline
    function encrypt_str(plaintext: string, key: string, method: EncryptionMethod): string {
        let encryptor
        let ciphertext
        // Add code here

        return ciphertext
    }

    /**
     * TODO: describe your function here
     * @param value describe value here, eg: 5
     */
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
                ciphertext += String.fromCharCode(newCharCodeOffset + (newCharCodeOffset < 0 ? endChar+1 : startChar))
                // increment key counter
                currKey++
            }
            else {
                ciphertext += " "
            }
        }
        return ciphertext

    }
}
