import Cryptr from "cryptr";
const cryptr = new Cryptr("ReallySecretKey");

const encryptedString = cryptr.encrypt('Everyday Karma');
const decryptedString = cryptr.decrypt(encryptedString);

console.log('-----------------------------------');
console.log(`Encrypted Key: ${encryptedString}`);

console.log('-----------------------------------');
console.log(`Decrypted Key: ${decryptedString}`);
