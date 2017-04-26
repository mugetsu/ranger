var result, exist, set = [1, 9, 7, 11, 8];

function ranger(array, target) {
  var init = 0, s = 0, e = array.length - 1, pair = 0;
  while (init != target) {
    init = array[s] + array[e];
    if (init < target) {
      s += 1;
    } else {
      e -= 1;
    }
    if (isNaN(init)) break;
    if (init === target) return true;
  }
  return false;
}

result = ranger(set, 8);
exist = document.getElementById('exist');
exist.className = (result) ? 'true' : 'false';
exist.innerHTML = result;