import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { addName, addPrice, addLıst, clearItem } from '../features/vege'
import './Page.css';
const Page = () => {
  const dispatch = useDispatch()
  const { name, price, box } = useSelector((state) => state.vegetables)


  return (
    <div className="page-container">
      <h1>ITEM LIST </h1>
      <div className="form-container">

        <input className="input-field" value={name} onChange={(e) => dispatch(addName(e.target.value))} required type="text"></input>
        <input className="input-field" value={price} onChange={(e) => dispatch(addPrice(e.target.value))} required type="number"></input>
        <button className="submit-button" onClick={() => dispatch(addLıst())}>Gönder</button>
      </div>
      {box.length > 0 && (
        <div className="list-container">
          {box.map((vets, index) => (
            <div className="list-item" key={index}>
              <ul>
                <li>
                  {vets.name} &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;  {vets.price}
                </li>
              </ul>
              <button
                className="delete-button"
                onClick={() => dispatch(clearItem(vets.id))}
              >
                ❌
              </button>
            </div>
          ))}
        </div>
      )}

    </div>
  )
}

export default Page