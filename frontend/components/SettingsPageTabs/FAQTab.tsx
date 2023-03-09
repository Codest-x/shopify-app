import {Columns, DescriptionList, Page} from '@shopify/polaris';

export default function FAQTab() {
  return (
    <Page fullWidth>
      <Columns gap={'8'}>
        <DescriptionList
          items={[
            {
              term: 'Where is the Thr1ft Store Token',
              description:
                'The management of products or other resources as they travel between a point of origin and a destination.',
            },
            {
              term: 'Where is the Thr1ft Store Token',
              description:
                'The management of products or other resources as they travel between a point of origin and a destination.',
            },
          ]}
        />
      </Columns>
    </Page>
  );
}
