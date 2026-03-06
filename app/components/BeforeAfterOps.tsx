'use client';

export default function BeforeAfterOps() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
      {/* Before: The App */}
      <div className="relative rounded-2xl border-2 border-red-200 bg-white p-6 overflow-hidden opacity-60">
        <div className="absolute top-4 right-4">
          <span className="text-xs font-semibold text-red-400 uppercase tracking-wider bg-red-50 px-2 py-1 rounded">Before</span>
        </div>
        {/* Fake app UI */}
        <div className="space-y-3 mt-8">
          <div className="flex items-center space-x-2 mb-4">
            <div className="w-8 h-8 rounded-lg bg-gray-200" />
            <div className="h-4 w-32 bg-gray-200 rounded" />
          </div>
          {/* Fake nav tabs */}
          <div className="flex space-x-2 mb-3">
            <div className="h-7 w-20 bg-gray-200 rounded-md" />
            <div className="h-7 w-24 bg-gray-200 rounded-md" />
            <div className="h-7 w-16 bg-gray-200 rounded-md" />
            <div className="h-7 w-20 bg-gray-200 rounded-md" />
          </div>
          {/* Fake table */}
          <div className="space-y-2">
            <div className="h-8 bg-gray-100 rounded flex items-center px-3">
              <div className="h-3 w-16 bg-gray-200 rounded" />
              <div className="h-3 w-20 bg-gray-200 rounded ml-auto" />
            </div>
            <div className="h-8 bg-gray-100 rounded flex items-center px-3">
              <div className="h-3 w-20 bg-gray-200 rounded" />
              <div className="h-3 w-16 bg-gray-200 rounded ml-auto" />
            </div>
            <div className="h-8 bg-gray-100 rounded flex items-center px-3">
              <div className="h-3 w-14 bg-gray-200 rounded" />
              <div className="h-3 w-24 bg-gray-200 rounded ml-auto" />
            </div>
          </div>
          {/* Fake buttons */}
          <div className="flex space-x-2 pt-2">
            <div className="h-8 w-24 bg-gray-200 rounded-md" />
            <div className="h-8 w-20 bg-gray-200 rounded-md" />
          </div>
        </div>
        {/* X overlay */}
        <svg className="absolute inset-0 w-full h-full" viewBox="0 0 300 260" preserveAspectRatio="none">
          <line x1="40" y1="40" x2="260" y2="220" stroke="#ef4444" strokeWidth="3" strokeLinecap="round" opacity="0.4" />
          <line x1="260" y1="40" x2="40" y2="220" stroke="#ef4444" strokeWidth="3" strokeLinecap="round" opacity="0.4" />
        </svg>
        <p className="text-center text-sm font-medium text-red-400 mt-4">Complex app nobody opens</p>
      </div>

      {/* After: Just Text */}
      <div className="relative rounded-2xl border-2 border-green-200 bg-white p-6">
        <div className="absolute top-4 right-4">
          <span className="text-xs font-semibold text-green-600 uppercase tracking-wider bg-green-50 px-2 py-1 rounded">After</span>
        </div>
        {/* SMS mockup */}
        <div className="mt-8 max-w-[260px] mx-auto space-y-3">
          <div className="flex justify-end">
            <div className="bg-bright-orange text-white rounded-2xl rounded-br-sm px-4 py-2 text-sm">
              204 clean
            </div>
          </div>
          <div className="flex justify-start">
            <div className="bg-gray-100 text-gray-800 rounded-2xl rounded-bl-sm px-4 py-2 text-sm">
              Room 204 marked ready. <br />3 rooms left on your list.
            </div>
          </div>
          <div className="flex justify-end">
            <div className="bg-bright-orange text-white rounded-2xl rounded-br-sm px-4 py-2 text-sm">
              AC unit 307 not cooling
            </div>
          </div>
          <div className="flex justify-start">
            <div className="bg-gray-100 text-gray-800 rounded-2xl rounded-bl-sm px-4 py-2 text-sm">
              Ticket created for 307. <br />Manager notified.
            </div>
          </div>
        </div>
        <p className="text-center text-sm font-medium text-green-600 mt-4">Two words. Everything updates.</p>
      </div>
    </div>
  );
}
