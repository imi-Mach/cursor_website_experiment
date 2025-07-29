import React from 'react';

interface SkillData {
  name: string;
  value: number;
  maxValue: number;
}

interface SkillRadarChartProps {
  skills: SkillData[];
  size?: number;
}

const SkillRadarChart: React.FC<SkillRadarChartProps> = ({ skills, size = 300 }) => {
  const centerX = size / 2;
  const centerY = size / 2;
  const radius = size * 0.35;

  // Calculate points for the 5-pointed star
  const getStarPoints = () => {
    const points = [];
    for (let i = 0; i < 5; i++) {
      const angle = (i * 72 - 90) * (Math.PI / 180);
      const x = centerX + radius * Math.cos(angle);
      const y = centerY + radius * Math.sin(angle);
      points.push({ x, y, angle });
    }
    return points;
  };

  const starPoints = getStarPoints();

  // Calculate skill points
  const getSkillPoints = () => {
    return skills.map((skill, index) => {
      const point = starPoints[index];
      const skillRadius = (skill.value / skill.maxValue) * radius;
      const x = centerX + skillRadius * Math.cos(point.angle);
      const y = centerY + skillRadius * Math.sin(point.angle);
      return { x, y, name: skill.name, value: skill.value };
    });
  };

  const skillPoints = getSkillPoints();

  // Create polygon points for the skill area
  const skillPolygonPoints = skillPoints.map(point => `${point.x},${point.y}`).join(' ');

  return (
    <div className="flex flex-col items-center space-y-6">
      <h3 className="text-xl font-bold text-gray-900 dark:text-white">Skill Distribution</h3>
      
      <div className="relative">
        <svg width={size} height={size} className="mx-auto">
          {/* Background grid lines */}
          {[0.2, 0.4, 0.6, 0.8, 1].map((scale, index) => (
            <polygon
              key={index}
              points={starPoints.map(point => {
                const x = centerX + radius * scale * Math.cos(point.angle);
                const y = centerY + radius * scale * Math.sin(point.angle);
                return `${x},${y}`;
              }).join(' ')}
              fill="none"
              stroke="#e5e7eb"
              strokeWidth="1"
              className="dark:stroke-dark-600"
            />
          ))}

          {/* Star outline */}
          <polygon
            points={starPoints.map(point => `${point.x},${point.y}`).join(' ')}
            fill="none"
            stroke="#f97316"
            strokeWidth="2"
            opacity="0.3"
          />

          {/* Skill area */}
          <polygon
            points={skillPolygonPoints}
            fill="#f97316"
            fillOpacity="0.2"
            stroke="#f97316"
            strokeWidth="2"
          />

          {/* Skill points */}
          {skillPoints.map((point, index) => (
            <g key={index}>
              <circle
                cx={point.x}
                cy={point.y}
                r="6"
                fill="#f97316"
                stroke="white"
                strokeWidth="2"
              />
              <text
                x={point.x}
                y={point.y + 20}
                textAnchor="middle"
                className="text-xs font-medium fill-gray-700 dark:fill-gray-300"
              >
                {point.name}
              </text>
              <text
                x={point.x}
                y={point.y - 15}
                textAnchor="middle"
                className="text-xs font-bold fill-accent-orange"
              >
                {point.value}
              </text>
            </g>
          ))}

          {/* Center point */}
          <circle
            cx={centerX}
            cy={centerY}
            r="4"
            fill="#f97316"
          />
        </svg>
      </div>

      {/* Legend */}
      <div className="grid grid-cols-2 md:grid-cols-3 gap-4 mt-6">
        {skills.map((skill, index) => (
          <div key={index} className="flex items-center space-x-2">
            <div className="w-3 h-3 bg-accent-orange rounded-full"></div>
            <span className="text-sm text-gray-600 dark:text-gray-300">
              {skill.name}: {skill.value}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default SkillRadarChart; 