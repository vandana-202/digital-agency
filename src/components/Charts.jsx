import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  PieChart,
  Pie,
  Cell
} from "recharts";


function Charts() {

  const salesData = [
    {
      month: "Jan",
      sales: 4000
    },
    {
      month: "Feb",
      sales: 3000
    },
    {
      month: "Mar",
      sales: 6000
    },
    {
      month: "Apr",
      sales: 8000
    }
  ];


  const userData = [
    {
      name: "Users",
      value: 70
    },
    {
      name: "Others",
      value: 30
    }
  ];


  const colors = [
    "#2563eb",
    "#d1d5db"
  ];


  return (
    <div className="grid md:grid-cols-2 gap-8 mt-10">


      {/* Bar Chart */}

      <div className="bg-white p-6 rounded-xl shadow">

        <h2 className="text-xl font-bold mb-5">
          Monthly Sales
        </h2>


        <BarChart
          width={350}
          height={250}
          data={salesData}
        >

          <CartesianGrid strokeDasharray="3 3" />

          <XAxis dataKey="month" />

          <YAxis />

          <Tooltip />

          <Bar
            dataKey="sales"
            fill="#2563eb"
          />

        </BarChart>

      </div>



      {/* Pie Chart */}

      <div className="bg-white p-6 rounded-xl shadow">

        <h2 className="text-xl font-bold mb-5">
          Users Growth
        </h2>


        <PieChart width={350} height={250}>

          <Pie
            data={userData}
            dataKey="value"
            cx="50%"
            cy="50%"
            outerRadius={80}
          >

            {
              userData.map((entry, index) => (
                <Cell
                  key={index}
                  fill={colors[index]}
                />
              ))
            }

          </Pie>

          <Tooltip />

        </PieChart>


      </div>


    </div>
  );
}


export default Charts;