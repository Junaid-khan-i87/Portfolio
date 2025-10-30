import React from 'react';

const SkillBadge: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  return (
    <span className="bg-gradient-to-r from-violet-500/10 to-teal-500/10 text-violet-700 dark:text-teal-300 text-xs font-semibold px-3 py-1 rounded-full border border-violet-500/20 dark:border-teal-500/20">
      {children}
    </span>
  );
};

export default SkillBadge;