export default function description(state = [], action){
  console.log(state);
  // console.log(action);
  switch(action.type) {
    case 'GO_TO_DESCRIPTION':
      return [...state, action.product];
    default:
      return state;
  }  
}