import {Checkbox, ChoiceList, Columns, Modal, Text} from '@shopify/polaris';
import React from 'react';
import Input from '../Input/Input';
import {useFormikContext} from 'formik';
import {SellerFormProps} from './FormSellerPresenter';
export default function FormSellerComponent({
  open,
  onClose,
}: {
  open: boolean;
  onClose: () => void;
}) {
  const {setFieldValue, errors, values, touched, getFieldProps, resetForm} =
    useFormikContext<SellerFormProps>();
  const platforms = {
    shopify: 'Shopify',
    wooCommerce: 'WooCommerce',
    squareSpace: 'Squarespace',
    salesForce: 'Salesforce Commerce Cloud',
    magento: 'Magento',
    bigCommerce: 'BigCommerce',
    none: "None, I'm not an e-commerce platform",
    other: 'Other',
  };
  return (
    <Modal
      large={true}
      open={open}
      onClose={() => {
        resetForm();
        onClose();
      }}
      title="Apply to be a seller"
      primaryAction={{
        content: 'Submit',
        onAction: onClose,
      }}
      secondaryActions={[
        {
          content: 'Close',
          onAction: () => {
            resetForm();
            onClose();
          },
        },
      ]}>
      <Modal.Section>
        <Columns gap={'4'}>
          <Text variant={'headingLg'} as={'h2'}>
            Questions
          </Text>
          <Text variant={'bodyMd'} as={'p'}>
            Which of the following best describes you? *This question is
            required*.
          </Text>
          <ChoiceList
            title=""
            choices={[
              {label: 'Individual', value: 'individual'},
              {label: 'Store', value: 'store'},
              {label: 'Brand', value: 'brand'},
            ]}
            selected={[values.storeType]}
            onChange={(selected) => {
              setFieldValue('storeType', selected[0]);
            }}
          />
          <Input
            {...getFieldProps('firstName')}
            value={values.firstName}
            onChange={value => setFieldValue('firstName', value)}
            error={touched.firstName && errors.firstName}
            label={'Your First Name *This questions is required*.'}
            fullWidth
          />
          <Input
            {...getFieldProps('lastName')}
            error={touched.lastName && errors.lastName}
            value={values.lastName}
            onChange={value => setFieldValue('lastName', value)}
            label={'Your Last Name *This questions is required*.'}
            fullWidth
          />
          <Input
            {...getFieldProps('brandName')}
            error={touched.brandName && errors.brandName}
            value={values.brandName}
            onChange={value => setFieldValue('brandName', value)}
            label={'Your Brand/Store Name *This questions is required*.'}
            fullWidth
          />
          <Input
            value={values.website}
            onChange={value => setFieldValue('website', value)}
            label={'What is your website?'}
            fullWidth
          />
          <Input
            {...getFieldProps('instagram')}
            value={values.instagram}
            onChange={value => setFieldValue('instagram', value)}
            error={touched.instagram && errors.instagram}
            label={`What is your brand's Instagram handle? *This question is required*.`}
            fullWidth
          />
          <Input
            {...getFieldProps('address')}
            error={touched.address && errors.address}
            label={
              'What is your business address? *This question is required*.'
            }
            value={values.address}
            onChange={value => setFieldValue('address', value)}
            fullWidth
          />
          <Input
            {...getFieldProps('email')}
            error={touched.email && errors.email}
            label={'What is your email address? *This question is required*.'}
            fullWidth
            value={values.email}
            onChange={value => setFieldValue('email', value)}
          />
          <Input
            {...getFieldProps('phone')}
            error={touched.phone && errors.phone}
            label={'What is your phone number? *This question is required*.'}
            fullWidth
            value={values.phone}
            onChange={value => setFieldValue('phone', value)}
          />
          <Text fontWeight={'bold'} as={'p'} variant={'bodyMd'}>
            Which e-commerce platform do you use ? *This question is required*
          </Text>
          {Object.keys(platforms).map(platform => (
            <Checkbox
              key={platform}
              id={platform}
              label={platforms[platform as keyof typeof platforms]}
              checked={values.platforms[platform as keyof typeof platforms]}
              onChange={(newChecked, id) => {
                if (id === 'other') {
                  setFieldValue(`platforms.${id}`, newChecked, false);
                  Object.keys(values.platforms).forEach(key => {
                    if (key !== 'other') {
                      setFieldValue(`platforms.${key}`, false, false);
                    }
                  });
                  return;
                } else if (id === 'none') {
                  setFieldValue(`platforms.${id}`, newChecked, false);
                  Object.keys(values.platforms).forEach(key => {
                    if (key !== 'none') {
                      setFieldValue(`platforms.${key}`, false, false);
                    }
                  });
                  return;
                } else {
                  setFieldValue(`platforms.${id}`, newChecked, false);
                  setFieldValue(`platforms.other`, false, false);
                  setFieldValue(`platforms.none`, false, false);
                }
              }}
            />
          ))}
        </Columns>
      </Modal.Section>
    </Modal>
  );
}
