'use client';

import { useState, useEffect } from 'react';

export type TColorPalette = {
  name: string;
  primary: string;
  secondary: string;
  accent: string;
};

const generateAccent = (hex: string, percent: number): string => {
  // Remove '#' if present
  hex = hex.replace(/^#/, '');
  // Parse r, g, b
  let r = parseInt(hex.substring(0, 2), 16);
  let g = parseInt(hex.substring(2, 4), 16);
  let b = parseInt(hex.substring(4, 6), 16);

  // Increase each channel by percent
  r = Math.min(255, Math.round(r - (255 - r) * percent));
  g = Math.min(255, Math.round(g - (255 - g) * percent));
  b = Math.min(255, Math.round(b - (255 - b) * percent));

  // Convert back to hex
  const toHex = (n: number) => n.toString(16).padStart(2, '0');
  return `#${toHex(r)}${toHex(g)}${toHex(b)}`;
};

const colorPalettes: TColorPalette[] = [
  { name: 'Steel Blue', primary: '#577590', secondary: '#F1F6FA', accent: generateAccent('#577590', 0.2) },
  { name: 'Slate Teal', primary: '#4C6A6D', secondary: '#E6F0EF', accent: generateAccent('#4C6A6D', 0.2) },
  { name: 'Muted Indigo', primary: '#5A5D9C', secondary: '#F3F4FA', accent: generateAccent('#5A5D9C', 0.2) },
  { name: 'Dusty Rose', primary: '#A26769', secondary: '#F8F3F2', accent: generateAccent('#A26769', 0.2) },
  { name: 'Olive Green', primary: '#6B7A52', secondary: '#F4F7F2', accent: generateAccent('#6B7A52', 0.2) },
  { name: 'Deep Sage', primary: '#6C8A7B', secondary: '#F1F7F5', accent: generateAccent('#6C8A7B', 0.2) },
  { name: 'Soft Plum', primary: '#7C6A8A', secondary: '#F6F3F9', accent: generateAccent('#7C6A8A', 0.3) },
  { name: 'Ocean Mist', primary: '#4E7C86', secondary: '#F0F7F9', accent: generateAccent('#4E7C86', 0.2) },
  { name: 'Warm Taupe', primary: '#8B7E74', secondary: '#F8F6F4', accent: generateAccent('#8B7E74', 0.2) },
  { name: 'Calm Navy', primary: '#3A506B', secondary: '#F2F6FA', accent: generateAccent('#3A506B', 0.2) },
  { name: 'Forest Shadow', primary: '#4B6043', secondary: '#F3F7F1', accent: generateAccent('#4B6043', 0.2) },
  { name: 'Blue Spruce', primary: '#5B7B7A', secondary: '#F1F7F7', accent: generateAccent('#5B7B7A', 0.2) },
  { name: 'Lavender Gray', primary: '#8D99AE', secondary: '#F6F7FA', accent: generateAccent('#8D99AE', 0.2) },
  { name: 'Muted Jade', primary: '#5C8374', secondary: '#F2F8F6', accent: generateAccent('#5C8374', 0.2) },
  { name: 'Dusky Sky', primary: '#6D8EA0', secondary: '#F3F7FA', accent: generateAccent('#6D8EA0', 0.2) },
  { name: 'Pale Moss', primary: '#7A8450', secondary: '#F7F8F2', accent: generateAccent('#7A8450', 0.2) },
  { name: 'Heather Blue', primary: '#6B7AA1', secondary: '#F4F6FA', accent: generateAccent('#6B7AA1', 0.2) },
  { name: 'Ash Violet', primary: '#7D6F86', secondary: '#F7F4F9', accent: generateAccent('#7D6F86', 0.2) },
  { name: 'Muted Coral', primary: '#A67873', secondary: '#FAF5F4', accent: generateAccent('#A67873', 0.2) },
  { name: 'Pebble Gray', primary: '#7A7E85', secondary: '#F6F7F8', accent: generateAccent('#7A7E85', 0.2) },
];

function applyPalette(palette: TColorPalette) {
  const root = document.documentElement;
  console.log('Applying palette:', palette.name);
  console.log('Primary color:', palette.primary);
  console.log('Secondary color:', palette.secondary);
  console.log('Accent color:', palette.accent);

  root.style.setProperty('--color-primary', palette.primary);
  root.style.setProperty('--color-secondary', palette.secondary);
  root.style.setProperty('--color-accent', palette.accent);
}

export default function ColorPaletteSwitcher() {
  const [isOpen, setIsOpen] = useState(false);
  const [currentPalette, setCurrentPalette] = useState<TColorPalette | null>(null);

  useEffect(() => {
    // Set random palette on mount
    const randomIndex = Math.floor(Math.random() * colorPalettes.length);
    const randomPalette = colorPalettes[randomIndex];
    setCurrentPalette(randomPalette);
    applyPalette(randomPalette);
  }, []);

  const handlePaletteSelect = (palette: TColorPalette) => {
    setCurrentPalette(palette);
    applyPalette(palette);
    setIsOpen(false);
  };

  return (
    <div className="fixed bottom-4 left-4 z-50">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="bg-white p-3 rounded-full shadow-lg hover:shadow-xl transition-shadow"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-6 w-6 text-primary"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zm0 0h12a2 2 0 002-2v-4a2 2 0 00-2-2h-2.343M11 7.343l1.657-1.657a2 2 0 012.828 0l2.829 2.829a2 2 0 010 2.828l-8.486 8.485M7 17h.01"
          />
        </svg>
      </button>

      {isOpen && (
        <div
          className="absolute bottom-16 left-0 bg-white p-4 rounded-lg shadow-xl w-[70vw] max-h-[70vh]"
        >
          <div className="flex justify-between items-center mb-2">
            <h3 className="text-lg font-semibold text-gray-800">Color Themes</h3>
            <button className="text-gray-500 hover:text-gray-700" onClick={() => setIsOpen(false)}>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path
                  fillRule="evenodd"
                  d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                  clipRule="evenodd"
                />
              </svg>
            </button>
          </div>
          <div className="grid grid-cols-5 gap-2 overflow-y-auto max-h-[60vh] p-2">
            {colorPalettes.map((palette, index) => (
              <button
                key={index}
                className={`p-2 rounded-lg hover:ring-2 ring-primary transition-shadow bg-white shadow-sm hover:shadow-md ${
                  currentPalette === palette ? 'ring-2' : ''
                }`}
                onClick={() => handlePaletteSelect(palette)}
              >
                <div className="flex flex-col gap-1">
                  <span className="text-sm font-medium text-gray-700">{palette.name}</span>
                  <div
                    className="h-6 rounded-sm"
                    style={{ backgroundColor: palette.secondary }}
                  ></div>
                  <div
                    className="h-6 rounded-sm"
                    style={{ backgroundColor: palette.primary }}
                  ></div>
                  {/* <div className="h-3 rounded-sm" style={{ backgroundColor: palette.accent }}></div> */}
                </div>
              </button>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}
