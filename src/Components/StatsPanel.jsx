import React from "react";
import "./StatsPanel.css";

const StatsPanel = ({ weatherLocations = [] }) => {
  const activeCount = weatherLocations.length;

  const average = (key) => {
    if (!weatherLocations.length) return 0;
    const sum = weatherLocations.reduce((acc, loc) => acc + (loc[key] || 0), 0);
    return (sum / weatherLocations.length).toFixed(1);
  };

  return (
    <div className="stats-panel">
      <h2>🌐 Real-time Weather Stats</h2>
      <div className="stats-grid">
        <div className="stat-box temperature">
          <h3>🌡️ Avg Temp</h3>
          <p>30°C</p>
        </div>
        <div className="stat-box humidity">
          <h3>💧 Avg Humidity</h3>
          <p>50%</p>
        </div>
        <div className="stat-box wind">
          <h3>💨 Avg Wind</h3>
          <p>15 m/s</p>
        </div>
        <div className="stat-box active">
          <h3>📍 Active Locations</h3>
          <p>180</p>
        </div>
      </div>
      <div className="why-explain-container">
        <div className="why-box">
          <h3>Reasons for Rising Global Temperature</h3>
          <p>
          Global temperature is increasing nowadays primarily due to human activities, 
          especially the burning of fossil fuels since the Industrial Revolution. These activities 
          also release greenhouse gases, such as carbon dioxide, which absorb some of the heat that the 
          Earth radiates after it warms from sunlight, leading to a warming effect in the lower atmosphere.
          </p>
        </div>
        <div className="why-box">
          <h3>Why Wind Speed Increasing?</h3>
          <p>
          Wind speed is rising due to changes in natural climate cycles and ocean-atmosphere oscillations. According to recent studies, global wind speeds have been increasing since around 2010, particularly across North America, Europe, and Asia, after a period of decline that began in the 1970s.
          These changes are thought to be influenced by large-scale climate patterns affecting temperatures in certain parts of the world.
          </p>
        </div>
        <div className="why-box">
          <h3>Why Wind Increases Humidity</h3>
          <p>
          Wind humidity, or more accurately, the humidity of the air that is influenced by wind, can rise due to several factors. Wind can transport moisture from one area to another, increasing the humidity in the destination area. Additionally, when wind blows over bodies of water, it can increase evaporation, thereby increasing the humidity of the air. This process is influenced by the partial pressure of water vapor in the air, which can be affected by the speed of the wind and the relative humidity.
          </p>
        </div>
      </div>
    </div>
  );
};

export default StatsPanel;
