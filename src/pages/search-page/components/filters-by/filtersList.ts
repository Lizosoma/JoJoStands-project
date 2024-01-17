const filters = [
  {
    text: 'Chapter',
    options: [
      'Stardust Crusaders',
      'Diamond Is Unbreakable',
      'Vento Aureo',
      'Stone Ocean',
      'Steel Ball Run',
      'Jojolion',
    ],
    filterKey: 'chapter',
  },
  {
    text: 'Ability Type',
    options: [
      'Close-Range',
      'Long-Range',
      'Automatic',
      'Range Irrelevant',
      'Materialized',
      'Psychological Assault',
      'Foresight',
      'Reconnaissance',
    ],
    filterKey: 'abilityType',
  },
  {
    text: 'Form type',
    options: [
      'Natural Humanoid',
      'Artificial Humanoid',
      'Natural Non-Humanoid',
      'Artificial Non-Humanoid',
      'Phenomenon',
    ],
    filterKey: 'formType',
  },
  {
    text: 'Tentative type',
    options: ['Colony', 'Evolved', 'Sentient', 'Shared'],
    filterKey: 'tentativeType',
  },
  {
    text: 'Battlecry',
    options: ['Exists', 'None'],
    filterKey: 'battlecry',
  },
];

export default filters;
