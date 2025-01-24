"use client";

import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Slider } from "@/components/ui/slider";
import { Settings, Moon, Sun, Languages } from "lucide-react";
import { useCustomization } from "@/lib/hooks/useCustomization";
import { translations } from "@/lib/i18n/translations";

export function CustomizationMenu() {
  const {
    language,
    theme,
    fontSize,
    primaryColor,
    setLanguage,
    setTheme,
    setFontSize,
    setPrimaryColor,
  } = useCustomization();

  const t = translations[language].common;

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="ghost" size="icon">
          <Settings className="h-5 w-5" />
          <span className="sr-only">Open customization menu</span>
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end" className="w-56">
        {/* Language Selection */}
        <div className="p-2">
          <label className="text-sm font-medium">{t.language}</label>
          <div className="grid grid-cols-3 gap-1 mt-1">
            <Button
              variant={language === 'en' ? 'default' : 'outline'}
              size="sm"
              onClick={() => setLanguage('en')}
            >
              English
            </Button>
            <Button
              variant={language === 'gu' ? 'default' : 'outline'}
              size="sm"
              onClick={() => setLanguage('gu')}
            >
              ગુજરાતી
            </Button>
            <Button
              variant={language === 'hi' ? 'default' : 'outline'}
              size="sm"
              onClick={() => setLanguage('hi')}
            >
              हिंदी
            </Button>
          </div>
        </div>

        {/* Theme Toggle */}
        <div className="p-2">
          <label className="text-sm font-medium">
            {theme === 'dark' ? t.lightMode : t.darkMode}
          </label>
          <Button
            variant="outline"
            size="sm"
            className="w-full mt-1"
            onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
          >
            {theme === 'dark' ? (
              <Sun className="h-4 w-4 mr-2" />
            ) : (
              <Moon className="h-4 w-4 mr-2" />
            )}
            {theme === 'dark' ? t.lightMode : t.darkMode}
          </Button>
        </div>

        {/* Font Size Adjustment */}
        <div className="p-2">
          <label className="text-sm font-medium">{t.fontSize}</label>
          <div className="flex items-center gap-2 mt-1">
            <span className="text-sm">A</span>
            <Slider
              value={[fontSize]}
              min={12}
              max={24}
              step={1}
              onValueChange={([value]) => setFontSize(value)}
              className="flex-1"
            />
            <span className="text-lg">A</span>
          </div>
        </div>

        {/* Theme Color */}
        <div className="p-2">
          <label className="text-sm font-medium">{t.themeColor}</label>
          <input
            type="color"
            value={primaryColor}
            onChange={(e) => setPrimaryColor(e.target.value)}
            className="w-full h-8 mt-1 rounded cursor-pointer"
          />
        </div>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}