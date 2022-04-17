import React from 'react';
import '../../../styles/main.scss';

export interface ITextFieldProps {
  type: string;
  label: string;
  defaultValue?: string;
  placeholder?: string;
}

const TextField = (props: ITextFieldProps) => {
  return (
    <input
      className="textField"
      type={''}
      defaultValue={props.defaultValue}
      placeholder={props.placeholder}
    />
  );
};

export default TextField;
