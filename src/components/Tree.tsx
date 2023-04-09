import React from 'react'
import treeData from '../treeData.json'
import { 
  FcFolder,
  FcOpenedFolder,
  FcFile
} from 'react-icons/fc'

import {
  FiFolderPlus,
  FiFilePlus
} from 'react-icons/fi'

import {
  MdClose
} from 'react-icons/md'

interface TreeProps {
  data: any
  handleInsertNode: any
}

const Tree = ({ data, handleInsertNode }: TreeProps) => {
  const [expand, setExpand] = React.useState(false)
  const { name, isFolder } = data

  const [showInput, setShowInput] = React.useState({
    visible: false,
    isFolder: null
  })

  const handleAdd = (e: React.MouseEvent<HTMLButtonElement>
    ,isFolder: any) => {
      console.log(isFolder ? 'Folder' : 'File')
    e.stopPropagation()
    setExpand(true)
    setShowInput({
      visible: true,
      isFolder
    })
  }

  const onAdd = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter') {
      console.log('Enter')
      setShowInput({
        ...showInput,
        visible: false
      })
      handleInsertNode(data.id, e.currentTarget.value, showInput.isFolder, [])
    }
  }

  if (isFolder){
    return (
      <div style={{marginTop: 5}}>
        <div className='folder'
          style={{
            display: 'flex',
            alignItems: 'center',
            cursor: 'pointer'
          }}
          onClick={() => setExpand(!expand)}
        >
          <span
            style={{
              marginRight: 5,
              display: 'flex',
              alignItems: 'center'
            }}
          >
              {
                expand ? <FcOpenedFolder /> : <FcFolder />
              }
            {name}
          </span>
          <div>
            <button
              style={{marginRight: 5}}
              onClick={(e) => handleAdd(e, true)}
            ><FiFolderPlus  style={{width:18, height:18, display: 'block',}}/></button>
            <button
              onClick={(e) => handleAdd(e, false)}
            ><FiFilePlus style={{width:18, height:18, display: 'block'}}/></button>
            <button
              style={{marginLeft: 5}}
              onClick={(e) => {
                e.stopPropagation()
                console.log('Delete')
              }}
            ><MdClose style={{width:18, height:18, display: 'block'}}/></button>
          </div>
        </div>

        <div className='children'
          style={{
            display: expand ? 'block' : 'none',
            paddingLeft: 25
          }}
        >
          {
            showInput.visible && (
              <div className='inputContainer'>
                <span>
                  {
                    showInput.isFolder ? <FcFolder /> : <FcFile />
                  }
                </span>
                <input
                  type='text'
                  placeholder='Enter name'
                  autoFocus
                  onKeyDown={onAdd}
                  onBlur={() => setShowInput({
                    ...showInput,
                    visible: false,
                  })}
                />
              </div>
            )
          }

          {
            data.children.map((child: any) => {
              return <Tree 
                  handleInsertNode={handleInsertNode}
                  data={child} 
                  key={child.name}
                />
            })
          }
        </div>

      </div>
    )
  } else {
    return (
      <div style={{marginTop: 5}}>
        <div className='file'>
          <span 
            style={{
              display: 'flex',
              alignItems: 'center'
            }}
           className='item'><FcFile />{name}</span>
        </div>
      </div>
    )
  }
}

Tree.defaultProps = {
  data: treeData
}


export default Tree