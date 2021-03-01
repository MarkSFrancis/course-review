import { PageMeta } from "../../components/PageMeta";
import { PageContainer } from '../../components/Layout/PageContainer';
import React from 'react';
import { Courses } from '../../components/Courses';

export default function CoursesPage() {
  return (
    <PageContainer>
      <PageMeta title="Courses" />
      <Courses />
    </PageContainer>
  );
}
