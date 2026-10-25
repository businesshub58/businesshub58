
document.addEventListener("DOMContentLoaded", function () {
    const searchForm = document.getElementById("businessSearchForm");
    const searchInput = document.getElementById("businessSearchInput");
    const categoryFilter = document.getElementById("categoryFilter");
    const resultsCount = document.getElementById("directoryResultsCount");
    const directoryGrid = document.getElementById("directoryGrid");
    const noResults = document.getElementById("directoryNoResults");
    const resetButton = document.getElementById("resetBusinessSearch");

    if (
        !searchForm ||
        !searchInput ||
        !categoryFilter ||
        !resultsCount ||
        !directoryGrid ||
        !noResults ||
        !resetButton
    ) {
        return;
    }

    const businessCards = Array.from(
        directoryGrid.querySelectorAll(".directory-card")
    );

    function filterBusinesses() {
        const searchTerm = searchInput.value
            .trim()
            .toLowerCase();

        const selectedCategory = categoryFilter.value;

        let visibleCount = 0;

        businessCards.forEach(function (card) {
            const searchableText = card.textContent.toLowerCase();
            const cardCategory = card.dataset.category;

            const matchesSearch =
                searchTerm === "" ||
                searchableText.includes(searchTerm);

            const matchesCategory =
                selectedCategory === "all" ||
                cardCategory === selectedCategory;

            const shouldShow = matchesSearch && matchesCategory;

            card.hidden = !shouldShow;

            if (shouldShow) {
                visibleCount++;
            }
        });

        resultsCount.textContent =
            "Showing " +
            visibleCount +
            (visibleCount === 1 ? " business" : " businesses");

        noResults.hidden = visibleCount !== 0;
        directoryGrid.hidden = visibleCount === 0;
    }

    searchForm.addEventListener("submit", function (event) {
        event.preventDefault();
        filterBusinesses();
    });

    searchInput.addEventListener("input", filterBusinesses);

    categoryFilter.addEventListener("change", filterBusinesses);

    resetButton.addEventListener("click", function () {
        searchInput.value = "";
        categoryFilter.value = "all";

        filterBusinesses();
        searchInput.focus();
    });

    filterBusinesses();
});
