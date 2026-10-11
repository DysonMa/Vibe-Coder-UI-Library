const categories = [
  ['style','Visual Style','視覺'],['layout','Layout','版面'],['navigation','Navigation','導覽'],
  ['scroll','Scroll','滾動'],['motion','Motion','動態'],['interaction','Interaction','互動'],
  ['forms','Form & Input','表單'],['feedback','Loading & Feedback','回饋'],['responsive','Responsive','響應式']
];

const raw = {
scroll:[
['Scroll-driven Animation','standard','動畫進度直接綁定捲動位置，往回滑也會倒轉。',"Create a scroll-driven animation where the progress follows the user's scroll position.",'scroll-driven'],
['Scroll-triggered Animation','standard','元素進入視窗時觸發一次時間型動畫。','Trigger a fade-up animation when the section enters the viewport.','scroll-triggered'],
['Scroll Snap','standard','停止捲動後，內容自動吸附到最接近的位置。','Use CSS scroll snap so each section snaps into place.','scroll-snap'],
['Parallax Scrolling','common','前景與背景以不同速度移動，創造景深感。','Add subtle parallax scrolling: the background should move slower than the foreground.','parallax'],
['Sticky Section','standard','元素捲到指定位置後黏住，直到父容器結束。','Use a sticky section that stays at the top while its content changes.','sticky-section'],
['Pinned Horizontal Scroll','common','用垂直捲動進度，控制固定區塊中的水平位移。','Create a pinned horizontal scroll section controlled by vertical scrolling.','pinned-horizontal'],
['Scroll Progress Indicator','common','以進度條或百分比呈現頁面閱讀位置。','Add a scroll progress indicator at the top of the page.','scroll-progress']],
layout:[
['CSS Grid Layout','standard','用 Rows 與 Columns 控制二維版面。','Use CSS Grid for a responsive 3-column card layout.','grid'],
['Flexbox Layout','standard','沿單一方向排列、對齊與分配空間。','Use Flexbox to align the actions horizontally with space between.','flex'],
['Two-column Layout','common','以左右兩欄配置導覽與主要內容。','Use a two-column layout with navigation on the left and content on the right.','two-column'],
['Split Layout / Split Screen','common','畫面切成兩個同等重要的視覺區域。','Create a split-screen hero with content on the left and visual on the right.','split'],
['Sticky Sidebar','ux','側欄保持可見，主內容持續捲動。','Use a sticky sidebar while the main content scrolls.','sticky-sidebar'],
['Master–Detail Layout','ux','一側選項目，另一側即時顯示詳細內容。','Use a master-detail layout for the resource browser.','master-detail'],
['Masonry Layout','common','多欄排列不同高度項目，像砌磚般填補空隙。','Use a masonry layout for cards with different heights.','masonry'],
['Bento Grid','common','以不同大小卡片組成模組化資訊層級。','Use a bento-style grid with mixed card sizes for the feature overview.','bento']],
motion:[
['Fade In / Fade Out','common','只改變透明度，讓元素溫和出現或消失。','Fade the dialog in when it opens.','fade'],
['Fade Up','common','淡入同時從下方輕微上移。','Use a subtle fade-up entrance animation.','fadeup'],
['Slide In / Slide Out','common','元素從指定方向滑入或滑出。','Slide the drawer in from the right.','slide'],
['Staggered Animation','common','一組元素依序延遲出現，建立節奏。','Reveal the cards with a staggered animation.','stagger'],
['Spring Animation','common','以 overshoot 和 rebound 模擬自然彈簧。','Use a subtle spring animation when the card expands.','spring'],
['Crossfade','common','A 淡出時 B 同時淡入，平滑交接。','Crossfade between the two product images.','crossfade'],
['Morph / Morphing Transition','common','一個形狀或視覺狀態平滑變成另一個。','Morph the play icon into a pause icon.','morph'],
['View / Shared Element Transition','standard','讓共享元素在狀態或頁面之間連續移動。','Use a shared-element-style transition when opening the card detail.','shared'],
['Typewriter Text','common','逐字顯示文字，適合標題、狀態或引導訊息。','Animate the headline with a typewriter text effect.','typewriter']],
interaction:[
['Accordion','ux','點擊標題，展開或收合相對應內容。','Use an accordion for the FAQ section.','accordion'],
['Tabs / Tabbed Interface','ux','一組分頁控制同一區域中的不同內容。','Use tabs to switch between Overview, Activity, and Settings.','tabs'],
['Drawer / Drawer Menu','ux','從畫面邊緣滑入的暫時性面板。','Open filters in a right-side drawer.','drawer'],
['Bottom Sheet','ux','從畫面底部出現的操作面板，常見於手機。','Use a bottom sheet for mobile actions.','bottom-sheet'],
['Dialog / Modal Dialog','ux','覆蓋目前內容，要求使用者集中處理。','Open the confirmation inside a modal dialog.','modal'],
['Tooltip','ux','Hover 或 Focus 時顯示簡短補充說明。','Show a tooltip when the user hovers or focuses the icon.','tooltip'],
['Popover','ux','與觸發元素相連、且可以互動的小型浮層。','Open a popover with quick settings.','popover'],
['Drag and Drop','common','拖曳物件來移動、上傳或重新排序。','Allow users to reorder the cards with drag and drop.','drag'],
['Checkbox','common','讓使用者從多個選項中獨立勾選。','Add a checkbox for accepting the terms.','checkbox'],
['Radio Button','common','讓使用者在互斥選項中選擇一個。','Use radio buttons for the preferred delivery method.','radio'],
['Button States','common','用 Hover、Pressed、Disabled 表達按鈕狀態。','Design clear hover, pressed, and disabled button states.','button-states'],
['Toggle Switch','common','立即切換一個設定或功能的開關。','Add a toggle switch for notifications.','toggle-switch']],
navigation:[
['Sidebar Navigation','ux','以持續可見的側邊區域作為主要導覽。','Use persistent sidebar navigation on desktop.','sidebar-nav'],
['Breadcrumb','ux','顯示目前頁面在網站階層中的位置。','Add breadcrumbs above the page title.','breadcrumb'],
['Anchor Link / In-page Navigation','ux','點擊後跳到同頁指定段落。','Add in-page navigation using anchor links.','anchor'],
['Navigation Bar / Navbar','common','通常位於上方的全站主要導覽列。','Use a sticky top navigation bar.','navbar'],
['Mega Menu','ux','以大型展開面板分組大量導覽項目。','Use a mega menu for the product navigation.','mega'],
['Command Palette','common','用搜尋快速前往頁面或執行命令。','Add a command palette opened with Cmd/Ctrl + K.','palette']],
feedback:[
['Skeleton Screen','ux','用近似最終版面的骨架預告內容結構。','Show a skeleton screen while the page data is loading.','skeleton'],
['Loading Spinner','ux','表示系統正在處理，但不承諾完成比例。','Show a loading spinner for short background operations.','spinner'],
['Progress Bar','ux','明確顯示一項任務已完成的百分比。','Show a determinate progress bar during file upload.','progress'],
['Empty State','ux','沒有內容時，解釋現況並提供下一步。','Design an empty state with a clear create action.','empty'],
['Error State','ux','說明操作失敗，並提供恢復或重試方式。','Show an error state with a retry action.','error'],
['Toast / Snackbar','ux','短暫顯示操作結果，不中斷主要流程。','Show a success toast after saving.','toast'],
['Optimistic UI','common','先更新畫面再等待伺服器確認，失敗時回復。','Use optimistic UI when toggling the todo status.','optimistic']],
forms:[
['Multi-step Form','ux','把大型表單拆成數個較容易完成的步驟。','Split the onboarding form into three steps.','multistep'],
['Wizard','ux','有明確順序、說明和導引的多步驟任務。','Create a step-by-step setup wizard.','wizard'],
['Inline Validation','ux','在欄位附近即時呈現正確或錯誤狀態。','Show inline validation below each field.','validation'],
['Autocomplete','ux','輸入時提供符合目前文字的候選值。','Add autocomplete suggestions while the user types.','autocomplete'],
['Combobox','ux','輸入框搭配可篩選或選取的彈出選項。','Use an editable combobox with filtered suggestions.','combobox'],
['Progressive Disclosure','ux','先顯示必要選項，需要時才揭露進階設定。','Hide advanced options behind progressive disclosure.','disclosure']],
responsive:[
['Responsive Web Design','common','版面依 viewport 與裝置條件重新配置。','Make the page responsive across desktop, tablet, and mobile.','rwd'],
['Breakpoint','common','版面在特定寬度條件下切換配置。','Collapse the sidebar below the tablet breakpoint.','breakpoint'],
['Mobile-first','common','先設計小螢幕，再向較大尺寸逐步增強。','Use a mobile-first responsive approach.','mobile-first'],
['Fluid Layout','common','使用彈性尺寸，讓版面隨空間連續改變。','Use a fluid layout instead of fixed page widths.','fluid'],
['Responsive Grid','common','依可用寬度自動改變欄數與卡片尺寸。','Use a responsive grid: 1 column mobile, 2 tablet, 4 desktop.','responsive-grid']],
style:[
['Minimal / Minimalist UI','common','大量留白、低噪音、少裝飾。','Use a minimal UI with generous whitespace, subtle borders, and restrained decoration.','minimal'],
['Bento-style UI','common','混合卡片尺寸，以模組化區塊建立層級。','Use a bento-style feature grid with mixed card sizes and clear hierarchy.','bento-style'],
['Glassmorphism','common','半透明表面、背景模糊與細微亮邊。','Use restrained glassmorphism with translucent surfaces and subtle backdrop blur.','glass'],
['Neumorphism','common','用低對比內外陰影營造凸起與凹陷。','Use subtle neumorphic controls, but keep text contrast accessible.','neu'],
['Editorial Layout','common','大型字體、強烈層級與雜誌式留白。','Use an editorial layout with oversized typography and generous whitespace.','editorial']]
};

const similar = {
 'scroll-driven':'Scroll-triggered · Scrubbed Animation','scroll-triggered':'Scroll-driven Animation','scrub':'Scroll-driven Animation','pinned-horizontal':'Sticky Section',
 grid:'Flexbox · Responsive Grid',flex:'CSS Grid Layout',split:'Two-column Layout','two-column':'Split Screen','master-detail':'Two-column Layout',
 fade:'Crossfade · Fade Up',fadeup:'Fade In',drawer:'Modal · Bottom Sheet','bottom-sheet':'Drawer','modal':'Drawer · Popover',tooltip:'Popover',popover:'Tooltip',
 skeleton:'Spinner · Progress Bar',spinner:'Skeleton · Progress Bar',progress:'Spinner',autocomplete:'Combobox',combobox:'Autocomplete',rwd:'Breakpoint · Fluid Layout'
};

const patterns = categories.flatMap(([id,label,zh]) => raw[id].map((x,i)=>({category:id,categoryLabel:label,categoryZh:zh,index:i+1,name:x[0],type:x[1],description:x[2],prompt:x[3],demo:x[4],id:`${id}-${x[4]}`})));
const typeLabel={standard:'STANDARD',ux:'UX PATTERN',common:'COMMON TERM'};
let currentCategory='scroll';

function demoHTML(key){
 const map={
  'scroll-driven':`<div class="scroll-page scroll-driven-page"><div class="scroll-note">向下捲動，方塊會跟著進度移動</div><div class="demo-track"><i class="demo-cube"></i></div></div>`,
  'scroll-triggered':`<div class="scroll-page scroll-trigger-page"><div class="scroll-note">向下捲動，進入畫面時才觸發</div><div class="fade-item">我被觸發了</div></div>`,
  'scroll-snap':`<span class="mini-label">像滑 Reels 一樣往下滑</span><div class="snap-demo"><div><small>REEL 01</small><strong>每次停在一個畫面</strong></div><div><small>REEL 02</small><strong>滑過去就吸附</strong></div><div><small>REEL 03</small><strong>滿版才有感</strong></div></div>`,
  parallax:`<div class="scroll-page parallax-page"><div class="parallax-scene" data-parallax aria-label="捲動展示遠景、中景與前景的移動速度差異"><div class="scene-sky" aria-hidden="true"><i class="scene-cloud scene-cloud-one"></i><i class="scene-cloud scene-cloud-two"></i></div><span class="scene-sun" aria-hidden="true"></span><span class="scene-mountain scene-mountain-back" aria-hidden="true"></span><span class="scene-mountain scene-mountain-mid" aria-hidden="true"></span><span class="scene-mountain scene-mountain-front" aria-hidden="true"></span><div class="scene-copy"><small>SCROLL THROUGH THE VALLEY</small><strong>不同速度，<br>創造真實景深。</strong></div><div class="scene-depth-key" aria-hidden="true"><span><i></i>遠景慢</span><span><i></i>前景快</span></div><span class="scene-caption">在卡片內向下捲動</span></div></div>`,
  'sticky-section':`<div class="sticky-demo"><b>我會固定在這裡</b><p>主要內容繼續向下閱讀。</p><p>再向下捲動一點。</p><p>直到這個區塊結束。</p></div>`,
  'pinned-horizontal':`<div class="scroll-page horizontal-page"><div class="hscroll-viewport"><div class="hscroll-demo"><div><small>01</small><b>第一幕</b></div><div><small>02</small><b>第二幕</b></div><div><small>03</small><b>第三幕</b></div></div></div><div class="scroll-tail">垂直捲動 → 水平移動</div></div>`,
  scrub:`<div class="scrub-demo"><p>拖曳滑桿，讓方塊停在指定位置</p><input class="scrub-range" data-action="scrub" aria-label="調整動畫進度" type="range" min="0" max="100" value="25"><div class="demo-track"><i class="demo-cube" style="left:25%"></i></div><output class="scrub-value">25%</output></div>`,
  'scroll-progress':`<div class="scroll-page progress-page"><div class="progress-sticky"><div class="progress-rail"><i class="progress-demo"></i></div></div><b>閱讀進度</b><p>這個進度條會固定在上方，並跟著卡片內的閱讀位置前進。</p><span class="progress-continue">繼續往下捲動</span><div class="scroll-tail">文章結尾</div></div>`,
  grid:`<span class="mini-label">2D: ROWS + COLUMNS</span><div class="layout-grid">${'<i></i>'.repeat(6)}</div>`,
  flex:`<span class="mini-label">1D: SPACE BETWEEN</span><div class="flex-demo"><i></i><i></i><i></i></div>`,
  'two-column':`<span class="mini-label">SIDEBAR + CONTENT</span><div class="split-demo" style="grid-template-columns:35% 1fr"><i></i><i></i></div>`,
  split:`<span class="mini-label">50 / 50 VISUAL WEIGHT</span><div class="split-demo"><i></i><i></i></div>`,
  'sticky-sidebar':`<span class="mini-label">FIXED CONTEXT + FLOWING CONTENT</span><div class="nav-demo"><div class="nav-side">${'<i></i>'.repeat(4)}</div><div class="nav-main">SCROLLING CONTENT</div></div>`,
  'master-detail':`<span class="mini-label">SELECT AN ITEM</span><div class="master-demo"><div class="master-list"><button class="active">ALPHA</button><button>BETA</button><button>GAMMA</button></div><div class="master-detail-panel">ALPHA<br><br>Selected item details appear here.</div></div>`,
  masonry:`<span class="mini-label">VARIABLE HEIGHT COLUMNS</span><div class="masonry-demo">${'<i></i>'.repeat(8)}</div>`,
  bento:`<span class="mini-label">MIXED CARD SIZES</span><div class="bento-demo">${'<i></i>'.repeat(5)}</div>`,
  fade:`<div class="motion-object">FADE</div>`,fadeup:`<div class="motion-object">UP</div>`,slide:`<div class="motion-object">SLIDE</div>`,
  stagger:`<div class="stagger-row">${'<i></i>'.repeat(4)}</div>`,spring:`<div class="motion-object">SPRING</div>`,
  crossfade:`<div class="crossfade-demo"><i></i><i></i></div>`,morph:`<div class="morph-demo"></div>`,shared:`<div class="shared-canvas"><i class="shared-el"></i></div>`,typewriter:`<div class="typewriter-demo"><span class="typewriter-text">Build a clear interface.</span><i class="typewriter-caret">|</i></div>`,
  accordion:`<div class="ui-shell"><button class="accordion-btn" data-action="accordion">WHAT IS VIBE CODING?　＋</button><div class="accordion-panel">Describe intent. Let AI implement.</div><button class="accordion-btn" data-action="accordion">WHY LEARN PATTERNS?　＋</button><div class="accordion-panel">Better words, better output.</div></div>`,
  tabs:`<div class="ui-shell"><div class="tabs-row"><button class="tab-btn active" data-tab="OVERVIEW">OVERVIEW</button><button class="tab-btn" data-tab="ACTIVITY">ACTIVITY</button></div><div class="tab-panel">OVERVIEW PANEL</div></div>`,
  drawer:`<div class="overlay-stage"><span>PRODUCT LIST</span><button class="demo-trigger" data-action="drawer">OPEN FILTERS →</button><div class="drawer-panel"><strong>FILTERS</strong><label>□ Motion</label><label>□ Layout</label><button class="panel-close" data-action="drawer">CLOSE</button></div></div>`,
  'bottom-sheet':`<div class="overlay-stage"><span>SELECTED ITEM</span><button class="demo-trigger" data-action="sheet">OPEN ACTIONS ↑</button><div class="sheet-panel"><strong>ACTIONS</strong><button>SHARE</button><button>DUPLICATE</button><button class="panel-close" data-action="sheet">CLOSE</button></div></div>`,
  modal:`<div class="overlay-stage"><span>PROJECT SETTINGS</span><button class="demo-trigger danger-trigger" data-action="modal">DELETE ITEM</button><div class="modal-panel"><strong>Delete this item?</strong><p>This action cannot be undone.</p><button class="panel-close" data-action="modal">CANCEL</button></div></div>`,
  tooltip:`<div class="tooltip-wrap"><button class="demo-trigger" aria-label="Information">ⓘ HOVER / FOCUS</button><span class="tooltip-bubble">Short helpful context</span></div>`,
  popover:`<div class="popover-wrap"><button class="demo-trigger" data-action="popover">QUICK SETTINGS ▾</button><div class="popover-menu"><button>Theme</button><button>Language</button></div></div>`,
  drag:`<span class="mini-label"></span><div class="drag-zone">${[1,2,3].map(n=>`<div draggable="true" class="drag-card">0${n}</div>`).join('')}</div>`,
  checkbox:`<label class="basic-control checkbox-control"><input type="checkbox"><span class="control-box"></span><span><strong>Send me product updates</strong><small>Independent choice</small></span></label>`,
  radio:`<div class="radio-group"><label class="basic-control"><input type="radio" name="delivery" checked><span class="control-radio"></span><span>Standard delivery</span></label><label class="basic-control"><input type="radio" name="delivery"><span class="control-radio"></span><span>Express delivery</span></label></div>`,
  'button-states':`<div class="button-states"><button class="state-default">DEFAULT</button><button class="state-hover">HOVER</button><button class="state-disabled" disabled>DISABLED</button></div>`,
  'toggle-switch':`<label class="switch-control"><input type="checkbox"><span class="switch-track"><i></i></span><span>Notifications</span></label>`,
  'sidebar-nav':`<div class="nav-demo"><div class="nav-side">${'<i></i>'.repeat(4)}</div><div class="nav-main">DASHBOARD</div></div>`,
  breadcrumb:`<div class="breadcrumb-demo"><span>HOME　/　PROJECTS　/　</span><b>DETAIL</b></div>`,
  anchor:`<div class="anchor-demo"><nav class="anchor-nav"><a href="#anchor-intro" data-anchor="intro">INTRO</a><a href="#anchor-details" data-anchor="details">DETAILS</a><a href="#anchor-actions" data-anchor="actions">ACTIONS</a></nav><div class="anchor-content"><section class="anchor-target" id="anchor-intro" data-anchor-target="intro"><strong>INTRO</strong><span>Start with the intent.</span></section><section class="anchor-target" id="anchor-details" data-anchor-target="details"><strong>DETAILS</strong><span>Keep related content close.</span></section><section class="anchor-target" id="anchor-actions" data-anchor-target="actions"><strong>ACTIONS</strong><span>Finish with a clear next step.</span></section></div></div>`,
  navbar:`<div class="navbar-demo"><i></i><span>WORK　 ABOUT　 CONTACT</span></div>`,
  mega:`<div class="mega-demo"><button class="mega-trigger" data-action="mega">PRODUCTS　⌄</button><div class="mega-panel"><i></i><i></i><i></i></div></div>`,
  palette:`<div class="palette-mini"><input data-action="palette" value="Go to..." aria-label="Open command palette" readonly><div class="palette-results"><button class="active">Patterns</button><button>Compare</button><button>Playbook</button></div></div>`,
  skeleton:`<div class="skeleton"><div class="skel skel-hero"></div><div class="skel-row"><div class="skel"></div><div class="skel"></div></div><div class="skel skel-line"></div></div>`,spinner:`<div class="spinner" aria-label="Loading"></div><span class="loading-label">READY TO LOAD</span>`,
  progress:`<button class="demo-trigger" data-action="run">開始上傳</button><div class="upload"><p>UPLOADING <span>20%</span></p><div class="upload-track"><i class="upload-fill"></i></div></div>`,
  empty:`<div class="empty-state"><b>◇</b><span>NO PROJECTS YET</span><small>Start a project to see it here.</small><button>CREATE PROJECT</button></div>`,
  error:`<div class="error-state"><b>!</b><strong>Unable to load projects</strong><span>Check your connection and try again.</span><button data-action="retry">TRY AGAIN</button></div>`,
  toast:`<button class="demo-trigger" data-action="toast">SAVE CHANGES</button><div class="toast-mini">SAVED SUCCESSFULLY ✓</div>`,
  optimistic:`<label class="optimistic-toggle"><input type="checkbox" data-action="optimistic"><span class="switch-track"><i></i></span><span class="radio-copy"><strong>Ship the landing page</strong><small class="radio-description">已先更新畫面，等待伺服器確認。</small><small class="optimistic-status">尚未送出</small></span></label>`,
  multistep:`<div class="form-mini multistep-demo"><div class="steps"><i class="active">1</i><i>2</i><i>3</i></div><small>STEP 1 OF 3</small><input value="Tell us about you" readonly><button class="form-next">NEXT STEP →</button></div>`,
  wizard:`<div class="form-mini wizard-demo"><div class="wizard-steps"><i class="done">✓</i><span>Account</span><i class="active">2</i><span>Workspace</span><i>3</i><span>Review</span></div><div class="wizard-panel"><strong>Connect workspace</strong><p>Follow the guided setup one decision at a time.</p><button class="form-next">CONTINUE →</button></div></div>`,
  validation:`<div class="form-mini"><input value="not-an-email"><small>Enter a valid email address.</small></div>`,
  autocomplete:`<div class="form-mini"><input value="rea" readonly><div class="suggestions"><button>React</button><button>React Native</button></div></div>`,
  combobox:`<div class="form-mini"><input value="TypeScript　⌄" readonly><div class="suggestions"><button>TypeScript</button><button>JavaScript</button></div></div>`,
  disclosure:`<div class="disclosure"><button data-action="disclosure">ADVANCED SETTINGS ＋</button><div class="advanced">Cache duration　24h<br>Runtime　Edge</div></div>`,
  rwd:`<button class="demo-trigger" data-action="resize">切換螢幕寬度</button><div class="device-demo">${'<i></i>'.repeat(6)}</div>`,
  breakpoint:`<button class="demo-trigger" data-action="run">切換斷點</button><div class="breakpoint-demo"><aside></aside><main></main></div>`,
  'mobile-first':`<span class="mini-label">SMALL → ENHANCE</span><div style="display:flex;align-items:end;gap:10px"><div class="device-demo narrow" style="width:60px;height:100px;grid-template-columns:1fr"><i></i><i></i></div><span style="color:var(--lime)">→</span><div class="device-demo" style="width:160px;height:100px"><i></i><i></i><i></i></div></div>`,
  fluid:`<span class="mini-label">可用空間改變時跟著伸縮</span><button class="demo-trigger" data-action="run">調整寬度</button><div class="fluid-demo"></div>`,
  'responsive-grid':`<span class="mini-label">AUTO-FIT AVAILABLE SPACE</span><div class="responsive-grid-demo">${'<i></i>'.repeat(5)}</div>`,
  minimal:`<div class="style-demo style-minimal"><i></i><i style="width:35%"></i></div>`,
  'bento-style':`<div class="bento-demo">${'<i></i>'.repeat(5)}</div>`,glass:`<div class="style-demo style-glass"><i></i></div>`,
  neu:`<div class="style-demo style-neu"><i></i></div>`,editorial:`<div class="style-demo style-editorial">BIG<br>IDEAS<i>VOL. 01<br>2026</i></div>`
 };
 return map[key]||`<b>${key}</b>`;
}

function renderTabs(){
 const el=document.querySelector('#categoryTabs');
 el.innerHTML=categories.map(([id,label,zh])=>`<button class="${id===currentCategory?'active':''}" data-category="${id}">${label.toUpperCase()} <span>${zh}</span></button>`).join('');
}
function renderCards(category=currentCategory,filter=''){
 currentCategory=category;
 renderTabs();
 const list=patterns.filter(p=>(category==='all'||p.category===category)&&(`${p.name} ${p.description} ${p.prompt} ${p.categoryZh}`.toLowerCase().includes(filter.toLowerCase())));
 document.querySelector('#resultCount').textContent=`SHOWING ${list.length} PATTERNS · CLICK ANY DEMO TO INTERACT`;
 document.querySelector('#emptyResults').hidden=!!list.length;
 document.querySelector('#patternGrid').innerHTML=list.map((p,i)=>`<article class="pattern-card ${p.demo}" id="${p.id}" data-name="${p.name}">
 <div class="card-head"><span class="card-index">${p.category.toUpperCase()} / ${String(p.index).padStart(2,'0')}</span><span class="tag ${p.type}">${typeLabel[p.type]}</span></div>
 <div class="card-title"><h3>${p.name}</h3><p>${p.description}</p></div>
 <div class="demo" aria-label="${p.name} 互動展示">${demoHTML(p.demo)}</div>
 <div class="card-bottom"><span class="prompt-label">// SAY THIS TO AI</span><div class="prompt-box"><code>${p.prompt}</code><button class="copy-btn" data-copy="${encodeURIComponent(p.prompt)}">COPY</button></div>${similar[p.demo]?`<span class="similar">DON'T CONFUSE WITH　<b>${similar[p.demo]}</b></span>`:''}</div>
 </article>`).join('');
 bindDrag();
 history.replaceState(null,'',`#${category}`);
}

function showToast(text='PROMPT COPIED ✓'){const t=document.querySelector('#toast');t.textContent=text;t.classList.add('show');clearTimeout(showToast.t);showToast.t=setTimeout(()=>t.classList.remove('show'),1800)}
function copy(text){navigator.clipboard?.writeText(text).then(()=>showToast()).catch(()=>{const ta=document.createElement('textarea');ta.value=text;document.body.append(ta);ta.select();document.execCommand('copy');ta.remove();showToast()})}

if (document.querySelector('#patternGrid')) {
document.addEventListener('click',e=>{
 const cat=e.target.closest('[data-category]');if(cat){renderCards(cat.dataset.category);document.querySelector('#patterns').scrollIntoView();return}
 const cp=e.target.closest('[data-copy]');if(cp){copy(decodeURIComponent(cp.dataset.copy));return}
 const demo=e.target.closest('.demo');const action=e.target.closest('[data-action]')?.dataset.action;if(!demo)return;
 if(action==='replay'){demo.classList.remove('run');requestAnimationFrame(()=>requestAnimationFrame(()=>demo.classList.add('run')))}
 if(action==='accordion'){const panel=e.target.nextElementSibling;panel.classList.toggle('open');e.target.textContent=e.target.textContent.replace(panel.classList.contains('open')?'＋':'−',panel.classList.contains('open')?'−':'＋')}
 if(e.target.classList.contains('tab-btn')){demo.querySelectorAll('.tab-btn').forEach(b=>b.classList.toggle('active',b===e.target));demo.querySelector('.tab-panel').textContent=`${e.target.dataset.tab} PANEL`}
 if(action==='drawer')demo.querySelector('.drawer-panel').classList.toggle('open');if(action==='sheet')demo.querySelector('.sheet-panel').classList.toggle('open');if(action==='modal')demo.querySelector('.modal-panel').classList.toggle('open');
 if(action==='popover')demo.querySelector('.popover-menu').classList.toggle('open');if(action==='mega')demo.querySelector('.mega-panel').classList.toggle('open');if(action==='toast'){demo.querySelector('.toast-mini').classList.add('open');setTimeout(()=>demo.querySelector('.toast-mini')?.classList.remove('open'),1500)}
 if(action==='retry'){e.target.textContent='LOADED ✓';e.target.closest('.error-state').style.color='var(--lime)'}
 if(action==='toggle')e.target.classList.toggle('on');if(action==='disclosure')demo.querySelector('.advanced').classList.toggle('open');if(action==='resize')demo.querySelector('.device-demo').classList.toggle('narrow');
});
document.addEventListener('input',e=>{if(e.target.dataset.action==='scrub'){const cube=e.target.closest('.demo').querySelector('.demo-cube');cube.style.left=`calc(${e.target.value}% - ${e.target.value*.34}px)`}});
document.addEventListener('pointermove',e=>{const p=e.target.closest('[data-parallax]');if(p){const r=p.getBoundingClientRect(),x=(e.clientX-r.left)/r.width-.5,y=(e.clientY-r.top)/r.height-.5;p.querySelector('i').style.transform=`translate(${x*24}px,${y*12}px)`;p.querySelector('b').style.transform=`translate(${x*-15}px,${y*-10}px)`}});

function bindDrag(){document.querySelectorAll('.drag-card').forEach(card=>{card.addEventListener('dragstart',()=>card.classList.add('dragging'));card.addEventListener('dragend',()=>card.classList.remove('dragging'));card.addEventListener('dragover',e=>{e.preventDefault();const zone=card.parentElement,drag=zone.querySelector('.dragging');if(drag&&drag!==card)zone.insertBefore(drag,card)})})}

const dialog=document.querySelector('#commandDialog'),input=document.querySelector('#commandInput'),results=document.querySelector('#commandResults');let commandList=[],selected=0;
function openCommand(){dialog.showModal();input.value='';updateCommand();setTimeout(()=>input.focus(),10)}
function updateCommand(){const q=input.value.toLowerCase();commandList=patterns.filter(p=>`${p.name} ${p.description} ${p.categoryZh}`.toLowerCase().includes(q)).slice(0,9);selected=Math.min(selected,commandList.length-1);results.innerHTML=commandList.map((p,i)=>`<button class="command-item ${i===selected?'selected':''}" data-command="${p.id}"><b>${p.name}</b><small>${p.description}</small><span>${p.category.toUpperCase()}</span></button>`).join('')||'<p style="padding:20px;color:#777">沒有符合的效果</p>'}
function goPattern(p){dialog.close();renderCards(p.category);setTimeout(()=>document.getElementById(p.id)?.scrollIntoView({behavior:'smooth',block:'center'}),30)}
document.querySelector('#commandTrigger').addEventListener('click',openCommand);input.addEventListener('input',()=>{selected=0;updateCommand()});results.addEventListener('click',e=>{const item=e.target.closest('[data-command]');if(item)goPattern(patterns.find(p=>p.id===item.dataset.command))});
document.addEventListener('keydown',e=>{if((e.metaKey||e.ctrlKey)&&e.key.toLowerCase()==='k'){e.preventDefault();openCommand()}if(dialog.open&&['ArrowDown','ArrowUp','Enter'].includes(e.key)){e.preventDefault();if(e.key==='ArrowDown')selected=Math.min(selected+1,commandList.length-1);if(e.key==='ArrowUp')selected=Math.max(selected-1,0);if(e.key==='Enter'&&commandList[selected])return goPattern(commandList[selected]);updateCommand()}});
document.querySelector('#randomPattern').addEventListener('click',()=>goPattern(patterns[Math.floor(Math.random()*patterns.length)]));

function renderCompare(type='scroll'){
 const stage=document.querySelector('#compareStage');
 if(type==='scroll')stage.innerHTML=`<div class="compare-columns"><div class="compare-col"><h3>SCROLL-TRIGGERED</h3><p>Scroll 只負責觸發，之後動畫自己播完。</p><div class="scroll-simulator triggered-sim"><div class="sim-spacer">SCROLL DOWN ↓</div><div class="sim-target">TRIGGERED!</div><div class="sim-spacer"></div></div></div><div class="compare-divider"></div><div class="compare-col"><h3>SCROLL-DRIVEN</h3><p>動畫進度永遠等於 Scroll progress。</p><div class="scroll-simulator driven-sim"><div class="sim-spacer">SCROLL TO MOVE →</div><i class="driven-dot"></i><div class="sim-spacer"></div><div class="sim-spacer"></div></div></div></div>`;
 if(type==='panel')stage.innerHTML=`<div class="compare-columns"><div class="compare-col"><h3>DRAWER</h3><p>從邊緣進入，通常保留部分原畫面脈絡。</p><div class="demo" style="height:220px"><div class="overlay-demo"></div><button class="demo-trigger" data-action="drawer">OPEN DRAWER</button><div class="drawer-panel">FILTERS<br><br>□ DESIGN<br>□ CODE</div></div></div><div class="compare-divider"></div><div class="compare-col"><h3>MODAL</h3><p>置中覆蓋內容，要求集中完成當前任務。</p><div class="demo" style="height:220px"><div class="overlay-demo"></div><button class="demo-trigger" data-action="modal">OPEN MODAL</button><div class="modal-panel">CONFIRM ACTION</div></div></div></div>`;
 if(type==='loading')stage.innerHTML=`<div style="display:grid;grid-template-columns:repeat(3,1fr);gap:16px;text-align:center"><div><h3>SKELETON</h3><p style="color:var(--muted);font-size:10px">預告內容結構</p><div class="demo" style="height:220px">${demoHTML('skeleton')}</div></div><div><h3>SPINNER</h3><p style="color:var(--muted);font-size:10px">未知完成比例</p><div class="demo" style="height:220px">${demoHTML('spinner')}</div></div><div><h3>PROGRESS</h3><p style="color:var(--muted);font-size:10px">已知完成比例</p><div class="demo" style="height:220px">${demoHTML('progress')}</div></div></div>`;
}
document.querySelector('.compare-tabs').addEventListener('click',e=>{const b=e.target.closest('[data-compare]');if(!b)return;document.querySelectorAll('[data-compare]').forEach(x=>x.classList.toggle('active',x===b));renderCompare(b.dataset.compare)});
document.querySelector('#compareStage').addEventListener('scroll',()=>{},true);document.querySelector('#compareStage').addEventListener('scroll',e=>{const box=e.target;if(box.classList.contains('triggered-sim'))box.querySelector('.sim-target').classList.toggle('entered',box.scrollTop>70);if(box.classList.contains('driven-sim')){const max=box.scrollHeight-box.clientHeight,progress=box.scrollTop/max;box.querySelector('.driven-dot').style.left=`calc(12px + ${progress} * (100% - 70px))`}},true);

const pieces={};document.querySelectorAll('[data-piece]').forEach(b=>b.addEventListener('click',()=>{const line=b.closest('.builder-line'),idx=[...line.parentElement.children].indexOf(line);line.querySelectorAll('button').forEach(x=>x.classList.toggle('active',x===b));pieces[idx]=b.dataset.piece;const value=Object.keys(pieces).sort().map(k=>pieces[k]).join(' ') + (Object.keys(pieces).length?'.':'');document.querySelector('#builderOutput').textContent=value||'Select one option from each row to build your prompt.'}));document.querySelector('#copyBuilder').addEventListener('click',()=>copy(document.querySelector('#builderOutput').textContent));
window.addEventListener('scroll',()=>{const max=document.documentElement.scrollHeight-innerHeight;document.querySelector('#scrollProgress').style.width=`${scrollY/max*100}%`});

const hash=location.hash.slice(1);if(raw[hash])currentCategory=hash;renderCards(currentCategory);renderCompare();
}

export { categories, raw, patterns, typeLabel, similar, demoHTML };
