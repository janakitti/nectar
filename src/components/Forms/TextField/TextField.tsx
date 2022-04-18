import React from 'react';
import '../../../styles/main.scss';
import Paddable from '../../Structures/Paddable/Paddable';

export interface ITextFieldProps {
  type: string;
  label: string;
  defaultValue?: string;
  placeholder?: string;
  pt?: number;
  pr?: number;
  pb?: number;
  pl?: number;
}

const TextField = (props: ITextFieldProps) => {
  return (
    <Paddable top={props.pt} right={props.pr} bottom={props.pb} left={props.pl}>
      <input
        className="textField"
        type={props.type}
        defaultValue={props.defaultValue}
        placeholder={props.placeholder}
      />
    </Paddable>
  );
};

export default TextField;
