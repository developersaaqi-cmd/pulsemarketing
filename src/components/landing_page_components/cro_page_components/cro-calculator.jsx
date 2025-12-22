"use client";

import { useState, useEffect } from "react";
import "./cro-calculator.css";

export default function Home() {
  const [values, setValues] = useState({
    monthlyVisitors: "",
    monthlyOrders: "",
    averageOrderValue: "",
    desiredIncrease: "",
    monthsOfInvestment: "",
  });

  const [results, setResults] = useState({
    currentConversionRate: "0%",
    currentAnnualRevenue: "$0",
    orderConversionRate: "0%",
    monthlyOrdersResult: "0",
    futureAnnualRevenue: "$0",
    monthlyInvestment: "$0",
    roi: "0X",
  });

  const handleChange = (e) => {
    setValues({ ...values, [e.target.id]: e.target.value });
  };

  useEffect(() => {
    calculate();
  }, [values]);

  const calculate = () => {
    const {
      monthlyVisitors,
      monthlyOrders,
      averageOrderValue,
      desiredIncrease,
      monthsOfInvestment,
    } = values;

    const mv = Number(monthlyVisitors) || 0;
    const mo = Number(monthlyOrders) || 0;
    const aov = Number(averageOrderValue) || 0;
    const di = Number(desiredIncrease) || 0;
    const mi = Number(monthsOfInvestment) || 0;

    const allEmpty = !mv && !mo && !aov && !di && !mi;

    if (allEmpty) {
      clearResults();
      return;
    }

    if (!mv || !mo || !aov) return;

    const currentConversionRate = (mo / mv) * 100;
    const currentAnnualRevenue = mo * aov * 12;
    const orderConversionRate =
      currentConversionRate * (1 + di / 100);
    const newMonthlyOrders = Math.round(
      (orderConversionRate / 100) * mv
    );
    const futureAnnualRevenue =
      newMonthlyOrders * aov * 12;
    const revenueIncrease =
      futureAnnualRevenue - currentAnnualRevenue;
    const totalInvestment = mi * 6250;
    const roi =
      totalInvestment > 0
        ? Math.round(revenueIncrease / totalInvestment)
        : 0;
    const monthlyInvestment = mi > 0 ? 6250 : 0;

    setResults({
      currentConversionRate: currentConversionRate.toFixed(1) + "%",
      currentAnnualRevenue: "$" + currentAnnualRevenue.toLocaleString(),
      orderConversionRate: orderConversionRate.toFixed(1) + "%",
      monthlyOrdersResult: newMonthlyOrders.toString(),
      futureAnnualRevenue: "$" + futureAnnualRevenue.toLocaleString(),
      monthlyInvestment: "$" + monthlyInvestment.toLocaleString(),
      roi: roi + "X",
    });
  };

  const clearResults = () => {
    setResults({
      currentConversionRate: "0%",
      currentAnnualRevenue: "$0",
      orderConversionRate: "0%",
      monthlyOrdersResult: "0",
      futureAnnualRevenue: "$0",
      monthlyInvestment: "$0",
      roi: "0X",
    });
  };

  return (
    <>
      <div className="cr-container">
        <div className="metrics">
          <h2>Current Site Metrics</h2>

          <div className="input">
            <label>Number of Monthly Visitors</label>
            <input
              type="number"
              id="monthlyVisitors"
              onChange={handleChange}
            />
          </div>

          <div className="input">
            <label>Number of Monthly Orders</label>
            <input
              type="number"
              id="monthlyOrders"
              onChange={handleChange}
            />
          </div>

          <div className="input">
            <label>Average Order Value ($)</label>
            <input
              type="number"
              id="averageOrderValue"
              onChange={handleChange}
            />
          </div>

          <div className="input">
            <label>Desired Increase to Conversion (%)</label>
            <input
              type="number"
              id="desiredIncrease"
              onChange={handleChange}
            />
          </div>

          <div className="input">
            <label>Number of Months of Investment</label>
            <input
              type="number"
              id="monthsOfInvestment"
              onChange={handleChange}
            />
          </div>
        </div>

        <div className="results">
          <div className="hd-r">
            <h2>Results</h2>
          </div>

          <div className="currentmatrix">
            <div className="hd">
              <h5>Current Metrics</h5>
            </div>
            <div className="ct-flex">
              <div className="result-card">
                <h3>Current Conversion Rate</h3>
                <p>{results.currentConversionRate}</p>
              </div>
              <div className="result-card">
                <h3>Current Annual Revenue</h3>
                <p>{results.currentAnnualRevenue}</p>
              </div>
            </div>
          </div>

          <div className="growth-metrics">
            <div className="hd">
              <h5>Growth Metrics</h5>
            </div>
            <div className="ct-flex">
              <div className="result-card">
                <h3>Order Conversion Rate</h3>
                <p>{results.orderConversionRate}</p>
              </div>
              <div className="result-card">
                <h3>Monthly Orders</h3>
                <p>{results.monthlyOrdersResult}</p>
              </div>
              <div className="result-card">
                <h3>Future Annual Revenue</h3>
                <p>{results.futureAnnualRevenue}</p>
              </div>
              <div className="result-card">
                <h3>Monthly Investment</h3>
                <p>{results.monthlyInvestment}</p>
              </div>
            </div>
          </div>

          <div className="result-card" id="bl">
            <h3>Return on Investment</h3>
            <p>{results.roi}</p>
          </div>
        </div>
      </div>
    </>
  );
}