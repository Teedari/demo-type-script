import React from 'react'
type props<T> = {
  items: T[],
  onClick: (item: T) => void
}
const ListTiles = <T extends {}>({items, onClick}: props<T>) => {
  return (
    <div>
      {items?.map( (item, key) => (<div style={{padding: '1rem', marginBottom: '.7rem', backgroundColor: '#00B6ff', cursor: 'pointer'}} onClick={() => onClick(item)} key={key}>{item.toString()}</div>))}
    </div>
  )
}



export default ListTiles