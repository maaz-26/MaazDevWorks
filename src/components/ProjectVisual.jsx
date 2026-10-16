export default function ProjectVisual({ type }) {
  return (
    <div className={`project-visual project-visual--${type}`} aria-hidden="true">
      <div className="browser-bar"><i /><i /><i /><span /></div>
      <div className="visual-layout">
        <div className="visual-sidebar"><b /><b /><b /><b /></div>
        <div className="visual-content"><span className="visual-title" /><div className="visual-cards"><i /><i /><i /></div><span className="visual-line" /><span className="visual-line short" /></div>
      </div>
    </div>
  )
}
