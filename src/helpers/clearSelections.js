/**
 * Accepts an array of objects and sets the 'selected' property to false on
 * each object
 * 
 * @param {Object[]} itemList An array of objects with a selected property
 */
const clearSelections = (itemList) => {
  return itemList.map(item => {
    let newItem = {...item};
    newItem.selected = false;
    return newItem;
  });
};

export default clearSelections;