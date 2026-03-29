import { Wifi, Clock, Database, Zap } from "lucide-react";

const metrics = [
  { icon: Wifi, label: "Network", value: "Connected", color: "text-success" },
  { icon: Clock, label: "Avg Finality", value: "~5s", color: "text-primary" },
  { icon: Database, label: "Ledger", value: "#52,847,291", color: "text-foreground" },
  { icon: Zap, label: "Contracts", value: "3 deployed", color: "text-accent" },
];

const StellarNetworkStatus = () => {
  return (
    <div className="glass-panel p-4">
      <h2 className="text-xs font-semibold text-muted-foreground uppercase tracking-wider mb-3">
        Stellar Network
      </h2>
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-3">
        {metrics.map((m) => (
          <div key={m.label} className="flex items-center gap-2">
            <m.icon className={`w-3.5 h-3.5 ${m.color}`} />
            <div>
              <p className="text-[10px] text-muted-foreground">{m.label}</p>
              <p className={`text-xs font-mono font-medium ${m.color}`}>{m.value}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default StellarNetworkStatus;
