import AppLayout from "@components/app-layout";
import DocumentForm from "@components/document-form";

export default function Upload() {
  const handleOnFormSubmit = async (body) => {
    const options = { method: "POST", body };
    const response = await fetch("/api/upload", options);
    const data = await response.json();
    alert(data.message); //TODO: show toast with message
  };

  return (
    <AppLayout>
      <DocumentForm onFormSubmit={handleOnFormSubmit} />
    </AppLayout>
  );
}
