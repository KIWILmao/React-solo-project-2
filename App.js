import React from 'react'
import Nav from './comps/Nav'
import Card from './comps/Card'
import data from './data'

export default function App(){
    const Cardcomp = data.map(item => 
    <Card 
        key = {item.id}
        {...item}
        />
    )
    return (
        <div>
            <Nav />
            {Cardcomp}
        </div>
    )
}