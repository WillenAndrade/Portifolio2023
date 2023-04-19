import { useState } from 'react'
import HtmlCss from "./HtmlCss"
import JavaScript from "./JavaScript"
import ReactDiv from "./React"

import './Features.css'

const Portifolio = () => {

  const [openHtmlCss, setOpenHtmlCss] = useState(false)
  const [openJavaScript, setOpenJavaScript] = useState(false)
  const [openReact, setOpenReact] = useState(false)

  const handleHtmlCss = () => {
        setOpenJavaScript(false)
        setOpenReact(false)
        
        setOpenHtmlCss(!openHtmlCss)
}

const handleJavaScript = () => {
        setOpenHtmlCss(false)
        setOpenReact(false)
        
        setOpenJavaScript(!openJavaScript)
}

const handleReact = () => {
        setOpenJavaScript(false)
        setOpenHtmlCss(false)

        setOpenReact(!openReact)
    }
    
    return(
        <div>
            <section className="features">
            <div className="features-html" onClick={handleHtmlCss}></div>
            <div className="features-css" onClick={handleHtmlCss}></div>
            <div className="features-javascript" onClick={handleJavaScript}></div>
            <div className="features-react" onClick={handleReact}></div>
            </section>
            
            <section className="projects">
            {openHtmlCss  && <HtmlCss />}
            {openJavaScript && <JavaScript />}
            {openReact  && <ReactDiv />}
            </section>
        </div>
    )
}
export default Portifolio