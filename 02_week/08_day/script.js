const form = document.getElementById("taskForm");
const taskList = document.getElementById("taskList");
const errorMsg = document.getElementById("errorMsg");
const showCompletedBtn = document.getElementById("showCompleted");
const sortByPriorityBtn = document.getElementById("sortByPriority");

let showOnlyCompleted = false;


const priorityOrder = {
  "Düşük": 1,
  "Orta": 2,
  "Yüksek": 3
};


form.addEventListener("submit", function (e) {
  e.preventDefault();

  try {
    const title = document.getElementById("title").value.trim();
    const description = document.getElementById("description").value.trim();
    const priority = document.querySelector('input[name="priority"]:checked');

    if (!title) {
      errorMsg.textContent = "Başlık boş bırakılamaz!";
      return;
    }

    if (!priority) {
      errorMsg.textContent = "Lütfen bir öncelik seçin!";
      return;
    }

    errorMsg.textContent = "";

    const li = document.createElement("li");
    li.innerHTML = `
      <strong>${title}</strong><br>
      ${description ? description + "<br>" : ""}
      <em>Öncelik: ${priority.value}</em><br>
      <button class="completeBtn">Tamamlandı</button>
      <button class="deleteBtn">Sil</button>
    `;
    li.dataset.completed = "false";
    li.dataset.priority = priority.value;

    taskList.appendChild(li);
    form.reset();
  } catch (err) {
    console.error("Hata:", err);
    errorMsg.textContent = "Bir hata oluştu. Lütfen tekrar deneyin.";
  }
});


taskList.addEventListener("click", function (e) {
  e.stopPropagation();

  const target = e.target;
  const li = target.closest("li");

  if (!li) return;

  if (target.classList.contains("completeBtn")) {
    li.classList.toggle("completed");
    li.dataset.completed = li.classList.contains("completed");
  }

  if (target.classList.contains("deleteBtn")) {
    li.remove();
  }
});


showCompletedBtn.addEventListener("click", () => {
  showOnlyCompleted = !showOnlyCompleted;
  const tasks = document.querySelectorAll("#taskList li");

  tasks.forEach(task => {
    if (showOnlyCompleted) {
      task.style.display = task.dataset.completed === "true" ? "block" : "none";
      showCompletedBtn.textContent = "🔁 Tümünü Göster";
    } else {
      task.style.display = "block";
      showCompletedBtn.textContent = "✅ Sadece Tamamlananları Göster";
    }
  });
});


sortByPriorityBtn.addEventListener("click", () => {
  const tasks = Array.from(document.querySelectorAll("#taskList li"));

  tasks.sort((a, b) => {
    const pa = priorityOrder[a.dataset.priority];
    const pb = priorityOrder[b.dataset.priority];
    return pb - pa; 
  });

  taskList.innerHTML = "";
  tasks.forEach(task => taskList.appendChild(task));
});
