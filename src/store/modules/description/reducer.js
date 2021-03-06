import produce from 'immer';

export default function description(state = [], action){
  console.log(state);
  // console.log(action);
  switch(action.type) {
    case 'ADD_DESCRIPTION':
      return produce(state, draft => {
        const productIndex = draft.findIndex(p => p.id === action.product.id);
          draft.splice(productIndex, 1)
          draft.push({
            ...action.product,
            amount: 1,
          })
        
      });
    default:
      return state;
  }  
}