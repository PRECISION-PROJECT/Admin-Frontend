import PageContainer from "@/components/containers/page-container";
import { Separator } from "@/components/ui/separator";
import { AppointmentsListHeaderUI } from "./components";
import { AppointmentsListTableContainer } from "./containers";
import AppointmentsListProvider from "./contexts/appointments-list-context";

const AppointmentsListModule = () => {
  return (
    <AppointmentsListProvider>
      <PageContainer scrollable={false}>
        <div className="flex flex-1 flex-col space-y-4">
          <AppointmentsListHeaderUI />
          <Separator />
          <AppointmentsListTableContainer />
        </div>
      </PageContainer>
    </AppointmentsListProvider>
  );
};

export default AppointmentsListModule;
