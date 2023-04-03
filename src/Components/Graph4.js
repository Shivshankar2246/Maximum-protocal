import React, { Component } from "react";
import dynamic from "next/dynamic";
const Chart = dynamic(() => import("react-apexcharts"), { ssr: false });

class Graph4 extends Component {
  constructor(props) {
    super(props);

    this.state = {
      options: {
        chart: {
          id: "basic-bar",
          toolbar: {
            show: false,
          },
        },
        xaxis: {
          categories: ["Shiva", "Vky", "Vathi", "Sanky", "JP", "Vrishin"],
          labels: {
            show: false,
          },
        },
        yaxis: {
          labels: {
            show: false,
          },
        },
        grid: {
          show: false,
        },
      },
      series: [
        {
          name: "Runs match-1",
          data: [30, 40, 45, 50, 49, 60],
        },
        {
          name: "Runs match-2",
          data: [35, 48, 35, 58, 40, 40],
        },
      ],
    };
  }

  render() {
    return (
      <div className="app">
        <div className="row">
          <div className="mixed-chart bg-gradient-to-r from-pink-500 to-red-300 d-flex flex-column justify-content-start align-items-center">
            <div className="card-text">
              <p className="text-xl text-white pl-2">Defi dragons</p>
            </div>
            <Chart
              options={this.state.options}
              series={this.state.series}
              type="line"
              width="350"
              height={150}
            />
          </div>
        </div>
      </div>
    );
  }
}

export default Graph4;
