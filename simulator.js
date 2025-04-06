// simulator.js
function storePhishedData(username, password, simulationType) {
    const logs = JSON.parse(localStorage.getItem('phishingLogs')) || [];
    logs.push({
      username,
      password,
      simulation: simulationType,
      timestamp: new Date().toISOString()
    });
    localStorage.setItem('phishingLogs', JSON.stringify(logs));
    showPhishModal(simulationType);
  }
  
  function showPhishModal(simulationType) {
    const modal = document.createElement('div');
    modal.style.position = 'fixed';
    modal.style.top = '0';
    modal.style.left = '0';
    modal.style.width = '100%';
    modal.style.height = '100%';
    modal.style.backgroundColor = 'rgba(0, 0, 0, 0.9)';
    modal.style.color = '#facc15';
    modal.style.display = 'flex';
    modal.style.flexDirection = 'column';
    modal.style.alignItems = 'center';
    modal.style.justifyContent = 'center';
    modal.style.zIndex = '9999';
    modal.style.padding = '40px';
    modal.innerHTML = `
      <h2>⚠️ ${simulationType} Phishing Attempt Simulated</h2>
      <p>This was a realistic simulation designed to educate you on online threats.</p>
      <ul style="text-align:left; max-width: 600px;">
        <li>🔍 Always double-check the URL and sender</li>
        <li>🔐 Use multi-factor authentication</li>
        <li>📬 Don't click on suspicious links or popups</li>
        <li>✅ Keep browser and OS updated</li>
      </ul>
      <a href="dashboard.html" style="margin-top:20px; padding:10px 20px; background:#facc15; color:#0f172a; text-decoration:none; border-radius:6px;">View Hacked Info Log</a>
    `;
    document.body.appendChild(modal);
  
    modal.addEventListener('click', () => {
      document.body.removeChild(modal);
    });
  }
  