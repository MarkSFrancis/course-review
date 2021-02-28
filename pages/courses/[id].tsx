import { PageMeta } from "../../components/AppPage";
import { PageContainer } from '../../components/Layout/PageContainer';
import { FancyHeading } from "../../components/Typography";

export default function Course() {
  return (
    <PageContainer>
      <PageMeta />
      <FancyHeading>Course View</FancyHeading>
    </PageContainer>
  );
}
