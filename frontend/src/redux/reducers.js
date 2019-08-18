const initState = {
  tag: ''
};

export default function reducer(state = initState, action) {
  let tags1 = [];
  if (action.type === 'ADD_TAG') {
    console.log('in reduer, here');
    tags1.push(action.tag);
    return Object.assign({}, state, {
      tag: action.tag
    });
  }
}
