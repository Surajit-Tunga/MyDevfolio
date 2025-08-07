import React, { useState, useEffect, useRef } from 'react';
import About from './About';
import Education from './Education';
import Activities from './Activities';
import Hobbies from './Hobbies';
import Skills from './Skills';
import Certificate from './Certificate';
import Projects from './Projects';
import Blog from './Blog';

const RightDiv = () => {
  const [history, setHistory] = useState([
    {
      command: 'help',
      output:
        'Available commands:\n' +
        '  - about\n' +
        '  - education\n' +
        '  - activities\n' +
        '  - hobbies\n' +
        '  - certificates\n' +
        '  - skills\n' +
        '  - projects\n' +
        '  - blog\n' +
        '  - clear',
      component: null,
    },
  ]);
  const [input, setInput] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const terminalRef = useRef(null);

  const handleCommand = (e) => {
    e.preventDefault();
    const command = input.trim().toLowerCase();

    let output = null;
    let component = null;

    switch (command) {
      case 'help':
        output =
          'Available commands:\n' +
          '  - about\n' +
          '  - education\n' +
          '  - activities\n' +
          '  - hobbies\n' +
          '  - certificates\n' +
          '  - skills\n' +
          '  - projects\n' +
          '  - blog\n' +
          '  - clear';
        break;
      case 'about':
        setIsTyping(true);
        component = <About onDone={() => setIsTyping(false)} />;
        break;
      case 'education':
        setIsTyping(true);
        component = <Education onDone={() => setIsTyping(false)} />;
        break;
      case 'activities':
        setIsTyping(true);
        component = <Activities onDone={() => setIsTyping(false)} />;
        break;
      case 'hobbies':
        setIsTyping(true);
        component = <Hobbies onDone={() => setIsTyping(false)} />;
        break;
      case 'certificates':
        setIsTyping(true);
        component = <Certificate onDone={() => setIsTyping(false)} />;
        break;
      case 'skills':
        setIsTyping(true);
        component = <Skills onDone={() => setIsTyping(false)} />;
        break;
      case 'projects':
        setIsTyping(true);
        component = <Projects onDone={() => setIsTyping(false)} />;
        break;
      case 'blog':
        setIsTyping(true);
        component = <Blog onDone={() => setIsTyping(false)} />;
        break;
      case 'clear':
        setHistory([]);
        setInput('');
        return;
      default:
        output = `'${command}' is not recognized. Type 'help' to see available commands.`;
    }

    setHistory([...history, { command, output, component }]);
    setInput('');
  };

  useEffect(() => {
    if (terminalRef.current) {
      terminalRef.current.scrollTop = terminalRef.current.scrollHeight;
    }
  }, [history]);

  return (
    <div className="bg-black text-green-400 font-mono p-4 sm:p-2 rounded-xl h-full overflow-y-auto overflow-x-hidden border-2 border-green-600 shadow-[0_0_10px_#22c55e] scroll-hidden w-full">
      <div ref={terminalRef} className="space-y-4 break-words max-w-full">
        {history.map((item, idx) => (
          <div key={idx} className="w-full break-words">
            <div className="w-full break-words">
              <span className="text-green-500">visitor@portfolio</span>:~$ {item.command}
            </div>
            {item.output && (
              <pre
                className={`ml-4 whitespace-pre-wrap break-words ${
                  item.output.startsWith("'") ? 'text-red-500' : ''
                }`}
              >
                {item.output}
              </pre>
            )}
            {item.component && <div className="mt-2 w-full break-words">{item.component}</div>}
          </div>
        ))}

        {!isTyping && (
          <form onSubmit={handleCommand} className="flex items-center space-x-2 w-full">
            <span className="text-green-500">visitor@portfolio</span>:~$
            <input
              type="text"
              className="bg-transparent border-none outline-none flex-1 text-green-200 w-full"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              autoFocus
            />
          </form>
        )}
      </div>
    </div>
  );
};

export default RightDiv;
