import React, { useState } from 'react';
import { useAppSelector } from '../app/hooks';
import store from '../app/store';
import { actions as goodActions } from '../features/goods';

export const GoodsList = () => {
  const [newGood, setNewGood] = useState('');
  // const [goods, setGoods] = useState<string[]>(['Apple', 'Banana', 'Coconut']);
  const goods = useAppSelector(state => state.goods);

  const addGood = (goodToAdd: string) => store.dispatch(goodActions.add(goodToAdd));
  const removeGood = (goodToAdd: string) => store.dispatch(goodActions.take(goodToAdd));
  
  // store.dispatch(actions.add('Apple'));
  // store.dispatch(actions.add('Apple'));


  // const addGood = (goodToAdd: string) => {
  //   setGoods(current => [...current, goodToAdd]);
  // }

  // const removeGood = (goodToRemove: string) => {
  //   setGoods(current => current.filter(
  //     good => good !== goodToRemove,
  //   ));
  // };

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();

    if (!newGood) {
      return;
    }

    addGood(newGood);
    setNewGood('');
  };

  return (
    <section className="goods">
      <h2>Goods:</h2>

      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={newGood}
          onChange={e => setNewGood(e.target.value)}
        />
        <button>Add</button>
      </form>

      <ul>
        {goods.map(good => (
          <li key={good}>
            <button
              onClick={() => removeGood(good)} 
              className="delete"
            />

            {good}
          </li>
        ))}
      </ul>
    </section>
  );
};
