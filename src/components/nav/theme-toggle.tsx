import { Button } from '@base-ui/react';
import { MoonIcon, SunIcon } from 'lucide-react';

import { toggleTheme } from '#/lib/theme';

export const ThemeToggle = () => {
  return (
    <Button
      id='theme-toggle'
      className='flex items-center justify-center size-9 rounded-full border-0 hover:bg-primary hover:text-white transition-colors'
      aria-label='Toggle theme'
      onClick={toggleTheme}
    >
      <SunIcon className='size-4 not-dark:hidden' />
      <MoonIcon className='size-4 dark:hidden' />
    </Button>
  );
};
