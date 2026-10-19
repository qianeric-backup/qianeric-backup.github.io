# qianeric-backup.github.io

个人作品集站点 — 渗透测试 / 安全运维方向的项目与经历记录。

基于 [astro-blog-template](https://github.com/Charca/astro-blog-template)（MIT）改造。

## 本地运行

```bash
npm install
npm run dev      # http://localhost:4321
npm run build    # 输出到 dist/
```

## 部署

推送到 `main` 分支后由 GitHub Actions 自动构建并发布到 GitHub Pages。

## 内容维护

项目条目位于 `src/data/projects/*.md`，新增一个 Markdown 文件即可自动出现在首页与项目列表。

frontmatter 字段：`title` / `slug` / `publishDate` / `description` / `period` / `role` / `stack` / `order`。
