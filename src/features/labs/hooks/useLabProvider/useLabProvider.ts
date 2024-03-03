export default function useLabProvider() {
  // here we can fetch data from an API
  const providers = [
    {
      id: "1",
      name: "Group A",
      units: ["A1", "A2", "A3"],
    },
    { id: "2", name: "Group B", units: ["B1", "B2", "B3"] },
    {
      id: "3",
      name: "Group C",
      units: ["C1", "C2", "C3"],
    },
    {
      id: "4",
      name: "Group D",
      units: ["D1", "D2", "D3"],
    },
  ];

  return { providers };
}
