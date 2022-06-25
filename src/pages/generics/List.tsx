import React, { SetStateAction, useEffect, useState } from 'react'
import ListTiles from './ListTiles'
import fruits from './items.json'

const ListApp = () => {
  const [items, setItems] = useState<string[]>([])
  const removeItem = (fruit: string) => {
    const itemIndex = items.findIndex( value => value === fruit)
    const newItems = items.filter( (item, key) => key !== itemIndex)
    setItems(newItems)
  }
  useEffect(() => {
    setItems(fruits)
  }, [])
  return <ListTiles items={items} onClick={(item) => removeItem(item)} />
}



export default ListApp