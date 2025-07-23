function numbefor9(num) {
  switch (num) {
    case 0:
      return 'zero';
    case 1:
      return 'one';
    case 2:
      return 'two';
    case 3:
      return 'three';
    case 4:
      return 'four';
    case 5:
      return 'five';
    case 6:
      return 'six';
    case 7:
      return 'seven';
    case 8:
      return 'eight';
    case 9:
      return 'nine';
    default:
      return '';
  }
}

function numbefor20(num) {
  switch (num) {
    case 10:
      return 'ten';
    case 11:
      return 'eleven';
    case 12:
      return 'twelve';
    case 13:
      return 'thirteen';
    case 14:
      return 'fourteen';
    case 15:
      return 'fifteen';
    case 16:
      return 'sixteen';
    case 17:
      return 'seventeen';
    case 18:
      return 'eighteen';
    case 19:
      return 'nineteen';
    default:
      return '';
  }
}

function numbefor99(num) {
  switch (num) {
    case 0:
      return 'zero';
    case 2:
      return 'twenty';
    case 3:
      return 'thirty';
    case 4:
      return 'forty';
    case 5:
      return 'fifty';
    case 6:
      return 'sixty';
    case 7:
      return 'seventy';
    case 8:
      return 'eighty';
    case 9:
      return 'ninety';
    default:
      return '';
  }
}

module.exports = function toReadable(number) {
  const str = number.toString();
  let result;
  if (number > 99) {
    result = `${numbefor9(+str[0])} hundred ${
      +str[1] === 1
        ? numbefor20(+str.slice(1))
        : `${numbefor99(+str[1])} ${numbefor9(+str[2])}`
    }`.replaceAll(' zero', '');
  }
  if (number >= 20 && number < 100) {
    result = `${numbefor99(+str[0])} ${numbefor9(+str[1])}`.replaceAll(
      ' zero',
      ''
    );
  }
  if (number >= 10 && number < 20) {
    result = numbefor20(number);
  }
  if (number >= 0 && number < 10) {
    result = numbefor9(number);
  }
  return result;
};
