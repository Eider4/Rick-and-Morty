export const getStatusColor = (status) => {
  switch (status) {
    case "Alive":
      return "bg-green-500";
    case "Dead":
      return "bg-red-500";
    default:
      return "bg-yellow-500";
  }
};
