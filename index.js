export const setPhone = async () => {
  if (typeof window === "undefined") return;

  const main = document.createElement("dialog");
  main.classList.add("set-phone-modal");
  main.style.position = "fixed";
  main.style.top = "0";
  main.style.left = "0";
  main.style.width = "100%";
  main.style.height = "100%";
  main.style.backgroundColor = "rgba(0, 0, 0, 0.5)";
  main.style.display = "flex";
  main.style.justifyContent = "center";
  main.style.alignItems = "center";
  main.style.zIndex = "1000";

  const modalContent = document.createElement("div");

  const input = document.createElement("input");
  input.classList.add("set-phone-input");
  input.type = "tel";
  input.placeholder = "Enter phone number";

  const button = document.createElement("button");
  input.classList.add("set-phone-button");
  button.textContent = "Сохранить";

  const handleSuccess = () => {
    modalContent.remove();
    const successText = document.createElement("p");
    successText.classList.add("success-text");
    successText.textContent = `Успех! + ${localStorage.getItem("phone")}`;
    main.appendChild(successText);
  };

  button.addEventListener("click", () => {
    localStorage.setItem("phone", input.value);
    handleSuccess();
  });

  modalContent.appendChild(input);
  modalContent.appendChild(button);
  main.appendChild(modalContent);

  main.addEventListener("click", (e) => {
    if (e.target === main) {
      main.remove();
    }
  });

  document.body.appendChild(main);
};
