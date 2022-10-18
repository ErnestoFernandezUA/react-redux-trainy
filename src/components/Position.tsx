import { useLayoutEffect, useRef, useState } from 'react';
import { useDispatch } from 'react-redux';
import { useAppSelector } from '../app/hooks';
import { actions as positionActions } from '../features/position';

export const Position = () => {
  const refBox = useRef(null);
  const [widthBox, setWidthBox] = useState(0);
  const [heightBox, setHeightBox] = useState(0);

  const refField = useRef(null);
  const [widthFields, setWidthFields] = useState(0);
  const [heightFields, setHeightFields] = useState(0);

  useLayoutEffect(() => {
    if (refBox.current) {
      setWidthBox(refBox.current.offsetWidth);
      setHeightBox(refBox.current.offsetHeight);
    };

    if (refField.current) {
      setWidthFields(refField.current.offsetWidth);
      setHeightFields(refField.current.offsetHeight);
    };
  }, []);

  const countCellWidth = Math.floor(widthFields / widthBox);
  const countCellHeight = Math.floor(heightFields / heightBox);

  const dispatch = useDispatch();
  const position = useAppSelector(state => state.position)

  const moveLeft = () => (position.x > 0) 
    ? dispatch(positionActions.moveToLeft())
    : null;
  const moveRight = () => (position.x < countCellWidth - 1) 
    ? dispatch(positionActions.moveToRight())
    : null;
  const moveUp = () => (position.y > 0) 
    ? dispatch(positionActions.moveToUp())
    : null;
  const moveDown = () => (position.y < countCellHeight - 1) 
    ? dispatch(positionActions.moveToDown())
    : null;
  const back = () => dispatch(positionActions.moveToStart());

  const transformValue = `translate(${position.x * 100}%, ${position.y * 100}%)`;

  return (
    <section className="position">
      <h2>Position:</h2>

      <div className="position__content">
        <div className="buttons">
          <button onClick={moveUp}>&uarr;</button>

          <div>
            <button onClick={moveLeft}>&larr;</button>
            <strong>{position.x}:{position.y}</strong>
            <button onClick={moveRight}>&rarr;</button>
          </div>

          <button onClick={moveDown}>&darr;</button>
        </div>

        <div 
          className="field" 
          ref={refField}
          style={{ width: `${countCellWidth * widthBox}px`, 
            height: `${countCellHeight * heightBox}px`
          }}
        >
          <div className="track" ref={refBox} style={{ transform: transformValue }}>
            {position.x + position.y}
          </div>

          <h2>Width: {Math.floor(widthFields / widthBox)}</h2>

          <h2>Height: {Math.floor(heightFields / heightBox)}</h2>
        </div>
        <button onClick={back}>back</button>
      </div>
    </section>
  );
};
