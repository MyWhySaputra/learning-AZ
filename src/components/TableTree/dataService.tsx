import keluarga from '../../data/keluarga.json';
import { Table } from "../../models/table"
import { TreeNode } from 'primereact/treenode';

function mapDataToTreeNodes(data: Table[], parentKey = "") {
  return data.map((item, index) => {
    const key = parentKey ? `${parentKey}-${index}` : `${index}`;
    const node: TreeNode = {
      key: key,
      data: {
        ...item,
      },
    };
    
    if (item.children && item.children.length > 0) {
      node.children = mapDataToTreeNodes(item.children, key);
    }

    return node;
  });
}

export const NodeService = {
  getTreeNodesData() {
    return mapDataToTreeNodes(keluarga);
  },

  getTreeNodes() {
    return Promise.resolve(this.getTreeNodesData());
  },
};
