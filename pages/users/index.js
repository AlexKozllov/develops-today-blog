import { MainLayout } from "../../Layout/MainLayout";
import s from "./users.module.scss";

export default function Users() {
  return (
    <MainLayout>
      <h2 className={s.myH2}>All Users</h2>
    </MainLayout>
  );
}
