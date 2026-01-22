import React, { useState, useEffect, useRef } from 'react';
import { Terminal, X, Minus, Square } from 'lucide-react';

interface TerminalLine {
  type: 'input' | 'output' | 'error';
  content: string;
  timestamp?: string;
}

export const InteractiveTerminal = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [input, setInput] = useState('');
  const [history, setHistory] = useState<TerminalLine[]>([
    { type: 'output', content: 'Welcome to SOUMYA\'s Cybersecurity Terminal v1.0' },
    { type: 'output', content: 'Type "help" to see available commands' },
    { type: 'output', content: '' }
  ]);
  const [commandHistory, setCommandHistory] = useState<string[]>([]);
  const [historyIndex, setHistoryIndex] = useState(-1);
  const inputRef = useRef<HTMLInputElement>(null);
  const terminalRef = useRef<HTMLDivElement>(null);

  const commands = {
    help: () => [
      'Available commands:',
      '  help          - Show this help message',
      '  whoami        - Display current user info',
      '  ls            - List directory contents',
      '  pwd           - Print working directory',
      '  cat           - Display file contents',
      '  ps            - Show running processes',
      '  netstat       - Display network connections',
      '  nmap          - Network mapper (simulated)',
      '  clear         - Clear terminal',
      '  skills        - Show cybersecurity skills',
      '  projects      - List security projects',
      '  contact       - Show contact information',
      '  exit          - Close terminal'
    ],
    whoami: () => ['soumya@cybersec-terminal'],
    pwd: () => ['/home/soumya/cybersecurity'],
    ls: () => [
      'total 8',
      'drwxr-xr-x 2 soumya soumya 4096 Jan 15 10:30 projects/',
      'drwxr-xr-x 2 soumya soumya 4096 Jan 15 10:30 tools/',
      '-rw-r--r-- 1 soumya soumya 1024 Jan 15 10:30 skills.txt',
      '-rw-r--r-- 1 soumya soumya  512 Jan 15 10:30 contact.txt'
    ],
    cat: (args: string[]) => {
      const file = args[0];
      switch (file) {
        case 'skills.txt':
          return [
            'Cybersecurity Skills:',
            '- Penetration Testing (Kali Linux, Metasploit)',
            '- Network Security (Wireshark, Nmap)',
            '- Programming (Python, C++, Java)',
            '- Vulnerability Assessment',
            '- Password Security Analysis'
          ];
        case 'contact.txt':
          return [
            'Contact Information:',
            'Email: soumyakantamahapatraixa959648@gmail.com',
            'Phone: 9438714694',
            'LinkedIn: linkedin.com/in/soumyakantamahapatra/',
            'GitHub: github.com/SOUMYA547'
          ];
        default:
          return [`cat: ${file}: No such file or directory`];
      }
    },
    ps: () => [
      'PID  TTY          TIME CMD',
      '1234 pts/0    00:00:01 bash',
      '5678 pts/0    00:00:00 nmap',
      '9012 pts/0    00:00:02 wireshark',
      '3456 pts/0    00:00:00 metasploit'
    ],
    netstat: () => [
      'Active Internet connections',
      'Proto Recv-Q Send-Q Local Address           Foreign Address         State',
      'tcp        0      0 localhost:22            0.0.0.0:*               LISTEN',
      'tcp        0      0 localhost:80            0.0.0.0:*               LISTEN',
      'tcp        0      0 localhost:443           0.0.0.0:*               LISTEN'
    ],
    nmap: (args: string[]) => {
      const target = args[0] || 'localhost';
      return [
        `Starting Nmap scan on ${target}...`,
        'Host is up (0.00050s latency).',
        'PORT     STATE SERVICE',
        '22/tcp   open  ssh',
        '80/tcp   open  http',
        '443/tcp  open  https',
        '8080/tcp closed http-proxy',
        '',
        'Nmap done: 1 IP address scanned'
      ];
    },
    skills: () => [
      'Cybersecurity Arsenal:',
      '🛡️  Penetration Testing',
      '🔍  Vulnerability Assessment', 
      '🌐  Network Security',
      '🔐  Cryptography & Encryption',
      '💻  Programming (Python, C++, Java)',
      '🐧  Linux System Administration'
    ],
    projects: () => [
      'Security Projects:',
      '',
      '1.  Secure Linux Server Setup Hardening',
      '    github.com/SOUMYA547/Secure-Linux-Server-Setup-Hardening',
      '',
      '2.  AI Fraud Detection System',
      '    ML-based fraud detection and prevention',
      '',
      '3.  Image Encryptor',
      '    github.com/SOUMYA547/Image-Encryptor',
      '',
      '4.  Text Encryptor',
      '    github.com/SOUMYA547/Text-Encryptor',
      '',
      '5.  Bluetooth Chat App',
      '    github.com/SOUMYA547/Bluetooth-Chat-App',
      '',
      '6.  Password Cracker',
      '    github.com/SOUMYA547/Password-Cracker',
      '',
      '7.  Anonymous FTP Scanner',
      '    github.com/SOUMYA547/Defence_Tools/blob/main/Anonymous_FTP_Scanner.py',
      '',
      '8.  Brute Force FTP Accounts',
      '    github.com/SOUMYA547/Defence_Tools/blob/main/Brute_Force_FTP_Accounts.py',
      '',
      '9.  Port Scanner',
      '    github.com/SOUMYA547/Defence_Tools/blob/main/Port_Scanner.py',
      '',
      '10. Find Deleted Files',
      '    github.com/SOUMYA547/Defence_Tools/blob/main/Find_Deleted_Files.py',
      '',
      '11. Keylogger',
      '    github.com/SOUMYA547/Defence_Tools/blob/main/Keylogger.py',
      '',
      '12. File Password Cracker',
      '    github.com/SOUMYA547/File_Password_Cracker.py',
      '',
      'Total: 12 security projects'
    ],
    contact: () => [
      '📧 Email: soumyakantamahapatraixa959648@gmail.com',
      '📱 Phone: 9438714694',
      '💼 LinkedIn: linkedin.com/in/soumyakantamahapatra/',
      '🐙 GitHub: github.com/SOUMYA547',
      '🌐 Portfolio: Right here!'
    ],
    clear: () => {
      setHistory([]);
      return [];
    }
  };

  const executeCommand = (cmd: string) => {
    const [command, ...args] = cmd.trim().toLowerCase().split(' ');
    
    if (command === 'exit') {
      setIsOpen(false);
      return;
    }

    const newHistory = [...history];
    newHistory.push({ type: 'input', content: `soumya@cybersec-terminal:~$ ${cmd}` });

    if (commands[command as keyof typeof commands]) {
      const output = commands[command as keyof typeof commands](args);
      output.forEach(line => {
        newHistory.push({ type: 'output', content: line });
      });
    } else if (command === '') {
      // Empty command, just add prompt
    } else {
      newHistory.push({ type: 'error', content: `bash: ${command}: command not found` });
    }

    setHistory(newHistory);
    setCommandHistory(prev => [...prev, cmd]);
    setHistoryIndex(-1);
  };

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter') {
      executeCommand(input);
      setInput('');
    } else if (e.key === 'ArrowUp') {
      e.preventDefault();
      if (commandHistory.length > 0) {
        const newIndex = historyIndex === -1 ? commandHistory.length - 1 : Math.max(0, historyIndex - 1);
        setHistoryIndex(newIndex);
        setInput(commandHistory[newIndex]);
      }
    } else if (e.key === 'ArrowDown') {
      e.preventDefault();
      if (historyIndex !== -1) {
        const newIndex = historyIndex + 1;
        if (newIndex >= commandHistory.length) {
          setHistoryIndex(-1);
          setInput('');
        } else {
          setHistoryIndex(newIndex);
          setInput(commandHistory[newIndex]);
        }
      }
    }
  };

  useEffect(() => {
    if (isOpen && inputRef.current) {
      inputRef.current.focus();
    }
  }, [isOpen]);

  useEffect(() => {
    if (terminalRef.current) {
      terminalRef.current.scrollTop = terminalRef.current.scrollHeight;
    }
  }, [history]);

  return (
    <>
      {/* Terminal Toggle Button */}
      <button
        onClick={() => setIsOpen(true)}
        className="fixed bottom-32 right-6 p-3 bg-black/80 backdrop-blur-sm text-green-400 rounded-full shadow-lg shadow-green-400/20 z-50 hover:bg-black/90 transition-all duration-300 border border-green-400/30"
        aria-label="Open terminal"
      >
        <Terminal className="h-6 w-6" />
      </button>

      {/* Terminal Window */}
      {isOpen && (
        <div className="fixed inset-4 md:inset-8 bg-black/95 backdrop-blur-md rounded-lg border border-green-400/30 shadow-2xl z-50 flex flex-col">
          {/* Terminal Header */}
          <div className="flex items-center justify-between p-3 border-b border-green-400/30 bg-gray-900/50">
            <div className="flex items-center space-x-2">
              <div className="flex space-x-1">
                <div className="w-3 h-3 bg-red-500 rounded-full"></div>
                <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
                <div className="w-3 h-3 bg-green-500 rounded-full"></div>
              </div>
              <span className="text-green-400 font-mono text-sm ml-4">soumya@cybersec-terminal</span>
            </div>
            <div className="flex items-center space-x-2">
              <button className="text-gray-400 hover:text-white">
                <Minus className="h-4 w-4" />
              </button>
              <button className="text-gray-400 hover:text-white">
                <Square className="h-4 w-4" />
              </button>
              <button 
                onClick={() => setIsOpen(false)}
                className="text-gray-400 hover:text-red-400"
              >
                <X className="h-4 w-4" />
              </button>
            </div>
          </div>

          {/* Terminal Content */}
          <div 
            ref={terminalRef}
            className="flex-1 p-4 overflow-y-auto font-mono text-sm"
          >
            {history.map((line, index) => (
              <div key={index} className={`mb-1 ${
                line.type === 'input' ? 'text-white' : 
                line.type === 'error' ? 'text-red-400' : 'text-green-400'
              }`}>
                {line.content}
              </div>
            ))}
            
            {/* Input Line */}
            <div className="flex items-center text-white">
              <span className="text-green-400 mr-2">soumya@cybersec-terminal:~$</span>
              <input
                ref={inputRef}
                type="text"
                value={input}
                onChange={(e) => setInput(e.target.value)}
                onKeyDown={handleKeyDown}
                className="flex-1 bg-transparent outline-none text-white"
                autoComplete="off"
                spellCheck="false"
              />
              <span className="animate-pulse text-green-400">█</span>
            </div>
          </div>
        </div>
      )}
    </>
  );
};