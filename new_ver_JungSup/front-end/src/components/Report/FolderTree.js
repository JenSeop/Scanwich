import React, { useState, useEffect } from 'react';
import { TreeView, TreeItem } from '@mui/x-tree-view';
import { Box, Input, IconButton, CssBaseline, Paper, Button } from '@mui/material';
import FolderIcon from '@mui/icons-material/Folder';
import InsertDriveFileIcon from '@mui/icons-material/InsertDriveFile';
import AddIcon from '@mui/icons-material/Add';
import RemoveIcon from '@mui/icons-material/Remove';
import RefreshIcon from '@mui/icons-material/Refresh';
import { exportToExcel } from '../../utils/exportToExcel.js'

function FolderTree({ data }) {
  const [selectedNode, setSelectedNode] = useState(null);
  const [searchKeyword, setSearchKeyword] = useState('');
  const [expandedNodes, setExpandedNodes] = useState([]);
  const [isSearchBarFixed, setIsSearchBarFixed] = useState(false);

  useEffect(() => {
    if (searchKeyword) {
      const timeoutId = setTimeout(() => {
        const nodesToOpen = findNodesToOpen(data, searchKeyword);
        setExpandedNodes(nodesToOpen);
      }, 1000);

      return () => {
        clearTimeout(timeoutId);
      };
    } else {
      setExpandedNodes([]);
    }
  }, [searchKeyword, data]);

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const handleScroll = () => {
    if (window.scrollY > 50) {
      setIsSearchBarFixed(true);
    } else {
      setIsSearchBarFixed(false);
    }
  };

  function renderTree(nodes, parentKey = "") {
    return (
      <TreeView
        key={parentKey}
        defaultCollapseIcon={<RemoveIcon fontSize="inherit" style={{ color: '#373531' }} />}
        defaultExpandIcon={<AddIcon fontSize="inherit" style={{ color: '#373531' }} />}
        expanded={expandedNodes}
        onNodeToggle={(event, nodeIds) => setExpandedNodes(nodeIds)}
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
            sx={
              searchKeyword && key.toLowerCase().includes(searchKeyword.toLowerCase())
                ? { backgroundColor: '#FFFFE0' }
                : {}
            }
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

  const handleSearch = (e) => {
    setSearchKeyword(e.target.value);
  };

  const findNodesToOpen = (nodes, searchKeyword) => {
    const result = [];

    const searchInNodes = (nodes, path) => {
      for (const key in nodes) {
        if (key.toLowerCase().includes(searchKeyword.toLowerCase())) {
          result.push(path + key);
        }

        if (typeof nodes[key] === 'object') {
          searchInNodes(nodes[key], path + key + '-');
        }
      }
    };

    searchInNodes(nodes, '');

    result.forEach((node) => {
      const keys = node.split('-');
      for (let i = 1; i < keys.length; i++) {
        const path = keys.slice(0, i).join('-');
        if (!result.includes(path)) {
          result.push(path);
        }
      }
    });

    return result;
  };

  return (
    <>
      <CssBaseline />
      <Paper
        elevation={0}
        sx={{
          position: 'sticky',
          margin: '0 auto',
          top: '11vh',
          zIndex: '1000',
          height: '60px',
          width: '65%',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          marginBottom: '2vh',
          border: '1px solid #E0E0E0',
        }}
      >
        <Input
          placeholder="검색"
          value={searchKeyword}
          onChange={handleSearch}
          color='3'
          endAdornment={
            <IconButton
              onClick={() => setSearchKeyword('')}
            >
              <RefreshIcon />
            </IconButton>
          }
          sx={{
            width: '80%',
          }}
        />
      </Paper>
      {renderTree(data)}
    </>
  );
}

export default FolderTree;
