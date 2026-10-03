import { useState } from 'react'

const apps = [
  {name:'Notes', icon:'N', text:'Capture ideas, tasks and quick notes.'},
  {name:'Files', icon:'F', text:'Browse recent files and project folders.'},
  {name:'Music', icon:'M', text:'A lightweight now-playing surface.'},
  {name:'Gallery', icon:'G', text:'Recent screenshots and images.'},
  {name:'Focus', icon:'◎', text:'Reduce distractions with a focus mode.'},
  {name:'Settings', icon:'S', text:'Personalize appearance and system behavior.'},
]

export default function App(){
  const [open,setOpen]=useState<string|null>(null)
  const [quick,setQuick]=useState(false)
  const [theme,setTheme]=useState<'light'|'dark'>('light')
  const current=apps.find(a=>a.name===open)

  return <main className={theme}>
    <section className="phone">
      <div className="wallpaper">
        <div className="status"><span>9:41</span><div><span>●●●</span><span>▰</span></div></div>
        <div className="date"><small>Saturday, October 4</small><h1>09:41</h1></div>
        <div className="apps">
          {apps.map(a=><button key={a.name} onClick={()=>setOpen(a.name)}><span className="icon">{a.icon}</span><small>{a.name}</small></button>)}
        </div>
        <button className="quickBtn" onClick={()=>setQuick(!quick)}>⌁</button>
        <div className="dock">
          {apps.slice(0,4).map(a=><button key={a.name} onClick={()=>setOpen(a.name)}>{a.icon}</button>)}
        </div>
        {quick && <div className="quickPanel">
          <div className="quickHeader"><strong>Control Center</strong><button onClick={()=>setQuick(false)}>×</button></div>
          <div className="tiles"><button>Wi-Fi<br/><b>Connected</b></button><button>Bluetooth<br/><b>On</b></button><button onClick={()=>setTheme(theme==='light'?'dark':'light')}>Theme<br/><b>{theme}</b></button><button>Focus<br/><b>Off</b></button></div>
        </div>}
        {current && <div className="sheet">
          <div className="sheetTop"><span className="sheetIcon">{current.icon}</span><button onClick={()=>setOpen(null)}>×</button></div>
          <h2>{current.name}</h2><p>{current.text}</p>
          <div className="mockContent"><div/><div/><div/></div>
        </div>}
      </div>
    </section>
    <section className="info">
      <span className="eyebrow">Interface prototype</span>
      <h2>Espada OS</h2>
      <p>A custom mobile operating-system concept exploring app launching, dock interactions, control center surfaces and theme switching.</p>
      <div className="features"><span>App grid</span><span>Dock</span><span>Control center</span><span>Theme switching</span></div>
    </section>
  </main>
}
