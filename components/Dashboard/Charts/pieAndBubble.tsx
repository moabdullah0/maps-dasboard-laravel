import React from "react";
import BubbleChart from "./BubbleCharts";
import PieChart from "./PieCharts";

const ChartGrid: React.FC = () => {
  return (
    <div className="grid lg:grid-cols-2 gap-4 mt-10">
      <div className="bg-white shadow rounded-lg p-6">
        <div className="text-center">
          <h1 className="text-xl font-semibold mb-4">Project Budget</h1>
          <div className="flex flex-row items-center justify-center">
            <div className="w-1/2">
              <PieChart />
            </div>
            <div className="flex flex-col ml-4 w-1/2">
              <small>Budget Value:</small>
              <h5 className="text-blue-700 flex items-center font-bold">
                <svg
                  className="w-4 h-4 mr-2"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <rect width="24" height="24" />
                </svg>
                474,988.70€
              </h5>
              <small>Expenses:</small>
              <h5 className="text-green-700 flex items-center font-bold">
                <svg
                  className="w-4 h-4 mr-2"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <rect width="24" height="24" />
                </svg>
                400,000.00€
              </h5>
              <small>Remaining:</small>
              <h5 className="text-gray-400 flex items-center font-bold">
                <svg
                  className="w-4 h-4 mr-2"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <rect width="24" height="24" />
                </svg>
                74,988.70€
              </h5>
            </div>
          </div>
        </div>
      </div>

      <div className="bg-white shadow rounded-lg p-6">
        <div className="text-center">
          <h1 className="text-xl font-semibold mb-4">Donor Payments</h1>
          <div className="flex lg:flex-row items-center justify-center">
            <div className="w-1/2">
              <BubbleChart />
            </div>
            <div className="flex flex-col ml-4 w-1/2">
              <small>Total payments from donor:</small>
              <h5 className="text-blue-700 flex items-center">
                <svg
                  className="w-4 h-4 mr-2"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <rect width="24" height="24" />
                </svg>
                210,000.00€
              </h5>
              <small>Expenses:</small>
              <h5 className="text-green-700 flex items-center font-bold">
                <svg
                  className="w-4 h-4 mr-2"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <rect width="24" height="24" />
                </svg>
                400,000.00€
              </h5>
              <small>Remaining:</small>
              <h5 className="text-red-600 flex items-center font-bold">
                <svg
                  className="w-4 h-4 mr-2"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <rect width="24" height="24" />
                </svg>
                -190,000.00€
              </h5>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ChartGrid;