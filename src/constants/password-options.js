export default [
  {
    val: false,
    k: 'useUppercase',
    text: 'Uppercase Letters',
    type: 'FatToggle',
    label: 'A-Z',
    eventname: 'fatToggleEvent'
  },
  {
    val: true,
    k: 'useLowercase',
    text: 'Lowercase Letters',
    type: 'FatToggle',
    label: 'a-z',
    eventname: 'fatToggleEvent'
  },
  {
    val: true,
    k: 'useNumbers',
    text: 'Numbers',
    type: 'FatToggle',
    label: '0-9',
    eventname: 'fatToggleEvent'
  },
  {
    val: false,
    k: 'useSymbols',
    text: 'Common Symbols',
    type: 'FatToggle',
    label: '!@#',
    eventname: 'fatToggleEvent'
  },
  {
    val: true,
    k: 'useGroups',
    text: 'Group characters',
    type: 'FatToggle',
    label: 'x-x',
    eventname: 'fatToggleEvent'
  },
  {
    val: 36,
    k: 'pwLength',
    text: 'Password Length',
    type: 'FatNumber',
    eventname: 'fatNumberEvent'
  }
];
