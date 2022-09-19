import type { NextPage } from "next";
import React from "react";

import { Root } from "~/components/page/Root";
import { LayoutErrorBoundary } from "~/components/provider/ErrorBoundary";
import { Layout } from "~/components/shared/Layout";

const RootPage: NextPage = () => {
  return (
    <Layout>
      <LayoutErrorBoundary>
        <Root />
      </LayoutErrorBoundary>
    </Layout>
  );
};

export default RootPage;
