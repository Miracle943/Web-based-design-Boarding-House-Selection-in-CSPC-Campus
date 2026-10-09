// Cap input values for price inputs
const priceInputs = [document.getElementById('minPrice'), document.getElementById('maxPrice')];
priceInputs.forEach(input => {
    input.addEventListener('input', () => {
        if (input.value > 9999) {
            input.value = 9999;
        }
    });
});

// Show toast notification
const toastEl = document.getElementById('liveToast');
const toast = new bootstrap.Toast(toastEl);
document.querySelectorAll('.show-toast-btn').forEach(button => {
    button.addEventListener('click', () => toast.show());
});

// Initialize the toast
const cancelToastEl = document.getElementById('cancelToast');
const cancelToast = new bootstrap.Toast(cancelToastEl);

// Attach toast to button(s)
document.querySelectorAll('.show-cancel-toast-btn').forEach(button => {
    button.addEventListener('click', () => {
        cancelToast.show();
    });
});

// Search functionality
document.getElementById("searchInput").addEventListener("keyup", function() {
    let filter = this.value.toLowerCase();
    let items = document.querySelectorAll("#boardingList .list-group-item");

    items.forEach(function(item) {
        let text = item.textContent.toLowerCase();
        item.style.display = text.includes(filter) ? "" : "none";
    });
});