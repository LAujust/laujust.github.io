const input = document.querySelector("#bibsearch");
const statusMessage = document.querySelector("#bibsearch-status");
const groups = Array.from(document.querySelectorAll(".publication-index ol.bibliography"), (list) => ({
  list,
  heading: list.previousElementSibling,
  papers: Array.from(list.children, (item) => ({ item, text: item.textContent.toLowerCase() })),
}));

function filterPapers() {
  const query = input.value.trim().toLowerCase();
  let count = 0;
  for (const { list, heading, papers } of groups) {
    let visible = 0;
    for (const { item, text } of papers) {
      item.hidden = !text.includes(query);
      if (!item.hidden) visible++;
    }
    list.hidden = visible === 0;
    if (heading?.matches("h2.bibliography")) heading.hidden = list.hidden;
    count += visible;
  }
  statusMessage.textContent = query ? (count ? `${count} publication${count === 1 ? "" : "s"} found.` : "No matching publications.") : "";
}

input.closest(".publication-search").hidden = false;
input.addEventListener("input", filterPapers);
function readFilterFromHash() {
  let filter;
  try {
    filter = decodeURIComponent(location.hash.slice(1));
  } catch {
    filter = "";
  }
  input.value = document.getElementById(filter) ? "" : filter;
  filterPapers();
}
readFilterFromHash();
window.addEventListener("hashchange", readFilterFromHash);
