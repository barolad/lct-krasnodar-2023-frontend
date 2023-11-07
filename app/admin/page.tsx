import { redirect } from "next/navigation";

const AdminPage = () => {
  redirect("/admin/couriers");

  return null;
};

export default AdminPage;
