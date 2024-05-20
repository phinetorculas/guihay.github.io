import sharedData from "./sharedData.js";

document.addEventListener("DOMContentLoaded", function () {
  var modal = document.getElementById("myModal");
  var modalText = document.getElementById("modal-text");
  var closeBtn = document.getElementsByClassName("close")[0];

  document.querySelectorAll(".square").forEach(function (square) {
    square.addEventListener("click", function () {
      var index = 0; 

      var tableRowsHTML = "";
      sharedData.familyMembers[index].forEach(function (member, memberIndex) {
        var rowDataHTML = `
          <tr>
            <td>${sharedData.householdNo[index]}</td>
            <td>${sharedData.numberOfFamily[index]}</td>
            <td>${member}</td>
            <td>${sharedData.dateOfBirth[index][memberIndex]}</td>
            <td>${sharedData.age[index][memberIndex]}</td>
            <td>${sharedData.sex[index][memberIndex]}</td>
            <td>${sharedData.civilStatus[index][memberIndex]}</td>
            <td>${sharedData.religion[index][memberIndex]}</td>
            <td>${sharedData.placeOfBirth[index][memberIndex]}</td>
            <td>${sharedData.voter[index][memberIndex]}</td>
            <td>${sharedData.occupation[index][memberIndex]}</td>
            <td>${sharedData.highestEducationalAttainment[index][memberIndex]}</td>
            <td>${sharedData.seniorCitizen[index][memberIndex]}</td>
          </tr>`;
        tableRowsHTML += rowDataHTML;
      });

      // Set the modal content
      modalText.innerHTML = `
        <h2>Zone 1</h2>
        <table border="1" cellspacing="0" cellpadding="5">
          <tr>
            <th>Household No.</th>
            <th>No. of family</th>
            <th>Family Members</th>
            <th>Date of Birth (mm/dd/yyyy)</th>
            <th>Age</th>
            <th>Sex</th>
            <th>Civil Status</th>
            <th>Religion</th>
            <th>Place Of Birth (Municipality/Province)</th>
            <th>Voter</th>
            <th>Occupation</th>
            <th>Highest Educational Attainment</th>
            <th>Senior Citizen</th>
          </tr>
          ${tableRowsHTML}
        </table>
      `;

      // Show the modal
      modal.style.display = "block";
    });
  });

  // Close modal functionality
  closeBtn.onclick = function () {
    modal.style.display = "none";
  };

  window.onclick = function (event) {
    if (event.target == modal) {
      modal.style.display = "none";
    }
  };
});
