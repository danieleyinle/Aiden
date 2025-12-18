// src/data/demoIncidents.js

// For demo purposes, would eventually be fetched from backend API

export const demoIncidents = [
  {
    id: '1',
    type: 'robbery',
    lat: 6.5244,
    lng: 3.3792,
    timestamp: Date.now() - 15 * 60 * 1000, // 15 min ago
    description: 'Armed robbery reported near Ikeja',
    verified: true
  },
  {
    id: '2',
    type: 'roadblock',
    lat: 6.4541,
    lng: 3.3947,
    timestamp: Date.now() - 45 * 60 * 1000, // 45 min ago
    description: 'Police checkpoint causing delays',
    verified: true
  },
  {
    id: '3',
    type: 'kidnapping',
    lat: 6.5951,
    lng: 3.3406,
    timestamp: Date.now() - 2 * 60 * 60 * 1000, // 2 hours ago
    description: 'Kidnapping attempt reported',
    verified: true
  },
  {
    id: '4',
    type: 'suspicious',
    lat: 6.4698,
    lng: 3.5852,
    timestamp: Date.now() - 30 * 60 * 1000, // 30 min ago
    description: 'Suspicious movements observed',
    verified: false
  },
  {
    id: '5',
    type: 'robbery',
    lat: 6.5355,
    lng: 3.3087,
    timestamp: Date.now() - 4 * 60 * 60 * 1000, // 4 hours ago
    description: 'Phone snatching incident',
    verified: true
  },
  {
    id: '6',
    type: 'roadblock',
    lat: 6.4281,
    lng: 3.4219,
    timestamp: Date.now() - 20 * 60 * 1000, // 20 min ago
    description: 'Traffic due to accident',
    verified: true
  },
  {
    id: '7',
    type: 'robbery',
    lat: 6.5200,
    lng: 3.3700,
    timestamp: Date.now() - 10 * 60 * 1000, // 10 min ago - FRESH
    description: 'Ongoing robbery at junction',
    verified: true
  },
  {
    id: '8',
    type: 'suspicious',
    lat: 6.6018,
    lng: 3.3515,
    timestamp: Date.now() - 90 * 60 * 1000, // 90 min ago
    description: 'Unidentified group loitering',
    verified: false
  },
  {
    id: '9',
    type: 'kidnapping',
    lat: 6.4423,
    lng: 3.4668,
    timestamp: Date.now() - 5 * 60 * 60 * 1000, // 5 hours ago - OLD
    description: 'Attempted abduction',
    verified: true
  },
  {
    id: '10',
    type: 'roadblock',
    lat: 6.5189,
    lng: 3.3668,
    timestamp: Date.now() - 25 * 60 * 1000, // 25 min ago
    description: 'LASTMA checkpoint',
    verified: true
  },
  // Cluster incidents (close together for Phase 3)
  {
    id: '11',
    type: 'robbery',
    lat: 6.4350,
    lng: 3.4200,
    timestamp: Date.now() - 35 * 60 * 1000,
    description: 'Armed robbery - area unsafe',
    verified: true
  },
  {
    id: '12',
    type: 'robbery',
    lat: 6.4360,
    lng: 3.4210,
    timestamp: Date.now() - 40 * 60 * 1000,
    description: 'Another robbery nearby',
    verified: true
  },
  {
    id: '13',
    type: 'suspicious',
    lat: 6.4340,
    lng: 3.4190,
    timestamp: Date.now() - 50 * 60 * 1000,
    description: 'Suspicious activity in area',
    verified: true
  }
];