import { Routes, Route } from 'react-router-dom'
import Home from './app/page'
import Watch from './app/watch/page'
import News from './app/news/page'
import About from './app/about/page'
import BookTalent from './app/book-talent/page'
import Foundation from './app/Foundation/page'

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/watch" element={<Watch />} />
      <Route path="/news" element={<News />} />
      <Route path="/about" element={<About />} />
      <Route path="/book-talent" element={<BookTalent />} />
      <Route path="/Foundation" element={<Foundation />} />
    </Routes>
  )
}