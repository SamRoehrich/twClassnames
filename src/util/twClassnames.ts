import {duplicates, pseudo} from './constants';

export default function twClassnames(preset = '', custom = '') {
  const classes = [...new Set([...custom.split(' '), ...preset.split(' ')])];
  for (let i = 0; i < classes.length; i++) {
    if (classes[i].includes('-')) {
      const regex = new RegExp(classes[i].split('-')[0] + '-');
      classes.forEach((item, idx) => {
        if (idx !== i && item.match(regex)) {
          console.log(item);
          classes.splice(idx, 1);
        }
      });
    } else {
      if (classes.filter(item => item.match(classes[i])).length > 1) {
        if (duplicates.includes(classes[i]) && !pseudo.includes(classes[i])) {
          classes.splice(i, 1);
        }
      }
    }
  }
  return classes.join(' ').trim();
}
