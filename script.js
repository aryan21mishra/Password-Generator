const passwordText = document.querySelector("#password-text");
const lengthRange = document.querySelector("#length");
const hasSymbols = document.querySelector("#symbols");
const generateBtn = document.querySelector(".generate-btn");
const copyBtn = document.querySelector("#copy-btn");

let characters =
	"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";

hasSymbols.addEventListener("change", () => {
	hasSymbols.checked
		? (characters += "!@#$%^&*()_+~`|}{[]:;?><,./-= ")
		: (characters =
				"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789");
});
let passwordLength = 8;
lengthRange.addEventListener("input", (e) => (passwordLength = e.target.value));

let password = "";
generateBtn.addEventListener("click", () => {
	for (let i = 0; i <= passwordLength; i++) {
		const randomValue = Math.floor(Math.random() * characters.length);
		password += characters[randomValue];
	}
	passwordText.innerHTML = password;
	password = "";
});

copyBtn.addEventListener("click", () => {
	navigator.clipboard.writeText(passwordText.innerText).then(() => {
		alert("Password copied to clipboard!");
	});
});
