# 🧭 研究工具导航

> MzozM的个人研究工具导航 - 507个精选学术资源和工具

## 📊 项目概览

- **🔗 总书签数**: 507个
- **📂 分类数**: 12个主要分类  
- **🎯 专业度**: 专为研究者优化
- **📱 响应式**: 支持所有设备

## 🚀 在线访问

### 本地预览
```bash
# 在项目目录下运行
open index.html
```

### 部署到 GitHub Pages
1. 将整个 `/nav` 文件夹上传到你的 GitHub 仓库
2. 在仓库设置中启用 GitHub Pages
3. 访问链接：`https://mzozm.github.io/nav/`

## 📁 文件结构

```
nav/
├── index.html              # 主页面
├── styles.css              # 样式文件
├── script.js               # 交互脚本
├── complete-bookmarks.js   # 完整书签数据 (507个)
└── README.md              # 项目说明
```

## 🎨 功能特色

### ✅ 核心功能
- **智能搜索**: 支持标题、描述、URL全文搜索
- **分类筛选**: 12个专业分类，快速定位
- **实时统计**: 显示当前筛选结果和总数
- **响应式设计**: 完美适配手机、平板、桌面
- **快捷键支持**: `Ctrl+K`搜索，`ESC`清空

### 🎯 研究者优化
- **学术搜索** (33个): Google Scholar、研究兔、各类数据库
- **AI助手** (65个): ChatGPT、Claude、DeepSeek等
- **浙大服务** (93个): 选课系统、CC98、VPN等校内资源
- **知识管理** (35个): 语雀、Zotero、文档工具
- **开发工具** (24个): GitHub、编程资源
- **数据工具** (其他): 可视化、分析平台

### 🔧 技术特性
- **原生JavaScript**: 无框架依赖，加载快速
- **性能优化**: 图片懒加载、搜索防抖
- **用户体验**: 动画过渡、返回顶部
- **SEO友好**: 语义化HTML结构

## 💻 部署说明

### 方法1: 作为子页面部署
```bash
# 1. 将nav文件夹上传到GitHub仓库
git add nav/
git commit -m "添加研究工具导航页面"
git push origin main

# 2. 在GitHub Pages设置中选择主分支
# 3. 访问 https://yourusername.github.io/nav/
```

### 方法2: 替换主页
```bash
# 将index.html重命名并替换根目录文件
mv nav/index.html ./
cp nav/* ./
```

## 🎮 使用技巧

### 快捷键
- `Ctrl+K` (Mac: `Cmd+K`) - 快速聚焦搜索框
- `ESC` - 清空搜索并重置筛选
- `Ctrl+/` (Mac: `Cmd+/`) - 显示帮助信息

### 搜索技巧
- 支持中英文搜索
- 可搜索网站名称、描述、URL
- 支持分类名称搜索
- 自动去除空格和标点

### 浏览技巧
- 点击分类快速筛选
- 书签卡片悬停显示完整信息
- 所有链接新标签页打开
- 返回顶部按钮滚动时显示

## 🛠️ 自定义修改

### 添加新书签
编辑 `complete-bookmarks.js` 文件：
```javascript
BOOKMARKS_DATA.push({
    title: "新工具名称",
    url: "https://example.com",
    description: "工具描述",
    category: "academic", // 选择合适分类
    favicon: "https://example.com/favicon.ico"
});
```

### 修改分类
更新 `CATEGORY_INFO` 对象：
```javascript
CATEGORY_INFO.newCategory = {
    name: "新分类",
    icon: "fas fa-star"
};
```

### 主题定制
修改 `styles.css` 中的CSS变量：
```css
:root {
    --primary-color: #0078d7;
    --background-color: #f8f9fa;
    --card-shadow: 0 4px 20px rgba(0, 0, 0, 0.08);
}
```

## 📈 统计信息

当前书签分布：
- 🎓 学术搜索: 33个 (6.5%)
- 🤖 AI助手: 65个 (12.8%)  
- 🏫 浙大服务: 93个 (18.3%)
- 📚 知识管理: 35个 (6.9%)
- 💻 开发工具: 24个 (4.7%)
- 📊 数据工具: 18个 (3.6%)
- 🌐 日常服务: 239个 (47.1%)

## 🔄 版本历史

- **v1.0.0** (2025-01-06)
  - 初始版本发布
  - 包含507个书签
  - 12个主要分类
  - 完整的搜索和筛选功能
  - 响应式设计

## 📝 许可证

MIT License - 自由使用和修改

## 🤝 贡献

欢迎提出建议和改进：
- 新工具推荐
- 分类优化建议  
- 功能改进意见
- Bug报告

---

> 💡 这个导航页面旨在提升研究效率，汇集最实用的学术工具和资源。希望对你的研究工作有所帮助！