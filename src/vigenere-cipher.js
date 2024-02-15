const { NotImplementedError } = require("../extensions/index.js");

/**
 * Implement class VigenereCipheringMachine that allows us to create
 * direct and reverse ciphering machines according to task description
 *
 * @example
 *
 * const directMachine = new VigenereCipheringMachine();
 *
 * const reverseMachine = new VigenereCipheringMachine(false);
 *
 * directMachine.encrypt('attack at dawn!', 'alphonse') => 'AEIHQX SX DLLU!'
 *
 * directMachine.decrypt('AEIHQX SX DLLU!', 'alphonse') => 'ATTACK AT DAWN!'
 *
 * reverseMachine.encrypt('attack at dawn!', 'alphonse') => '!ULLD XS XQHIEA'
 *
 * reverseMachine.decrypt('AEIHQX SX DLLU!', 'alphonse') => '!NWAD TA KCATTA'
 *
 */
class VigenereCipheringMachine {
  constructor(isDirect = true) {
    this.isDirect = isDirect;
    this.alphabet = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  }

  encrypt(message, key) {
    this.validateInput(message, key);

    const encryptedMessage = this.applyCipher(message, key, "encrypt");
    return this.isDirect
      ? encryptedMessage
      : encryptedMessage.split("").reverse().join("");
  }

  decrypt(encryptedMessage, key) {
    this.validateInput(encryptedMessage, key);

    const decryptedMessage = this.applyCipher(encryptedMessage, key, "decrypt");
    return this.isDirect
      ? decryptedMessage
      : decryptedMessage.split("").reverse().join("");
  }

  validateInput(message, key) {
    if (!message || !key) {
      throw new Error("Incorrect arguments!");
    }
  }

  applyCipher(message, key, operation) {
    let result = "";
    let keyIndex = 0;

    for (let i = 0; i < message.length; i++) {
      const char = message[i].toUpperCase();

      if (this.alphabet.includes(char)) {
        const keyChar = key[keyIndex % key.length].toUpperCase();
        const shift = this.alphabet.indexOf(keyChar);

        if (operation === "encrypt") {
          const encryptedCharIndex =
            (this.alphabet.indexOf(char) + shift) % this.alphabet.length;
          result += this.alphabet[encryptedCharIndex];
        } else {
          const decryptedCharIndex =
            (this.alphabet.indexOf(char) - shift + this.alphabet.length) %
            this.alphabet.length;
          result += this.alphabet[decryptedCharIndex];
        }

        keyIndex++;
      } else {
        result += char;
      }
    }

    return result;
  }
}

module.exports = {
  VigenereCipheringMachine,
};
