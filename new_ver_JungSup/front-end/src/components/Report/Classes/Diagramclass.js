import React, { useEffect, useState } from 'react';
import ReactFlow, {
  useNodesState,
  useEdgesState,
  Background,
  MiniMap,
  MarkerType,
} from 'reactflow';
import 'reactflow/dist/style.css';
import LoadingProgress from '../../MUI/loadingProgress';

class Diagram {
  static nodeIdCounter = 1
  
  constructor({name, properties, method}) {
    let snowball= Diagram.nodeIdCounter.toString()
    this.id= name
    Diagram.nodeIdCounter+= 1
    this.type= 'default'
    
    this.data= {
      label: (
        <div key= {`Diagram-${snowball}`}>
          <div key= {`name-${snowball}`}>{name}</div>
          <hr key= {`hr1-${snowball}`} />
          <div key= {`div1-${snowball}`}>
            {properties.map((property, i)=> (
              <div key={`property-${i}-${snowball}`}>{property.name}</div>
            ))}
          </div>
          <hr key={`hr2-${snowball}`} />
          <div key={`div2-${snowball}`}>
            {method.map((method, i) => (
              <div key={`method-${i}-${snowball}`}>{method.name}</div>
            ))}
          </div>
        </div>
      )
    }
  }
}

class Diagram_Arrow {
  static nodeArrowCounter= 1
  constructor({from, to, type}) {
    try {
      const cleanedFrom= from.replace(/;/g, '');
      const cleanedTo= to.replace(/;/g, '');
      this.id= 'Arrow_' + Diagram_Arrow.nodeArrowCounter.toString();
      this.type= 'smoothstep'
      this.source= `${cleanedFrom}`
      this.target= `${cleanedTo}`

      if (type=== 'extend') {
        this.animated= false
        this.markerEnd= {
          height: 20,
          type: MarkerType.ArrowClosed,
          width: 20,
        }
        this.style= {
          strokeWidth: 3
        }
      } else if (type=== 'dependency') {
        this.animated= false
        this.markerEnd= {
          height: 15,
          type: MarkerType.Arrow,
          width: 15,
        }
        this.style= {
          strokeWidth: 3,
          strokeDasharray: '5 5'
        }
      }
      Diagram_Arrow.nodeArrowCounter+= 1
    } catch (error) {
      console.error('Arrow오류: ', error);
    }
  }
}

const Diagramclass = ({classes}) => {
  const [data, setData]= useState(null);
  const [loading, setLoading]= useState(true);
  
  useEffect(() => {
    setData(classes);
  }, [classes]);

  const Viewport= { 
    x: 100, 
    y: 200, 
    zoom: 0 
  }

  const initialNodes = data?.Classes.map(e => ({...new Diagram(e)})) || []
  const initialEdges = data?.Associations.map(e => ({...new Diagram_Arrow(e)})) || []
  const [nodes, setNodes , onNodesChange] = useNodesState(initialNodes);
  const [edges, setEdges, onEdgesChange] = useEdgesState(initialEdges);
  
  useEffect(()=> {
    if (!data) return

    const filteredClasses= data.Classes.filter(
      (cls)=>
        cls.name!== '' &&
        !cls.name.startsWith('Ljava') &&
        (cls.name=== 'java/lang/Object' ||
        (!cls.name.startsWith('java/') && cls.name.length!== 1))
    );

    const filteredAssociations = data.Associations.filter(
      (assoc)=>
        !assoc.from.startsWith('java/') || assoc.to === 'java/lang/Object' 
    );

    const rootClass_i = filteredClasses.findIndex((i)=> i.name=== 'java/lang/Object');

    if(rootClass_i!== -1) {
      const rootClass= filteredClasses[rootClass_i]

      const filteredJavaClasses = filteredClasses
        .filter((a, i) => i !== rootClass_i)
        .map((e) => new Diagram(e));

      const nodesPerRow = 12
      const horizontalGap = 250
      const verticalGap = 250
      const nodeUpdate= [
        {
          ...new Diagram(rootClass),
          position: {
            x: (filteredJavaClasses.length % nodesPerRow) * horizontalGap + 500,
            y: Math.floor(filteredJavaClasses.length / nodesPerRow) * verticalGap + 500
          },
          type: 'output',
          animated: false
        },
        ...filteredJavaClasses.map((node, index)=> ({
          ...node,
          position: {
            x: (index % nodesPerRow) * horizontalGap,
            y: Math.floor(index / nodesPerRow) * verticalGap
          },
          animated: false
        }))
      ]

      const edgeUpdate = filteredAssociations.map((e)=> ({
        ...new Diagram_Arrow(e),
        animated: false
      }));
      setNodes(nodeUpdate);
      setEdges(edgeUpdate);
    }

    if(nodes && edges)
      setLoading(false);
  }, [data, setNodes, setEdges]);

  return (
    <div style={{width: '100%', height: '90vh', zIndex: 1}}> 
    <ReactFlow
      nodes={nodes}
      edges={edges}
      onNodesChange={onNodesChange}
      onEdgesChange={onEdgesChange}
      defaultViewport={Viewport}
      style={{ zIndex: 1 }}
    >
      <MiniMap nodeStrokeWidth={3} zoomable pannable />
      <Background variant="dots" gap={12} size={1} />
    </ReactFlow>
    {loading && <LoadingProgress/>}  
    </div>
  );
};

export default Diagramclass