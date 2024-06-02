import { NavLink, Outlet } from 'react-router-dom'  // this component wrapps all the other routes, home+about are rendered in outlet

export default function RootLayout() {
  return (
    <div className="root-layout">
        <header>
            <nav>
                    <NavLink to='/'><b><h1>🏠</h1></b></NavLink>
                    <NavLink to="help"><h1><b>⏰</b></h1></NavLink>
                    <NavLink to="contact"><h1><b>💲</b></h1></NavLink>
            </nav>
            <h1>HourPay.</h1>
        </header>
        <main>
            <Outlet /> 
        </main>
    </div>
  )
}