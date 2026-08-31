// Paste the Square checkout URL between the quotes below before launch.
const LEADERSHIP_LAB_CHECKOUT_URL = "https://checkout.square.site/merchant/8KVR1X00JS91M/checkout/3KGZVV7RM6GLI4VBUWOD7FDX";

const checkoutButton = document.getElementById("checkout-button");
const checkoutNote = document.getElementById("checkout-note");

if (LEADERSHIP_LAB_CHECKOUT_URL) {
  checkoutButton.href = LEADERSHIP_LAB_CHECKOUT_URL;
  checkoutButton.target = "_blank";
  checkoutButton.rel = "noopener";
  checkoutNote.textContent = "Secure enrollment via Square. Cancel anytime.";
} else {
  checkoutButton.addEventListener("click", (event) => {
    event.preventDefault();
    checkoutNote.textContent = "Enrollment link will be added before launch.";
    checkoutNote.scrollIntoView({ behavior: "smooth", block: "center" });
  });
}
