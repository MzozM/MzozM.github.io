// 等待页面和书签数据加载完成
document.addEventListener('DOMContentLoaded', function() {
    // 检查书签数据是否已加载
    if (typeof BOOKMARKS_DATA === 'undefined') {
        console.error('书签数据未加载');
        return;
    }
    
    initializeApp();
});

// 全局变量
let currentCategory = 'all';
let currentSearchTerm = '';
let filteredBookmarks = [];

// DOM 元素
const elements = {
    bookmarksContainer: document.getElementById('bookmarks-container'),
    searchInput: document.getElementById('search-input'),
    searchClear: document.getElementById('search-clear'),
    noResults: document.getElementById('no-results'),
    loading: document.getElementById('loading'),
    backToTop: document.getElementById('back-to-top'),
    totalBookmarks: document.getElementById('total-bookmarks'),
    filteredCount: document.getElementById('filtered-count'),
    categoryCount: document.getElementById('category-count')
};

// 初始化应用
function initializeApp() {
    console.log('初始化应用，书签总数：', BOOKMARKS_DATA.length);
    
    // 初始化数据
    filteredBookmarks = [...BOOKMARKS_DATA];
    
    // 渲染分类按钮
    renderCategoryButtons();
    
    // 渲染书签
    renderBookmarks(filteredBookmarks);
    
    // 设置事件监听器
    setupEventListeners();
    
    // 更新统计信息
    updateStats();
    
    // 隐藏加载状态
    elements.loading.style.display = 'none';
}

// 渲染分类按钮
function renderCategoryButtons() {
    const categoriesContainer = document.querySelector('.categories-scroll');
    const allButton = categoriesContainer.querySelector('[data-category="all"]');
    
    // 获取分类统计
    const categoryStats = {};
    BOOKMARKS_DATA.forEach(bookmark => {
        categoryStats[bookmark.category] = (categoryStats[bookmark.category] || 0) + 1;
    });
    
    // 更新全部按钮的计数
    const allCount = allButton.querySelector('.count');
    if (allCount) {
        allCount.textContent = BOOKMARKS_DATA.length;
    }
    
    // 生成分类按钮
    Object.keys(CATEGORY_INFO).forEach(categoryKey => {
        if (categoryKey === 'all') return;
        
        const count = categoryStats[categoryKey] || 0;
        if (count === 0) return; // 跳过没有书签的分类
        
        const category = CATEGORY_INFO[categoryKey];
        const button = document.createElement('button');
        button.className = 'category-btn';
        button.setAttribute('data-category', categoryKey);
        button.innerHTML = `
            <i class="${category.icon}"></i>
            <span>${category.name}</span>
            <span class="count">${count}</span>
        `;
        
        categoriesContainer.appendChild(button);
    });
}

// 渲染书签
function renderBookmarks(bookmarksToShow) {
    const container = elements.bookmarksContainer;
    
    if (bookmarksToShow.length === 0) {
        container.innerHTML = '';
        elements.noResults.style.display = 'block';
        return;
    }
    
    elements.noResults.style.display = 'none';
    
    // 生成书签卡片HTML
    const bookmarksHTML = bookmarksToShow.map((bookmark, index) => {
        const categoryInfo = CATEGORY_INFO[bookmark.category] || CATEGORY_INFO.other;
        
        return `
            <div class="bookmark-card" data-category="${bookmark.category}" style="animation-delay: ${(index % 6) * 0.1}s">
                <div class="bookmark-header">
                    <img src="${bookmark.favicon}" 
                         alt="${bookmark.title}" 
                         class="bookmark-favicon"
                         loading="lazy"
                         onerror="this.style.display='none'">
                    <a href="${bookmark.url}" 
                       target="_blank" 
                       class="bookmark-title" 
                       rel="noopener noreferrer"
                       title="${bookmark.title}">
                        ${bookmark.title}
                    </a>
                </div>
                <div class="bookmark-url" title="${bookmark.url}">${bookmark.url}</div>
                <div class="bookmark-description" title="${bookmark.description}">${bookmark.description}</div>
                <div class="bookmark-category">${categoryInfo.name}</div>
            </div>
        `;
    }).join('');
    
    container.innerHTML = bookmarksHTML;
    updateStats();
}

// 设置事件监听器
function setupEventListeners() {
    // 搜索功能
    elements.searchInput.addEventListener('input', handleSearch);
    elements.searchInput.addEventListener('keydown', function(e) {
        if (e.key === 'Escape') {
            resetSearch();
        }
    });
    
    // 搜索清空按钮
    elements.searchClear.addEventListener('click', resetSearch);
    
    // 分类按钮点击
    document.addEventListener('click', function(e) {
        if (e.target.closest('.category-btn')) {
            handleCategoryClick(e.target.closest('.category-btn'));
        }
    });
    
    // 返回顶部按钮
    elements.backToTop.addEventListener('click', scrollToTop);
    
    // 滚动事件
    window.addEventListener('scroll', handleScroll);
    
    // 键盘快捷键
    document.addEventListener('keydown', handleKeyboard);
    
    // 窗口大小变化
    window.addEventListener('resize', handleResize);
}

// 处理搜索
function handleSearch(e) {
    const searchTerm = e.target.value.toLowerCase().trim();
    currentSearchTerm = searchTerm;
    
    // 显示/隐藏清空按钮
    if (searchTerm) {
        elements.searchClear.classList.add('visible');
    } else {
        elements.searchClear.classList.remove('visible');
    }
    
    // 防抖处理
    clearTimeout(handleSearch.timeout);
    handleSearch.timeout = setTimeout(() => {
        filterBookmarks();
    }, 300);
}

// 处理分类点击
function handleCategoryClick(button) {
    const category = button.getAttribute('data-category');
    
    // 更新按钮状态
    document.querySelectorAll('.category-btn').forEach(btn => {
        btn.classList.remove('active');
    });
    button.classList.add('active');
    
    // 更新当前分类
    currentCategory = category;
    
    // 过滤书签
    filterBookmarks();
}

// 过滤书签
function filterBookmarks() {
    let filtered = [...BOOKMARKS_DATA];
    
    // 按分类过滤
    if (currentCategory !== 'all') {
        filtered = filtered.filter(bookmark => bookmark.category === currentCategory);
    }
    
    // 按搜索词过滤
    if (currentSearchTerm) {
        filtered = filtered.filter(bookmark =>
            bookmark.title.toLowerCase().includes(currentSearchTerm) ||
            bookmark.description.toLowerCase().includes(currentSearchTerm) ||
            bookmark.url.toLowerCase().includes(currentSearchTerm) ||
            (CATEGORY_INFO[bookmark.category] && 
             CATEGORY_INFO[bookmark.category].name.toLowerCase().includes(currentSearchTerm))
        );
    }
    
    filteredBookmarks = filtered;
    renderBookmarks(filteredBookmarks);
}

// 重置搜索
function resetSearch() {
    elements.searchInput.value = '';
    elements.searchClear.classList.remove('visible');
    currentSearchTerm = '';
    
    // 重置到全部分类
    currentCategory = 'all';
    document.querySelectorAll('.category-btn').forEach(btn => {
        btn.classList.remove('active');
    });
    document.querySelector('[data-category="all"]').classList.add('active');
    
    filterBookmarks();
    elements.searchInput.focus();
}

// 更新统计信息
function updateStats() {
    elements.totalBookmarks.textContent = BOOKMARKS_DATA.length;
    elements.filteredCount.textContent = filteredBookmarks.length;
    elements.categoryCount.textContent = Object.keys(CATEGORY_INFO).length - 1; // 减去'all'
}

// 处理滚动
function handleScroll() {
    // 返回顶部按钮显示/隐藏
    if (window.pageYOffset > 300) {
        elements.backToTop.classList.add('visible');
    } else {
        elements.backToTop.classList.remove('visible');
    }
}

// 滚动到顶部
function scrollToTop() {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
}

// 处理键盘快捷键
function handleKeyboard(e) {
    // Ctrl/Cmd + K 快速搜索
    if ((e.ctrlKey || e.metaKey) && e.key === 'k') {
        e.preventDefault();
        elements.searchInput.focus();
        elements.searchInput.select();
    }
    
    // Ctrl/Cmd + / 显示帮助（可选）
    if ((e.ctrlKey || e.metaKey) && e.key === '/') {
        e.preventDefault();
        showHelp();
    }
}

// 处理窗口大小变化
function handleResize() {
    // 可以添加响应式处理逻辑
}

// 显示帮助信息（可选功能）
function showHelp() {
    alert(`快捷键：
• Ctrl+K / Cmd+K: 快速搜索
• ESC: 清空搜索
• Ctrl+/ / Cmd+/: 显示此帮助`);
}

// 导出函数供外部调用
window.resetSearch = resetSearch;

// 统计和分析功能
function getBookmarkStats() {
    const stats = {
        total: BOOKMARKS_DATA.length,
        byCategory: {},
        domains: {},
        topDomains: []
    };
    
    BOOKMARKS_DATA.forEach(bookmark => {
        // 分类统计
        const category = bookmark.category;
        stats.byCategory[category] = (stats.byCategory[category] || 0) + 1;
        
        // 域名统计
        try {
            const domain = new URL(bookmark.url).hostname;
            stats.domains[domain] = (stats.domains[domain] || 0) + 1;
        } catch (e) {
            // 忽略无效URL
        }
    });
    
    // 获取最常用的域名
    stats.topDomains = Object.entries(stats.domains)
        .sort(([,a], [,b]) => b - a)
        .slice(0, 10)
        .map(([domain, count]) => ({ domain, count }));
    
    return stats;
}

// 在控制台显示统计信息
console.log('书签统计信息：', getBookmarkStats());

// 错误处理
window.addEventListener('error', function(e) {
    console.error('应用错误：', e.error);
});

// 性能监控
if (window.performance && window.performance.mark) {
    window.performance.mark('app-init-start');
    
    window.addEventListener('load', function() {
        window.performance.mark('app-init-end');
        window.performance.measure('app-init', 'app-init-start', 'app-init-end');
        
        const measure = window.performance.getEntriesByName('app-init')[0];
        console.log(`应用初始化耗时: ${Math.round(measure.duration)}ms`);
    });
}