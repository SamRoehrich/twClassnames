'use strict';
Object.defineProperty(exports, '__esModule', {value: true});
function twClassnames(preset, custom) {
  const classes = [...custom.split(' '), ...preset.split(' ')];
  for (let i = 0; i < classes.length; i++) {
    if (classes[i].includes('-')) {
      const regex = new RegExp(classes[i].split('-')[0] + '-');
      classes.forEach((item, idx) => {
        if (idx !== i && item.match(regex)) {
          classes.splice(idx, 1);
        }
      });
    }
  }
  return classes.join(' ');
}
exports.default = twClassnames;
//# sourceMappingURL=twClassnames.js.map
