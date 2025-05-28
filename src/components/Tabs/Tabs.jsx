export const Tabs = ({ tab, onTabSelect, activeTabId, setActiveTabId }) => {
  if (!tab) {
    return null;
  }

  const isActive = tab.id === activeTabId;

  return (
    <li className={isActive ? 'is-active' : ''} data-cy="Tab">
      <a
        href={`#${tab.id}`}
        data-cy="TabLink"
        onClick={() => {
          onTabSelect(tab);
          setActiveTabId(tab.id);
        }}
      >
        {tab.title}
      </a>
    </li>
  );
};
