import './App.css'
import Header from './components/Header'
import Form from './components/Form'
import Preview from './components/Preview'

export default function App() {
  

  return (
    <>
      <Header />
      <main className="cv-layout">
        <Form />
        <Preview />
      </main>
    </>
  )
}
