/**
 * @description This function will return the boolean value aswering the question 'Is the given element currently visible in the viewport?'.
 *
 * @param {String} query The query to look for the node with.
 *
 * @author Scott Dowding <https://stackoverflow.com/users/41669/scott-dowding>
 */
const isScrolledIntoView = query => {
  const docViewTop = window.scrollY;
  const docViewBottom = docViewTop + window.innerHeight;

  const elemNode = document.querySelector(query);
  const elemTop = elemNode.getBoundingClientRect().top;
  const elemBottom = elemTop + elemNode.offsetHeight;

  return elemBottom <= docViewBottom && elemTop >= docViewTop;
};

export default isScrolledIntoView;
