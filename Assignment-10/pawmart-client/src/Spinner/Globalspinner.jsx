import { PawPrint } from "lucide-react";

const Globalspinner = () => {
  return (
    <div className="flex justify-center items-center min-h-screen">
      <PawPrint
        className="animate-spin"
        size={62}
        strokeWidth={2.5}
        style={{ color: "#4e2d69" }}
      />
    </div>
  );
};

export default Globalspinner;
