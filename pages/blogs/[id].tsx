import { PageMeta } from "../../components/PageMeta";
import { PageContainer } from '../../components/Layout/PageContainer';
import { FancyHeading } from "../../components/Typography";

export default function Course() {
  return (
    <PageContainer>
      <PageMeta />
      <FancyHeading>Blog View</FancyHeading>
    </PageContainer>
  );
}
