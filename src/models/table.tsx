export interface Table {
  key?: string;
  id: number;
  nama_lengkap: string;
  jenis_kelamin: string;
  tanggal_lahir: string;
  agama: string;
  pendidikan: string;
  status: string;
  children?: Table[];
}