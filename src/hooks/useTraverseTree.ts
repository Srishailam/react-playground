
interface TreeProps {
  id: number;
  name: string;
  isFolder: boolean;
  children: TreeProps[];
}

interface insertNodeProps {
  tree: TreeProps;
  folderId: number;
  name: string;
  isFolder: boolean;
  children: TreeProps[];
}

const useTraverseTree = () => {
  function insertNode(tree: { id: any; isFolder: any; children: { id: number; name: any; isFolder: any; children: never[] }[] }, folderId: any, name: any, isFolder: any, children: never[]){
    if(tree.id === folderId && tree.isFolder){
      tree.children.unshift({
        id: new Date().getTime(),
        name,
        isFolder,
        children: []
      })
      return tree;
    }
    if(tree.children.length > 0){
      tree.children.forEach((child: any) => {
        insertNode(child, folderId, name, isFolder, children)
      })
    }
    return tree;
  } // end of insertNode

  return {
    insertNode
  }

}

export default useTraverseTree