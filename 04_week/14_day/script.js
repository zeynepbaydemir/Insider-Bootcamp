const container = document.querySelector(".ins-api-users");

// stil
const style = document.createElement("style");
style.textContent = `
  * {
    box-sizing: border-box;
  }

  body {
    font-family: 'Segoe UI', sans-serif;
    background: linear-gradient(to right, #eef2f3, #dfe9f3);
    margin: 0;
    padding: 40px;
    color: #2c3e50;
  }

  .ins-api-users {
    max-width: 1000px;
    margin: 0 auto;
  }

  .ins-api-users h1 {
    font-size: 32px;
    margin-bottom: 30px;
    text-align: center;
    color: #1a237e;
    letter-spacing: 1px;
  }

  .user-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
    gap: 20px;
  }

  .user-card {
    position: relative;
    background: rgba(255, 255, 255, 0.65);
    backdrop-filter: blur(10px);
    border-radius: 16px;
    padding: 20px;
    box-shadow: 0 8px 20px rgba(0, 0, 0, 0.08);
    border: 1px solid rgba(200, 200, 200, 0.3);
    transition: transform 0.3s ease, box-shadow 0.3s ease;
  }

  .user-card:hover {
    transform: translateY(-5px);
    box-shadow: 0 12px 28px rgba(0, 0, 0, 0.15);
  }

  .user-card h3 {
    margin: 0 0 10px;
    font-size: 20px;
    color: #2c3e50;
  }

  .user-card p {
    margin: 6px 0;
    font-size: 14px;
    color: #555;
  }

  .user-card button {
    position: absolute;
    top: 15px;
    right: 15px;
    background: linear-gradient(135deg, #e53935, #d32f2f);
    color: white;
    border: none;
    padding: 6px 12px;
    border-radius: 8px;
    font-size: 13px;
    cursor: pointer;
    transition: background 0.3s ease;
  }

  .user-card button:hover {
    background: #c62828;
  }

  .error-message {
    text-align: center;
    color: #d32f2f;
    font-weight: bold;
    background-color: #ffebee;
    padding: 20px;
    border-radius: 10px;
    border: 1px solid #f44336;
  }
`;

document.head.appendChild(style);

const CACHE_KEY = "users_data";
const CACHE_TIMESTAMP_KEY = "users_data_timestamp";
const ONE_DAY = 24 * 60 * 60 * 1000;

function getCachedData() {
  const data = localStorage.getItem(CACHE_KEY);
  const timestamp = localStorage.getItem(CACHE_TIMESTAMP_KEY);
  if (data && timestamp && Date.now() - timestamp < ONE_DAY) {
    return JSON.parse(data);
  }
  return null;
}

function cacheData(data) {
  localStorage.setItem(CACHE_KEY, JSON.stringify(data));
  localStorage.setItem(CACHE_TIMESTAMP_KEY, Date.now().toString());
}

function renderUsers(users) {
  container.innerHTML = `
      <h1>Kullanıcı Bilgileri</h1>
      <div class="user-grid"></div>
    `;

  const grid = container.querySelector(".user-grid");

  if (users.length === 0) {
    grid.innerHTML = "<p>Hiç kullanıcı kalmadı 🥲</p>";
    return;
  }

  users.forEach((user) => {
    const div = document.createElement("div");
    div.className = "user-card";
    div.innerHTML = `
        <h3>${user.name}</h3>
        <p><strong>Email:</strong> ${user.email}</p>
        <p><strong>Adres:</strong> ${user.address.street}, ${user.address.city}</p>
        <button>Sil</button>
      `;

    div.querySelector("button").addEventListener("click", () => {
      deleteUser(user.id);
    });

    grid.appendChild(div);
  });
}

function deleteUser(id) {
  let users = JSON.parse(localStorage.getItem(CACHE_KEY)) || [];
  users = users.filter((user) => user.id !== id);
  cacheData(users);
  renderUsers(users);
}

function fetchUsers() {
  fetch("https://jsonplaceholder.typicode.com/users")
    .then((res) => {
      if (!res.ok) throw new Error("API bağlantı hatası");
      return res.json();
    })
    .then((data) => {
      cacheData(data);
      renderUsers(data);
    })
    .catch((err) => {
      console.error("HATA:", err);
      container.innerHTML = `<p class="error-message">Kullanıcı verileri yüklenemedi. Lütfen daha sonra tekrar deneyin.</p>`;
    });
}

const cached = getCachedData();
if (cached) {
  renderUsers(cached);
} else {
  fetchUsers();
}
