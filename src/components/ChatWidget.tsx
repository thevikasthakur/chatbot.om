"use client";

import { useEffect } from 'react';

function ChatWidget() {
  useEffect(() => {
    // Load widget script
    const script = document.createElement('script');
    script.src = 'https://dev.voxreception.com/vox-embed/widget.v1.js';
    script.async = true;
    // expose api base on dataset for the script
    script.dataset.apiUrl = 'https://dev.voxreception.com';
    document.body.appendChild(script);

    script.onload = () => {
      if (window.ViraChat) {
        window.ViraChat.init({
          agentId: '6a9d3d0b9eda80e7134db900',
          token: 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJhZ2VudF9pZCI6IjZhOWQzZDBiOWVkYTgwZTcxMzRkYjkwMCIsIndvcmtzcGFjZV9pZCI6IjZhOWQzZDA4OWVkYTgwZTcxMzRkYjhmZSIsImF1ZCI6ImVtYmVkIiwib3JpZ2lucyI6WyJodHRwczovL3RyeS5jaGF0Ym90Lm9tIl0sImV4cCI6MTc5MTI5MDI2NiwiaWF0IjoxNzg4Njk4MjY2LCJqdGkiOiJjYjdkNzBlZDNlOGY3N2U0In0.Zlxy4AmPZVuRhOVty6pcCHrGh2LmU4Y8-p2cH2G3zRU',
          apiBase: 'https://dev.voxreception.com',
          position: 'bottom-right'
        });
      }
    };

    return () => {
      // Cleanup
      try { document.body.removeChild(script); } catch (e) {}
      if (window.ViraChat?.destroy) {
        window.ViraChat.destroy();
      }
    };
  }, []);

  return null;
}

export default ChatWidget;