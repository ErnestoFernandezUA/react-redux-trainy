type MoveLeftAction = { type: 'position/MOVE_LEFT' };
type MoveRightAction = { type: 'position/MOVE_RIGHT' };
type MoveUpAction = { type: 'position/MOVE_UP' };
type MoveDownAction = { type: 'position/MOVE_DOWN' };
type MoveToStart = { type: 'position/MOVE_TO_START'}

type Action = MoveLeftAction |
MoveRightAction |
MoveUpAction |
MoveDownAction |
MoveToStart;

const moveToLeft = (): MoveLeftAction => ({ type: 'position/MOVE_LEFT' });
const moveToRight = (): MoveRightAction => ({ type: 'position/MOVE_RIGHT' });
const moveToUp = (): MoveUpAction => ({ type: 'position/MOVE_UP' });
const moveToDown = (): MoveDownAction => ({ type: 'position/MOVE_DOWN' });
const moveToStart = (): MoveToStart => ({ type: 'position/MOVE_TO_START' });

export const actions = { moveToLeft, moveToRight, moveToUp, moveToDown, moveToStart }

type Position = {
  x: number;
  y: number;
}

const startPosition: Position = { x: 0, y: 0 };

const positionReducer = (
  position: Position = startPosition,
  action : Action,
): Position => {
  switch (action.type) {
    case 'position/MOVE_LEFT':
      return { ...position, x: position.x - 1 };

    case 'position/MOVE_RIGHT': 
      return { ...position, x: position.x + 1 };

    case 'position/MOVE_UP':
      return { ...position, y: position.y - 1 };

    case 'position/MOVE_DOWN':
      return { ...position, y: position.y + 1 };

    case 'position/MOVE_TO_START':
      return { ...position, x: 0, y: 0 };

    default:
      return position;
  }
};

export default positionReducer;
