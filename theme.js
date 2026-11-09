(() => {
    const themeStorageKey = "mzozm-theme";
    const systemTheme = window.matchMedia("(prefers-color-scheme: dark)");
    let preferredTheme = null;

    try {
        const savedTheme = localStorage.getItem(themeStorageKey);
        if (savedTheme === "light" || savedTheme === "dark") preferredTheme = savedTheme;
    } catch {
        // 禁用本地存储时仍允许本页切换主题。
    }

    function applyTheme(theme) {
        document.documentElement.dataset.theme = theme;
        const button = document.getElementById("theme-toggle");
        if (!button) return;
        const label = theme === "dark" ? "切换到浅色模式" : "切换到深色模式";
        button.setAttribute("aria-label", label);
        button.title = label;
    }

    // 在正文绘制前恢复主题，避免深色模式刷新时闪白。
    applyTheme(preferredTheme || (systemTheme.matches ? "dark" : "light"));

    document.addEventListener("DOMContentLoaded", () => {
        const button = document.getElementById("theme-toggle");
        if (!button) return;
        applyTheme(document.documentElement.dataset.theme);
        button.hidden = false;
        button.addEventListener("click", () => {
            preferredTheme = document.documentElement.dataset.theme === "dark" ? "light" : "dark";
            applyTheme(preferredTheme);
            try {
                localStorage.setItem(themeStorageKey, preferredTheme);
            } catch {
                // 存储不可用时保留当前页面中的选择。
            }
        });
    });

    systemTheme.addEventListener("change", (event) => {
        if (!preferredTheme) applyTheme(event.matches ? "dark" : "light");
    });
})();
