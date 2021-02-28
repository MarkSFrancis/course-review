import { Add } from "../../components/AddResource";
import { PageMeta } from "../../components/PageMeta";
import { PageContainer } from "../../components/Layout/PageContainer";

export default function AddPage() {
  return (
    <PageContainer>
      <PageMeta title="Add a resource" />
      <Add />
    </PageContainer>
  );
}
