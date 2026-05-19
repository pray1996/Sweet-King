# 项目协作说明

## 项目概览

这是一个参考 Magic UI 官网视觉质感搭建的个人网站项目，当前已从“Magic UI 首页复刻”逐步改造成 Wang Kai 的个人研究与作品展示网站。项目使用 Next.js App Router，整体目标是保留 Magic UI 的极简、高级、克制动效和 rainbow glow 质感，同时承载个人项目、经历、介绍和内容展示。

修改项目时要优先保持现有视觉体系，不要把界面改成普通 SaaS 模板风格，也不要在用户只要求某个 section 时顺手重构其他区域。

## 技术栈

- Next.js 15，使用 App Router。
- React 19。
- TypeScript。
- TailwindCSS v4，主要通过 `styles/globals.css` 定义 token 与主题。
- Framer Motion，用于 Testimonials 展开/收起、视频卡片等柔和动效。
- lucide-react，用于按钮、卡片、交互图标。
- Geist Sans / Geist Mono，通过 `next/font/google` 在 `app/layout.tsx` 接入。

## 目录结构

- `app/`：Next.js App Router 页面入口。
  - `app/page.tsx`：首页入口，依次渲染 Hero、Showcase、Testimonials、VideoTestimonials。
  - `app/layout.tsx`：全局布局、metadata、Geist 字体和全局样式引入。
  - `app/projects/page.tsx`：Projects 页面。
- `sections/`：首页和页面级 section 组件。
  - `hero.tsx`、`hero-actions.tsx`、`hero-badge.tsx`、`hero-tech-stack.tsx`：Hero 相关组件。
  - `showcase.tsx`、`showcase-card.tsx`：Projects / Showcase 区域。
  - `testimonials.tsx`、`tweet-card.tsx`：Twitter-like Testimonials 区域。
  - `video-testimonials.tsx`：YouTube / Video Testimonials 区域。
- `components/`：可复用基础组件。
  - `components/ui/button.tsx`：按钮 variant 和尺寸系统。
  - `components/marquee.tsx`：横向/纵向无缝滚动组件。
  - `components/tech-icon.tsx`：Hero 底部联系图标和自定义 tooltip 的基础组件。
  - `components/tech-stack.tsx`：早期技术栈相关组件，后续修改前需确认是否仍被使用。
- `lib/`：工具函数，目前主要是 `cn`，用于合并 Tailwind class。
- `hooks/`：预留 hooks 目录。
- `styles/`：全局样式和设计 token。
- `public/assets/images/projects/`：项目封面图资源。
  - `teces-cover.png`
  - `ai-markdown-cover.png`
- `public/showcase/`：早期 Showcase logo 资源。

## 当前页面结构

首页 `app/page.tsx` 当前结构：

1. `Hero`
2. `Showcase`
3. `Testimonials`
4. `VideoTestimonials`

另有 `/projects` 页面，用于展示项目卡片。

## 视觉系统

全局视觉基线主要在 `styles/globals.css` 中维护：

- 使用 OKLCH 色彩 token，包括 `background`、`foreground`、`card`、`muted`、`border`、`ring` 等。
- 支持 `.dark` 暗色模式 token。
- 定义 Magic UI 风格 rainbow 色带 token：
  - `--color-1`
  - `--color-2`
  - `--color-3`
  - `--color-4`
  - `--color-5`
- 定义 container 体系：
  - `--spacing-container: 1400px`
  - `--spacing-page-x`
  - `--spacing-page-x-lg`
- 定义 radius：
  - `--radius`
  - `--radius-sm`
  - `--radius-md`
  - `--radius-lg`
  - `--radius-xl`
- 定义 shadow：
  - `--shadow-xs`
  - `--shadow-sm`
  - `--shadow-md`
  - `--shadow-glow`
- 定义动画：
  - `rainbow`
  - `marquee`
  - `marquee-vertical`

整体风格关键词是：白底、轻边框、低饱和阴影、克制 glow、细腻 hover、较大的标题层级、紧凑但不拥挤的 spacing。

## 关键组件约定

### 按钮系统

按钮样式集中在 `components/ui/button.tsx`：

- `buttonVariants` 负责组合基础样式、variant 和 size。
- `rainbow`：黑底主按钮，带 rainbow border 和 glow，是最强 CTA。
- `rainbow-outline`：浅色背景按钮，带 rainbow border 和 glow，适合 secondary CTA。
- `soft-gradient`：用于较弱层级或实验性样式，修改前要确认当前 Hero 是否真的使用它。
- `outline`：普通 outline 按钮，常用于 badge 或低权重按钮。

如果修改 Hero CTA，通常需要同时确认：

- `sections/hero-actions.tsx` 中每个按钮使用的 variant。
- `components/ui/button.tsx` 中该 variant 的具体颜色、背景、边框、伪元素 glow。

### Marquee

`components/marquee.tsx` 控制横向/纵向无缝滚动：

- 默认 `repeat = 4`。
- 默认 `--duration: 40s`，具体区域可通过 class 覆盖。
- `pauseOnHover` 会在 hover marquee 容器时暂停滚动。
- 使用 `group/marquee` 命名 group，避免影响卡片内部 hover 效果。

### Tooltip 图标

`components/tech-icon.tsx` 用于 Hero 下方联系图标：

- 不使用浏览器原生 `title`。
- 使用自定义黑色圆角 tooltip。
- hover / focus 时提升图标透明度并显示 tooltip。
- 支持 `href`，有链接时渲染为 `<a>`，无链接时渲染为 `<button>`。

## 当前内容状态

### Hero

Hero 已改为个人网站内容：

- 主标题：`Hi, I’m Wang Kai.`
- 副标题：`Environmental researcher, AI-assisted knowledge graph explorer, and front-end design enthusiast.`
- 简介：围绕 environmental catalysis、knowledge graphs、AI-assisted productivity。
- CTA 当前围绕：
  - `View Projects`
  - `View Experience`
  - `About Me`
- Hero 下方图标 row 已从技术栈图标改成个人联系入口：
  - WeChat：显示微信号。
  - GitHub：跳转到 GitHub。
  - Email：mailto 链接。
  - Phone：tel 链接。

### Showcase / Projects

Showcase 当前已改为 Projects 语义：

- 标题：`Projects`
- 副标题：聚焦 knowledge graphs、AI tools、visual interfaces。
- 使用 `Marquee` 做横向滚动。
- 当前项目：
  - TeCES
  - AI Markdown Tool
- 项目封面位于 `public/assets/images/projects/`。
- 卡片 hover 时只影响当前卡片：当前卡片内容轻微 blur，中间出现 `View Project` 按钮，未 hover 的卡片不受影响。

### Testimonials

Testimonials 仍是 Magic UI 官网风格的 Twitter-like masonry 区域：

- 标题：`What People Are Saying on Twitter`
- 使用 CSS columns 做瀑布流。
- 默认只展示部分高度，底部渐隐。
- `Show More / Show Less` 使用 Framer Motion 做柔和展开/收起。
- TweetCard hover 时当前卡片内容轻微 blur，中间出现 `View Tweet` 按钮。

### Video Testimonials

Video Testimonials 是 Magic UI 风格的视频展示区域：

- 标题：`Featured on YouTube`
- 使用响应式 grid。
- 第一张视频卡片更大，其他卡片按不同 span 排列。
- 点击后在原位置替换为 iframe 播放。
- hover 时缩略图轻微 scale、轻微 blur，叠加黑色透明遮罩，播放按钮轻微放大。

## 开发命令

- 启动开发服务器：

```bash
npm run dev
```

- 构建：

```bash
npm run build
```

- 类型检查：

```bash
npm run typecheck
```

- 查看 Git 状态：

```bash
git status --short
```

## 协作注意事项

- 用户经常要求“只修改某个 section”，必须严格遵守范围。
- 不要在修改 Hero 时顺手改 Showcase、Testimonials、Video 或 Footer。
- 不要在修改 Showcase 时顺手改 Hero。
- 优先做局部微调，不要轻易重写整个 section。
- 保持 Magic UI 质感：克制动效、细边框、轻阴影、低饱和、柔和 hover、rainbow glow 不要过度。
- 不要把页面改成普通简历模板或普通 SaaS 风格。
- CTA 层级需要清晰：primary 最强，secondary 次之，tertiary 更克制。
- hover blur 通常控制在 `blur-[2px]` 或 `blur-sm`，不要过重。
- 动效通常控制在 200ms 到 300ms，展开/收起类大动画可以更慢更柔和。
- 如果要调整按钮颜色，先确认该按钮在 `hero-actions.tsx` 里使用的是哪个 variant，再去 `button.tsx` 修改对应 variant。
- 手动编辑代码时保持文件拆分，不要把多个 section 合成一个大文件。

## 已知注意点

- 当前部分文件中存在中文注释或特殊字符显示异常的风险，修改这些文件时要注意编码，不要扩大乱码范围。
- Git 在当前目录可能出现 `detected dubious ownership`，需要设置 safe directory：

```bash
git config --global --add safe.directory "D:/各类笔记/AiTools/Demo/codex/Sweet King v2"
```

- 当前环境可能网络受限，`git push` 失败不一定是代码问题，也可能是无法连接 GitHub。
- `next build` 在 Windows 环境下偶尔可能因 `.next/trace` 文件锁出现 EPERM，需要结合具体错误判断。
