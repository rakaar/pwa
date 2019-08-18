// export defaultconst addTags = tag => {
//   return {
//     type: 'ADD_TAGS',
//     tag
//   };
// };

export default function addTags(tag) {
  return {
    type: 'ADD_TAG',
    tag
  };
}
