// Cap input values for price inputs
const priceInputs = [document.getElementById('minPrice'), document.getElementById('maxPrice')];
priceInputs.forEach(input => {
    input.addEventListener('input', () => {
        if (input.value > 9999) {
            input.value = 9999;
        }
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