# Vibe Coding UI / UX Prompt Vocabulary Guide

> 目的：提供 Vibe Coding 學習者一份可直接拿來描述 UI、互動與動畫效果的精選術語表，後續可據此建立「可互動 Demo 網站」。
>
> 原則：只收錄實用、容易透過小型靜態 Demo 展示、且能有效幫助 AI 理解需求的詞彙。
>
> 術語可信度分級：
> - **Standard**：Web / CSS / WAI-ARIA 等正式標準或明確規範術語
> - **UX Pattern**：成熟且廣泛使用的 UI / UX Design Pattern
> - **Common Term**：業界與前端社群常用，但不是正式 Web 標準名稱

---

# 1. Scroll｜滾動與捲動效果

| 術語 | 類型 | 實際效果 | Vibe Coding 可以怎麼說 | Demo 建議 |
|---|---|---|---|---|
| **Scroll-driven Animation** | Standard | 動畫進度直接綁定捲動進度；往回滑時動畫也可往回 | `Create a scroll-driven animation where the progress follows the user's scroll position.` | 方塊隨頁面捲動從左移到右 |
| **Scroll-triggered Animation** | Standard | 滾動到指定位置後「觸發」一段時間型動畫；動畫本身不是跟著 scroll progress | `Trigger a fade-up animation when the section enters the viewport.` | 卡片進入 viewport 後淡入 |
| **Scroll Snap** | Standard | 使用者停止捲動後，內容自動吸附到指定位置 | `Use CSS scroll snap so each section snaps into place.` | 3 個滿版 Section 上下吸附 |
| **Parallax Scrolling** | UX / Common | 前景與背景以不同速度移動，產生視差與景深感 | `Add subtle parallax scrolling: the background should move slower than the foreground.` | 背景圖片慢、文字快 |
| **Sticky Section** | Standard + Pattern | 元素先正常捲動，到指定位置後保持黏住，直到父容器結束 | `Use a sticky section that stays at the top while its content changes.` | 左側 sticky，右側內容持續滾動 |
| **Pinned Horizontal Scroll** | Common Term | 垂直捲動頁面時固定某個 Section，將 scroll progress 轉成水平內容移動 | `Create a pinned horizontal scroll section controlled by vertical scrolling.` | 4 張卡片由右向左移動 |
| **Scrubbed Animation / Scrub Animation** | Common Term | 常見於 GSAP 等動畫工具，表示動畫播放進度與 scroll progress 緊密同步 | `Use a scrubbed scroll animation so the motion follows the scroll position instead of autoplaying.` | Scroll 50% = 動畫約 50% |
| **Scroll Progress Indicator** | Common / Pattern | 根據閱讀或捲動進度顯示百分比、進度條 | `Add a scroll progress indicator at the top of the page.` | 頂部 progress bar |

### 容易混淆

- **Scroll-triggered**：Scroll 只負責「觸發」，動畫之後自行播放。
- **Scroll-driven**：Scroll 本身就是動畫 timeline。
- **Scrub**：常用來描述「動畫進度貼著 scroll progress 移動」，是動畫工具圈常用術語，不是正式 CSS 名稱。
- **Pinned Horizontal Scroll**：很好用的 Prompt 描述，但不是正式標準名稱；通常由 `position: sticky` + scroll progress + transform 實現。

---

# 2. Layout｜版面與資訊排列

| 術語 | 類型 | 實際效果 | Vibe Coding 可以怎麼說 | Demo 建議 |
|---|---|---|---|---|
| **CSS Grid Layout** | Standard | 二維 Rows + Columns 的版面系統 | `Use CSS Grid for a responsive 3-column card layout.` | 3 → 2 → 1 欄 RWD |
| **Flexbox Layout** | Standard | 一維 Row / Column 排列與對齊 | `Use Flexbox to align the actions horizontally with space between.` | Toolbar 對齊 |
| **Two-column Layout** | Common Pattern | 左右兩欄內容配置 | `Use a two-column layout with navigation on the left and content on the right.` | Sidebar + Content |
| **Split Layout / Split Screen** | Common Pattern | 畫面切成兩個主要視覺區域，例如圖片與文字 | `Create a split-screen hero with content on the left and visual on the right.` | Hero 50/50 |
| **Sticky Sidebar** | Pattern | Sidebar 隨頁面移動後固定，主要內容持續捲動 | `Use a sticky sidebar while the main content scrolls.` | 文件目錄 |
| **Master–Detail Layout** | UX Pattern | 一區顯示項目列表，另一區顯示目前選中項目的詳細內容 | `Use a master-detail layout for the resource browser.` | Mail / File Browser |
| **Masonry Layout** | Established Term | 多欄排列但各項目高度不同，形成類 Pinterest 排列 | `Use a masonry layout for cards with different heights.` | 不同高度圖片卡 |
| **Bento Grid** | Common Term | 不同大小卡片組成的模組化 Grid，常用於產品功能展示 | `Use a bento-style grid with mixed card sizes for the feature overview.` | 1x1、2x1、2x2 卡片 |

### 使用提醒

- **Grid / Flexbox** 是實作層級術語。
- **Two-column / Split / Master–Detail / Bento** 是描述「想要的版面 Pattern」。
- 對 AI 最有效的方式通常是 **Pattern + 結構限制**，例如：
  - `Use a master-detail layout. Keep the list at 320px and let the detail panel fill the remaining space.`

---

# 3. Motion｜動畫與轉場

| 術語 | 類型 | 實際效果 | Vibe Coding 可以怎麼說 | Demo 建議 |
|---|---|---|---|---|
| **Fade In / Fade Out** | Established Term | 透明度漸變 | `Fade the dialog in when it opens.` | opacity 0 → 1 |
| **Fade Up** | Common Term | 淡入同時輕微往上移動 | `Use a subtle fade-up entrance animation.` | translateY + opacity |
| **Slide In / Slide Out** | Established Term | 元素從某方向滑入或滑出 | `Slide the drawer in from the right.` | 側邊 Panel |
| **Staggered Animation** | Established Term | 一組元素依序延遲出現，而非同時播放 | `Reveal the cards with a staggered animation.` | 5 張卡片依序出現 |
| **Spring Animation** | Established Motion Term | 模擬彈簧，有 overshoot / rebound 的自然動態 | `Use a subtle spring animation when the card expands.` | 卡片展開帶回彈 |
| **Crossfade** | Established Term | A 淡出，同時 B 淡入 | `Crossfade between the two product images.` | 兩張圖切換 |
| **Morph / Morphing Transition** | Established Motion Term | 一個形狀或視覺狀態平滑變成另一個 | `Morph the play icon into a pause icon.` | Icon 形狀轉換 |
| **View Transition / Shared Element Transition** | Standard / Established Pattern | 頁面或狀態切換時維持視覺連續性，共享元素平滑移動至新位置 | `Use a shared-element-style transition when opening the card detail.` | Card → Detail Page |

---

# 4. Interaction｜元件與操作模式

| 術語 | 類型 | 實際效果 | Vibe Coding 可以怎麼說 | Demo 建議 |
|---|---|---|---|---|
| **Accordion** | UX / ARIA Pattern | 點擊標題展開或收合對應內容 | `Use an accordion for the FAQ section.` | FAQ |
| **Tabs / Tabbed Interface** | UX / ARIA Pattern | 一組 Tab 控制同一區域中的不同 Panel | `Use tabs to switch between Overview, Activity, and Settings.` | 三個 Panel |
| **Drawer / Drawer Menu** | UX Pattern | 從畫面邊緣滑出的暫時性 Panel | `Open filters in a right-side drawer.` | Filter Drawer |
| **Bottom Sheet** | UX Pattern | 從畫面底部出現的操作或資訊區域，常見於 Mobile | `Use a bottom sheet for mobile actions.` | Mobile Action Sheet |
| **Dialog / Modal Dialog** | UX / ARIA Pattern | 疊在目前內容上方，要求使用者集中處理一段資訊或操作 | `Open the confirmation inside a modal dialog.` | Delete confirmation |
| **Tooltip** | UX Pattern | Hover / Focus 時顯示簡短補充說明 | `Show a tooltip when the user hovers or focuses the icon.` | Icon 說明 |
| **Popover** | UX Pattern | 與觸發元素相關的小型浮動內容，通常可包含互動元件 | `Open a popover with quick settings.` | User menu |
| **Drag and Drop** | Established Interaction | 直接拖曳物件進行移動、上傳或排序 | `Allow users to reorder the cards with drag and drop.` | Kanban 排序 |

---

# 5. Navigation｜導覽模式

| 術語 | 類型 | 實際效果 | Vibe Coding 可以怎麼說 | Demo 建議 |
|---|---|---|---|---|
| **Sidebar Navigation** | UX Pattern | 使用側邊區域作為主要導覽 | `Use persistent sidebar navigation on desktop.` | Dashboard |
| **Breadcrumb** | UX / ARIA Pattern | 顯示目前頁面在網站階層中的位置 | `Add breadcrumbs above the page title.` | Home / Projects / Detail |
| **Anchor Link / In-page Navigation** | Web / UX Pattern | 點擊後跳到同一頁面的指定 Section | `Add in-page navigation using anchor links.` | Documentation |
| **Navigation Bar / Navbar** | Established Term | 通常位於頁面上方的主要導覽列 | `Use a sticky top navigation bar.` | Website Header |
| **Mega Menu** | UX Pattern | 大型展開式導覽，將大量頁面依群組呈現 | `Use a mega menu for the product navigation.` | Products Categories |
| **Command Palette** | Common Application Pattern | 透過搜尋快速尋找命令、頁面與操作，常見 `Cmd/Ctrl + K` | `Add a command palette opened with Cmd/Ctrl + K.` | VS Code / SaaS style |

---

# 6. Loading & Feedback｜載入與狀態回饋

| 術語 | 類型 | 實際效果 | Vibe Coding 可以怎麼說 | Demo 建議 |
|---|---|---|---|---|
| **Skeleton Screen** | UX Pattern | 用近似最終版面的 Placeholder 表示內容正在載入 | `Show a skeleton screen while the page data is loading.` | Skeleton → Content |
| **Loading Spinner / Activity Indicator** | UX Pattern | 表示系統正在處理，但通常不表示完成比例 | `Show a loading spinner for short background operations.` | Button loading |
| **Progress Bar / Progress Indicator** | UX Pattern | 表示任務目前完成進度 | `Show a determinate progress bar during file upload.` | 0 → 100% |
| **Empty State** | UX Pattern | 沒有內容或尚未建立資料時的介面 | `Design an empty state with a clear create action.` | No projects |
| **Error State** | UX Pattern | 載入或操作失敗時呈現錯誤與下一步 | `Show an error state with a retry action.` | API Error |
| **Toast / Snackbar** | UX Pattern | 短暫顯示操作結果或系統狀態，不阻斷主要流程 | `Show a success toast after saving.` | Save → Toast |
| **Optimistic UI** | Application Pattern | 使用者操作後先更新畫面，再等待 Server 確認；失敗時回復或提示 | `Use optimistic UI when toggling the todo status.` | Toggle immediate update |

### 使用提醒

`Skeleton Screen` 不等同任何灰色 Loading Placeholder。較嚴謹的用法是：它會模擬即將載入內容的結構，讓使用者預先理解版面。

---

# 7. Forms & Input｜表單與輸入流程

| 術語 | 類型 | 實際效果 | Vibe Coding 可以怎麼說 | Demo 建議 |
|---|---|---|---|---|
| **Multi-step Form** | UX Pattern | 將大型表單拆成多個步驟 | `Split the onboarding form into three steps.` | Step 1 → 2 → 3 |
| **Wizard** | UX Pattern | 帶有明確順序與導引的多步驟任務流程 | `Create a step-by-step setup wizard.` | Service creation |
| **Inline Validation** | UX Pattern | 在欄位附近即時顯示 Validation 狀態或錯誤 | `Show inline validation below each field.` | Email validation |
| **Autocomplete** | UX / ARIA Pattern | 根據目前輸入提供候選值或自動補全 | `Add autocomplete suggestions while the user types.` | Repository selector |
| **Combobox** | UX / ARIA Pattern | Input 搭配 Popup 選項集合；可為 editable 或 select-only | `Use an editable combobox with filtered suggestions.` | Search + select |
| **Progressive Disclosure** | UX Principle / Pattern | 先顯示最必要的選項，需要時才揭露進階設定 | `Hide advanced options behind progressive disclosure.` | Advanced Settings |

---

# 8. Responsive Design｜響應式設計

| 術語 | 類型 | 實際效果 | Vibe Coding 可以怎麼說 | Demo 建議 |
|---|---|---|---|---|
| **Responsive Web Design (RWD)** | Established Web Term | Layout 根據 viewport / device 條件調整 | `Make the page responsive across desktop, tablet, and mobile.` | Resize 預覽 |
| **Breakpoint** | Established Term | 版面在特定條件下切換配置的臨界點 | `Collapse the sidebar below the tablet breakpoint.` | Sidebar → Drawer |
| **Mobile-first** | Established Approach | 先建立小螢幕版面，再透過條件擴展至較大 viewport | `Use a mobile-first responsive approach.` | 1 → 2 → 4 columns |
| **Fluid Layout** | Established Term | 使用相對或彈性尺寸，讓 Layout 隨可用空間連續變化 | `Use a fluid layout instead of fixed page widths.` | Container resize |
| **Responsive Grid** | Common / Established | Grid 欄數與尺寸會依可用空間調整 | `Use a responsive grid: 1 column mobile, 2 tablet, 4 desktop.` | Cards responsive |

---

# 9. Visual Style｜視覺風格關鍵字

> 這些詞主要是「視覺方向描述」，不是 Web 標準。單獨丟 Style 名稱給 AI 容易產生歧義，建議後面補 2–3 個具體特徵。

| 術語 | 類型 | 大致特徵 | 建議 Prompt |
|---|---|---|---|
| **Minimal / Minimalist UI** | Common Design Term | 留白、低視覺噪音、少裝飾 | `Use a minimal UI with generous whitespace, subtle borders, and restrained decoration.` |
| **Bento-style UI** | Common Design Term | 不同尺寸卡片拼接、資訊模組化 | `Use a bento-style feature grid with mixed card sizes and clear hierarchy.` |
| **Glassmorphism** | Common Design Term | 半透明表面、背景模糊、玻璃質感 | `Use restrained glassmorphism with translucent surfaces and subtle backdrop blur.` |
| **Neumorphism** | Common Design Term | 低對比背景搭配內外陰影，呈現凸起／凹陷 | `Use subtle neumorphic controls, but keep text contrast accessible.` |
| **Editorial Layout** | Common Design Term | 大型 Typography、強烈視覺層級、類雜誌排版 | `Use an editorial layout with oversized typography and generous whitespace.` |

---

# 10. 最推薦 Vibe Coder 先掌握的 20 個詞

如果網站首頁只想先呈現最有價值的一組，建議優先收錄：

1. Scroll-driven Animation
2. Scroll-triggered Animation
3. Scroll Snap
4. Parallax Scrolling
5. Sticky Section
6. Pinned Horizontal Scroll
7. CSS Grid
8. Bento Grid
9. Master–Detail Layout
10. Sticky Sidebar
11. Staggered Animation
12. Spring Animation
13. Shared Element / View Transition
14. Accordion
15. Drawer
16. Command Palette
17. Skeleton Screen
18. Toast / Snackbar
19. Wizard
20. Progressive Disclosure

---

# 11. 建議網站資訊架構

```text
Vibe UI Patterns
│
├── Scroll
│   ├── Scroll-driven Animation
│   ├── Parallax
│   ├── Scroll Snap
│   └── Pinned Horizontal Scroll
│
├── Layout
│   ├── Grid
│   ├── Bento
│   ├── Master–Detail
│   └── Sticky Sidebar
│
├── Motion
├── Interaction
├── Navigation
├── Loading & Feedback
├── Forms & Input
├── Responsive
└── Visual Style
```

每個 Pattern Card 建議固定提供：

```text
┌─────────────────────────────────────┐
│ Parallax Scrolling                  │
│ Scroll · Common UX Pattern          │
│                                     │
│ [ Interactive Demo ]                │
│                                     │
│ 前景與背景使用不同捲動速度，        │
│ 產生空間與景深感。                  │
│                                     │
│ Prompt                              │
│ Add subtle parallax scrolling...    │
│                              [Copy]  │
│                                     │
│ Similar: Scroll-driven Animation    │
└─────────────────────────────────────┘
```

每個 Demo 至少呈現：

- **名稱**
- **分類**
- **實際效果**
- **可操作動畫 / Mini Demo**
- **建議 Prompt**
- **容易混淆的相似術語**
- **是否屬於正式標準或業界慣用語**

---

# 12. 給後續 AI 生成網站的重要限制

建立這個網站時：

1. 不要把所有詞都宣稱為正式 Web 標準。
2. UI 上應區分 `Standard`、`UX Pattern`、`Common Term`。
3. 每個 Pattern 必須有真正可操作或可播放的 Demo，而不是只有文字描述。
4. Demo 保持簡單，只展示該 Pattern 的核心差異。
5. 優先使用原生 HTML / CSS / JavaScript 展示概念，除非特定效果需要動畫 Library。
6. 使用者應可以直接複製推薦 Prompt。
7. 相近概念應提供 Comparison，例如：
   - Scroll-triggered vs Scroll-driven
   - Accordion vs Tabs
   - Drawer vs Modal
   - Skeleton vs Spinner vs Progress Bar
8. 所有動畫需尊重 `prefers-reduced-motion`。
9. Demo 的目標是幫助 Vibe Coder「知道這個效果叫什麼，並能精準告訴 AI」，而不是教完整前端實作。

---

# 13. 術語驗證備註

本清單整理時優先參考以下權威來源的定義：

- MDN Web Docs
  - CSS Scroll-driven Animations
  - CSS Scroll-triggered Animations
  - CSS Scroll Snap
  - CSS Positioning / `position: sticky`
  - CSS Grid Layout
- W3C WAI-ARIA Authoring Practices Guide
  - Accordion
  - Tabs
  - Breadcrumb
  - Combobox / Autocomplete
- Nielsen Norman Group
  - UI Elements Glossary
  - Skeleton Screens
  - Bottom Sheets
  - Animation / Motion UX guidance
- Adobe Spectrum Design System
  - Tabs
  - Breadcrumbs
- web.dev
  - View Transitions and modern web UI guidance

其中以下名稱特別標記為 **Common Term**，避免誤解為正式規格：

- Pinned Horizontal Scroll
- Scrub Animation
- Bento Grid / Bento-style UI
- Fade Up
- Command Palette
- Glassmorphism
- Neumorphism

它們仍然是非常實用的 AI Prompt Vocabulary，但應理解為「社群／設計業界常用描述詞」，而不是 Web Platform API 或 W3C Pattern 名稱。
