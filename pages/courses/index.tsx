import { PageMeta } from "../../components/AppPage";
import { PageContainer } from '../../components/Layout/PageContainer';
import { FancyHeading } from "../../components/Typography";

export default function Courses() {
  return (
    <PageContainer>
      <PageMeta title="Courses" />
      <FancyHeading>Courses</FancyHeading>
    </PageContainer>
  );
}
