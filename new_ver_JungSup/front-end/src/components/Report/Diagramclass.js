import { forceSimulation, forceLink, forceManyBody, forceX, forceY } from 'd3-force';
import React, { useEffect, useMemo, useState } from 'react';
import ReactFlow, {
  ReactFlowProvider,
  Panel,
  useNodesState,
  useEdgesState,
  useReactFlow,
  useStore,
  Background,
  MiniMap,
  MarkerType
} from 'reactflow';
import 'reactflow/dist/style.css';
import { quadtree } from 'd3-quadtree';

const collide = ()=> {
  let nodes = [];
  let force = (alpha) => {
    const tree = quadtree(
      nodes,
      (d) => d.x,
      (d) => d.y
    );

    for (const node of nodes) {
      const r = node.width / 2;
      const nx1 = node.x - r;
      const nx2 = node.x + r;
      const ny1 = node.y - r;
      const ny2 = node.y + r;

      tree.visit((quad, x1, y1, x2, y2) => {
        if (!quad.length) {
          do {
            if (quad.data !== node) {
              const r = node.width / 2 + quad.data.width / 2;
              let x = node.x - quad.data.x;
              let y = node.y - quad.data.y;
              let l = Math.hypot(x, y);

              if (l < r) {
                l = ((l - r) / l) * alpha;
                node.x -= x *= l;
                node.y -= y *= l;
                quad.data.x += x;
                quad.data.y += y;
              }
            }
          } while ((quad = quad.next));
        }

        return x1 > nx2 || x2 < nx1 || y1 > ny2 || y2 < ny1;
      });
    }
  };

  force.initialize = (newNodes) => (nodes = newNodes);
  return force;
}

//
const simulation = forceSimulation()
  .force('charge', forceManyBody().strength(-1000))
  .force('x', forceX().x(400).strength(0.05))
  .force('y', forceY().y(0).strength(0.05))
  .force('collide', collide())
  .alphaTarget(0.05)
  .stop();

const useLayoutedElements = () => {
  const { getNodes, setNodes, getEdges, fitView } = useReactFlow();
  const initialised = useStore((store) =>
    [...store.nodeInternals.values()].every((node) => node.width && node.height)
  );

  return useMemo(() => {
    let nodes = getNodes().map((node) => ({ ...node, x: node.position.x, y: node.position.y }));
    let edges = getEdges().map((edge) => edge);
    let running = false;

    if (!initialised || nodes.length === 0) return [false, {}];

    simulation.nodes(nodes).force(
      'link',
      forceLink(edges)
        .id((d) => d.id)
        .strength(0.05)
        .distance(100)
    );


    const tick = () => {
      getNodes().forEach((node, i) => {
        const dragging = Boolean(document.querySelector(`[data-id="${node.id}"].dragging`));
        nodes[i].fx = dragging ? node.position.x : null;
        nodes[i].fy = dragging ? node.position.y : null;
      });

      simulation.tick();
      setNodes(nodes.map((node) => ({ ...node, position: { x: node.x, y: node.y } })));

      window.requestAnimationFrame(() => {
        fitView();
        if (running) tick();
      });
    };

    const toggle = () => {
      running = !running;
      running && window.requestAnimationFrame(tick);
    };

    const amIrun = () => running;

    return [true, { toggle, amIrun }];
  }, [initialised, getNodes, setNodes, getEdges, fitView]);
};





class Diagram {
  static nodeIdCounter = 1
  
  constructor({ name, properties, method }) {
    let snowball= Diagram.nodeIdCounter.toString()
    this.id= name
    Diagram.nodeIdCounter += 1 
    this.type = 'default';
    this.position = { x: 400, y: Diagram.nodeIdCounter * 1 }
    this.data = {
      label: (
        <div key={`Diagram-${snowball}`}>
          <div key={`name-${snowball}`}>{name}</div>
          <hr key={`hr1-${snowball}`} />
          <div key={`div1-${snowball}`}>
            {properties.map((property, index) => (
              <div key={`property-${index}-${snowball}`}>{property.name}</div>
            ))}
          </div>
          <hr key={`hr2-${snowball}`} />
          <div key={`div2-${snowball}`}>
            {method.map((method, index) => (
              <div key={`method-${index}-${snowball}`}>{method.name}</div>
            ))}
          </div>
        </div>
      ), 
    }
  }
}


class Diagram_Arrow {
  static nodeIdCounter = 1;
  constructor({ from, to }) {
    try {
      const cleanedFrom = from.replace(/;/g, '');
      const cleanedTo = to.replace(/;/g, '');
      this.id = 'Arrow_' + Diagram_Arrow.nodeIdCounter.toString();
      this.type = 'default';
      this.source = `${cleanedFrom}`;
      this.target = `${cleanedTo}`;
      this.animated = false;
      this.markerEnd = {
        height: 15,
        type: MarkerType.Arrow,
        width: 15
      }
      Diagram_Arrow.nodeIdCounter += 1;
    } catch (error) {
      console.error('Arrow생성중 오류: ', error);
    }
  }
}

const Diagramclass = ({ data }) => {

  const [running, setRunning] = useState(false);
  const [initialised, { toggle }] = useLayoutedElements();

  const initialNodes = data?.Classes.map(e => ({...new Diagram(e)})) || []
  const initialEdges = data?.Associations.map(e => ({...new Diagram_Arrow(e)})) || []
  const [nodes, setNodes , onNodesChange] = useNodesState(initialNodes);
  const [edges, setEdges, onEdgesChange] = useEdgesState(initialEdges);
  
  const handleToggle = () => {
    toggle();
    setRunning(!running);
  }
  
  useEffect(() => {
    if (data) {
      setNodes(data?.Classes.map((e) => ({ ...new Diagram(e) })))
      setEdges(data?.Associations.map((e) => ({ ...new Diagram_Arrow(e) })))
    }
  }, [data, setEdges, setNodes]);
  
  return (
    <div style={{ width: '100vw', height: '100vh' }}> 
    <ReactFlow
      nodes={nodes}
      edges={edges}
      onNodesChange={onNodesChange}
      onEdgesChange={onEdgesChange}
    >
      <div style={{ display: 'flex', justifyContent: 'flex-end' }}>
        <Panel>
          {initialised && (
            <button onClick={handleToggle}>{running ? 'Stop' : 'Start'} force simulation</button>
          )}
        </Panel>
      </div>
      <MiniMap nodeStrokeWidth={3} zoomable pannable />
      <Background variant="dots" gap={12} size={1} />
    </ReactFlow>    
    </div>
  );
}

export default function diagramclass(data) {
  return (
    <ReactFlowProvider>
      <Diagramclass data={data.data} />
    </ReactFlowProvider>
  );
}