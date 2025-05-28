import React, { useState } from 'react';
import 'bulma/css/bulma.css';
import '@fortawesome/fontawesome-free/css/all.css';
import './App.scss';
import { Tabs } from './components/Tabs/Tabs';
import { Header } from './components/Header/Header';
import { Text } from './components/Text/Text';

export const tabs = [
  { id: 'tab-1', title: 'Tab 1', content: 'Some text 1' },
  { id: 'tab-2', title: 'Tab 2', content: 'Some text 2' },
  { id: 'tab-3', title: 'Tab 3', content: 'Some text 3' },
];

export const App = () => {
  const [onTabSelected, setOnTabSelected] = useState(tabs[0]);
  const [activeTabId, setActiveTabId] = useState(tabs[0].id);

  return (
    <div className="section">
      <Header tab={onTabSelected} />
      <div data-cy="TabsComponent">
        <div className="tabs is-boxed">
          <ul>
            {tabs.map(tab => {
              return (
                <Tabs
                  tab={tab}
                  key={tab.id}
                  selected={setOnTabSelected}
                  activeTabId={activeTabId}
                  setActiveTabId={setActiveTabId}
                />
              );
            })}
          </ul>
        </div>

        <Text tab={onTabSelected} />
      </div>
    </div>
  );
};
