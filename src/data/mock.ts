/**
 * Mock data for initializing the application
 */

export const mockDonations = [
  {
    id: '1',
    amount: 25,
    name: 'Sarah Johnson',
    email: 'sarah.j@example.com',
    frequency: 'one-time' as const,
    date: '2024-01-15T10:30:00Z',
    receiptNumber: 'BFG-MOCK-001',
  },
  {
    id: '2',
    amount: 50,
    name: 'Michael Chen',
    email: 'm.chen@example.com',
    frequency: 'monthly' as const,
    date: '2024-01-10T14:20:00Z',
    receiptNumber: 'BFG-MOCK-002',
  },
  {
    id: '3',
    amount: 100,
    name: 'Emily Rodriguez',
    email: 'emily.r@example.com',
    frequency: 'one-time' as const,
    date: '2024-01-05T09:15:00Z',
    receiptNumber: 'BFG-MOCK-003',
  },
];

export const mockTeamMembers = [
  {
    id: '1',
    name: 'Ama Mensah',
    role: 'Founder & Director',
    bio: 'Passionate educator with 15 years of experience in international development. Ama started Books For Ghana to bridge the education gap in rural communities.',
    image: '👩‍🏫', // Emoji placeholder for mock
  },
  {
    id: '2',
    name: 'Kwame Asante',
    role: 'Operations Manager',
    bio: 'Logistics expert dedicated to ensuring books reach their destinations safely. Kwame coordinates shipments and manages volunteer networks.',
    image: '👨‍💼',
  },
  {
    id: '3',
    name: 'Akosua Boateng',
    role: 'Community Outreach Coordinator',
    bio: 'Local liaison who works directly with schools and libraries in Ghana. Akosua ensures our programs meet community needs and values.',
    image: '👩‍💻',
  },
];

