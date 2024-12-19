
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

function renderTable() {
  console.log('renderTable');
  const tableBody = document.getElementById("table-body");
  console.log(jsonData);
  console.log(jsonData.searchResults);
  const { documentDetails } = jsonData.searchResults;

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
const initializeFundtest = () => {
  renderTable();
};

export default initializeFundtest;
