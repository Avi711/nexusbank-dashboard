import Image from "next/image";
import RevenueChart from "./components/RevenueChart";
import ExpenseDonut from "./components/ExpenseDonut";

interface Transaction {
  icon: string;
  name: string;
  amount: string;
}

export default function Home() {
  const transactions: Transaction[] = [
    { icon: "/figma-icon.svg", name: "Figma", amount: "-$ 15,00" },
    { icon: "/grammarly-icon.svg", name: "Grammarly", amount: "-$ 10,00" },
    { icon: "/blender-icon.svg", name: "Blender", amount: "-$ 15,00" },
  ];

  return (
    <main className="min-h-screen bg-[#1A1D1F] text-white p-4 md:p-6">
      {/* Header */}
      <header className="flex flex-col sm:flex-row justify-between items-center mb-8 gap-4">
        <div className="flex items-center gap-2">
          <Image
            src="/nexus-bank-logo.svg"
            alt="NexusBank"
            width={40}
            height={40}
          />
          <span className="text-xl font-semibold">NexusBank</span>
        </div>
        <div className="flex-1 w-full sm:mx-8">
          <div className="relative max-w-md mx-auto">
            <input
              type="text"
              placeholder="Search payment"
              className="w-full bg-[#2A2F33] rounded-lg py-2 px-4 pl-10 text-white placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-emerald-500"
            />
            <svg
              className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
              />
            </svg>
          </div>
        </div>
        <div className="flex items-center gap-3">
          <span>Hi Stefan!</span>
          <div className="w-10 h-10 bg-emerald-500 rounded-full"></div>
        </div>
      </header>

      <div className="grid grid-cols-1 lg:grid-cols-[240px,1fr,400px] gap-6">
        {/* Sidebar */}
        <nav className="flex overflow-x-auto lg:block space-x-4 lg:space-x-0 lg:space-y-4 pb-4 lg:pb-0">
          <button className="flex-shrink-0 flex items-center gap-3 bg-[#2A2F33] p-3 rounded-lg hover:bg-[#3A3F43] transition-colors">
            <svg
              className="w-5 h-5"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"
              />
            </svg>
            Dashboard
          </button>
        </nav>

        {/* Main Content */}
        <div className="space-y-6">
          <h1 className="text-2xl md:text-3xl font-semibold">My Dashboard</h1>

          {/* Tabs */}
          <div className="flex flex-wrap gap-2 md:gap-4">
            <button className="bg-emerald-500 px-4 md:px-6 py-2 rounded-full hover:bg-emerald-600 transition-colors">
              All
            </button>
            <button className="bg-[#2A2F33] px-4 md:px-6 py-2 rounded-full hover:bg-[#3A3F43] transition-colors">
              Withdrawal
            </button>
            <button className="bg-[#2A2F33] px-4 md:px-6 py-2 rounded-full hover:bg-[#3A3F43] transition-colors">
              Savings
            </button>
            <button className="bg-[#2A2F33] px-4 md:px-6 py-2 rounded-full hover:bg-[#3A3F43] transition-colors">
              Deposit
            </button>
          </div>

          {/* Revenue Flow Chart */}
          <div className="bg-[#2A2F33] p-4 md:p-6 rounded-2xl">
            <div className="flex justify-between items-center mb-4">
              <h2 className="text-xl font-semibold">Revenue Flow</h2>
              <button className="text-gray-400 hover:text-white transition-colors">
                View All
              </button>
            </div>
            <RevenueChart />
          </div>

          {/* Bottom Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-[#2A2F33] p-6 rounded-2xl">
              <div className="flex justify-between items-center mb-4">
                <h2 className="text-xl font-semibold">Available</h2>
                <button className="text-gray-400 hover:text-white transition-colors">
                  View All
                </button>
              </div>
              <ExpenseDonut />
            </div>

            <div className="space-y-6">
              <div className="bg-[#2A2F33] p-6 rounded-2xl">
                <h2 className="text-xl font-semibold mb-2">Income</h2>
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-2xl font-bold">$2,240</p>
                    <p className="text-sm text-gray-400">This week's income</p>
                  </div>
                  <span className="bg-emerald-500/20 text-emerald-500 px-2 py-1 rounded-full text-sm">
                    +12%
                  </span>
                </div>
              </div>

              <div className="bg-[#2A2F33] p-6 rounded-2xl">
                <h2 className="text-xl font-semibold mb-2">Expense</h2>
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-2xl font-bold">$1,750</p>
                    <p className="text-sm text-gray-400">This week's expense</p>
                  </div>
                  <span className="bg-purple-500/20 text-purple-500 px-2 py-1 rounded-full text-sm">
                    +9%
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Right Sidebar */}
        <div className="space-y-6">
          {/* Card Section */}
          <div className="bg-[#2A2F33] p-4 md:p-6 rounded-2xl">
            <div className="flex justify-between items-center mb-4">
              <h2 className="text-xl font-semibold">My Card</h2>
              <button className="text-gray-400 hover:text-white transition-colors">
                View All
              </button>
            </div>
            <div className="relative bg-emerald-500 p-6 rounded-xl mb-4">
              <button className="absolute right-4 top-4 bg-[#2A2F33]/50 p-2 rounded-full hover:bg-[#2A2F33]/70 transition-colors">
                <svg
                  className="w-4 h-4"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M12 4v16m8-8H4"
                  />
                </svg>
              </button>
              <p className="text-sm text-white/80 mb-4">Total Balance</p>
              <p className="text-3xl font-bold text-white mb-8">$22,350.50</p>
              <p className="text-sm text-white/80">4358 4445 0968 2323</p>
              <p className="text-sm text-white/80">08/24</p>
            </div>
          </div>

          {/* Transactions Section */}
          <div className="bg-[#2A2F33] p-4 md:p-6 rounded-2xl">
            <div className="flex justify-between items-center mb-6">
              <h2 className="text-xl font-semibold">Transactions</h2>
              <button className="text-gray-400 hover:text-white transition-colors">
                View All
              </button>
            </div>
            <div className="space-y-4">
              {transactions.map((transaction, index) => (
                <div key={index} className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 bg-[#1A1D1F] rounded-full flex items-center justify-center">
                      <Image
                        src={transaction.icon}
                        alt={transaction.name}
                        width={20}
                        height={20}
                      />
                    </div>
                    <span>{transaction.name}</span>
                  </div>
                  <span>{transaction.amount}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Add Friends Section */}
          <div className="bg-[#2A2F33] p-4 md:p-6 rounded-2xl">
            <h2 className="text-xl font-semibold mb-2">Add friends</h2>
            <p className="text-sm text-gray-400 mb-4">
              Invite friends to join and earn rewards together
            </p>
            <div className="flex -space-x-2">
              <div className="w-8 h-8 rounded-full bg-emerald-500 border-2 border-[#1A1D1F]"></div>
              <div className="w-8 h-8 rounded-full bg-purple-500 border-2 border-[#1A1D1F]"></div>
              <div className="w-8 h-8 rounded-full bg-blue-500 border-2 border-[#1A1D1F]"></div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
