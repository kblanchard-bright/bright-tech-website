interface ProblemSolutionProps {
  problem: string;
  solution: string;
  icon: React.ReactNode;
}

export default function ProblemSolution({
  problem,
  solution,
  icon,
}: ProblemSolutionProps) {
  return (
    <div className="group bg-white rounded-2xl border border-gray-200 hover:border-bright-orange/30 transition-all duration-300 overflow-hidden">
      <div className="grid grid-cols-1 md:grid-cols-2">
        {/* Problem */}
        <div className="p-8 bg-bright-grey flex items-start space-x-4">
          <div className="w-10 h-10 bg-bright-orange/10 rounded-lg flex items-center justify-center flex-shrink-0 mt-0.5">
            {icon}
          </div>
          <div>
            <p className="text-xs font-semibold text-gray-400 uppercase tracking-wider mb-2">The Problem</p>
            <p className="font-heading font-semibold text-bright-black text-lg leading-snug">
              {problem}
            </p>
          </div>
        </div>

        {/* Solution */}
        <div className="p-8 flex items-start">
          <div>
            <p className="text-xs font-semibold text-bright-orange uppercase tracking-wider mb-2">How Your Agent Solves It</p>
            <p className="text-gray-700 leading-relaxed">{solution}</p>
          </div>
        </div>
      </div>
    </div>
  );
}
