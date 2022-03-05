import '../styles/App.css';
import Card from './Card'
import Navbar from './Navbar'
import data from '../data.js'

export default function App() {
  const cards = data.map(item => {
    return (
      <Card 
        key={item.id}
        item={item}
      />
    )
  })
  return (
    <div className="App">
      <Navbar />
      <section className='cards-list'>
          {cards}
      </section>
    </div>
  )
}