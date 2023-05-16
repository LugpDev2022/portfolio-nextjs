type Action = {
  type: 'UPDATE REFERENCE' | 'UPDATE POSITION';
  payload: any;
};

export const positionsReducer = (state: any, action: Action) => {
  switch (action.type) {
    case 'UPDATE REFERENCE':
      const stateRefs = {
        ...state.refs,
        [`${action.payload.section}Ref`]: action.payload.ref,
      };

      return { ...state, refs: stateRefs };

    case 'UPDATE POSITION':
      const statePositions = {
        ...state.positions,
        [`${action.payload.section}SectionPosition`]:
          action.payload.distanceToTop,
      };

      return { ...state, positions: statePositions };

    default:
      return state;
  }
};
