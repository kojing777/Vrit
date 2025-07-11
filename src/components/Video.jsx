import React, { useState, useEffect } from 'react';

function App() {
  const [tiles, setTiles] = useState([]);
  const [previousPositions, setPreviousPositions] = useState(new Set());
  const [gridConfig, setGridConfig] = useState({
    cols: 20,
    rows: 12,
    tileWidth: 30,
    tileHeight: 40,
    gap: 3
  });
  
  const TILES_PER_BATCH = 10;
  const ANIMATION_CYCLE = 3000; // 3 seconds
  const FADE_DURATION = 500; // 0.5 seconds

  const calculateGridConfig = () => {
    const viewportWidth = window.innerWidth;
    const viewportHeight = window.innerHeight;
    
    
    const availableWidth = viewportWidth - 32; 
    const availableHeight = viewportHeight - 32; 
    
    let cols, rows, tileWidth, tileHeight, gap = 2;
    
    if (viewportWidth < 640) { 
      cols = 12;
      rows = 16;
      tileWidth = Math.floor((availableWidth - (cols - 1) * gap) / cols);
      tileHeight = Math.floor(tileWidth * 1.3);
      
      // Adjust rows to fit height
      const maxRows = Math.floor((availableHeight - (rows - 1) * gap) / tileHeight);
      rows = Math.min(rows, maxRows);
    } else if (viewportWidth < 1024) { 
      cols = 18;
      rows = 12;
      tileWidth = Math.floor((availableWidth - (cols - 1) * gap) / cols);
      tileHeight = Math.floor(tileWidth * 1.2);
      
      // Adjust rows to fit height
      const maxRows = Math.floor((availableHeight - (rows - 1) * gap) / tileHeight);
      rows = Math.min(rows, maxRows);
    } else if (viewportWidth < 1440) { 
      cols = 25;
      rows = 15;
      tileWidth = 28;
      tileHeight = 36;
      gap = 3;
      
      
      const totalWidth = cols * tileWidth + (cols - 1) * gap;
      const totalHeight = rows * tileHeight + (rows - 1) * gap;
      
      if (totalWidth > availableWidth) {
        tileWidth = Math.floor((availableWidth - (cols - 1) * gap) / cols);
        tileHeight = Math.floor(tileWidth * 1.3);
      }
      
      if (totalHeight > availableHeight) {
        const maxRows = Math.floor((availableHeight - (rows - 1) * gap) / tileHeight);
        rows = Math.min(rows, maxRows);
      }
    } else { 
      cols = 35;
      rows = 20;
      tileWidth = 25;
      tileHeight = 32;
      gap = 3;
      
      
      const totalWidth = cols * tileWidth + (cols - 1) * gap;
      const totalHeight = rows * tileHeight + (rows - 1) * gap;
      
      if (totalWidth > availableWidth) {
        tileWidth = Math.floor((availableWidth - (cols - 1) * gap) / cols);
        tileHeight = Math.floor(tileWidth * 1.3);
      }
      
      if (totalHeight > availableHeight) {
        const maxRows = Math.floor((availableHeight - (rows - 1) * gap) / tileHeight);
        rows = Math.min(rows, maxRows);
      }
    }
    
    
    tileWidth = Math.max(tileWidth, 15);
    tileHeight = Math.max(tileHeight, 20);
    
    return { cols, rows, tileWidth, tileHeight, gap };
  };

  
  useEffect(() => {
    const updateGridConfig = () => {
      setGridConfig(calculateGridConfig());
    };

    updateGridConfig();
    window.addEventListener('resize', updateGridConfig);
    return () => window.removeEventListener('resize', updateGridConfig);
  }, []);

 
  const generateRandomPositions = (count, avoid) => {
    const positions = [];
    const availablePositions = [];
    
    // Generate all possible positions
    for (let x = 0; x < gridConfig.cols; x++) {
      for (let y = 0; y < gridConfig.rows; y++) {
        const posKey = `${x}-${y}`;
        if (!avoid.has(posKey)) {
          availablePositions.push({x, y});
        }
      }
    }
    
    // Shuffle and pick random positions
    const shuffled = availablePositions.sort(() => Math.random() - 0.5);
    return shuffled.slice(0, Math.min(count, shuffled.length));
  };

  // Create new batch of tiles
  const createNewBatch = () => {
    const newPositions = generateRandomPositions(TILES_PER_BATCH, previousPositions);
    const newTiles = newPositions.map((pos, index) => ({
      id: `tile-${Date.now()}-${index}`,
      x: pos.x,
      y: pos.y,
      opacity: 0
    }));
    
    setTiles(newTiles);
    
    // Update previous positions for next batch
    const newPositionKeys = new Set(newPositions.map(pos => `${pos.x}-${pos.y}`));
    setPreviousPositions(newPositionKeys);
    
    // Fade in tiles
    setTimeout(() => {
      setTiles(prevTiles => 
        prevTiles.map(tile => ({...tile, opacity: 1}))
      );
    }, 50);
  };

  // Fade out current tiles
  const fadeOutTiles = () => {
    setTiles(prevTiles => 
      prevTiles.map(tile => ({...tile, opacity: 0}))
    );
  };

  useEffect(() => {
    // Reset tiles when grid config changes
    setTiles([]);
    setPreviousPositions(new Set());
    
    // Initial batch with delay to ensure grid is ready
    const timeout = setTimeout(() => {
      createNewBatch();
    }, 100);
    
    const interval = setInterval(() => {
      // Fade out current tiles
      fadeOutTiles();
      
      // Create new batch after fade out completes
      setTimeout(() => {
        createNewBatch();
      }, FADE_DURATION);
    }, ANIMATION_CYCLE);

    return () => {
      clearTimeout(timeout);
      clearInterval(interval);
    };
  }, [gridConfig]);

  const gridWidth = gridConfig.cols * (gridConfig.tileWidth + gridConfig.gap) - gridConfig.gap;
  const gridHeight = gridConfig.rows * (gridConfig.tileHeight + gridConfig.gap) - gridConfig.gap;

  return (
    <div className="min-h-screen bg-gray-50 flex items-center justify-center p-4 overflow-hidden">
      <div 
        className="relative bg-gray-100"
        style={{
          width: gridWidth,
          height: gridHeight,
          backgroundImage: `
            linear-gradient(to right, #e5e7eb 1px, transparent 1px),
            linear-gradient(to bottom, #e5e7eb 1px, transparent 1px)
          `,
          backgroundSize: `${gridConfig.tileWidth + gridConfig.gap}px ${gridConfig.tileHeight + gridConfig.gap}px`,
        }}
      >
        {tiles.map((tile) => (
          <div
            key={tile.id}
            className="absolute bg-purple-500 rounded-sm transition-opacity duration-500 ease-in-out"
            style={{
              width: gridConfig.tileWidth,
              height: gridConfig.tileHeight,
              left: tile.x * (gridConfig.tileWidth + gridConfig.gap),
              top: tile.y * (gridConfig.tileHeight + gridConfig.gap),
              opacity: tile.opacity,
            }}
          />
        ))}
      </div>
    </div>
  );
}

export default App;