const searchInput = document.getElementById("searchInput");
const categoryFilter = document.getElementById("categoryFilter");
const books = document.querySelectorAll(".book-card");
const itemCount = document.getElementById("itemCount");

function filterBooks() {
    const searchText = searchInput.value.toLowerCase();
    const selectedCategory = categoryFilter.value;

    let visibleCount = 0;

    books.forEach(book => {
        const title =
            book.querySelector("h3").textContent.toLowerCase();

        const category = book.dataset.category;

        const matchesSearch =
            title.includes(searchText);

        const matchesCategory =
            selectedCategory === "all" ||
            category === selectedCategory;

        if (matchesSearch && matchesCategory) {
            book.style.display = "block";
            visibleCount++;
        } else {
            book.style.display = "none";
        }
    });

    itemCount.textContent = visibleCount;
}

searchInput.addEventListener("input", filterBooks);
categoryFilter.addEventListener("change", filterBooks);
