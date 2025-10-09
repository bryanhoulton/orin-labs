import {
  CartesianGrid,
  Legend,
  Line,
  LineChart,
  ResponsiveContainer,
  XAxis,
  YAxis,
} from 'recharts';

const data = [
  { interactions: 0, onlyShortTerm: 0, withLongTerm: 0, withVariable: 0 },
  { interactions: 1, onlyShortTerm: 750, withLongTerm: 150, withVariable: 60 },
  {
    interactions: 2,
    onlyShortTerm: 1500,
    withLongTerm: 300,
    withVariable: 105,
  },
  {
    interactions: 3,
    onlyShortTerm: 2250,
    withLongTerm: 450,
    withVariable: 141,
  },
  {
    interactions: 4,
    onlyShortTerm: 3000,
    withLongTerm: 600,
    withVariable: 165,
  },
  {
    interactions: 5,
    onlyShortTerm: 3750,
    withLongTerm: 750,
    withVariable: 186,
  },
  {
    interactions: 6,
    onlyShortTerm: 4500,
    withLongTerm: 900,
    withVariable: 201,
  },
  {
    interactions: 7,
    onlyShortTerm: 5250,
    withLongTerm: 1050,
    withVariable: 216,
  },
  {
    interactions: 8,
    onlyShortTerm: 6000,
    withLongTerm: 1200,
    withVariable: 225,
  },
  {
    interactions: 9,
    onlyShortTerm: 6750,
    withLongTerm: 1350,
    withVariable: 234,
  },
];

export default function ScalingChart() {
  return (
    <div className="my-8 p-6 bg-gray-50 rounded-lg border">
      <h4 className="text-lg font-semibold text-gray-800 mb-6 text-center">
        Tokens in Context
      </h4>

      <div className="h-[400px]">
        <ResponsiveContainer width="100%" height="100%">
          <LineChart
            data={data}
            margin={{
              top: 20,
              right: 30,
              left: 20,
              bottom: 20,
            }}
          >
            <CartesianGrid strokeDasharray="3 3" stroke="#e0e0e0" />
            <XAxis
              dataKey="interactions"
              axisLine={{ stroke: "#000", strokeWidth: 2 }}
              tickLine={{ stroke: "#000", strokeWidth: 1 }}
              tick={{ fontSize: 12, fill: "#000" }}
              label={{
                value: "Interactions",
                position: "insideBottom",
                offset: -10,
                style: { textAnchor: "middle" },
              }}
            />
            <YAxis
              axisLine={{ stroke: "#000", strokeWidth: 2 }}
              tickLine={{ stroke: "#000", strokeWidth: 1 }}
              tick={{ fontSize: 12, fill: "#000" }}
              label={{
                value: "Tokens",
                angle: -90,
                position: "insideLeft",
                style: { textAnchor: "middle" },
              }}
              domain={[0, 2250]}
              type="number"
              allowDataOverflow={true}
              ticks={[0, 500, 1000, 1500, 2000, 2250]}
            />
            <Legend
              verticalAlign="top"
              height={36}
              iconType="line"
              wrapperStyle={{
                paddingBottom: "20px",
                fontSize: "12px",
              }}
            />
            <Line
              type="monotone"
              dataKey="onlyShortTerm"
              stroke="#dc2626"
              strokeWidth={3}
              name="only short term: O(N) fast"
              dot={false}
            />
            <Line
              type="monotone"
              dataKey="withLongTerm"
              stroke="#2563eb"
              strokeWidth={3}
              name="with long term: O(N) slow"
              dot={false}
            />
            <Line
              type="monotone"
              dataKey="withVariable"
              stroke="#ca8a04"
              strokeWidth={3}
              name="with variable: O(log N)"
              dot={false}
            />
          </LineChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
}
