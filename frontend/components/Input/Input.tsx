import s from './Input.module.scss';
import {Text, TextField, TextFieldProps, Tooltip} from '@shopify/polaris';
import React from 'react';

export default function Input(
  props: Omit<TextFieldProps, 'autoComplete'> & {
    tooltip?: string | React.ReactNode;
    action?: React.ReactNode;
    fullWidth?: boolean;
    autoComplete?: 'on' | 'off';
  },
) {
  return (
    <div
      className={[
        s['inputContainer'],
        s[props.fullWidth ? 'fullWidth' : ''],
      ].join(' ')}>
      <div className={s['label']}>
        <Text fontWeight={'bold'} variant={'bodyMd'} as={'h2'}>
          {props.label} {props.requiredIndicator && <span>*</span>}
        </Text>
        {props.tooltip && (
          <Tooltip content={props.tooltip}>
            <p className={s['icon']}>?</p>
          </Tooltip>
        )}
      </div>
      <TextField
        autoComplete={props.autoComplete || 'off'}
        {...props}
        label={''}
      />
      {props.action}
    </div>
  );
}
