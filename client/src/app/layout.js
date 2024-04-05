import { Inter } from "next/font/google"
import "./globals.css"
import Navbar from "../../../client/src/app/components/navbar/Navbar"
import Footer from "../../../client/src/app/components/footer/Footer"
import ProviderComponent from "./Provider"
// import { useSelector } from 'react-redux'
// import { useEffect } from 'react'
// import { useDispatch } from 'react-redux'
// import { fetchUser } from "@/redux/slices/authSlice"

const inter = Inter({ subsets: ["latin"] })

// export const metadata = {
//   title: "Cat Meme Generator",
//   description: "An application made with ruby on rails backend and next.js and redux frontend.",
// }

export default function RootLayout({ children }) {
  // const dispatch = useDispatch()

  // // Get user data from Redux store
  // const user = useSelector((state) => state.auth.user)

  // // Fetch user data when component mounts
  // useEffect(() => {
  //   dispatch(fetchUser())
  // }, [dispatch])

  return (
    <html lang="en">
      <body className={inter.className}>
        <ProviderComponent>
          <Navbar />
          {children}
          <Footer />
        </ProviderComponent>
      </body>
    </html>
  )
}