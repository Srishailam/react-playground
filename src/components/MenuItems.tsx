import React, { ReactElement, useState, useCallback } from 'react';
import { data } from '../data'
import '../App.css';

/**
 * This is code from a codility challenge. Written in TS. The full task description
 * had not been added. 
 * - A menu should be rendered, with a expand/hide button to toggle its subitems.
 * - A menu item may not have subitems and should therefore not have a button.
 * - Each level and action should have a unique test id
 * - No styling is necessary
 */

type MenuItem = {
  title: string;
  subItems?: Array<string>;
};

type MenuConfig = Array<MenuItem>;

type ExpandedOption = MenuItem["title"] | null;

// Util
function getTestIdSlug(fromStrong: string) {
  return fromStrong.toLowerCase().replace(/ /g, "-");
}

type SolutionProps = {
  menuConfig: MenuConfig;
};
function MenuItems(): ReactElement {
  const [expandedOption, setExpandedOption] = useState<ExpandedOption>(null);

  const onMenuVisibilityClick = useCallback(
    (expandedOption: ExpandedOption) =>
      setExpandedOption((prevExpandedOption) =>
        prevExpandedOption === expandedOption ? null : expandedOption
      ),
    []
  );

  const isExpanded = useCallback(
    (menuItem: MenuItem) => expandedOption === menuItem.title,
    [expandedOption]
  );

  const hasSubItems = useCallback(
    (subItems: MenuItem["subItems"]) =>
      subItems ? subItems.length > 0 : false,
    []
  );

  return (
    <div className="menu-wrapper">
      {data.map((menuItem) => (
        <div
          key={menuItem.title}
          data-test-id={`first-level-${getTestIdSlug(menuItem.title)}`}
        >
          <p>{menuItem.title}</p>
          {hasSubItems(menuItem.subItems) && (
            <>
              <button
                onClick={() => onMenuVisibilityClick(menuItem.title)}
                data-test-id={`button-${getTestIdSlug(menuItem.title)}`}
              >
                {isExpanded(menuItem) ? "Hide" : "Expand"}
              </button>

              {isExpanded(menuItem) && <SubItems menuItem={menuItem} />}
            </>
          )}
        </div>
      ))}
    </div>
  );
}

type SubItemsProps = {
  menuItem: MenuItem;
};
function SubItems({ menuItem }: SubItemsProps): ReactElement {
  return (
    <ul data-test-id={`ul-${getTestIdSlug(menuItem.title)}`}>
      {menuItem.subItems!.map((subItem) => (
        <SubItem key={subItem} parentTitle={menuItem.title} subItem={subItem} />
      ))}
    </ul>
  );
}

type SubItemProps = {
  parentTitle: string;
  subItem: string;
};
function SubItem({ parentTitle, subItem }: SubItemProps) {
  return (
    <li
      data-test-id={`li-${getTestIdSlug(parentTitle)}-${getTestIdSlug(
        subItem
      )}`}
    >
      {subItem}
    </li>
  );
}


export default MenuItems;
