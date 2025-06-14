const mockMeetups = [
  { id: 1, title: 'react meetup', location: 'New York', date: '2025-07-23' },
  { id: 2, title: 'node night', location: 'Sydney', date: '2025-11-03' },
];

export const getAllMeetups = (req, res) => {
  res.json(mockMeetups);
};
