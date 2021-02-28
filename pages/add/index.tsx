import { Add } from "../../components/Add";
import { PageMeta } from "../../components/AppPage";
import { PageContainer } from "../../components/Layout/PageContainer";

export default function AddPage() {
  return (
    <PageContainer>
      <PageMeta title="Add a resource" />
      <Add />
    </PageContainer>
  );
}
