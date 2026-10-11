import { useEffect, useMemo, useRef, useState } from 'react'
import { categories, demoHTML, patterns, raw } from './patterns.js'

function copyText(text, onDone) {
  if (navigator.clipboard) navigator.clipboard.writeText(text).then(onDone)
  else {
    const input = document.createElement('textarea')
    input.value = text
    document.body.append(input)
    input.select()
    document.execCommand('copy')
    input.remove()
    onDone()
  }
}

function Demo({ pattern }) {
  const ref = useRef(null)

  useEffect(() => {
    const cards = ref.current?.querySelectorAll('.drag-card') || []
    cards.forEach((card) => {
      card.ondragstart = () => card.classList.add('dragging')
      card.ondragend = () => card.classList.remove('dragging')
      card.ondragover = (event) => {
        event.preventDefault()
        const dragged = card.parentElement.querySelector('.dragging')
        if (dragged && dragged !== card) card.parentElement.insertBefore(dragged, card)
      }
    })
    return undefined
  }, [pattern.id])

  function interact(event) {
    const demo = ref.current
    const target = event.target
    const action = target.closest('[data-action]')?.dataset.action
    if (action === 'run' || (pattern.category === 'motion' && !action)) {
      demo.classList.add('resetting')
      demo.classList.remove('run')
      void demo.offsetWidth
      demo.classList.remove('resetting')
      if (demo._animationTimer) window.clearTimeout(demo._animationTimer)
      const delay = ['crossfade', 'morph', 'shared'].includes(pattern.demo) ? 500 : 0
      demo._animationTimer = window.setTimeout(() => {
        requestAnimationFrame(() => demo.classList.add('run'))
      }, delay)
    }
    if (action === 'run' && pattern.demo === 'progress') {
      const fill = demo.querySelector('.upload-fill')
      const label = demo.querySelector('.upload p span')
      if (demo._uploadTimer) window.clearInterval(demo._uploadTimer)
      let value = 20
      fill?.getAnimations?.().forEach((animation) => animation.cancel())
      fill?.animate?.([{ width: '20%' }, { width: '100%' }], { duration: 4200, easing: 'linear', fill: 'forwards' })
      fill?.style.removeProperty('width')
      if (label) label.textContent = `${value}%`
      demo._uploadTimer = window.setInterval(() => {
        value = Math.min(100, value + 8)
        if (label) label.textContent = `${value}%`
        if (value >= 100) window.clearInterval(demo._uploadTimer)
      }, 420)
    }
    if (action === 'optimistic') {
      const status = demo.querySelector('.optimistic-status')
      demo.classList.add('optimistic-success')
      if (status) status.textContent = '前端已先顯示成功'
      window.setTimeout(() => {
        target.checked = false
        demo.classList.remove('optimistic-success')
        if (status) status.textContent = '後端失敗，已自動退回'
      }, 2000)
    }
    if (action === 'accordion') {
      const panel = target.nextElementSibling
      panel.classList.toggle('open')
      target.textContent = target.textContent.replace(panel.classList.contains('open') ? '＋' : '−', panel.classList.contains('open') ? '−' : '＋')
    }
    const anchor = target.closest('a[data-anchor]')
    if (anchor) {
      event.preventDefault()
      const destination = demo.querySelector(`[data-anchor-target="${anchor.dataset.anchor}"]`)
      destination?.scrollIntoView({ behavior: 'smooth', block: 'nearest' })
      return
    }
    if (target.classList.contains('tab-btn')) {
      demo.querySelectorAll('.tab-btn').forEach((button) => button.classList.toggle('active', button === target))
      demo.querySelector('.tab-panel').textContent = `${target.dataset.tab} PANEL`
    }
    const toggles = { drawer: '.drawer-panel', sheet: '.sheet-panel', modal: '.modal-panel', popover: '.popover-menu', mega: '.mega-panel', palette: '.palette-results', disclosure: '.advanced' }
    if (toggles[action]) demo.querySelector(toggles[action])?.classList.toggle('open')
    if (action === 'toast') {
      demo.querySelector('.toast-mini')?.classList.add('open')
      window.setTimeout(() => demo.querySelector('.toast-mini')?.classList.remove('open'), 1500)
    }
    if (action === 'retry') {
      target.textContent = 'TRY AGAIN'
    }
    if (action === 'toggle') target.classList.toggle('on')
    if (action === 'resize') demo.querySelector('.device-demo')?.classList.toggle('narrow')
  }

  function parallax(event) {
    const area = event.target.closest('[data-parallax]')
    if (!area) return
    const rect = area.getBoundingClientRect()
    const x = (event.clientX - rect.left) / rect.width - 0.5
    const y = (event.clientY - rect.top) / rect.height - 0.5
    area.style.setProperty('--pointer-sky-x', `${x * -5}px`)
    area.style.setProperty('--pointer-sky-y', `${y * -3}px`)
    area.style.setProperty('--pointer-sun-x', `${x * -8}px`)
    area.style.setProperty('--pointer-sun-y', `${y * -6}px`)
    area.style.setProperty('--pointer-back-x', `${x * -7}px`)
    area.style.setProperty('--pointer-back-y', `${y * -3}px`)
    area.style.setProperty('--pointer-mid-x', `${x * -13}px`)
    area.style.setProperty('--pointer-mid-y', `${y * -7}px`)
    area.style.setProperty('--pointer-front-x', `${x * -21}px`)
    area.style.setProperty('--pointer-front-y', `${y * -11}px`)
    area.style.setProperty('--pointer-copy-x', `${x * 11}px`)
    area.style.setProperty('--pointer-copy-y', `${y * 6}px`)
  }

  function resetParallaxPointer(event) {
    const area = event.target.closest('[data-parallax]')
    if (!area) return
    ;['sky-x', 'sky-y', 'sun-x', 'sun-y', 'back-x', 'back-y', 'mid-x', 'mid-y', 'front-x', 'front-y', 'copy-x', 'copy-y']
      .forEach((name) => area.style.setProperty(`--pointer-${name}`, '0px'))
  }

  function scrollDemo(event) {
    if (pattern.category !== 'scroll') return
    const demo = event.currentTarget
    const max = Math.max(1, demo.scrollHeight - demo.clientHeight)
    const progress = Math.min(1, demo.scrollTop / max)
    const cube = demo.querySelector('.demo-cube')
    const trigger = demo.querySelector('.fade-item')
    const parallax = demo.querySelector('.parallax-scene')
    const horizontal = demo.querySelector('.hscroll-demo')
    const indicator = demo.querySelector('.progress-demo')
    if (cube) cube.style.transform = `translateX(${progress * 230}px) rotate(${progress * 150}deg)`
    if (trigger) trigger.classList.toggle('entered', progress > 0.28)
    if (parallax) {
      parallax.style.setProperty('--scroll-sky-y', `${progress * -10}px`)
      parallax.style.setProperty('--scroll-sun-x', `${progress * 8}px`)
      parallax.style.setProperty('--scroll-sun-y', `${progress * 18}px`)
      parallax.style.setProperty('--scroll-back-y', `${progress * -24}px`)
      parallax.style.setProperty('--scroll-mid-y', `${progress * -48}px`)
      parallax.style.setProperty('--scroll-front-y', `${progress * -78}px`)
      parallax.style.setProperty('--scroll-copy-y', `${progress * -64}px`)
    }
    if (horizontal) {
      // Hold the first and last frames so vertical scrolling only drives the middle transition.
      const horizontalProgress = Math.max(0, Math.min(1, (progress - 0.14) / 0.72))
      horizontal.style.transform = `translateX(${-horizontalProgress * 66.66}%)`
    }
    if (indicator) indicator.style.width = `${Math.max(7, progress * 100)}%`
  }

  const showCallout = !['layout', 'navigation', 'style'].includes(pattern.category)

  return <div ref={ref} className={`demo category-${pattern.category} ${pattern.category === 'scroll' ? 'scroll-demo' : ''}`} aria-label={`${pattern.name} 示範`} onClick={interact} onPointerMove={parallax} onPointerLeave={resetParallaxPointer} onScroll={scrollDemo}>
    {showCallout && <span className="demo-callout">動手試試看</span>}
    <div className="demo-inner" dangerouslySetInnerHTML={{ __html: demoHTML(pattern.demo) }} />
  </div>
}

function PatternCard({ pattern, onCopy }) {
  return (
    <article className={`pattern-card category-${pattern.category} ${pattern.demo}`} id={pattern.id}>
      <div className="card-head" />
      <div className="card-title"><h3>{pattern.name}</h3><p>{pattern.description}</p>{pattern.demo === 'optimistic' && <small className="card-scenario">適用場景：任務清單、儲存設定與即時操作回饋。</small>}</div>
      <Demo pattern={pattern} />
      <div className="card-bottom">
        <span className="prompt-label">可直接告訴 AI</span>
        <div className="prompt-box"><code>{pattern.prompt}</code><button className="copy-btn" onClick={() => onCopy(pattern.prompt)}>COPY</button></div>
      </div>
    </article>
  )
}

function App() {
  const initial = raw[location.hash.slice(1)] ? location.hash.slice(1) : 'style'
  const [category, setCategory] = useState(initial)
  const [toast, setToast] = useState('')
  const [commandOpen, setCommandOpen] = useState(false)
  const [query, setQuery] = useState('')
  const [heroCompact, setHeroCompact] = useState(false)
  const [showBackTop, setShowBackTop] = useState(false)
  const [heroPrompt, setHeroPrompt] = useState('')
  const [heroPrecisePrompt, setHeroPrecisePrompt] = useState('')
  const [heroPromptPhase, setHeroPromptPhase] = useState('typing-bad')
  const dialog = useRef(null)

  const visible = useMemo(() => patterns.filter((pattern) => pattern.category === category).sort((a, b) => a.name.localeCompare(b.name, 'en', { sensitivity: 'base' })), [category])
  const commandResults = useMemo(() => patterns.filter((pattern) => `${pattern.name} ${pattern.description} ${pattern.categoryZh}`.toLowerCase().includes(query.toLowerCase())).slice(0, 9), [query])

  useEffect(() => {
    const shortcut = (event) => { if ((event.metaKey || event.ctrlKey) && event.key.toLowerCase() === 'k') { event.preventDefault(); setCommandOpen(true) } }
    const parallax = () => {
      const progress = Math.min(1, window.scrollY / 420)
      const patternsTop = document.getElementById('patterns')?.offsetTop ?? 420
      document.documentElement.style.setProperty('--hero-offset', `${progress * -74}px`)
      document.documentElement.style.setProperty('--hero-scale', `${1 - progress * 0.11}`)
      document.documentElement.style.setProperty('--hero-opacity', `${1 - progress * 0.9}`)
      setHeroCompact((current) => current === (progress > 0.55) ? current : progress > 0.55)
      setShowBackTop(window.scrollY >= Math.max(320, patternsTop - 90))
    }
    parallax()
    addEventListener('keydown', shortcut)
    addEventListener('scroll', parallax, { passive: true })
    return () => { removeEventListener('keydown', shortcut); removeEventListener('scroll', parallax) }
  }, [])
  useEffect(() => {
    const vaguePrompt = '做一個看起來很酷的頁面'
    const precisePrompt = '建立響應式雙欄產品頁，左側固定導覽；右側堆疊產品圖片，使用俐落無襯線標題與簡潔說明文字'
    let timer
    let cancelled = false
    const type = (text, index, setter, speed, done) => {
      if (cancelled) return
      if (index <= text.length) {
        setter(text.slice(0, index))
        timer = window.setTimeout(() => type(text, index + 1, setter, speed, done), speed)
      } else done()
    }
    type(vaguePrompt, 0, setHeroPrompt, 72, () => {
      setHeroPromptPhase('bad')
      timer = window.setTimeout(() => {
        setHeroPromptPhase('typing-good')
        type(precisePrompt, 0, setHeroPrecisePrompt, 58, () => setHeroPromptPhase('good'))
      }, 520)
    })
    return () => { cancelled = true; window.clearTimeout(timer) }
  }, [])
  useEffect(() => { if (commandOpen) dialog.current?.showModal(); else dialog.current?.close() }, [commandOpen])

  function notify(text = '✓ 成功複製') { setToast(text); clearTimeout(notify.timer); notify.timer = setTimeout(() => setToast(''), 2200) }
  function copy(value) { copyText(value, () => notify()) }
  function switchCategory(id) {
    setCategory(id)
    history.replaceState(null, '', `#${id}`)
    requestAnimationFrame(() => requestAnimationFrame(() => {
      const behavior = window.matchMedia('(prefers-reduced-motion: reduce)').matches ? 'auto' : 'smooth'
      document.querySelector('.library-toolbar')?.scrollIntoView({ behavior, block: 'start' })
    }))
  }
  function goPattern(pattern) { switchCategory(pattern.category); setCommandOpen(false); setTimeout(() => document.getElementById(pattern.id)?.scrollIntoView({ behavior:'smooth', block:'center' }), 30) }
  function scrollToTop() { window.scrollTo({ top: 0, behavior: 'smooth' }) }

  return <>
    <header className={`topbar ${heroCompact ? 'hero-compact' : ''}`}><a className="brand" href="#home"><span className="brand-mark">V</span><span>VIBE/UI</span><span className="header-hero-title">精準描述介面</span></a><button className="command-trigger" onClick={() => setCommandOpen(true)}><span>搜尋效果</span><kbd>⌘ K</kbd></button></header>
    <main>
      <section className="hero" id="home"><h1>想做的介面，<br /><em>要怎麼說才精準？</em></h1><p className="hero-copy"><span className={`hero-prompt-row hero-prompt-old ${heroPromptPhase !== 'typing-bad' ? 'is-invalid' : ''}`}><span className="hero-prompt-line">{heroPrompt}</span>{heroPromptPhase !== 'typing-bad' && <span className="prompt-status prompt-status-bad" aria-label="不精準">×</span>}</span>{heroPrecisePrompt && <span className="hero-prompt-row hero-prompt-new"><span className="hero-prompt-line">{heroPrecisePrompt}</span>{heroPromptPhase === 'good' && <span className="prompt-status prompt-status-good" aria-label="精準">✓</span>}</span>}</p><a className="primary-btn" href="#patterns">瀏覽效果 <span>↓</span></a></section>
      <section className="library" id="patterns"><div className="section-heading"><div><h2>選擇你想做的效果</h2><p>每張卡都是獨立的實驗場：點擊、拖曳或捲動，直接感受核心差異。</p></div></div><nav className="category-tabs" aria-label="Pattern 分類">{categories.map(([id,label,zh]) => <button key={id} className={category === id ? 'active' : ''} aria-pressed={category === id} onClick={() => switchCategory(id)}><span className="tab-en">{label}</span><span className="tab-zh">{zh}</span></button>)}</nav><div className="library-toolbar"><p>{visible.length} 個效果</p></div><div className="pattern-grid">{visible.map((pattern) => <PatternCard key={pattern.id} pattern={pattern} onCopy={copy} />)}</div></section>
    </main>
    <footer><p>Vibe UI Patterns — 從模糊感覺，到精準介面。</p></footer>
    <dialog ref={dialog} className="command-dialog" onClose={() => setCommandOpen(false)}><div className="command-head"><span>⌕</span><input type="search" value={query} onChange={(event) => setQuery(event.target.value)} placeholder="搜尋 Accordion、滾動、彈簧..." autoFocus /><kbd>ESC</kbd></div><div className="command-results">{commandResults.map((pattern) => <button className="command-item" key={pattern.id} onClick={() => goPattern(pattern)}><b>{pattern.name}</b><small>{pattern.description}</small><span>{pattern.category.toUpperCase()}</span></button>)}</div><p className="command-foot">點擊選擇　ESC 關閉</p></dialog>
    {showBackTop && <button className="back-top" onClick={scrollToTop} aria-label="回到頂部">↑ <span>回到頂部</span></button>}
    <div className={`toast ${toast ? 'show' : ''}`} role="status" aria-live="polite">{toast}</div>
  </>
}

export default App
