//JSON
let studentData = [
  {
    id: 1,
    name: "Ali",
    class: "10A",
    age: 16,
    email: "ali@example.com",
    grade: 88,
    status: "Aktif",
  },
  {
    id: 2,
    name: "Ahmet",
    class: "11B",
    age: 17,
    email: "ahmet@example.com",
    grade: 74,
    status: "Aktif",
  },
  {
    id: 3,
    name: "Elif",
    class: "12C",
    age: 18,
    email: "elif@example.com",
    grade: 91,
    status: "Mezun",
  },
];

// Tabloyu güncelleme
function renderTable() {
  const tbody = $("#studentTableBody");
  tbody.empty();

  studentData.forEach((student, index) => {
    const row = `
          <tr data-index="${index}">
            <td>${student.id}</td>
            <td>${student.name}</td>
            <td>${student.class}</td>
            <td>${student.age}</td>
            <td>${student.email}</td>
            <td>${student.grade}</td>
            <td>${student.status}</td>
            <td><button class="deleteBtn">Sil</button></td>
          </tr>
        `;
    tbody.append(row);
  });
}

$(document).ready(function () {
  renderTable();

  // Ekleme butonuna tıklanınca
  $("#addBtn").click(function () {
    const name = $("#nameInput").val().trim();
    const className = $("#classInput").val().trim();
    const age = parseInt($("#ageInput").val());
    const email = $("#emailInput").val().trim();
    const grade = parseFloat($("#gradeInput").val());
    const status = $("#statusInput").val();

    if (name && className && age && email && !isNaN(grade) && status) {
      const newStudent = {
        id: Date.now(),
        name: name,
        class: className,
        age: age,
        email: email,
        grade: grade,
        status: status,
      };

      studentData.push(newStudent);
      renderTable();

      // Formu temizle
      $("#nameInput").val("");
      $("#classInput").val("");
      $("#ageInput").val("");
      $("#emailInput").val("");
      $("#gradeInput").val("");
      $("#statusInput").val("Aktif");
    } else {
      alert("Lütfen tüm alanları doldurunuz!");
    }
  });

  // Sil butonu
  $("#studentTableBody").on("click", ".deleteBtn", function () {
    const index = $(this).closest("tr").data("index");
    studentData.splice(index, 1);
    renderTable();
  });

  // Satıra tıklanınca arka plan rengi değişsin
  $("#studentTableBody").on("click", "tr", function () {
    $(this).toggleClass("clicked");
  });
});
