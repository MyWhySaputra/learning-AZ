import { Timeline } from "../../components/Timeline/timeline";

export const Timelines = () => {
  const timelineData = [
    {
      id: 6,
      title: "Peluncuran",
      description: "Proyek diluncurkan ke publik.",
      date: "2024-03-15",
    },
  ];

  const data = [
    {
      id: 1,
      title: "Mulai Proyek",
      description: "Tahap awal proyek dimulai dengan diskusi tim.",
      date: "2024-01-01",
    },
    {
      id: 2,
      title: "Desain Selesai",
      description: "Tim desain menyelesaikan prototipe dan mockup.",
      date: "2024-01-15",
    },
    {
      id: 3,
      title: "Pengembangan Backend",
      description: "Fokus pada pengembangan API dan database.",
      date: "2024-02-01",
    },
    {
      id: 4,
      title: "Pengembangan Frontend",
      description: "Membuat antarmuka pengguna dengan React.js.",
      date: "2024-02-15",
    },
    {
      id: 5,
      title: "Pengujian",
      description: "Melakukan pengujian untuk memastikan kualitas.",
      date: "2024-03-01",
    },
  ]

  return (
    <>
      <div className="min-h-screen flex items-center justify-center bg-gray-100">
        <Timeline initialItems={timelineData} data={data} />
      </div>
    </>
  );
};
