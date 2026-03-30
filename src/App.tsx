/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState } from 'react';
import Proposta from './components/Proposta';
import Framework from './components/Framework';

export default function App() {
  const [activeTab, setActiveTab] = useState('proposta');

  return (
    <>
      <div className="top-tabs">
        <button
          className={`top-tab ${activeTab === 'proposta' ? 'active' : ''}`}
          onClick={() => setActiveTab('proposta')}
        >
          Proposta
        </button>
        <button
          className={`top-tab ${activeTab === 'framework' ? 'active' : ''}`}
          onClick={() => setActiveTab('framework')}
        >
          Framework
        </button>
      </div>

      {activeTab === 'proposta' && <Proposta />}
      {activeTab === 'framework' && <Framework />}
    </>
  );
}
