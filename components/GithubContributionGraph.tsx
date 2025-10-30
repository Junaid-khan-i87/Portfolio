import React, { useState, useEffect } from 'react';
import { useTheme } from '../contexts/ThemeContext';

const GithubContributionGraph: React.FC = () => {
  const { theme } = useTheme();
  const [data, setData] = useState<number[]>([]);
  const [weeksToShow, setWeeksToShow] = useState(53);

  useEffect(() => {
    const handleResize = () => {
      // Tailwind's `md` breakpoint is 768px.
      // We show a shorter, more readable view on mobile.
      setWeeksToShow(window.innerWidth < 768 ? 26 : 53);
    };

    handleResize(); // Set initial state
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);
  
  useEffect(() => {
    const generateData = () => {
        const contributions = [];
        const totalDays = 7 * weeksToShow;
        const today = new Date().getDay(); // 0 for Sunday, 6 for Saturday

        for (let i = 0; i < totalDays; i++) {
            const dayOfWeek = (i + today + 1) % 7;
            const isWeekend = dayOfWeek === 0 || dayOfWeek === 6;
            
            const random = Math.random();
            let level = 0;

            // Base chance of contribution, lower on weekends
            const baseChance = isWeekend ? 0.4 : 0.8;
            if (random < baseChance) {
                const levelRandom = Math.random();
                // Skew towards lower-level contributions for realism
                if (levelRandom < 0.5) level = 1;      // 50% for level 1
                else if (levelRandom < 0.8) level = 2; // 30% for level 2
                else if (levelRandom < 0.95) level = 3;// 15% for level 3
                else level = 4;                        // 5% for level 4
            }
            contributions.push(level);
        }
        return contributions;
    };
    setData(generateData());
  }, [weeksToShow]);
  
  const tailwindColors = {
      light: [
        'bg-slate-200',
        'bg-violet-200',
        'bg-violet-400',
        'bg-violet-600',
        'bg-violet-800',
      ],
      dark: [
        'bg-slate-800',
        'bg-violet-900',
        'bg-violet-700',
        'bg-violet-500',
        'bg-violet-300',
      ],
  }

  const colorScale = theme === 'dark' ? tailwindColors.dark : tailwindColors.light;
  const contributionLevels = [0, 1, 2, 3, 4];


  const getTooltipText = (level: number, index: number) => {
    if (level === 0) return 'No contributions today';
    const contributions = level * 3 + Math.floor(Math.random() * 3);
    const date = new Date();
    date.setDate(date.getDate() - (7 * weeksToShow - index - 1));
    return `${contributions} contributions on ${date.toLocaleDateString('en-US', { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' })}`;
  };

  return (
    <div className="bg-white/50 dark:bg-slate-800/50 p-4 sm:p-6 rounded-lg shadow-sm border border-slate-200 dark:border-slate-800 backdrop-blur-sm">
        <div className="grid grid-rows-7 grid-flow-col auto-cols-fr gap-1">
            {data.map((level, index) => (
                <div
                    key={index}
                    className={`aspect-square rounded-[3px] ${colorScale[level]}`}
                    title={getTooltipText(level, index)}
                />
            ))}
        </div>
        <div className="flex justify-end items-center mt-4 text-xs text-slate-500 dark:text-slate-400">
          <span className="mr-2">Less</span>
          <div className="flex gap-1">
            {contributionLevels.map((level) => (
              <div key={level} className={`w-3 h-3 rounded-[2px] ${colorScale[level]}`} />
            ))}
          </div>
          <span className="ml-2">More</span>
        </div>
    </div>
  );
};

export default GithubContributionGraph;