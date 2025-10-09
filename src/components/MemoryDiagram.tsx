import { ArrowDown } from 'lucide-react';

interface MemoryBlockProps {
  color: "red" | "orange" | "green" | "blue" | "purple" | "pink";
  colSpan: number;
  height?: string;
  children: React.ReactNode;
  variant?: "solid" | "light";
}

function MemoryBlock({
  color,
  colSpan,
  height = "h-12",
  children,
}: MemoryBlockProps) {
  const colorClasses = {
    red: "bg-red-200 border-red-400 text-red-800",
    orange: "bg-orange-200 border-orange-400 text-orange-800",
    green: "bg-green-200 border-green-400 text-green-800",
    blue: "bg-blue-200 border-blue-400 text-blue-800",
    purple: "bg-purple-200 border-purple-400 text-purple-800",
    pink: "bg-pink-200 border-pink-400 text-pink-800",
  };

  const colSpans = {
    1: "col-span-1",
    2: "col-span-2",
    3: "col-span-3",
    4: "col-span-4",
    5: "col-span-5",
    6: "col-span-6",
    7: "col-span-7",
    8: "col-span-8",
    9: "col-span-9",
    10: "col-span-10",
    11: "col-span-11",
    12: "col-span-12",
  };
  const colSpanValue = colSpan as keyof typeof colSpans;

  const borderWidth = "border-2";
  const classes = `${colSpans[colSpanValue]} ${height} ${colorClasses[color]} ${borderWidth} rounded flex items-center text-xs md:text-sm justify-center min-w-fit`;

  return <div className={classes}>{children}</div>;
}

export default function MemoryDiagram() {
  return (
    <div className="my-8 p-6 bg-gray-50 rounded-lg border">
      {/* Memory Grid - Top Section */}
      <div className="grid grid-cols-12 gap-1 mb-4">
        <MemoryBlock color="red" colSpan={2}>
          Monthly
        </MemoryBlock>

        <div className="col-span-10"></div>

        <MemoryBlock color="orange" colSpan={4}>
          Weekly
        </MemoryBlock>

        <div className="col-span-8"></div>

        <MemoryBlock color="green" colSpan={6}>
          Daily
        </MemoryBlock>

        <div className="col-span-6"></div>

        <MemoryBlock color="blue" colSpan={8}>
          Hourly
        </MemoryBlock>

        <div className="col-span-4"></div>

        <MemoryBlock color="purple" colSpan={10}>
          N-minute
        </MemoryBlock>

        <div className="col-span-2"></div>

        <MemoryBlock color="pink" colSpan={12}>
          Actual messages
        </MemoryBlock>
      </div>

      {/* Timeline labels */}
      <div className="grid grid-cols-12 gap-1 text-xs text-gray-600">
        <div className="col-span-1"></div>
        <div className="col-span-2 text-center">-N mo</div>
        <div className="col-span-2 text-center">-10wks</div>
        <div className="col-span-2 text-center">-2wks</div>
        <div className="col-span-5 text-right">yesterday → now</div>
      </div>

      {/* Arrow and transformation */}
      <ArrowDown className="w-8 h-8 text-gray-600 mx-auto my-6" />

      {/* Context Grid - Bottom Section */}
      <div className="mb-4">
        <div className="grid grid-cols-12 gap-1 mb-4">
          <MemoryBlock color="red" colSpan={2}>
            Monthly
          </MemoryBlock>
          <MemoryBlock color="orange" colSpan={2}>
            Weekly
          </MemoryBlock>
          <MemoryBlock color="green" colSpan={2}>
            Daily
          </MemoryBlock>
          <MemoryBlock color="purple" colSpan={2}>
            Hourly
          </MemoryBlock>
          <MemoryBlock color="blue" colSpan={2}>
            Minute
          </MemoryBlock>
          <MemoryBlock color="pink" colSpan={2}>
            Messages
          </MemoryBlock>
        </div>
      </div>
    </div>
  );
}
