# My Badge Card

一个现代、精美的个人数字名片，以卡片的形式展示个人信息、技能、编程时间和喜欢的名言。
效果：[aronyang.com](https://aronyang.com)


## 功能特点

- 🔄 交互式翻转卡片设计，展示个人资料和详细信息
- 🎨 自定义背景颜色和图案
- 👤 个性化头像显示
- 💻 集成 WakaTime 编程时间统计
- 💬 每日名言引用功能
- 🔗 社交媒体链接整合
- 🛠️ 可自定义的技能展示栈
- 📱 响应式设计，适配多种设备

## 快速开始

### 前提条件

- Node.js 18.0.0 或更高版本
- npm 或 yarn 包管理器

### 安装

1. 克隆仓库

```bash
git clone https://github.com/yourusername/my-badge-card.git
cd my-badge-card
```

2. 安装依赖

```bash
npm install
# 或
yarn install
```

3. 启动开发服务器

```bash
npm run dev
# 或
yarn dev
```

4. 打开浏览器访问 http://localhost:5173

## 自定义配置

修改 `user-config.json` 文件来个性化你的数字名片：

```json
{
  "name": "你的名字",
  "email": "你的邮箱",
  "status": "你的状态",
  "blog": "博客链接",
  "github": "GitHub链接",
  "skills": [
    { "id": "skill1", "label": "技能1" },
    { "id": "skill2", "label": "技能2" }
  ],
  "bio": "简短的个人介绍",
  "quoteUrl": "名言API链接",
  "wakaTimeUrl": "WakaTime API链接",
  "twitter": "Twitter链接",
  "telegram": "Telegram链接"
}
```

> **注意**：目前API集成功能仅支持特定格式的WakaTime和引用API。在未来版本中，我们计划增强API的适配能力和支持更多数据源。详见下方"未来功能规划"章节。

## 构建生产版本

```bash
npm run build
# 或
yarn build
```

构建完成后，生产文件将会在 `dist` 目录中生成。

## 技术栈

- React
- Tailwind CSS
- Vite
- Radix UI 组件
- React Icons

## 未来功能规划

当前版本使用的API较为局限，未来计划进行以下扩展：

- 🔌 支持更多第三方API集成，如GitHub贡献统计、Stack Overflow声誉等
- 🌐 多语言支持，根据访问者地区自动切换语言
- 📊 更丰富的编程数据可视化展示
- 🔐 加密信息展示选项，保护敏感个人信息
- 🎚️ 更完善的自定义配置面板，无需修改JSON文件
- 📱 生成PWA应用，支持离线使用
- 🖼️ 更多卡片主题和样式模板选择
- 📤 一键导出为图片分享功能

如果您对这些功能有兴趣或有其他建议，欢迎提交Issue或Pull Request！

## 许可证

此项目采用 MIT 许可证 - 详情请查看 [LICENSE](LICENSE) 文件