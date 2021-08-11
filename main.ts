let message = "beep boop"
let key = [-1, 2, 25]
basic.showString(encryption.decrypt_num(encryption.encrypt_num(message, key, EncryptionMethod.SubtitutionCipher), key, EncryptionMethod.SubtitutionCipher))
basic.forever(function () {
	
})
