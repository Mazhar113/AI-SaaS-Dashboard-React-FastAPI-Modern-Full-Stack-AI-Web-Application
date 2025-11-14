import React from 'react';
import LearningPath from './LearningPath';
import LifeCoach from './LifeCoach';
import SyntheticMedia from './SyntheticMedia';
import TimeCrystal from './TimeCrystal';
export default function Dashboard() {
  return (<div className='p-5 grid grid-cols-1 md:grid-cols-2 gap-6'><LearningPath /><LifeCoach /><SyntheticMedia /><TimeCrystal /></div>);
}
