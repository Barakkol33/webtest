import React from 'react';
import './PortfolioPage.css';
import Portfolio from "../components/Portfolio";
import DashboardLayout from "../examples/LayoutContainers/DashboardLayout";
import DashboardNavbar from "../examples/Navbars/DashboardNavbar";

const data = {
  'Tab1': {
    'Group 1': {
      'Test 1': [
        { parameter: 'Power Output', result: '700W' },
        { parameter: 'Heating Time', result: '5 minutes' }
      ],
      'Test 2': [
        { parameter: 'Power Output', result: '750W' },
        { parameter: 'Heating Time', result: '4.5 minutes' }
      ]
    },
    'Group 2': {
      'Test 1': [
        { parameter: 'Power Consumption', result: '1000W' },
        { parameter: 'Efficiency', result: '70%' }
      ],
      'Test 2': [
        { parameter: 'Power Consumption', result: '1050W' },
        { parameter: 'Efficiency', result: '72%' }
      ]
    }
  },
  'Tab2': {
    'Group 3': {
      'Test 1': [
        { parameter: 'Noise Level', result: '50dB' },
        { parameter: 'Vibration', result: 'Low' }
      ],
      'Test 2': [
        { parameter: 'Noise Level', result: '52dB' },
        { parameter: 'Vibration', result: 'Medium' }
      ]
    },
    'Group 4': {
      'Test 1': [
        { parameter: 'Door Seal', result: 'Good' },
        { parameter: 'Leakage', result: 'None' }
      ],
      'Test 2': [
        { parameter: 'Door Seal', result: 'Average' },
        { parameter: 'Leakage', result: 'Minimal' }
      ]
    }
  }
};

function PortfolioPage() {
  return (
       <DashboardLayout>
          <DashboardNavbar/>
    <div>
      <h1>Portfolio</h1>
      <Portfolio data={data} columnField="parameter" />
    </div>
         </ DashboardLayout>
  );
}

export default PortfolioPage;
