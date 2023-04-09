import React from 'react';
import MenuItems from './components/MenuItems';
import SwitchToggle from './components/SwitchToggle';
import Timer from './components/Timer';
import Game from './components/Game';

import './App.css';
import Tree from './components/Tree';
import Data from './treeData.json'
import useTraverseTree from './hooks/useTraverseTree';

interface HandleInsertNodeProps {
  folderId: number
  name: string
  isFolder: boolean
  children: any
}

const App = () => {
  const [ treeData, setTreeData ] = React.useState<any>(Data)
  const { insertNode } = useTraverseTree()

  const handleInsertNode  = ({
    folderId,
    name,
    isFolder,
    children
  }: HandleInsertNodeProps) => {
    const newTreeData = insertNode(treeData, folderId, name, isFolder, children)
    setTreeData(newTreeData)
  }

  return (
    <div className='main'>
      {/* <MenuItems /> */}
      {/* <SwitchToggle /> */}
      {/* <Timer /> */}
      {/* <Game /> */}
      <Tree data={treeData} handleInsertNode={handleInsertNode} />
    </div>
  )
}

export default App;
