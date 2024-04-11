import Content from "./Content"
import Sidebar from "./Sidebar"


const Combine = () => {
  return (
    <div>
        <div className="flex">
      <Sidebar/>
      <Content/>
      </div>

    </div>
  )
}

export default Combine
