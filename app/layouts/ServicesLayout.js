import { Outlet } from "react-router-dom"

export default function Services() {
  return (
    <div className="services-layout">

      <h2>Services</h2>
        <p>Hair Cut</p>
      <Outlet />
    </div>
  )
}