import { Metadata } from "next";
import NewJobForm from "./NewJobForm";
export const metadata: Metadata = {
  title: "Post a Job",
};
export default function page() {
  return <NewJobForm />;
}
