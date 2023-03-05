import { useState, useEffect } from "react"
import pic from "../img/pic.png"
import face from "../img/face.png"
import vector from "../img/Vector.svg"

import "./style.css"
function Cards() {
  const [count, setCount] = useState(() => {
    return JSON.parse(window.localStorage.getItem("count")) ?? 100500
  })
  const [invited, setInvited] = useState(() => {
    return JSON.parse(window.localStorage.getItem("invited")) ?? false
  })
  const toggle = () => {
    setInvited(!invited)
    if (!invited) {
      setCount(count + 1)
    } else {
      setCount(count - 1)
    }
  }
  useEffect(() => {
    localStorage.setItem("count", JSON.stringify(count))
    localStorage.setItem("invited", JSON.stringify(invited))
  }, [count, invited])

  return (
    <div className="thumb_cards">
      <img className="logo" src={vector} alt="images" />
      <img className="img" src={pic} alt="images" />
      <div className="thumb_img">
        <span className="band_one"></span>
        <img className="faceImg" src={face} alt="images" />
        <span className="band_two"></span>
      </div>
      <div className="description">
        <p className="txt_info">777 TWEETS</p>
        <p className="txt_info">{count.toLocaleString("ja-JP")} fOLLOWERS</p>

        <button onClick={toggle} className={"button " + (invited ? "buttonIsActive" : "button")}>
          {invited ? "Following" : "Follow"}
        </button>
      </div>
    </div>
  )
}

export default Cards
