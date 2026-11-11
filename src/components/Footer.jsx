import { useEffect, useState } from 'react';

function Footer() {
  const [sysInfo, setSysInfo] = useState({ platform: '', userAgent: '' });

  useEffect(() => {
    const data = {
      platform: navigator.platform || (navigator.userAgentData && navigator.userAgentData.platform) || 'Linux Mint',
      userAgent: navigator.userAgent
    };

    localStorage.setItem('lab4_system_info', JSON.stringify(data));

    const saved = JSON.parse(localStorage.getItem('lab4_system_info'));
    if (saved) {
      setSysInfo(saved);
    }
  }, []);

  return (
    <footer className="mt-8 border-t border-slate-800 bg-slate-900/60 p-6 text-center text-xs text-slate-400">
      <p>&copy; 2026 Владислав Пронів. Лабораторна робота №4</p>
      <div className="mt-3 space-y-1 font-mono text-slate-400">
        <p><span className="text-emerald-400">Платформа / ОС:</span> {sysInfo.platform}</p>
        <p className="break-all"><span className="text-cyan-400">User-Agent:</span> {sysInfo.userAgent}</p>
      </div>
    </footer>
  );
}

export default Footer;