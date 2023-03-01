import { useState } from "react"
import pic from "../img/pic.png"
import face from "../img/face.png"
import vector from "../img/Vector.svg"
import "./style.css"
function Cards() {
  const [count, setCount] = useState(100500)
  const [invited, setInvited] = useState(false)
  const toggle = () => {
    setInvited(!invited)
    if (!invited) {
      setCount(count + 1)
    } else {
      setCount(count - 1)
    }
  }

  return (
    <div className="cards">
      <img className="vector" src={vector} alt="images" />
      <img className="img" src={pic} alt="images" />
      <div className="faceDiv">
        <span className="span"></span>
        <img className="faceImg" src={face} alt="images" />
        <span className="span2"></span>
      </div>
      <div className="info">
        <p className="txt">777 TWEETS</p>
        <p className="txt">{count} fOLLOWERS</p>

        <button onClick={toggle} className={"button " + (invited ? "buttonIsActive" : "button")}>
          {invited ? "Following" : "Follow"}
        </button>
      </div>
    </div>
  )
}

export default Cards
