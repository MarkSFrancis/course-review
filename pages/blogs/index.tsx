import { PageMeta } from "../../components/PageMeta";
import { PageContainer } from '../../components/Layout/PageContainer';
import { FancyHeading } from "../../components/Typography";

export default function Blogs() {
  return (
    <PageContainer>
      <PageMeta title="Blogs"/>
      <FancyHeading>Blogs</FancyHeading>
    </PageContainer>
  );
}
