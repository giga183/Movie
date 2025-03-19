import { StrictMode } from "react"
import { createRoot } from "react-dom/client"
import "./index.css"
import { BrowserRouter, Routes, Route } from "react-router-dom"
import Layout from "./components/Layout"
import Home from "./pages/Home"
import ContactPage from "./pages/ContactPage"
import { QueryClientProvider, QueryClient } from "@tanstack/react-query"
import { ReactQueryDevtools } from "@tanstack/react-query-devtools"
import UpComingMovies from "./pages/UpComingMovies"
import TopRatedMovies from "./pages/TopRated"
import Movies from "./pages/Movies"

const queryClient = new QueryClient()

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <QueryClientProvider client={queryClient}>
      <ReactQueryDevtools initialIsOpen={false} />
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Layout />}>
            <Route path='home' element={<Home />} />
            <Route path='home/:id' element={<Movies />} />
            <Route path='contact' element={<ContactPage />} />
            <Route path='upcoming' element={<UpComingMovies />} />
            <Route path='top-rated/' element={<TopRatedMovies />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </QueryClientProvider>
  </StrictMode>
)
