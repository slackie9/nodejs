// Write class below

class ShiftCipher {
    // construct(amount) {
    //     this.amount = amount;
    //     console.log(this.amount);
    // }
    constructor(id) {
        this.id = id;
        console.log(this.id);
    }

    encrypt(str) {
        str = str.toUpperCase();
        console.log(str);
        // console.log(this.id);
        str = this.caesarCipher(str, this.id);
        return str;
    }
    decrypt(str) {
        str = str.toLowerCase();
        console.log(str);
        this.id = this.id - this.id * 2;

        str = this.caesarCipher(str, this.id);
        return str;
    }
    caesarCipher(name, id = 0) {
        if (id < 0) {
            return this.caesarCipher(name, id + 26);
        }
        let output = "";
        for (let i = 0; i < name.length; i++) {
            let char = name[i];
            if (char.match(/[a-z]/i)) {
                let code = name.charCodeAt(i);
                if (code >= 65 && code <= 90) {
                    char = String.fromCharCode(((code - 65 + id) % 26) + 65);
                } else if (code >= 97 && code <= 122) {
                    char = String.fromCharCode(((code - 97 + id) % 26) + 97);
                }
            }
            output += char;
        }
        return output;
    }
}

const cipher = new ShiftCipher(2);
console.log(cipher.encrypt("I love to code!")); // returns 'K NQXG VQ EQFG!'
console.log(cipher.decrypt("K <3 OA RWRRA")); // returns 'i <3 my puppy'

console.log(cipher);
