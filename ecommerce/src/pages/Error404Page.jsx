import { Header } from "../components/Header";

export function Error404Page({ cart }) {
  return (
    <>
      <title>404 not found</title>

      <Header cart={cart} />

      <div className="error-page-message">Page not found.</div>
    </>
  );
}
