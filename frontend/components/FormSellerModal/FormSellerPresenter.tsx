import React from 'react';
import FormSellerComponent from './FormSellerComponent';
import {Formik} from 'formik';
import * as Yup from 'yup';
import 'yup-phone-lite';

const validationSchema = Yup.object().shape({
  storeType: Yup.string().required('This field is required.'),
  brandName: Yup.string().required('This field is required.'),
  website: Yup.string(),
  instagram: Yup.string().required('This field is required.'),
  email: Yup.string()
    .required('This field is required.')
    .matches(
      /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
      'The email format is not valid.',
    ),
  firstName: Yup.string().required('This field is required.'),
  lastName: Yup.string().required('This field is required.'),
  phone: Yup.string()
    .required('This field is required.')
    .phone('US', 'The phone number format is not valid.'),
  address: Yup.string().required('This field is required.'),
});

export type SellerFormProps = {
  storeType: string;
  brandName: string;
  website: string;
  instagram: string;
  email: string;
  firstName: string;
  lastName: string;
  phone: string;
  address: string;
  platforms: PlatformProps;
};

type PlatformProps = {
  shopify: boolean;
  squareSpace: boolean;
  salesForce: boolean;
  magento: boolean;
  wooCommerce: boolean;
  bigCommerce: boolean;
  none: boolean;
  other: boolean;
};

export default function FormSellerPresenter({
  open,
  onClose,
}: {
  open: boolean;
  onClose: () => void;
}) {
  const initialValues: SellerFormProps = {
    storeType: '',
    brandName: '',
    website: '',
    instagram: '',
    email: '',
    phone: '',
    address: '',
    firstName: '',
    lastName: '',
    platforms: {
      shopify: false,
      squareSpace: false,
      salesForce: false,
      magento: false,
      wooCommerce: false,
      bigCommerce: false,
      none: false,
      other: false,
    },
  };
  const handleSubmit = (values: SellerFormProps) => {
    console.log(values);
  };
  return (
    <Formik
      initialValues={initialValues}
      onSubmit={handleSubmit}
      validationSchema={validationSchema}>
      <FormSellerComponent open={open} onClose={onClose} />
    </Formik>
  );
}
