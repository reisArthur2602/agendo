import { SettingsTabs } from "./components/tabs";

const Settings = () => {
  return (
    <div className="space-y-12">
      <div>
        <h1 className="text-2xl font-bold">Configurações</h1>
        <p className="text-muted-foreground">
          Gerencie as configurações da sua conta e negócio
        </p>
      </div>
      
      <SettingsTabs />
    </div>
  );
};

export default Settings;
