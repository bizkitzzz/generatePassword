const passwordField = document.querySelector("#passwordField");
const inputLength = document.querySelector("#password_length");
const generateButton = document.querySelector(".generate-btn");
const copyButton = document.querySelector(".password-container");
const copyText = document.querySelector(".copyText");
const defaultCopyText = "(нажмите чтобы скопировать)";
const defaultPasswordText = "Ваш пароль появится здесь";
const charset =
  "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789!@#$%^&*";
generateButton.onclick = () => {
  const passwordLength = Number(inputLength.value);
  let password = "";
  for (let i = 0; i < passwordLength; i++) {
    const randomIndex = Math.floor(Math.random() * charset.length);
    password += charset[randomIndex];
  }
  passwordField.textContent = password;
  copyText.textContent = defaultCopyText;
};

copyButton.onclick = () => {
  if (passwordField.textContent.trim() !== defaultPasswordText) {
    navigator.clipboard.writeText(passwordField.textContent);
    if (copyText.textContent === defaultCopyText) {
      copyText.textContent = "(Вы успешно скопировали пароль)";
    }
  }
};
