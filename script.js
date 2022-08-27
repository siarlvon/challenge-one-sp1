const textInput = document.querySelector(".text-input");
const textOutput = document.querySelector(".text-output");
const textCopied = document.querySelector(".copy-text");
textCopied.style.display = "none";

/* ENCRYPTING */
function btnEncrypt() {
    const encryptedText = encrypt(textInput.value);
    textOutput.value = encryptedText;
    textOutput.style.backgroundImage = "none";
    textInput.value = "";
    textCopied.style.display = "block";
}

function encrypt(encryptedString) {
    let arr = [["e", "enter"], ["i", "imes"], ["a", "ai"], ["o", "ober"], ["u", "ufat"]];
    encryptedString = encryptedString.toLowerCase();

    for (let i = 0; i < arr.length; i++) {
        if (encryptedString.includes(arr[i][0])) {
            encryptedString = encryptedString.replaceAll(arr[i][0], arr[i][1]);
        }
    }

    return encryptedString;
}

/* DECRYPTING */
function btnDecrypt() {
    const decryptedText = decrypt(textInput.value);
    textOutput.value = decryptedText;
    textOutput.style.backgroundImage = "none";
    textInput.value = "";
}

function decrypt(decryptedString) {
    let arr = [["e", "enter"], ["i", "imes"], ["a", "ai"], ["o", "ober"], ["u", "ufat"]];
    decryptedString = decryptedString.toLowerCase();

    for (let i = 0; i < arr.length; i++) {
        if (decryptedString.includes(arr[i][1])) {
            decryptedString = decryptedString.replaceAll(arr[i][1], arr[i][0]);
        }
    }

    return decryptedString;
}

/* COPYING */
function btnCopy() {
    textOutput.select();
    navigator.clipboard.writeText(textOutput.value);
    textOutput.value = "";
    alert("Saved text!");
}