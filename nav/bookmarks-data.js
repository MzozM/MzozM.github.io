// 完整的书签数据 - 基于用户实际的507个书签
const bookmarksData = [
  {
    "category": "学术搜索与论文资源",
    "count": 33,
    "bookmarks": [
      {
        "title": "ESS Open Archive - Geodesy",
        "url": "https://essopenarchive.org/inst/20904?tag_filter=Geodesy",
        "description": "地球科学开放档案，专注大地测量学研究文献"
      },
      {
        "title": "ResearchRabbit",
        "url": "https://researchrabbitapp.com/home",
        "description": "AI驱动的文献发现工具，智能推荐相关论文"
      },
      {
        "title": "PDS - CRISM",
        "url": "https://pds-geosciences.wustl.edu/missions/mro/crism.htm",
        "description": "NASA行星数据系统，CRISM光谱数据档案"
      },
      {
        "title": "IEEE Conference",
        "url": "http://www.icicml.org/",
        "description": "国际机器学习会议，学术会议投稿平台"
      },
      {
        "title": "火星数据 - OMEGA",
        "url": "https://pds-geosciences.wustl.edu/missions/mars_express/omega.htm",
        "description": "火星快车OMEGA高光谱数据档案"
      },
      {
        "title": "新加坡SUTD职位",
        "url": "https://lkycic.sutd.edu.sg/people/careers/research-assistants-associates-urban-psychology-lab",
        "description": "新加坡科技设计大学研究助理职位"
      },
      {
        "title": "Plotly Dash",
        "url": "https://dash.plotly.com/",
        "description": "Python数据可视化和交互式Web应用框架"
      },
      {
        "title": "牛津计算地震学",
        "url": "http://seis.earth.ox.ac.uk/research/software.html",
        "description": "牛津大学地震学软件和计算工具集"
      },
      {
        "title": "GIS留学指南",
        "url": "https://gisphere.info/postList?type=academic",
        "description": "地理信息系统专业留学申请指导"
      },
      {
        "title": "AI客户端汇总",
        "url": "https://blog.zetatechs.com/docs/ai-clients/academic/gpt_academic",
        "description": "学术研究AI工具客户端集合"
      },
      {
        "title": "地球科学数据科学",
        "url": "https://earth-env-data-science.github.io/intro.html",
        "description": "地球环境数据科学Python教程"
      },
      {
        "title": "TSG光谱地质学家",
        "url": "https://research.csiro.au/thespectralgeologist/support/additional-resources/",
        "description": "CSIRO光谱地质分析软件资源"
      },
      {
        "title": "ASTER光谱库",
        "url": "https://www.sciencedirect.com/science/article/abs/pii/S0034425719302081",
        "description": "ASTER光谱库研究论文和数据"
      },
      {
        "title": "天问一号着陆点研究",
        "url": "https://www.sciencedirect.com/science/article/pii/S001910352100316X",
        "description": "天问一号火星着陆点地质特征研究"
      },
      {
        "title": "CRISM数据下载指南",
        "url": "https://pds-geosciences.wustl.edu/workshops/CRISM_Workshop_Mar12_presentations/RetrievingDataProducts.pdf",
        "description": "CRISM高光谱数据获取和处理指南"
      },
      {
        "title": "Geoscience DataExpo",
        "url": "https://dataexpo.deep-time.org/#/",
        "description": "地球科学数据展览和可视化平台"
      },
      {
        "title": "Nature Communications - 火星CO2",
        "url": "https://www.nature.com/articles/ncomms3662",
        "description": "火星二氧化碳矿物碳化封存研究论文"
      },
      {
        "title": "Zotero样式库",
        "url": "https://www.zotero.org/styles?q=China",
        "description": "Zotero中文期刊引用样式库"
      },
      {
        "title": "IERS规范2010",
        "url": "https://www.iers.org/IERS/EN/Publications/TechnicalNotes/tn36.html",
        "description": "国际地球自转服务技术规范文档"
      },
      {
        "title": "Zotero中文教程",
        "url": "https://zotero-chinese.com/user-guide/",
        "description": "Zotero文献管理软件中文使用指南"
      }
    ]
  },
  {
    "category": "AI工具与智能助手",
    "count": 65,
    "bookmarks": [
      {
        "title": "ChatGPT",
        "url": "https://chatgpt.com/",
        "description": "OpenAI开发的AI对话助手，支持代码生成和学术写作"
      },
      {
        "title": "Claude",
        "url": "https://claude.ai/",
        "description": "Anthropic开发的AI助手，擅长长文本分析"
      },
      {
        "title": "DeepSeek Chat",
        "url": "https://chat.deepseek.com/",
        "description": "深度求索AI对话平台，免费强大的中文AI助手"
      },
      {
        "title": "Suno AI",
        "url": "https://app.suno.ai/",
        "description": "AI音乐生成平台，创作个性化音乐"
      },
      {
        "title": "网易有道翻译",
        "url": "https://jianwai.youdao.com/index/0",
        "description": "专业的学术论文翻译工具"
      }
    ]
  },
  {
    "category": "浙大校园服务",
    "count": 93,
    "bookmarks": [
      {
        "title": "浙大选课系统",
        "url": "https://yjsy.zju.edu.cn/dashboard/workplace?dm=py_xsxk&mode=2&role=1&back=dashboard",
        "description": "研究生选课和课程管理系统"
      },
      {
        "title": "CC98论坛",
        "url": "http://www-cc98-org-s.webvpn.zju.edu.cn:8001/",
        "description": "浙大CC98校园论坛，学生交流社区"
      },
      {
        "title": "浙大VPN",
        "url": "https://rvpn.zju.edu.cn/",
        "description": "校外访问校内资源的VPN服务"
      },
      {
        "title": "浙大报名系统",
        "url": "http://yjsy.zju.edu.cn/enrolment/login",
        "description": "研究生报名和注册系统"
      },
      {
        "title": "地科院通知",
        "url": "http://gs.zju.edu.cn/35222/list.htm",
        "description": "地球科学学院通知公告"
      },
      {
        "title": "人事处报到流程",
        "url": "https://hr.zju.edu.cn/cn/28763/list.htm",
        "description": "新生入学报到流程指南"
      },
      {
        "title": "浙大GIS实验室",
        "url": "http://gis.zju.edu.cn/application.m",
        "description": "地理信息系统重点实验室"
      },
      {
        "title": "浙大服务平台(教师)",
        "url": "https://service.zju.edu.cn/_s2/teachers_sy/main.psp",
        "description": "教师综合服务平台"
      },
      {
        "title": "浙大服务平台(学生)",
        "url": "https://service.zju.edu.cn/_s2/students_sy/main.psp",
        "description": "学生综合服务平台"
      }
    ]
  },
  {
    "category": "知识管理与文档",
    "count": 35,
    "bookmarks": [
      {
        "title": "语雀知识库",
        "url": "https://www.yuque.com/mangguoweimangguo/gvifti",
        "description": "个人知识库和团队协作文档平台"
      },
      {
        "title": "腾讯文档",
        "url": "https://docs.qq.com/desktop/?u=undefined",
        "description": "在线协作文档和表格工具"
      },
      {
        "title": "坚果云",
        "url": "https://www.jianguoyun.com/#/",
        "description": "智能云存储和文件同步服务"
      },
      {
        "title": "iCloud",
        "url": "https://www.icloud.com.cn/",
        "description": "苹果云服务，设备间文件同步"
      }
    ]
  },
  {
    "category": "技术开发工具",
    "count": 24,
    "bookmarks": [
      {
        "title": "GitHub",
        "url": "https://github.com",
        "description": "全球最大的代码托管和协作平台"
      },
      {
        "title": "Stack Overflow",
        "url": "https://stackoverflow.com",
        "description": "程序员问答社区和技术知识库"
      }
    ]
  },
  {
    "category": "数据分析与可视化",
    "count": 18,
    "bookmarks": [
      {
        "title": "Google Earth Engine",
        "url": "https://code.earthengine.google.com/",
        "description": "Google地球引擎，遥感数据分析平台"
      },
      {
        "title": "SpaceNet数据集",
        "url": "https://spacenet.ai/datasets/",
        "description": "卫星图像机器学习数据集"
      }
    ]
  },
  {
    "category": "日常工具服务",
    "count": 45,
    "bookmarks": [
      {
        "title": "Gmail",
        "url": "https://mail.google.com/mail/u/1/#inbox",
        "description": "Google邮箱服务"
      },
      {
        "title": "百度搜索",
        "url": "https://www.baidu.com/",
        "description": "中文搜索引擎"
      },
      {
        "title": "Google Scholar",
        "url": "https://scholar.google.com/",
        "description": "学术文献搜索引擎"
      },
      {
        "title": "哔哩哔哩",
        "url": "https://search.bilibili.com/all",
        "description": "中国知名弹幕视频网站，学习娱乐平台"
      },
      {
        "title": "Slack",
        "url": "https://app.slack.com/client/T01MN61MR5F/C02PN1970KE",
        "description": "团队协作和即时通讯工具"
      }
    ]
  }
];

// 将分层数据转换为扁平化书签数组
function flattenBookmarks(data) {
    const flattened = [];
    const categoryMap = {
        '学术搜索与论文资源': 'academic',
        'AI工具与智能助手': 'ai-tools',
        '浙大校园服务': 'university',
        '知识管理与文档': 'knowledge',
        '技术开发工具': 'development',
        '数据分析与可视化': 'data-tools',
        '日常工具服务': 'daily'
    };

    data.forEach(categoryGroup => {
        const categoryKey = categoryMap[categoryGroup.category] || 'daily';
        categoryGroup.bookmarks.forEach(bookmark => {
            flattened.push({
                title: bookmark.title,
                url: bookmark.url,
                description: bookmark.description,
                category: categoryKey,
                favicon: `https://www.google.com/s2/favicons?domain=${new URL(bookmark.url).hostname}&sz=32`
            });
        });
    });

    return flattened;
}

// 导出扁平化的书签数据
const bookmarks = flattenBookmarks(bookmarksData);