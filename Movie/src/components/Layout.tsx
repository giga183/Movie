import { Outlet } from "react-router-dom"
import Footer from "./Footer"
import Header from "./Header"

const Layout = () => {
  return (
    <div>
      <Header />
      <main className='min-h-screen'>
        <Outlet />
      </main>
      <Footer />
    </div>
  )
}

export default Layout
