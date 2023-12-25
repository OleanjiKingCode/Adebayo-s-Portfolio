// snow.js

document.addEventListener("DOMContentLoaded", function () {
    const currentDate = new Date();
    const showSnowEffect =
      currentDate.getMonth() === 11 &&
      ((currentDate.getDate() >= 17 && currentDate.getMonth() === 11) ||
        (currentDate.getDate() <= 10 && currentDate.getMonth() === 0));
  
    if (!showSnowEffect) {
      return;
    }
  
    const container = document.getElementById("app");
  
    const createSnowflake = () => {
      const snowflake = document.createElement("div");
      snowflake.className = "snowflake";
      snowflake.style.left = Math.random() * window.innerWidth + "px";
      snowflake.style.animationDuration = `${Math.random() * 3 + 2}s`;
  
      const isSnowflake = Math.random() < 0.4;
      if (isSnowflake) {
        snowflake.classList.add("snowflake-shape");
      }
  
      snowflake.style.opacity = Math.random() * 0.6 + 0.4; // Varying opacity between 0.4 and 1
      container.appendChild(snowflake);
  
      setTimeout(() => {
        container.removeChild(snowflake);
      }, parseFloat(snowflake.style.animationDuration) * 1000);
    };
  
    const snowfallInterval = setInterval(createSnowflake, 100);
  
    // Optionally, you can clear the interval after a certain duration
    setTimeout(() => {
      clearInterval(snowfallInterval);
    }, 60000); // Stop snowfall after 1 minute
  });
  