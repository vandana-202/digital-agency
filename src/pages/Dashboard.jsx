import DashboardLayout from "../components/DashboardLayout";
import Charts from "../components/Charts";
function Dashboard() {


  const stats = [
    {
      title: "Users",
      value: "1200"
    },
    {
      title: "Sales",
      value: "₹45,000"
    },
    {
      title: "Orders",
      value: "320"
    },
    {
      title: "Revenue",
      value: "₹90,000"
    }
  ];


  return (
  <DashboardLayout>
    <Charts />
    <div className="text-gray-500 text-center mt-5">
  No more users found
</div>

    <div>

      // yaha tumhara pura dashboard code rahega

    </div>

  </DashboardLayout>
);
  
}

export default Dashboard;