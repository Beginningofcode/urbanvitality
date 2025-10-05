document.addEventListener("DOMContentLoaded", async () => {
    // Wait for splash animation
    setTimeout(initApp, 3000);
  
    async function initApp() {
      const worldData = await fetch("/data/world").then(r => r.json());
      renderCharts(worldData["Vietnam"]); // default
    }
  
    function renderCharts(data) {
      const chartConfig = [
        { id: 'chart1', title: 'Air Quality Index (AQI)', value: data.aqi },
        { id: 'chart2', title: 'Water Quality Index (WQI)', value: data.wqi },
        { id: 'chart3', title: 'Normalized Difference Vegetation Index (NDVI)', value: data.ndvi },
        { id: 'chart4', title: 'Population Growth (%)', value: data.population_growth }
      ];
  
      chartConfig.forEach(cfg => {
        Plotly.newPlot(cfg.id, [{
          type: 'indicator',
          mode: 'gauge+number',
          value: cfg.value,
          title: { text: cfg.title },
          gauge: { axis: { range: [0, 100] }, bar: { color: "#2e7d32" } }
        }], { margin: { t: 40, b: 0 } });
      });
    }
  });
  