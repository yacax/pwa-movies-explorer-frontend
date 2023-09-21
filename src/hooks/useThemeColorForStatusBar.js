import { useEffect } from 'react';

function useThemeColorForStatusBar(color) {
  useEffect(() => {
    let metaTag = document.querySelector('meta[name="theme-color"]');
    if (!metaTag) {
      metaTag = document.createElement('meta');
      metaTag.setAttribute('name', 'theme-color');
      document.getElementsByTagName('head')[0].appendChild(metaTag);
    }
    metaTag.setAttribute('content', color);

    return () => {
      metaTag.setAttribute('content', '');
    };
  }, [color]);
}

export default useThemeColorForStatusBar;
