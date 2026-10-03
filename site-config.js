// Square checkout URL for Leadership Lab enrollment.
const LEADERSHIP_LAB_CHECKOUT_URL = "https://checkout.square.site/merchant/8KVR1X00JS91M/checkout/3KGZVV7RM6GLI4VBUWOD7FDX";

const checkoutButton = document.getElementById("checkout-button");
const checkoutNote = document.getElementById("checkout-note");

if (LEADERSHIP_LAB_CHECKOUT_URL && checkoutButton) {
  checkoutButton.href = LEADERSHIP_LAB_CHECKOUT_URL;
  checkoutButton.target = "_blank";
  checkoutButton.rel = "noopener";
  if (checkoutNote) checkoutNote.textContent = "Secure enrollment via Square. Cancel anytime.";
} else if (checkoutButton) {
  checkoutButton.addEventListener("click", (event) => {
    event.preventDefault();
    if (checkoutNote) {
      checkoutNote.textContent = "Enrollment link will be added before launch.";
      checkoutNote.scrollIntoView({ behavior: "smooth", block: "center" });
    }
  });
}

// Keep the Leadership Lab experience graphic close to its native display size
// so fine text and faces remain crisp rather than being stretched on large screens.
const experienceFrame = document.querySelector(".experience-frame");
const experienceImage = document.getElementById("leadership-lab-experience");

if (experienceFrame && experienceImage) {
  experienceFrame.style.maxWidth = "860px";
  experienceImage.style.imageRendering = "auto";
  experienceImage.style.filter = "contrast(1.035) saturate(1.02)";
}
