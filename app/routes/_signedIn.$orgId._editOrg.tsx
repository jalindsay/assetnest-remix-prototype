import { Outlet, useMatches, useNavigate, useLoaderData } from '@remix-run/react';
import { Card } from '~/components/ui/Card';
import { pageTitle } from '~/styles/typography';
import { Tabs } from '~/components/ui/Tabs';
import type { LoaderFunctionArgs } from '@remix-run/node'

export let loader = ({ params }: LoaderFunctionArgs) => {
  return {
    orgId: params.orgId
  };
};

export default function EditOrganisation() {
  const navigation = useNavigate();
  const matches = useMatches();
  const loaderData = useLoaderData<typeof loader>()
  const currentTabFromRoute =
    matches[matches.length - 1].pathname.split('/organisation')[1];

  return (
    <div>
      <h1 className={`${pageTitle} p-1`}>Edit Your Organisation</h1>
      <Tabs
        defaultValue={currentTabFromRoute}
        className="w-full"
        onValueChange={(value: string) =>
          navigation('/' + loaderData.orgId + '/organisation' + value, {
            relative: 'path',
          })
        }
        tabs={[
          { value: 'Details', valueLabel: 'Details' },
          { value: 'Location', valueLabel: 'Location' },
          { value: 'Members', valueLabel: 'Team Members' },
        ]}
      />
      <Card
        outerClassName={
          currentTabFromRoute === 'Members' ? 'overflow-auto py-1' : undefined
        }
        innerClassName="w-full"
      >
        <Outlet />
      </Card>
      <div className="h-20"></div>
    </div>
  );
}
