export function createGraph() {
  const graf = document.getElementById('stats');
  let ctx = graf.getContext('2d');
  const width = graf.width;
  const k = 5 / 6;
  const l = 1 / 6;
  const radius = width / 2;

  const countX = (vertex, level) => {
    return (
      radius * k * level * l +
      radius * k * level * l * Math.sin((vertex * 2 * Math.PI) / 6) +
      radius * (1 - k * level * l)
    );
  };

  const countY = (vertex, level) => {
    return (
      radius * k * level * l +
      radius * k * level * l * Math.cos((vertex * 2 * Math.PI) / 6) +
      radius * (1 - k * level * l)
    );
  };

  const stat = { INF: 6, A: 5, B: 4, C: 3, D: 2, E: 1, F: 0 };

  // Oси
  ctx.beginPath();
  ctx.arc(radius, radius, radius, 0, 2 * Math.PI); // outer circle
  ctx.closePath();
  ctx.stroke();

  ctx.beginPath();
  ctx.arc(radius, radius, radius * k, 0, 2 * Math.PI); // inner circle
  ctx.closePath();
  ctx.stroke();

  ctx.fillRect(radius, radius, 3, 3); // center

  // lines
  for (let i = 1; i <= 3; i++) {
    ctx.beginPath();
    ctx.moveTo(countX(i, 6), countY(i, 6));
    ctx.lineTo(countX(i + 3, 6), countY(i + 3, 6));
    ctx.closePath();
    ctx.stroke();
  }

  // points
  for (let j of Object.values(stat)) {
    for (let i = 0; i <= 6; i++) {
      ctx.fillRect(countX(i, j), countY(i, j), 3, 3);
    }
  }

  // Graph
  ctx.beginPath();
  ctx.fillStyle = 'rgba(150, 255, 0, 0.25)';
  ctx.moveTo(countX(3, 0), countY(3, 0));
  ctx.lineTo(countX(2, 2), countY(2, 2));
  ctx.lineTo(countX(1, 0), countY(1, 0));
  ctx.lineTo(countX(6, 5), countY(6, 5));
  ctx.lineTo(countX(5, 0), countY(5, 0));
  ctx.lineTo(countX(4, 0), countY(4, 0));
  ctx.fill();
  ctx.closePath();

  // Текст
  const angle = Math.PI / 3;
  ctx.font = `${radius * 0.004}rem Arial`;
  ctx.fillStyle = 'black';
  ctx.fillText('POWER', countX(3 + 0.14, 6), countY(3, 6 + 0.4));
  ctx.rotate(angle);
  ctx.fillText('SPEED', countX(2 + 0.7, 6), countY(2, 6 + 26.5));
  ctx.rotate(-angle);
  ctx.rotate(-angle);
  ctx.fillText('RANGE', countX(1 + 3.25, 6 + 5), countY(1, 6 + 12.7));
  ctx.rotate(angle);
  ctx.fillText('DURABILITY', countX(6 - 0.2, 6), countY(6, 6 + 0.7));
  ctx.rotate(angle);
  ctx.fillText('PRECISION', countX(5 + 1.22, 6), countY(5 - 1.02, 6));
  ctx.rotate(-angle);
  ctx.rotate(-angle);
  ctx.fillText('POTENTIAL', countX(4, 6 + 6.8), countY(4 - 0.15, 6));
  ctx.rotate(angle);
  ctx.fillText('A', countX(3, 5) + 5, countY(3, 5) + 5);
  ctx.fillText('B', countX(3, 5) + 5, countY(3, 4) + 5);
  ctx.fillText('C', countX(3, 5) + 5, countY(3, 3) + 5);
  ctx.fillText('D', countX(3, 5) + 5, countY(3, 2) + 5);
  ctx.fillText('E', countX(3, 5) + 5, countY(3, 1) + 5);
  ctx.closePath();
}
