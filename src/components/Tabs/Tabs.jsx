export const Tabs = ({ tab, selected, activeTabId, setActiveTabId }) => {
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
          selected(tab);
          setActiveTabId(tab.id);
        }}
      >
        {tab.title}
      </a>
    </li>
  );
};
