export function ProcessGraphic() {
  return <div className="process-graphic" aria-label="Stylized process flow diagram">
    <div className="drawing-label label-a">FEED</div><div className="drawing-label label-b">PRODUCT</div>
    <div className="pipe pipe-a"/><div className="pipe pipe-b"/><div className="pipe pipe-c"/>
    <div className="vessel"><span/><i>V-101</i></div>
    <div className="column"><span/><span/><span/><span/><i>T-201</i></div>
    <div className="pump"><span/><i>P-101</i></div>
    <div className="gauge">PI</div><div className="dot dot-a"/><div className="dot dot-b"/>
    <div className="formula">ΔP = ρgh</div>
  </div>;
}
