import { Section } from './types';

type Action = {
  type: 'UPDATE REFERENCES';
  payload: {
    ref: any;
    section: Section;
  };
};

export const positionsReducer = (state: any, action: Action) => {
  switch (action.type) {
    case 'UPDATE REFERENCES':
      const stateRefs = {
        ...state.refs,
        [`${action.payload.section}Ref`]: action.payload.ref,
      };

      return { ...state, refs: stateRefs };

    default:
      return state;
  }
};
