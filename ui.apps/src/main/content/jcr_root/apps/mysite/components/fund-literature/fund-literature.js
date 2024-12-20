const jsonData = {
  searchResults: {
    documentDetails: [
      {
        title: "Jennison Sales Idea A Leader in Growth Investing",
        dispAudience: "FP",
        updated: "11/06/2024",
        orderCode: "P14855R6"
      },
      {
        title: "EJ - IntlOpp FP Highlighter",
        dispAudience: "FP",
        updated: "11/06/2024",
        orderCode: "P14855R6"
      },
      {
        title: "Global Opp and Intl Opp: Case For secular growth investing",
        dispAudience: "Client",
        updated: "11/06/2024",
        orderCode: "P14855R6"
      }
    ]
  }
};

function getFieldName(index) {
  const fields = ["title", "dispAudience", "updated", "orderCode"];
  return fields[index];
}

function renderTable(sortedData) {
  const tableBody = document.getElementById("table-body");
  const documentDetails = sortedData || jsonData.searchResults.documentDetails;

  tableBody.innerHTML = "";

  documentDetails.forEach(doc => {
    const row = `
      <tr>
        <td>${doc.title}</td>
        <td>${doc.dispAudience}</td>
        <td>${doc.updated}</td>
        <td>${doc.orderCode}</td>
      </tr>
    `;
    tableBody.insertAdjacentHTML("beforeend", row);
  });
}

function sortTable(field, order) {
  const { documentDetails } = jsonData.searchResults;
  const sortedData = [...documentDetails].sort((a, b) => {
    if (order === "asc") {
      return a[field] > b[field] ? 1 : -1;
    }
    return a[field] < b[field] ? 1 : -1;
  });
  renderTable(sortedData);
}

function addSortingFeature() {
  const headers = document.querySelectorAll("th");
  headers.forEach((header, index) => {
    const dropdownIcon = document.createElement("span");
    dropdownIcon.innerHTML = " &#9660;"; // Unicode for dropdown arrow
    dropdownIcon.style.cursor = "pointer";
    dropdownIcon.style.marginLeft = "5px";

    dropdownIcon.addEventListener("click", () => {
      const popup = document.createElement("div");
      popup.style.position = "absolute";
      popup.style.background = "white";
      popup.style.border = "1px solid black";
      popup.style.padding = "5px";
      popup.style.zIndex = 1000;

      const ascButton = document.createElement("button");
      ascButton.innerText = "Asc";
      ascButton.addEventListener("click", () => {
        sortTable(getFieldName(index), "asc");
        document.body.removeChild(popup);
      });

      const descButton = document.createElement("button");
      descButton.innerText = "Desc";
      descButton.addEventListener("click", () => {
        sortTable(getFieldName(index), "desc");
        document.body.removeChild(popup);
      });

      popup.appendChild(ascButton);
      popup.appendChild(descButton);
      document.body.appendChild(popup);

      popup.style.left = `${dropdownIcon.getBoundingClientRect().left}px`;
      popup.style.top = `${dropdownIcon.getBoundingClientRect().bottom + window.scrollY}px`;

      // Remove popup on click outside
      document.addEventListener(
        "click",
        (e) => {
          if (!popup.contains(e.target) && e.target !== dropdownIcon) {
            document.body.removeChild(popup);
          }
        },
        { once: true }
      );
    });

    header.appendChild(dropdownIcon);
  });
}

const initializeFundtest = () => {
  renderTable();
  addSortingFeature();
};

export default initializeFundtest;