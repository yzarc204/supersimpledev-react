import { Header } from "../components/Header";

export function Error404Page() {
  return (
    <>
      <Header />

      <div className="error-page-message">Page not found.</div>
    </>
  );
}
