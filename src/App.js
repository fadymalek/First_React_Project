import React from "react"
import Navbar from "./components/Navbar"
import Card from "./components/Card"
import Hero from "./components/Hero"
import data from "./components/data"
console.log(data)


export default function App() {
    const cards = data.map(item => {
        return (
            <Card 
                key={item.id}
                {...item}
            />
        )
    })    
    return (
        <div>
            <Navbar />
            <Hero />
            <section className="cards-list">{cards}
            </section>
        </div>
    )
}