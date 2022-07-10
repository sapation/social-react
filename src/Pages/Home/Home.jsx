import { Main } from "../../components/Main/Main"
import Navbar from "../../components/Navbar/Navbar"
import { RightSide } from "../../components/RightSide/RightSide"
import { Sidebar } from "../../components/Sidebar/Sidebar"

import './home.css'

export const Home = () => {
  return (
    <>
        <Navbar />
        <main>
            <div className="container">
                <Sidebar />
                <Main />
                <RightSide />
            </div>
        </main>
    </>
  )
}
