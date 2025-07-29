import React, { useState, useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import { Terminal, Music, Gamepad2, Sparkles, Command } from 'lucide-react';

const Fun: React.FC = () => {
  const [terminalInput, setTerminalInput] = useState('');
  const [terminalHistory, setTerminalHistory] = useState<string[]>([]);
  const [showEasterEgg, setShowEasterEgg] = useState(false);
  const terminalRef = useRef<HTMLDivElement>(null);

  const commands = {
    help: 'Available commands: help, about, music, games, clear, konami',
    about: 'I\'m a software engineer who loves coding, music, and games!',
    music: 'Currently listening to: Lofi beats, Synthwave, and Indie Rock',
    games: 'Favorite games: Portal 2, Factorio, Stardew Valley, and indie games',
    clear: () => setTerminalHistory([]),
    konami: 'Try pressing the Konami code: ↑↑↓↓←→←→BA',
  };

  const handleTerminalSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!terminalInput.trim()) return;

    const command = terminalInput.toLowerCase().trim();
    setTerminalHistory(prev => [...prev, `$ ${terminalInput}`]);

    if (commands[command as keyof typeof commands]) {
      const commandValue = commands[command as keyof typeof commands];
      const response = typeof commandValue === 'function' 
        ? commandValue()
        : commandValue;
      setTerminalHistory(prev => [...prev, String(response)]);
    } else {
      setTerminalHistory(prev => [...prev, `Command not found: ${command}. Type 'help' for available commands.`]);
    }

    setTerminalInput('');
  };

  const handleKeyDown = (e: KeyboardEvent) => {
    const konamiSequence = ['ArrowUp', 'ArrowUp', 'ArrowDown', 'ArrowDown', 'ArrowLeft', 'ArrowRight', 'ArrowLeft', 'ArrowRight', 'KeyB', 'KeyA'];
    
    // Simple konami code detection
    if (e.code === 'ArrowUp' || e.code === 'ArrowDown' || e.code === 'ArrowLeft' || e.code === 'ArrowRight' || e.code === 'KeyB' || e.code === 'KeyA') {
      // For simplicity, we'll just check for the sequence in a basic way
      // In a real implementation, you'd want to track the full sequence
      if (e.code === 'KeyA') {
        setShowEasterEgg(true);
        setTimeout(() => setShowEasterEgg(false), 3000);
      }
    }
  };

  useEffect(() => {
    document.addEventListener('keydown', handleKeyDown);
    return () => document.removeEventListener('keydown', handleKeyDown);
  }, []);

  useEffect(() => {
    if (terminalRef.current) {
      terminalRef.current.scrollTop = terminalRef.current.scrollHeight;
    }
  }, [terminalHistory]);

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="text-center mb-12"
      >
        <h1 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4">
          Fun Zone
        </h1>
        <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
          Welcome to the fun side! Explore interactive elements, easter eggs, and some of my interests.
        </p>
      </motion.div>

      <div className="grid lg:grid-cols-2 gap-8">
        {/* Terminal Section */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="space-y-6"
        >
          <div className="flex items-center space-x-2 mb-4">
            <Terminal className="h-6 w-6 text-accent-green" />
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white">Interactive Terminal</h2>
          </div>
          
          <div className="bg-dark-900 rounded-lg p-4 h-96 overflow-hidden">
            <div 
              ref={terminalRef}
              className="h-full overflow-y-auto font-mono text-sm text-green-400 space-y-1"
            >
              <div className="text-gray-400">Welcome to the terminal! Type 'help' to see available commands.</div>
              {terminalHistory.map((line, index) => (
                <div key={index} className="whitespace-pre-wrap">{line}</div>
              ))}
              <form onSubmit={handleTerminalSubmit} className="flex">
                <span className="text-green-400">$ </span>
                <input
                  type="text"
                  value={terminalInput}
                  onChange={(e) => setTerminalInput(e.target.value)}
                  className="flex-1 bg-transparent text-green-400 outline-none ml-2"
                  autoFocus
                />
              </form>
            </div>
          </div>
        </motion.div>

        {/* Interests Section */}
        <motion.div
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="space-y-6"
        >
          <div className="flex items-center space-x-2 mb-4">
            <Sparkles className="h-6 w-6 text-accent-purple" />
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white">Interests</h2>
          </div>

          {/* Music Section */}
          <div className="card p-6">
            <div className="flex items-center space-x-3 mb-4">
              <Music className="h-6 w-6 text-accent-orange" />
              <h3 className="text-lg font-semibold text-gray-900 dark:text-white">Music I Love</h3>
            </div>
            <div className="space-y-2">
              {[
                '🎵 Lofi Hip Hop - Perfect coding background',
                '🎸 Indie Rock - The Strokes, Arctic Monkeys',
                '🎹 Synthwave - Carpenter Brut, Perturbator',
                '🎧 Classical - Beethoven, Chopin for focus',
              ].map((genre, index) => (
                <div key={index} className="text-gray-600 dark:text-gray-300 text-sm">
                  {genre}
                </div>
              ))}
            </div>
          </div>

          {/* Games Section */}
          <div className="card p-6">
            <div className="flex items-center space-x-3 mb-4">
              <Gamepad2 className="h-6 w-6 text-accent-red" />
              <h3 className="text-lg font-semibold text-gray-900 dark:text-white">Favorite Games</h3>
            </div>
            <div className="space-y-2">
              {[
                '🎮 Portal 2 - Masterpiece of puzzle design',
                '🏭 Factorio - Automation heaven',
                '🌾 Stardew Valley - Relaxing farming sim',
                '🎯 Celeste - Challenging platformer',
              ].map((game, index) => (
                <div key={index} className="text-gray-600 dark:text-gray-300 text-sm">
                  {game}
                </div>
              ))}
            </div>
          </div>

          {/* Easter Egg Section */}
          <div className="card p-6">
            <div className="flex items-center space-x-3 mb-4">
              <Command className="h-6 w-6 text-accent-blue" />
              <h3 className="text-lg font-semibold text-gray-900 dark:text-white">Easter Eggs</h3>
            </div>
            <div className="text-gray-600 dark:text-gray-300 text-sm space-y-2">
              <div>🎯 Try the Konami code: ↑↑↓↓←→←→BA</div>
              <div>💡 Type 'help' in the terminal</div>
              <div>🌟 Look for hidden animations</div>
            </div>
          </div>
        </motion.div>
      </div>

      {/* Easter Egg Animation */}
      {showEasterEgg && (
        <motion.div
          initial={{ opacity: 0, scale: 0 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0 }}
          className="fixed inset-0 flex items-center justify-center z-50 pointer-events-none"
        >
          <div className="text-6xl animate-bounce">🎉</div>
        </motion.div>
      )}

      {/* Mini Game Canvas */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.3 }}
        className="mt-12"
      >
        <div className="text-center mb-6">
          <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">Mini Game</h2>
          <p className="text-gray-600 dark:text-gray-300">Click the squares to change their color!</p>
        </div>
        
        <div className="flex justify-center">
          <div className="grid grid-cols-8 gap-1">
            {[...Array(64)].map((_, index) => (
              <motion.div
                key={index}
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                onClick={() => {
                  const colors = ['bg-accent-blue', 'bg-accent-green', 'bg-accent-purple', 'bg-accent-orange', 'bg-accent-red'];
                  const randomColor = colors[Math.floor(Math.random() * colors.length)];
                  const element = document.getElementById(`square-${index}`);
                  if (element) {
                    element.className = `w-8 h-8 rounded cursor-pointer transition-colors duration-200 ${randomColor}`;
                  }
                }}
                id={`square-${index}`}
                className="w-8 h-8 bg-gray-300 dark:bg-dark-700 rounded cursor-pointer transition-colors duration-200"
              />
            ))}
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default Fun; 