document.addEventListener("DOMContentLoaded", function () {
    const mainTabs = document.querySelectorAll(".main-tab");
    const subTabs = document.querySelectorAll(".sub-tab");
    const contents = document.querySelectorAll(".tab-content");
    const standardTabs = document.querySelectorAll(".tab-button");

    // Відкриття та закриття підвкладок при натисканні
    mainTabs.forEach(tab => {
        tab.addEventListener("click", () => {
            const subTabId = tab.getAttribute("data-tab");
            const subTabMenu = document.getElementById(subTabId);

            if (subTabMenu.classList.contains("active")) {
                subTabMenu.classList.remove("active"); // 🔹 Закриваємо вкладку
            } else {
                document.querySelectorAll(".sub-tabs.active").forEach(menu => menu.classList.remove("active")); // 🔹 Закриваємо всі інші
                subTabMenu.classList.add("active"); // 🔹 Відкриваємо поточну
            }
        });
    });

    // Перемикання контенту при виборі підвкладки
    subTabs.forEach(subTab => {
        subTab.addEventListener("click", () => {
            const tabId = subTab.getAttribute("data-tab");

            contents.forEach(content => content.classList.remove("active"));
            document.getElementById(tabId).classList.add("active");
        });
    });

    // Перемикання контенту для стандартних вкладок
    standardTabs.forEach(tab => {
        tab.addEventListener("click", () => {
            const tabId = tab.getAttribute("data-tab");

            contents.forEach(content => content.classList.remove("active"));
            document.getElementById(tabId).classList.add("active");
        });
    });
});

document.addEventListener("DOMContentLoaded", function () {
    const menuToggle = document.querySelector(".menu-toggle");
    const sidebar = document.querySelector(".sidebar");
    const tabButtons = document.querySelectorAll(".tab-button, .sub-tab"); // 🔹 Всі вкладки

    menuToggle.addEventListener("click", () => {
        sidebar.classList.toggle("active"); // 🔹 Відкриваємо / закриваємо меню
    });

    tabButtons.forEach(button => {
        button.addEventListener("click", () => {
            sidebar.classList.remove("active"); // 🔹 Закриваємо меню після вибору вкладки
        });
    });
});







