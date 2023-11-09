import React, { useState } from 'react';
import { TreeView, TreeItem } from '@mui/x-tree-view';
import { Box } from '@mui/material';
import FolderIcon from '@mui/icons-material/Folder';
import InsertDriveFileIcon from '@mui/icons-material/InsertDriveFile';
import AddIcon from '@mui/icons-material/Add';
import RemoveIcon from '@mui/icons-material/Remove';

function FolderTree({data}) {
  const [selectedNode, setSelectedNode] = useState(null);

  function renderTree(nodes, parentKey = "") {
    return (
      <TreeView
        key={parentKey}
        defaultCollapseIcon={<RemoveIcon fontSize="inherit" style={{ color: '#373531' }} />}
        defaultExpandIcon={<AddIcon fontSize="inherit" style={{ color: '#373531' }} />}
      >
        {Object.entries(nodes).map(([key, value]) => (
          <TreeItem
            key={parentKey + key}
            nodeId={parentKey + key}
            label={
              <Box display="flex" alignItems="center">
                {value && typeof value === 'object' ? (
                  <FolderIcon style={{ marginRight: '4px', color: '#373531' }} />
                ) : (
                  <InsertDriveFileIcon style={{ marginRight: '4px', color: '#373531' }} />
                )}
                {key}
              </Box>
            }
            onMouseEnter={() => handleMouseEnter(key)}
            onMouseLeave={() => handleMouseLeave()}
            onClick={() => handleNodeClick(key, value)}
          >
            {value && typeof value === 'object'
              ? renderTree(value, parentKey + key + '-')
              : null
            }
          </TreeItem>
        ))}
      </TreeView>
    );
  }

  const handleNodeClick = (key, value) => {
    if (key.includes('.') && key !== ".") {
      setSelectedNode({ key, value });
    }
  };

  const handleMouseEnter = (key) => {
  };

  const handleMouseLeave = () => {
  };

  return (
    <>
      {renderTree(data)}
    </>
  );
}

export default FolderTree;
