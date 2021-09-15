import { NotImplementedError } from "../extensions/index.js";

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
export default class VigenereCipheringMachine {
  constructor(isDirect = true) {
    this.isDirect = isDirect;
    this.codeStart = 65;
    this.codeEnd = 90;
  }

  validateParams(message, key) {
    if (message === undefined || key === undefined) {
      throw new Error("Incorrect arguments!");
    }
  }

  getKeyChars(message, key) {
    return key
      .toUpperCase()
      .repeat(Math.ceil(message.length / key.length))
      .substring(0, message.length)
      .split("");
  }

  getProperCode(code) {
    if (code < this.codeStart) {
      return this.codeEnd - (this.codeStart - code - 1);
    }
    if (code > this.codeEnd) {
      return this.codeStart + (code - this.codeEnd - 1);
    }
    return code;
  }

  execute(message, key, operation) {
    this.validateParams(message, key);
    const keyChars = this.getKeyChars(message, key);

    const resultChars = message
      .toUpperCase()
      .split("")
      .map((char) => {
        const code = char.charCodeAt(0);
        if (code < this.codeStart || code > this.codeEnd) {
          return char;
        }
        const offset = keyChars.shift().charCodeAt(0) - this.codeStart;
        const newCode = operation === "encrypt" ? code + offset : code - offset;
        return String.fromCharCode(this.getProperCode(newCode));
      });

    return this.isDirect
      ? resultChars.join("")
      : resultChars.reverse().join("");
  }

  encrypt(message, key) {
    return this.execute(message, key, "encrypt");
  }

  decrypt(message, key) {
    return this.execute(message, key, "decrypt");
  }
}
